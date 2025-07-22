const ThemedButton = ({ title, ...props }) => {
  const { theme } = useTheme();
  return (
    <Button
      color={theme.colors.primary}
      {...props}
    />
  );
};