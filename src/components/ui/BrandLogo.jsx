function BrandLogo({name, image}) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={`${name} logo`} className="w-20 h-20 object-contain" />
      <span className="text-gray-400 text-sm mt-2">{name}</span>
    </div>
  );
}

export default BrandLogo;