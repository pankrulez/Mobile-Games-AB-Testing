# 🎮 Mobile Games A/B Testing — GAMEPULSE Dashboard
> **A production-style experimentation system showcasing statistical rigor, decision-making, and modern analytics UI.**

---

## 📌 Project Overview
This project analyzes the impact of **moving a progression gate from level 30 to level 40** in a mobile game using a randomized A/B experiment.

Beyond statistical correctness, the goal was to **communicate experimental results the way real product teams consume them** — through a narrative, interactive dashboard rather than static notebooks.

The result is **GAMEPULSE**, a dark, system-style analytics interface inspired by internal experimentation platforms used at large product companies.

---

## 🎯 Experiment Objective

**Hypothesis**  
Delaying the progression gate would reduce early churn by allowing players to build stronger engagement habits before encountering friction.

**Primary Metrics**
- Day-1 Retention
- Day-7 Retention

**Decision Question**  
Does the treatment meaningfully and reliably outperform control — and should it be shipped?

---

## 🧠 Statistical Approach

This project deliberately avoids “single-test thinking” and instead evaluates results through **multiple complementary lenses**:

### 1. Bootstrap Confidence Intervals
- Non-parametric estimation of uncertainty  
- Robust to skewed and binary behavioral data  

### 2. Permutation Testing
- Label-randomization to assess significance  
- No reliance on normality assumptions  

### 3. Bayesian Inference (Beta-Binomial)
- Direct estimation of **P(Treatment > Control)**  
- Results expressed probabilistically, not just as p-values  

### 4. Power & Peeking Analysis
- Offline simulation to understand:
  - minimum detectable effects  
  - false-positive inflation from repeated peeking  

All computationally intensive analysis is executed **offline** and version-controlled.  
The dashboard acts purely as a **presentation and decision layer**, mirroring real production experimentation systems.

---

## 🧭 Product-Style Dashboard Design

The UI is intentionally structured as a **narrative analytics system**, not a chart dump.

### Summary — Statistical Journey
A qualitative walkthrough of the experiment:
- Hypothesis formulation  
- Experimental design  
- Statistical findings  
- Final recommendation  

This section demonstrates *how* the decision was reached — not just *what* the result was.

### Overview
An executive snapshot:
- Control vs Treatment KPIs  
- Absolute lift  
- Bayesian confidence score  

Designed for fast decision-making.

### Retention
Deep behavioral analysis:
- Daily relative lift (D1–D7)  
- Retention trajectory curves  
- Distributional views to justify resampling methods  

Charts are interactive, confidence-aware, and styled to match modern internal analytics tooling.

---

## ✅ Confidence-Driven Decisions

A global **Confidence Score** (Bayesian posterior probability) is surfaced persistently across the app.

Visual semantics adapt to confidence:
- Strong posterior → green emphasis  
- Uncertain results → neutral/amber cues  

This reinforces **decision confidence**, not just statistical significance.

---

## ♿ Accessibility & Engineering Discipline

The dashboard includes:
- WCAG-compliant contrast tuning  
- Keyboard-navigable sidebar  
- Screen-reader-aware modals  
- Color-blind-safe chart encodings  

These choices reflect **production engineering standards**, not portfolio shortcuts.

---

## 🧪 What This Project Demonstrates

- Sound experimental design  
- Proper uncertainty quantification  
- Bayesian reasoning  
- Awareness of peeking bias  
- Product-oriented communication  
- Modern analytics UI design  
- Accessibility and UX maturity  

This is not a “model accuracy” project — it is a **decision-making system**.

---

## 🚀 How to Run

```bash
cd web
npm install
npm run dev
```

The dashboard consumes precomputed results to ensure fast, deterministic rendering.

---

## 📎 Notes

- Tabs render only when data exists — no placeholders.

- No fake monetization or segmentation metrics are included.

- All numbers in the UI are defensible and traceable to analysis code.

## 📬 Author

Pankaj Kapri

Data Science & Product Analytics