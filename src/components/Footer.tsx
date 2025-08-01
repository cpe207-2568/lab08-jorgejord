type FooterProps = {
  year: number;
  fullName: string;
  studentId: string;
};

function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {year} {fullName} {studentId}
    </footer>
  );
}

export default Footer;