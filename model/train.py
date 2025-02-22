from ultralytics import YOLO
from PIL import Image

# Load model
model = YOLO("best.pt")
results = model(source="pic.jpg", show=True, conf=0.25, save=True)

# Visualize the results
for i, r in enumerate(results):
    # Plot results image
    im_bgr = r.plot()  # BGR-order numpy array
    im_rgb = Image.fromarray(im_bgr[..., ::-1])  # RGB-order PIL image

    # Show results to screen (in supported environments)
    r.show()

    # Save results to disk
    r.save(filename=f"results{i}.jpg")

    # Print class values of detected objects
    print(f"Result {i} class values: {r.boxes.cls}")