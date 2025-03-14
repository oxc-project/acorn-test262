circularModuleImports.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 56,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 19,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 39,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
