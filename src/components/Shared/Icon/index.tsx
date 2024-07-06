import { svgrIcons } from "./SvgrIcons";

type IconProps = {
  name: keyof typeof svgrIcons;
} & React.SVGProps<SVGSVGElement>;

export default function Icon({ name, ...rest }: IconProps) {
  const Icon = svgrIcons[name as keyof typeof svgrIcons];

  const svgProps = rest as IconProps;
  return <Icon {...svgProps} />;
}

