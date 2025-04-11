package com.innermind.os;

import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Create WebView
        webView = new WebView(this);
        setContentView(webView);

        // Enable JavaScript
        webView.getSettings().setJavaScriptEnabled(true);
        
        // Add interface for native features
        webView.addJavascriptInterface(new DeviceInterface(this), "Device");
        
        // Load the InnerMind OS interface
        webView.loadUrl("file:///android_asset/index.html");
        
        // Handle device fold state changes
        registerFoldStateCallback();
    }

    private void registerFoldStateCallback() {
        // Monitor fold state changes
        getWindow().getWindowManager().registerDeviceCallback(
            new DeviceStateCallback() {
                @Override
                public void onDeviceStateChanged(int newState) {
                    // Update WebView with new state
                    String state = (newState == DEVICE_STATE_FOLDED) ? "folded" : "unfolded";
                    webView.evaluateJavascript(
                        "window.updateDeviceState('" + state + "')",
                        null
                    );
                }
            }
        );
    }

    // Interface for device-specific features
    private class DeviceInterface {
        private MainActivity activity;

        DeviceInterface(MainActivity activity) {
            this.activity = activity;
        }

        @android.webkit.JavascriptInterface
        public String getDeviceState() {
            // Get current fold state
            return activity.isFolded() ? "folded" : "unfolded";
        }

        @android.webkit.JavascriptInterface
        public void initializeAI() {
            // Initialize AI system
            activity.runOnUiThread(() -> {
                // Start AI services
            });
        }
    }

    private boolean isFolded() {
        // Check device fold state
        return getWindow().getWindowManager().getDeviceState() == DEVICE_STATE_FOLDED;
    }
}
