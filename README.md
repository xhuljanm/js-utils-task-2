# js-utils-task-2

## Class instance && Array Prototypes
- Class Instance
	- Kontrollon nese nje vlere eshte instance i nje klasi duke perdorur funksionin `checkIfInstanceOf`
	- Kontrollon tipe te ndryshme si `Number`, `String`, `Boolean`, `Symbol`, `BigInt`.
- Array Prototypes
	- Krijon nje funksion te ri i cili mundeson zgjerimin e prototipit `.last()` te array ku kontrollohet nese array eshte bosh dhe kthen -1, ose kthen elemenitn e fundit.

## Matrix traversing
Eksplorimi i elementeve ne matrix. Perfshin:

- **Levizje ne drejtim te caktuar**: Kontrollimi i elementeve në drejtime të ndryshme (si lart-djathtas, djathtas, poshtë-djathtas).
- **Dynamic Programming**: Perdorimi i tabelave `dp` per te ruajtur rezultate te ndermjetme.
- **Gjetja e levizjeve maksimale**: Kerikimi i levizjeve maksimale duke ndjekur kushtet e caktuara.

## Timed cache
`TimeLimitedCache` eshte nje klase qe implementon nje cache me limit te kohes per ruajtjen e `keys` dhe vlerave. Ajo lejon te vendosni dhe merrni vlera qe skadojne pas nje kohe te caktuar.

- **Ruajtja e keys dhe vlerave**
- **Skadimi i keys**: Cdo `key` ka nje kohe skadimi te caktuar dhe kur skadon, ai nuk mund te merret me.
- **Kontrolli i vlefshmerise**: Aksesohet `key` vetem nese vlera eshte e vlefshme.
- **Numerimi i keys te vlefshem**: Mund te numeroni se sa celsa jane ende te vlefshem ne cache.

## Array merging
Ofron nje funksion per te bashkuar dy array te renditur, ku nje array ka hapesire te zbrazet per te pranuar elementet e array-t te dyte.

## Debounce
Ofron nje funksion `debounce` qe ndihmon ne kufizimin e thirrjeve brenda nje periudhe te caktuar kohe.
E dobishme per parandalimin e thirrjeve te shpeshta te panevojshme.