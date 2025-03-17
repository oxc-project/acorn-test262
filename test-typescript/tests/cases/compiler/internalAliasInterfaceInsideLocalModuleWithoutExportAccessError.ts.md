__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 50,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 48,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 29,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 41,
                  "end": 48,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 112,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 59,
        "end": 112,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 68,
          "end": 112,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 74,
              "end": 89,
              "id": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 85,
                "end": 88,
                "left": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 94,
              "end": 110,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 101,
                "end": 110,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 105,
                    "end": 109,
                    "id": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 109,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 106,
                        "end": 109,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 108,
                          "end": 109,
                          "typeName": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 109,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 124,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 124,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 121,
                  "end": 124,
                  "left": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
