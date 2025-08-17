import { ButtonPrimary, ButtonSecondary } from "../components/Button/Button";

import './Site.css';

const Site = () => {

  return (
    <>
      <h1>Hello</h1>
      <ButtonPrimary content={'Commander / Réserver'} showIconRight={true} />
      <ButtonSecondary content={'I am the secondary !!!'} showIconRight={true} />
    </>
  )
}

export default Site;
