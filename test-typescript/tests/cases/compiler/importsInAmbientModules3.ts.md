external.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 25,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 58,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 25,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 36,
              "end": 55,
              "expression": {
                "type": "Literal",
                "start": 44,
                "end": 54,
                "raw": "\"external\"",
                "value": "external"
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"M\"",
        "value": "M"
      }
    }
  ],
  "sourceType": "module"
}
```
