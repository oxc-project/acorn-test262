/node_modules/A/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 24,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"ext\"",
        "value": "ext"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 35,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/src/app.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "raw": "\"A\"",
        "value": "A"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
