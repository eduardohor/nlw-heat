import { useContext, useEffect } from "react"
import {VscGithubInverted} from "react-icons/vsc"
import { AuthContext } from "../../contexts/auth"
import { api } from "../../services/api"

import styles from "./styles.module.scss"


export function LoginBox(){
  
  const {sigInUrl} = useContext(AuthContext)


  return(
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>

      <a href={sigInUrl} className={styles.sigInWithGithub}>
        <VscGithubInverted size="24"/>
        Entrar com github
      </a>

    </div>
  )
}