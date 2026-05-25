# Swords Card Generation Rules

Use these prompts to create the Swords minor arcana cards in the same visual language as the existing major arcana images in `public/cards/major-arcana`.

## Output

- Size: `1024 x 1792`
- Aspect ratio: `4:7`
- Format: `PNG`
- Save folder: `public/cards/swords`
- Filename style: `ACE of SWORDS.png`, `TWO of SWORDS.png`, ... `KING of SWORDS.png`
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

### Swords Suit Style

```text
The Swords suit should feel airy, intellectual, tense, truthful, and clear.
Use pale silver, cold blue, moonlit gray, storm violet, white gold, muted black, and faint icy cyan as recurring accents.
Swords should look like elegant steel blades with simple medieval hilts, never futuristic weapons or oversized fantasy weapons.
Air should appear as wind, clouds, mist, sharp moonlight, mountain heights, birds in the distance, or clean negative space.
Conflict should feel psychological, strategic, ethical, or internal rather than bloody or brutal.
Prefer high cliffs, open skies, cold dawns, quiet chambers, stone terraces, veils, blindfolds, ravens or small dark birds, and distant mountains.
Figures should feel restrained, thoughtful, guarded, or decisive rather than theatrical.
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
futuristic sword,
laser sword,
gun,
blood,
gore,
graphic injury,
huge fantasy weapon,
plastic weapon
```

## Copy-Paste Template

```text
[Base Prompt]

[Camera Prompt]

[Frame Prompt]

[Card-specific prompt]

[Swords Suit Style]

[Negative Prompt]
```
