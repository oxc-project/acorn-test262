reservedNameOnModuleImportWithInterface.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 212,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 212,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 49,
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 49,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 45,
              "decorators": [],
              "name": "mi_string",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 54,
            "end": 74,
            "body": {
              "type": "TSModuleBlock",
              "start": 71,
              "end": 74,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 70,
              "decorators": [],
              "name": "mi_string",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 184,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 197,
              "decorators": [],
              "name": "string",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 200,
              "end": 209,
              "decorators": [],
              "name": "mi_string",
              "optional": false
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
