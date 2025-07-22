import { Component } from '@angular/core';
import { RouterModule ,Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-memder',
  imports: [RouterModule],
  templateUrl: './memder.html',
  styleUrl: './memder.scss'
})
export class Memder {
   constructor(private router: Router) {}
  changePage1() {
    this.router.navigateByUrl('/member/list');
  }
  changePage2() {
    this.router.navigateByUrl('/member/profile');
  }
  sendParams() {
      this.router.navigate(['/member/test'], {
      queryParams: { name: 'Aj.Potchara' },
    });
  }
}
