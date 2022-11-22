import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as cssModule from "../scss";

const Menu = ({ setStyleId }) => {
  const [clickSort, setClickSort] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const clickMode = () => setDarkMode(!darkMode);
  const showSort = () => setClickSort(!clickSort);

  const DarkMode = () => {
    clickMode();
    setStyleId("dark");
  };

  const LightMode = () => {
    clickMode();
    setStyleId("light");
  };

  const Button = ({ title, icon, onclick, classname }) => (
    <button className={classname} onClick={onclick}>
      {icon}
      <p>{title}</p>
    </button>
  );

  return (
    <div className={cssModule.Components.sortRow}>
      <div
        className={
          clickSort
            ? cssModule.Components.sortColor
            : cssModule.Components.sortColorHide
        }
      >
        <Button onclick={() => navigate("status-merah")} title="Merah" />
        <Button onclick={() => navigate("status-hijau")} title="Hijau" />
        <Button onclick={() => navigate("status-kuning")} title="Kuning" />
        <Button onclick={() => navigate("/")} title="Semua" />
      </div>
      <div className={cssModule.Components.sortButton}>
        {darkMode ? (
          <Button
            onclick={LightMode}
            classname={cssModule.Components.buttonLight}
            icon={<FaIcons.FaSun />}
          />
        ) : (
          <Button
            onclick={DarkMode}
            classname={cssModule.Components.buttonDark}
            icon={<FaIcons.FaMoon />}
          />
        )}
        <Button
          onclick={showSort}
          classname={cssModule.Components.buttonSort}
          title="Sortir"
          icon={<FaIcons.FaFilter />}
        />
      </div>
    </div>
  );
};

export default Menu;

// import React, { Component } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as cssModule from "../scss";

// export default class Menu extends Component {
//   state = {
//     clickSort: false,
//     darkMode: false,
//   };

//   clickMode = () => {
//     this.setState((prevState) => ({ darkMode: prevState.darkMode(!darkMode) }));
//   };

//   showSort = () => {
//     this.setState((prevState) => ({
//       clickSort: prevState.clickSort(!clickSort),
//     }));
//   };

//   DarkMode = () => {
//     clickMode();
//     this.setState(setStyleId("dark"));
//   };

//   LightMode = () => {
//     clickMode();
//     this.setState(setStyleId("light"));
//   };

//   // Button = ({ title, icon, onclick, classname }) => (
//   //   <button className={classname} onClick={onclick}>
//   //     {icon}
//   //     <p>{title}</p>
//   //   </button>
//   // );

//   render() {
//     const Button = ({ title, icon, onclick, classname }) => (
//       <button className={classname} onClick={onclick}>
//         {icon}
//         <p>{title}</p>
//       </button>
//     );

//     return (
//       <div className={cssModule.Components.sortRow}>
//         <div
//           className={
//             this.state.clickSort
//               ? cssModule.Components.sortColor
//               : cssModule.Components.sortColorHide
//           }
//         >
//           {/* <Button onclick={() => navigate("status-merah")} title="Merah" />
//           <Button onclick={() => navigate("status-hijau")} title="Hijau" />
//           <Button onclick={() => navigate("status-kuning")} title="Kuning" />
//           <Button onclick={() => navigate("/")} title="Semua" /> */}
//         </div>
//         <div className={cssModule.Components.sortButton}>
//           {this.state.darkMode ? (
//             <Button
//               onclick={this.LightMode}
//               classname={cssModule.Components.buttonLight}
//               icon={<FaIcons.FaSun />}
//             />
//           ) : (
//             <Button
//               onclick={this.DarkMode}
//               classname={cssModule.Components.buttonDark}
//               icon={<FaIcons.FaMoon />}
//             />
//           )}
//           <Button
//             onclick={this.state.showSort}
//             classname={cssModule.Components.buttonSort}
//             title="Sortir"
//             icon={<FaIcons.FaFilter />}
//           />
//         </div>
//       </div>
//     );
//   }
// }
