import Link from "next/link";
import styles from "./menubar.module.scss";

type MenuBarProps = {
  activeTab: "Home" | "Work" | "About";
};

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>RK</div>
          <h3 className={styles.name}>Rasool Khan</h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3
            style={
              props.activeTab === "Home"
                ? { color: "#FFF8E5" }
                : { color: "#17252a" }
            }
          >
            Home
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3
            style={
              props.activeTab === "Work"
                ? { color: "#FFF8E5" }
                : { color: "#17252a" }
            }
          >
            Work
          </h3>
        </a>
      </Link>
      <Link href={`/about`}>
        <a className={styles.tab}>
          <h3
            style={
              props.activeTab === "About"
                ? { color: "#FFF8E5" }
                : { color: "#17252a" }
            }
          >
            About
          </h3>
        </a>
      </Link>
    </nav>
  );
}
