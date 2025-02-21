let unsubscribe;

const auth = getAuth();

const authStateChanged = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in:', user.uid);
    } else {
      console.log('User is signed out');
    }
  });
};

// Call this function to start the auth state listener
 authStateChanged();

// ... later in the component's lifecycle (like before unmount)

const cleanup = () => {
  if (unsubscribe) {
    unsubscribe();
    console.log('Successfully unsubscribed from onAuthStateChanged');
  } else {
    console.log('Nothing to unsubscribe from onAuthStateChanged');
  }
};

// Call cleanup function when appropriate, like in componentWillUnmount 
cleanup();