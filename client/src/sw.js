self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: 'New Thread',
        icon: 'myIcon'
    });
    console.log('Registration sent...');
});