type ButtonPrpos = {} & React.ComponentProps<'button'>;

export function Button({ ...props }: ButtonPrpos) {
  return <button {...props} />;
}
