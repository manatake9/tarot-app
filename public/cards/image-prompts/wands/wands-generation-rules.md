# Wands Card Generation Rules

Use these prompts to create the Wands minor arcana cards in the same visual language as the existing major arcana images in `public/cards/major-arcana`.

## Output

- Size: `1024 x 1792`
- Aspect ratio: `4:7`
- Format: `PNG`
- Save folder: `public/cards/wands`
- Filename style: `ACE of WANDS.png`, `TWO of WANDS.png`, ... `KING of WANDS.png`
- Do not place card names, suit names, titles, captions, logos, or watermarks inside the image.

## Shared Prompt Blocks

### Base Prompt

```text
minimal fantasy tarot card illustration,
inspired by Rider-Waite tarot symbolism,
quiet cinematic atmosphere,
soft volumetric lighting,
minimal composition,
subtle surrealism,
symbolic negative space,
clean silhouette,
muted color palette,
gentle texture,
dreamlike environment,
balanced vertical composition,
medieval-inspired clothing,
no modern fashion,
emotion conveyed through posture and lighting,
high visual clarity,
ornate thin frame border,
small margin around artwork,
no text,
no title,
no watermark,
no logo
```

### Camera Prompt

```text
centered composition,
single main subject unless the card symbolism requires two or more figures,
cinematic framing,
slightly low camera angle,
strong silhouette readability,
subject occupying middle 60 percent of frame,
large atmospheric background,
soft depth perspective,
calm empty space around subject
```

### Frame Prompt

```text
thin decorative border,
elegant line art frame,
subtle vintage ornament,
2.5 percent outer margin,
symmetrical corner decoration,
minimal arcane motifs,
dark ivory frame color,
clean geometric balance
```

### Wands Suit Style

```text
The Wands suit should feel solar, fiery, active, creative, and alive with willpower.
Use burnt sienna, ember orange, muted gold, warm ochre, deep olive, charcoal, and dusty crimson as recurring accents.
Wands should look like natural wooden staffs with small leaves, buds, sparks, or glowing runes, not metal rods.
Fire should appear as controlled embers, torchlight, sunrise glow, or symbolic warmth rather than destructive flames on every card.
Prefer dry hills, old roads, training grounds, desert gardens, watchtowers, banners, wind, smoke, and golden skies.
Figures should feel purposeful and alert rather than aggressive or theatrical.
```

### Negative Prompt

```text
modern clothes,
cyberpunk,
excessive jewelry,
heavy armor,
overcrowded composition,
busy background,
unnecessary extra characters,
text,
title,
watermark,
logo,
photorealistic skin pores,
hyper detailed face,
exaggerated anime expression,
beard,
mustache,
muscular bodybuilder physique,
extra fingers,
deformed hands,
blurry,
low quality,
oversaturated colors,
metal staff,
plastic wand,
magic school uniform
```

## Copy-Paste Template

```text
[Base Prompt]

[Camera Prompt]

[Frame Prompt]

[Card-specific prompt]

[Wands Suit Style]

[Negative Prompt]
```
