__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 14
      },
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 20,
        "end": 25
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
