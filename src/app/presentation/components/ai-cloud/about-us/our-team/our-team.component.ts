import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent {
  // Array of team members data
  teamMembers = [
    {
      name: 'Mohamed Mustafa',
      role: 'Team Leader',
      description: `A team leader monitors workflow, assigns tasks, and ensures
        effective cooperation among team members to achieve goals.`,
      imgSrc: 'assets/team-member-1.png',
      alt: 'Team Member Mohamed Mustafa',
      socialLinks: {
        facebook: '#',
        linkedin: '#',
        email: '#',
      },
    },
    {
      name: 'Kareem Zakaria',
      role: 'Software Engineer',
      description: `A front-end developer programs web pages using HTML, CSS, and
        JavaScript to ensure a smooth and engaging user experience.`,
      imgSrc: 'assets/team-member-2.png',
      alt: 'Team Member Kareem Zakaria',
      socialLinks: {
        facebook: '#',
        linkedin: '#',
        email: '#',
      },
    },
    {
      name: 'Mossad Selim',
      role: 'Software Engineer',
      description: `A systems backend developer manages databases, servers, and
        software logic to run applications efficiently and securely.`,
      imgSrc: 'assets/team-member-3.png',
      alt: 'Team Member Mossad Selim',
      socialLinks: {
        facebook: '#',
        linkedin: '#',
        email: '#',
      },
    },
    {
      name: 'Subhe Daher',
      role: 'Software Engineer',
      description: `A systems backend developer manages databases, servers, and
        software logic to run applications efficiently and securely.`,
      imgSrc: 'assets/team-member-4.png',
      alt: 'Team Member Subhe Daher',
      socialLinks: {
        facebook: '#',
        linkedin: '#',
        email: '#',
      },
    },
    {
      name: 'Mahmoud Saad',
      role: 'UI Ux Designer',
      description: `A user interface and user experience designer, transforming
        ideas into attractive, user-friendly designs.`,
      imgSrc: 'assets/team-member-5.png',
      alt: 'Team Member Mahmoud Saad',
      socialLinks: {
        facebook: '#',
        linkedin: '#',
        email: '#',
      },
    },
    {
      name: 'Ahmed Saad',
      role: 'Graphic Designer',
      description: `A front-end developer programs web pages using HTML, CSS, and
        JavaScript to ensure a smooth and engaging user experience.`,
      imgSrc: 'assets/team-member-6.png',
      alt: 'Team Member Ahmed Saad',
      socialLinks: {
        facebook: '#',
        linkedin: '#',
        email: '#',
      },
    },
  ];
}
