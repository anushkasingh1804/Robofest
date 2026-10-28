// Single source of truth for editable content. Replace with verified official data.
export const site = {
  officialUrl: 'https://robotix.nitrr.ac.in/robofest',
  // Official ROBOTiX Club Recruitment 2026 submission form.
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdEMpLqynVRGoCSsm-cGtpnkUvvD8qhPZj93qBAB0fTbco4nQ/viewform',
  // Verified social links only. Add { label, href } objects once confirmed.
  socials: [],
}
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Experience', href: '#experience' },
  { label: 'Register', href: '#register' },
]
export const disciplines = ['Mechanics', 'Electronics', 'Code', 'Autonomy', 'Control']
// Illustrative event names: replace with verified official events.
export const events = [
  { id: 'race', no: '01', title: 'Robo Race', tag: 'SPEED / PRECISION', note: 'Fastest line wins. Smoothest line wins more.',
    text: 'Design and build a robot that navigates a challenging course with speed and precision.' },
  { id: 'combat', no: '02', title: 'Bot Combat', tag: 'FORCE / DURABILITY', note: 'Chassis, drive, control: all tested at once.',
    text: 'Put robot design, control, durability, and tactical engineering to the test.' },
  { id: 'auto', no: '03', title: 'Autonomous Challenge', tag: 'SENSE / DECIDE', note: 'No remote. The machine chooses.',
    text: 'Build intelligent systems that sense their surroundings, make decisions, and complete tasks with minimal human intervention.' },
]
export const themes = [
  { no: 'A', title: 'Build', text: 'Turn an idea into a working prototype.' },
  { no: 'B', title: 'Compete', text: 'Test your engineering against real challenges.' },
  { no: 'C', title: 'Connect', text: 'Meet people who love creating and solving problems.' },
]
