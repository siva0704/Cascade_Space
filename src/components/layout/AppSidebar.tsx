
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/Button";
import { Home, Info, Settings, Users, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Team", href: "/team", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function AppSidebar() {
  const isMobile = useIsMobile();

  const closeSidebarMobile = () => {
    if (isMobile) {
      const sidebarTrigger = document.querySelector("[data-sidebar='trigger']");
      if (sidebarTrigger instanceof HTMLElement) {
        sidebarTrigger.click();
      }
    }
  };

  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="flex flex-col space-y-2 items-center justify-center p-4 sticky top-0 bg-sidebar/95 backdrop-blur-md z-10">
        <Link to="/" className="flex flex-col items-center" onClick={closeSidebarMobile}>
          <img 
            src="/lovable-uploads/985cbb85-f808-4e11-8851-32d7798478d8.png" 
            alt="CascadeTech Logo" 
            className="h-12 mb-2" 
          />
          <span className="text-sm font-semibold text-sidebar-foreground">
            <span className="text-blue-600">CascadeTech</span> Solutions
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-sidebar/95 backdrop-blur-md">
        <ScrollArea className="h-[calc(100vh-180px)]">
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild tooltip={item.name}>
                      <NavLink 
                        to={item.href}
                        className={({ isActive }) => cn(
                          isActive ? "bg-sidebar-accent text-blue-600" : ""
                        )}
                        onClick={closeSidebarMobile}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-4 sticky bottom-0 bg-sidebar/95 backdrop-blur-md">
        <Button asChild className="w-full">
          <Link to="/contact" onClick={closeSidebarMobile}>
            Get Started
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
