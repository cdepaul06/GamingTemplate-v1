import React, { useState } from "react";
import { Button, Popover, List, ListItem, Divider } from "@mui/material";
import { AccountCircle, PersonAdd } from "@mui/icons-material";
import { navLinks } from "../../constants";

const Navigation = ({}) => {
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
    <div className='flex flex-col'>
      <div className='flex flex-1 justify-end w-full'>
        <Button
          href='/login'
          style={{
            color: "white",
          }}
          size='large'
        >
          <AccountCircle className='mr-1' />
          Login
        </Button>
        <Button
          href='/signup'
          style={{
            color: "white",
          }}
          size='large'
        >
          <PersonAdd className='mr-1' />
          Sign Up
        </Button>
      </div>
      <div className='h-16'>
        <div className='flex flex-col items-center justify-center w-full h-full bg-red-900'>
          <ul className='flex items-center justify-center w-full h-full'>
            {navLinks.map((link) => (
              <li key={link.id} className='px-4 py-2 hover:bg-red-700'>
                {link.subNavLinks ? (
                  <Button
                    onClick={(e) => handlePopoverOpen(e, link.subNavLinks)}
                    style={{
                      color: "white",
                    }}
                    size='large'
                  >
                    {link.name}
                  </Button>
                ) : (
                  <Button
                    href={link.path}
                    style={{
                      color: "white",
                    }}
                    size='large'
                  >
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
                      horizontal: "left",
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
                            {subIndex !== currentSubNav.length - 1 && (
                              <Divider />
                            )}
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
    </div>
  );
};

export default Navigation;
