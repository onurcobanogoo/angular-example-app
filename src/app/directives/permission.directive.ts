import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {

  @Input() public appPermission: string[] = [];

  private user = {
    'role': 'standard'
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.roleOperation(this.appPermission);
  }

  private roleOperation(roleList: string[]) {
    const isRoleEnabled = roleList.filter(role => role === this.user['role']);

    if (isRoleEnabled.length === 0) {
      this.elementRef.nativeElement.parentNode.removeChild(this.elementRef.nativeElement);
    }
  }

}
