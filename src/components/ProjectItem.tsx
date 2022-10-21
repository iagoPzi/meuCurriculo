type ProjectItemProps = {
  description: string;
  image: string;
  alt?: string;
  link: string;
};

export function ProjectItem({
  description,
  image,
  alt,
  link,
}: ProjectItemProps) {
  return (
    <div className="flex gap-3">
      <div className="flex">
        <a
          href={link}
          target="_blank"
          className="bg-black drop-shadow-xl rounded-lg overflow-hidden aspect-square h-36 relative"
        >
          <img src={image} alt={alt} className="h-full w-full" />
          <div className="absolute bottom-0 w-full py-3 bg-gradient-to-t from-black/80 flex justify-center">
            <p className="text-xs  text-zinc-300 mt-4">Clique para acessar</p>
          </div>
        </a>
      </div>
      <p className="text-base">{description}</p>
    </div>
  );
}
