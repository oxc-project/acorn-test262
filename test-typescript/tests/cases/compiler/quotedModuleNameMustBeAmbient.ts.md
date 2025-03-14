quotedModuleNameMustBeAmbient.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 13,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 13,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "raw": "'M'",
        "value": "M"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 15,
      "end": 37,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 37,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 30,
        "end": 34,
        "raw": "'M2'",
        "value": "M2"
      }
    }
  ],
  "sourceType": "script"
}
```
