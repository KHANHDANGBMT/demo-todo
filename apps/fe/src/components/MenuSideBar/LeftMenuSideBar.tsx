const LeftMenuSideBar = () => {
  return (
    <div className="flex flex-col bg-gray-950 text-gray-400 transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-3">
        <Link
          className="flex items-center gap-2 text-lg font-semibold text-gray-50"
          href="#"
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Button className="rounded-full" size="icon" variant="ghost">
          <MenuIcon className="h-5 w-5 text-gray-400" />
        </Button>
      </div>
      <nav className="flex flex-col space-y-2 px-2 py-4">
        <Link
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-gray-50"
          href="#"
        >
          <HomeIcon className="h-5 w-5" />
          <span className="flex-1">Dashboard</span>
        </Link>
        <Link
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-gray-50"
          href="#"
        >
          <BriefcaseIcon className="h-5 w-5" />
          <span className="flex-1">Projects</span>
        </Link>
        <Link
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-gray-50"
          href="#"
        >
          <CircleCheckIcon className="h-5 w-5" />
          <span className="flex-1">Tasks</span>
        </Link>
        <Link
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-gray-50"
          href="#"
        >
          <UsersIcon className="h-5 w-5" />
          <span className="flex-1">Team</span>
        </Link>
        <Link
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-900 hover:text-gray-50"
          href="#"
        >
          <CogIcon className="h-5 w-5" />
          <span className="flex-1">Settings</span>
        </Link>
      </nav>
      <div className="mt-auto flex items-center justify-between border-t border-gray-800 px-4 py-3">
        <Toggle aria-label="Toggle dark mode" variant="outline">
          <MoonIcon className="h-5 w-5" />
        </Toggle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              <GlobeIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <span className="flex items-center gap-2">
                <img
                  alt="English"
                  className="rounded-full"
                  height={24}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width={24}
                />
                English
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex items-center gap-2">
                <img
                  alt="Español"
                  className="rounded-full"
                  height={24}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width={24}
                />
                Español
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex items-center gap-2">
                <img
                  alt="Français"
                  className="rounded-full"
                  height={24}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width={24}
                />
                Français
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default LeftMenuSideBar;
