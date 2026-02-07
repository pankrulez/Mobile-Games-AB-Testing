from ab_stats import (
    bootstrap_mean_difference,
    permutation_test_mean_difference,
    bayesian_retention_analysis
)
import pandas as pd

df = pd.read_csv("data/cookie_cats.csv")

control = df[df['version'] == 'gate_30']['retention'].values
treatment = df[df['version'] == 'gate_40']['retention'].values

diffs, ci = bootstrap_mean_difference(control, treatment)
obs_diff, _, p_value = permutation_test_mean_difference(control, treatment)

print("=== Frequentist Results ===")
print(f"Mean Difference: {obs_diff:.4f}")
print(f"95% CI: {ci}")
print(f"p-value: {p_value:.4f}")