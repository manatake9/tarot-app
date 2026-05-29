# Pentacles Card Generation Rules

Use these prompts to create the Pentacles minor arcana cards in the same visual language as the existing major arcana images in `public/cards/major-arcana`.

## Output

- Size: `1024 x 1792`
- Aspect ratio: `4:7`
- Format: `PNG`
- Save folder: `public/cards/pentacles`
- Filename style: `ACE of PENTACLES.png`, `TWO of PENTACLES.png`, ... `KING of PENTACLES.png`
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

### Pentacles Suit Style

```text
The Pentacles suit should feel earthy, grounded, practical, tactile, and quietly prosperous.
Use moss green, antique gold, deep umber, muted olive, warm stone, wheat, and soft ivory as recurring accents.
Pentacles should appear as engraved golden coins, carved disks, medallions, or coin-like fruits, not modern money.
Natural materials should appear often: soil, stone, wood, vines, roots, wheat, gardens, workshops, markets, and old architecture.
Figures should feel steady, patient, embodied, and materially aware rather than flashy or theatrical.
Prefer scenes of craft, labor, harvest, stewardship, generosity, security, and slow growth.
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
plastic coin,
futuristic money,
casino chips
```

## Copy-Paste Template

```text
[Base Prompt]

[Camera Prompt]

[Frame Prompt]

[Card-specific prompt]

[Pentacles Suit Style]

[Negative Prompt]
```
