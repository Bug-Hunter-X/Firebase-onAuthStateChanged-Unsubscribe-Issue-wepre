# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` function: the listener not unsubscribing correctly, leading to memory leaks.  The provided code shows how to correctly implement and manage the unsubscribe method to prevent this issue.  This is particularly important in mobile applications or applications with long lifecycles.

## Problem

The `onAuthStateChanged` listener continues to run after being seemingly unsubscribed to, consuming resources and potentially causing errors.

## Solution

The solution involves ensuring that the `unsubscribe` function returned by `onAuthStateChanged` is called when the listener is no longer needed.  This will properly remove the listener from the Firebase connection, freeing up resources.