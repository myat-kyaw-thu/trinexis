import Image from "next/image";

export const Icons = {
  logo: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={className} {...props}>
      <Image
        src="/logo.png"
        alt="Trinexis Logo"
        width={44}
        height={44}
        className="w-full h-full object-contain"
        style={{
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(73%) saturate(1347%) hue-rotate(134deg) brightness(95%) contrast(101%)'
        }}
      />
    </div>
  ),
};
