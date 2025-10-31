import { Play, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VideoHeroProps {
  videoUrl?: string;
  title?: string;
}

export default function VideoHero({ 
  videoUrl = "/banner-video.mp4",
  title = "Our Story"
}: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleShare = () => {
    console.log('Share triggered');
    if (navigator.share) {
      navigator.share({
        title: 'Free Hill Capital',
        text: 'Check out Free Hill Capital',
        url: window.location.href,
      }).catch(err => console.log('Share failed', err));
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="space-y-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <video
              autoPlay
              controls
              playsInline
              className="h-full w-full object-cover"
              data-testid="video-player"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <p className="text-center text-lg text-muted-foreground" data-testid="text-video-caption">
              {title}
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="gap-2"
              data-testid="button-share"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
