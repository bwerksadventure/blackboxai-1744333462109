package com.innermind.os;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import org.json.JSONObject;
import org.json.JSONException;

public class AIBridge {
    private static AIBridge instance;
    private final Context context;
    private final Handler mainHandler;
    private MinnieAI ai;

    private AIBridge(Context context) {
        this.context = context.getApplicationContext();
        this.mainHandler = new Handler(Looper.getMainLooper());
        initializeAI();
    }

    public static synchronized AIBridge getInstance(Context context) {
        if (instance == null) {
            instance = new AIBridge(context);
        }
        return instance;
    }

    private void initializeAI() {
        ai = new MinnieAI();
        // Load your existing AI configuration
        loadKnowledgeBase();
    }

    private void loadKnowledgeBase() {
        // Load knowledge base files from assets
        try {
            String[] files = context.getAssets().list("knowledge_base");
            for (String file : files) {
                // Load each knowledge base file
                String content = loadAssetFile("knowledge_base/" + file);
                // Initialize your AI's knowledge base
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String loadAssetFile(String path) {
        try {
            java.io.InputStream is = context.getAssets().open(path);
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            return new String(buffer, "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void processInput(String input, AIResponseCallback callback) {
        // Run AI processing in background
        new Thread(() -> {
            try {
                final JSONObject response = new JSONObject();
                
                // Process through your AI
                MinnieAI.Response aiResponse = ai.processInput(input);
                
                // Convert response to JSON
                response.put("text", aiResponse.txt);
                response.put("algorithms", String.join(",", aiResponse.alg));
                response.put("confidence", aiResponse.cm.confidence);
                
                // Return on main thread
                mainHandler.post(() -> callback.onResponse(response));
            } catch (JSONException e) {
                e.printStackTrace();
                mainHandler.post(() -> callback.onError(e.getMessage()));
            }
        }).start();
    }

    public interface AIResponseCallback {
        void onResponse(JSONObject response);
        void onError(String error);
    }
}
