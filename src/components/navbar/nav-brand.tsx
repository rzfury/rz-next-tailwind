import { Fragment } from 'react';
import Link from 'next/link';

export default function NavBrand(props: RazorWindProps.Navigation.Brand) {
  if (props.text) return <Link href="/" passHref><a className="text-2xl">{props.text}</a></Link>;
  else return <Fragment></Fragment>;
}
