varNameConflictsWithImportInDifferentPartOfModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 33,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 32,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "q",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "raw": "5",
                    "value": 5
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 56,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 45,
              "end": 56,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 55,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 53,
                    "end": 55,
                    "raw": "''",
                    "value": ""
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 132,
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 132,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 75,
            "end": 98,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 82,
              "end": 98,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "q",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 93,
                "end": 97,
                "left": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 95,
                  "decorators": [],
                  "name": "M1",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
