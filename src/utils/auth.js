
import { Notyf } from 'notyf';
import store from '@/store';
export function logout() {
    const notyf = new Notyf();
    notyf.success('Logged out successfully');
    store.dispatch('logout'); 
    window.location.href = '/login?logout=true';
}
