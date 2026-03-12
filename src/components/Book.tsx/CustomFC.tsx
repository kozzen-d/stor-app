import type { JSX } from "react";



type FC<T> = (props: T) => JSX.Element;

interface Props {
  brand: string;
}

const Car: FC<Props> = ({ brand }) => {
  return <div>{ brand }</div>;
};

export default Car;
