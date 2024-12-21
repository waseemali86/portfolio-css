import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./header.module.css"; // Import the custom CSS module

function Header() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h1 className={styles.brand}>Waseem.</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navItem}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.connectButtonWrapper}>
        <button className={styles.connectButton}>Connect</button>
      </div>
      <div className={styles.mobileMenu}>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className={styles.sheetTitle}>Waseem Ali</SheetTitle>
              <SheetDescription>
                <ul className={styles.mobileLinks}>
                  <li>
                    <Link href="/" className={styles.mobileLink}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className={styles.mobileLink}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className={styles.mobileLink}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className={styles.mobileLink}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Header;
