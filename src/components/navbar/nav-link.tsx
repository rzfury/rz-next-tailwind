import Link from 'next/link';

export default function NavLink(props: RazorWindProps.Navigation.Link) {
  if (props.dropdown) {
    return (
      <li>
        <a className="cursor-pointer flex gap-x-1 px-1 py-2 border-b-2 border-blue-500 hover:border-white" onClick={() => alert('Dropdown not available yet.')}>
          <span>{props.label}</span>
          <svg className="fill-current text-white mt-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g id="down">
              <path id="arrow" d="M1 4h10L6 9 1 4" />
            </g>
          </svg>
        </a>
      </li>
    );
  }
  else {
    return (
      <li>
        <Link href={props.href} passHref>
          <a className="flex px-1 py-2 border-b-2 border-blue-500 hover:border-white">{props.label}</a>
        </Link>
      </li>
    );
  }
}
