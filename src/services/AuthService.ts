export class AuthService {

    constructor(
        private auth_url: string,
        private client_id: string,
        private redirect_uri: string,
        private response_type = 'token') {

        if (location.hash) {
            const match = location.hash.match(/access_token=([^&]*)/);
            if (match && match[1]) {
                this.token = match[1];
                // location.hash = '';
            }
        }
    }

    token: string | null = null;

    authorize() {
        const url = `${this.auth_url}?` +
            `client_id=${this.client_id}` +
            `&redirect_uri=${this.redirect_uri}` +
            `&response_type=${this.response_type}`
        location.href = url ;
    }

    getToken() {
        if (!this.token) {
            this.authorize();
        }
        return this.token;
    }
}