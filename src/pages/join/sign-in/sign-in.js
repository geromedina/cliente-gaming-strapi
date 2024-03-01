import Link from "next/link";
import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";
import LoginForm from "@/components/Auth/LoginForm/LoginForm";
import { Seo } from "@/components/Shared";

export default function SignInPage() {
  return (
    <>
      <Seo title="Gaming - Iniciar sesión" />
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar sesión</h3>

          <LoginForm />
          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
