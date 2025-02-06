import Iconify from "@/Components/iconify";

// ----------------------------------------------------------------------

type Props = {
  icon?: any; // Right icon
  isRTL?: boolean;
};

export function LeftIcon({ icon = 'carbon:chevron-right', isRTL }: Props) {
  return (
    <Iconify
      icon={icon}
      width={24}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

export function RightIcon({ icon = 'carbon:chevron-right', isRTL }: Props) {
  return (
    <Iconify
      icon={icon}
      width={24}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}
