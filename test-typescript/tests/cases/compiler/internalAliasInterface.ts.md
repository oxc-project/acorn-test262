internalAliasInterface.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 43,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 43,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 41,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 41,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 41,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
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
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 98,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 60,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 71,
              "end": 74,
              "left": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 80,
            "end": 96,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 87,
              "end": 96,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 91,
                  "end": 95,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 95,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 94,
                        "end": 95,
                        "typeName": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 95,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
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
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
