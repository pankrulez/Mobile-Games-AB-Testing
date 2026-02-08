import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data/cookie_cats.csv")

metrics = {
    "retention_1": "Day-1 Retention",
    "retention_7": "Day-7 Retention"
}

for metric, title in metrics.items():
    control = (
        df[df["version"] == "gate_30"][metric]
        .astype(int)
        .to_numpy()
    )
    treatment = (
        df[df["version"] == "gate_40"][metric]
        .astype(int)
        .to_numpy()
    )

    plt.figure(figsize=(6, 4))

    # Use fixed bins for binary data
    bins = [-0.5, 0.5, 1.5]

    plt.hist(
        control,
        bins=bins,
        alpha=0.6,
        density=True,
        label="Gate 30"
    )
    plt.hist(
        treatment,
        bins=bins,
        alpha=0.6,
        density=True,
        label="Gate 40"
    )

    plt.xticks([0, 1], ["Churned", "Retained"])
    plt.title(f"{title} Outcome Distribution")
    plt.xlabel("Outcome")
    plt.ylabel("Proportion")
    plt.legend()

    plt.tight_layout()
    plt.savefig(f"reports/{metric}_distribution.png", dpi=150)
    plt.close()