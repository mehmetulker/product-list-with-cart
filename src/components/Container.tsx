interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto my-[88px]">{children}</div>;
};

export default Container;
