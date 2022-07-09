import { SocialLink } from "@/elements";

export default function Footer2({ content }) {
  let { collections } = { ...content };
  let primaryMenuItems = [];
  if (collections && collections["primary-menu-items"]) {
    primaryMenuItems = collections["primary-menu-items"].items;
  }
  let socialLinks = [];
  if (collections && collections["social-links"]) {
    socialLinks = collections["social-links"].items;
  }

  return (
    <footer id="footer-2" className="template">
      <div className="px-4 pt-10 pb-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid items-center justify-between grid-cols-1 gap-x-10 lg:grid-cols-2">
            <ul className="flex flex-wrap items-center justify-center mb-12 lg:justify-start">
              {primaryMenuItems.map((menuItem, i) => (
                <li key={i}>
                  <a
                    href={menuItem.attributes.url}
                    className="flex px-3 py-2 text-gray-600 transition duration-200 ease-in-out dark:hover:text-white dark:text-gray-300 hover:text-gray-900"
                  >
                    {menuItem.attributes.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="grid items-center justify-center grid-flow-col mb-12 lg:justify-end auto-cols-max gap-x-6">
              {socialLinks.map((socialLink, i) => {
                return <SocialLink key={i} attributes={socialLink.attributes}></SocialLink>;
              })}
            </div>
          </div>

          <div className="text-center">
            <a className="text-sm text-black dark:text-white hover:underline" href="https://builtjs.com" target="_blank" rel="noreferrer noopener">
              Built with Built.JS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
