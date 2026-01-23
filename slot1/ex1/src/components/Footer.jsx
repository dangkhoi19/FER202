<<<<<<< HEAD
import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="#" style={styles.link}>Trang chủ</a>
        <a href="#" style={styles.link}>Giới thiệu</a>
        <a href="#" style={styles.link}>Liên hệ</a>
      </div>

      <div style={styles.copy}>
        © 2026 Long Nguyễn. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto"
  },
  links: {
    marginBottom: "8px"
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "none",
    margin: "0 10px"
  },
  copy: {
    fontSize: "14px",
    color: "#ccc"
  }
};
=======
function Footer() {
    return (
        <>
            <h1>
                day la web react cua toi
            </h1>
            <p>
                lien he abc@gmai.com
            </p>
            <img src="/image/4c9802d4bbefa7f729af60eb39bf6d52.jpg" alt="none" height={100} width={100
            } />
        </>
    )
}
export default Footer;
>>>>>>> 60a1915 (cc)
