foo.ts
```json
Do not know how to serialize a BigInt
```
correctUse.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 35,
        "raw": "\"./foo\"",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Literal",
            "start": 9,
            "end": 13,
            "raw": "\"0n\"",
            "value": "0n"
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 20,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 60,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 46,
          "end": 57,
          "exported": {
            "type": "Literal",
            "start": 53,
            "end": 57,
            "raw": "\"0n\"",
            "value": "0n"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
badImport.ts
```json
Identifier expected.
```
badImport2.ts
```json
Identifier expected.
```
badExport.ts
```json
Identifier expected.
```
badExport2.ts
```json
Identifier expected.
```
