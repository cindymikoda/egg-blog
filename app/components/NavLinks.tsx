/* TODO: 
- Create a component to be reuse for each link on navbar and categoryNav
import pathname and link
- The component will receive the params: label, href
- and maintain the styles of this code :
links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium relative transition-all duration-300 
        ${
          pathname === link.href
            ? "text-[var(--color-egg-yellow)] after:w-full"
            : "text-[var(--color-dark-gray)] hover:text-[var(--color-egg-yellow)] hover:after:w-full"
        }
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:bg-[var(--color-egg-yellow)] after:transition-all after:duration-300 after:w-0
      `}
          >
            {link.label}
          </Link>
        )) 
*/
