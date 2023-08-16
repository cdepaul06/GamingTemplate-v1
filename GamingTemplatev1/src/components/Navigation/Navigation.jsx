import React, { useState } from "react";
import { Button, Popover, List, ListItem, Divider } from "@mui/material";
import { navLinks } from "../../constants";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSubNav, setCurrentSubNav] = useState(null);

  const handlePopoverOpen = (event, subNavLinks) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubNav(subNavLinks);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCurrentSubNav(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='h-16'>
      <div className='flex flex-col items-center justify-center w-full h-full border-t border-b'>
        <ul className='flex items-center justify-center w-full h-full'>
          {navLinks.map((link) => (
            <li key={link.id} className='px-4 py-2'>
              {link.subNavLinks ? (
                <Button
                  color='primary'
                  onClick={(e) => handlePopoverOpen(e, link.subNavLinks)}
                >
                  {link.name}
                </Button>
              ) : (
                <Button color='primary' href={link.path}>
                  {link.name}
                </Button>
              )}

              {link.subNavLinks && (
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  slotProps={{
                    paper: {
                      style: { backgroundColor: "rgb(145, 37, 37)" },
                    },
                  }}
                >
                  <List component='nav'>
                    {currentSubNav &&
                      currentSubNav.map((subLink, subIndex) => (
                        <React.Fragment key={subLink.id}>
                          <ListItem
                            ListItemButton
                            component='a'
                            href={subLink.path}
                            className='text-white'
                          >
                            {subLink.name}
                          </ListItem>
                          {subIndex !== currentSubNav.length - 1 && <Divider />}
                        </React.Fragment>
                      ))}
                  </List>
                </Popover>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
