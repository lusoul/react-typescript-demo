import "./App.css";
import { Greet } from "./components/Greet";
import { PersonList } from "./components/PersonList";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
// import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { CustomButton } from "./components/html/Button";

const listOfPerson = [
  { first: "Ling", last: "Lu" },
  { first: "Ya", last: "Wa" },
  { first: "Soul", last: "LPo" },
];

function App() {
  return (
    <div className="App">
      <Greet name="Ling" status="error" />
      <PersonList names={listOfPerson} />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Placeholder text2</Heading>
      </Oscar>
      <Button
        handleClick={() => {
          alert(111);
        }}
      />
      <Button
        handleClickWithEvent={(event) => {
          console.log(event);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", display: "block" }} />
      <LoggedIn />
      {/* <User /> */}
      <Counter message="This is a counter" />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["Batman", "superman", "wonder woman"]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive={true} />
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
