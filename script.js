 // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Class Tabs
        const classTabs = document.querySelectorAll('.class-tab');
        const classContents = document.querySelectorAll('.class-content');
        
        classTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                classTabs.forEach(t => t.classList.remove('active'));
                classContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const classId = tab.getAttribute('data-class');
                document.getElementById(classId).classList.add('active');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Button ripple effect
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Remove existing ripples
                const existingRipples = this.querySelectorAll('.ripple');
                existingRipples.forEach(ripple => ripple.remove());
                
                // Create ripple
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                // Position ripple
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });




        // Modal functionality
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const openLogin = document.getElementById('openLogin');
        const openSignup = document.getElementById('openSignup');
        const closeLogin = document.getElementById('closeLogin');
        const closeSignup = document.getElementById('closeSignup');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        
        // Open login modal
        openLogin.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
        
        // Open signup modal
        openSignup.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        // Close modals
        closeLogin.addEventListener('click', () => {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        closeSignup.addEventListener('click', () => {
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Switch between forms
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            signupModal.style.display = 'flex';
        });
        
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (e.target === signupModal) {
                signupModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Form submission
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // In a real app, you would validate and send to server
            alert(`Login attempt with:\nEmail: ${email}\nPassword: ${password}`);
            
            // Close modal
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const phone = document.getElementById('signupPhone').value;
            const grade = document.getElementById('signupClass').value;
            
            // In a real app, you would validate and send to server
            alert(`Account created for:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nClass: ${grade}`);
            
            // Close modal
            signupModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });