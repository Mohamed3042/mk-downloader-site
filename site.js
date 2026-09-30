const address = document.querySelector('#engine-address');
const form = document.querySelector('#open-engine');
try { address.value = localStorage.getItem('mk-downloader-address') || address.value; } catch {}
function validAddress(value) { const url = new URL(value); if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error('Use an HTTP or HTTPS address without a username or password.'); return url.origin; }
form.addEventListener('submit', event => { event.preventDefault(); try { const url = validAddress(address.value.trim()); address.setCustomValidity(''); try { localStorage.setItem('mk-downloader-address', url); } catch {} window.open(url, '_blank', 'noopener,noreferrer'); } catch (error) { address.setCustomValidity(error.message); address.reportValidity(); } });
address.addEventListener('input', () => address.setCustomValidity(''));
document.querySelectorAll('.open-app').forEach(link => { try { link.href = validAddress(address.value); } catch {} });
