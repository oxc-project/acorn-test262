reservedNameOnInterfaceImport.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 180,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 180,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 47,
            "body": {
              "type": "TSInterfaceBody",
              "start": 44,
              "end": 47,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "istring",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 149,
            "end": 178,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 162,
              "decorators": [],
              "name": "string",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 165,
              "end": 177,
              "left": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "decorators": [],
                "name": "test",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "decorators": [],
                "name": "istring",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
