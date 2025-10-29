interface HeroWithVideoProps {
  videoUrl?: string;
  title?: string;
  subtitle?: string;
}

export default function HeroWithVideo({ 
  videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4",
  title = "Free Hill Capital",
  subtitle = "Building Lasting Enterprises"
}: HeroWithVideoProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          data-testid="video-background"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>
      
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 md:px-12">
        <div className="text-center space-y-6">
          <h1 
            className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            data-testid="text-hero-title"
          >
            {title}
          </h1>
          <p 
            className="mx-auto max-w-2xl text-xl text-white/90 md:text-2xl"
            data-testid="text-hero-subtitle"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
