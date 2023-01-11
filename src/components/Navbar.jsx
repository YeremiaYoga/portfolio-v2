import { Link } from "react-router-dom";
import ModalAbout from "./ModalAbout";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <nav className="z-30 px-16 pt-10 pb-8 sticky top-0 bg-white mx-auto backdrop-blur-sm border-b">
      <div className="md:flex items-center justify-around">
        <div className="z-40 w-full flex justify-between">
          <h1 className="text-xl text-center w-full md:w-fit pb-5">
            <Link to="/">Yeremia Yoga</Link>
          </h1>
          <div></div>
        </div>
        <ul className="flex items-center space-x-5 justify-center text-sm md:text-base cursor-pointer">
          <li className="hover:text-blue-400" onClick={() => handleOpen()}>
            About
          </li>
          <li className="hover:text-blue-400 ">
            <Link to="/design">Design</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="/uiux">UI/UX</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="/project">Project</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="/certification">Certification</Link>
          </li>
        </ul>
        {/* <div className="flex justify-center pt-3 md:py-3 px-4 space-x-5">
          <Link className="hover:text-blue-400 ">
            <img className="hover:text-blue-400 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmElEQVR4nO2aXWhcRRTHJ4r4kUrrB0qs5OOc2SCRrh+t4EuNFURbPx7E+OCDL0LRYB+KLU2T7EwfFESQYqmI2KiIDxIEtVrbuDO7FLQ0UtQHaWsKDSTZM0lrI6YotJquzHY3O9kk3ZtNsrm7nR/My+6cueec+d8zc+8dxjwej8fj8Xg8nqJEIhHgnLdyztvC2CKRyCPNzc1NbDFpaWlZgYhdiDiAiOkKab8jYmc0Gq1dUPCIuAERTQgCKrURIj5aavAvAMBFZ7BzALCPc96+3FK/Qmu3PiLieM5vG4P9b17BA8A6RPzHGWQPAKxkFYL1FQD2OpNnY1kb1L4GEX9yjLexCgUAdjhx9NvYghg95cz8l6zCQcRvnHg2BTH4yDFYwyqcSCRyv6OCnqIGeHkJscGfYlUCAJzOJuBEkM7ns50PsCoBAA5lJ3WiaGfMy7+XVQk2llxcRTujTwBeUQE71eidMUUbNx9LX8dCgvXF+iT7zB1LrgChzAmpTVoq+jUWp4fYMhNL0FqhzC8Zn7Q5Xr4EaNvoP6HNO3J/6iZWZrYeGbpRKnpbKPo3708ZEiC/P3uXVPSVc1GbiNMxNfo4KxMxZTYIRacKfNjfqYZWl60IxpR5RmozMt0J0yuTqdvZErEjPr5SKHpXaJrMXVNoGpOaXlqWVUAmB1cJZT4Qii7lHTLnZII2s0VGxs3TQpnhUhK+5MtgTKXWS2VOus4JZQ7IeKqeLRC76khlPp0+Ng3GEqknQrUP2GqLkja7pKKLU84quiS0+bCtN30tKwGhzW6paMKR+6RV3PYfzt4c2o1Qtx67b6ZU6Ui3NvcGHaOrzzTJhDk2bQxFv8nk6MOl+FTWBMgkrZtSgVMbLv9Gb235buD6OW1l+hpbP4Si89Mkr2myW488y0qkbAl4vc/UTq8FtE1oiheoYUDGzYz3dN3x0TVCU7/bd5c2+aVO0YRVFwtzAoSinrzD5ovMj+l0jVDmZanMuDujmb1Egtqlolekps/dDY1VgNBmi1WE0PSmY5eSyeG7Q5kAqek5ZwUYloeGbi1WzWdrQpuDXZoapgzT6RqpzWdOn59lcmxFqBLQqYZWS23+yM2u3anN1VfG6UmhzOEZwSs6apM4q01y8Aah6Ed3iZ3PyrKkCZBWpoq0E8wbQew6D5+piyWoVWrzWBBZd8RHbsvUj7xSdrNQJECbDuce7V/Kx2SZTN1TUEteXf4EKHMmV6VlcoyzcjwIaXMh9xwQAgXQ3sz+X9HzrExIPfpiRgmK9gTp71+JgX8n2OtfiqJ/K5wOVAQBYCJbBA+yKgEA+rIx/VW0MyKevKo/jSFiTzV9HOWcP+DEs6+oAQBscgy+ZhUOIn7rxLMx6AGJfsdoO6tQAKDDieNooAMSFkR8sOCIzHsNDQ2rWIVQX19/CyK+75wL+NveCvMahHPeVnBI6k9E/BgRXwvBYahZm/UNET/J+pqbvAuc89K26ZzzVgBIFRw9q5gGACP28CRbCNFotBYRd9olpIICP27v/7q6usX9ZtnY2NhgM7rcUp+rNTU1rQeABX+M8Xg8Ho/H4/Gwq4D/AXy7lhKLGHCgAAAAAElFTkSuQmCC" />
          </Link>
          <Link className="hover:text-blue-400 ">
            <ion-icon size="large" name="logo-github"></ion-icon>
          </Link>
        </div> */}
      </div>
      {open && <ModalAbout open={open} onClose={handleClose} />}
    </nav>
  );
};

export default Navbar;
