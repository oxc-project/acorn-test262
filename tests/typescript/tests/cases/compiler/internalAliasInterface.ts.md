__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 43,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 41,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 41,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 41,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
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
              "optional": false,
              "typeAnnotation": null
            },
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 80,
            "end": 96,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 87,
              "end": 96,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 91,
                  "end": 95,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
