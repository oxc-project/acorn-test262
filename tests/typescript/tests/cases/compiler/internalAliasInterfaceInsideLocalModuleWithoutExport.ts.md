__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
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
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 85,
                "end": 88,
                "left": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
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
              "start": 94,
              "end": 110,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 101,
                "end": 110,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 105,
                    "end": 109,
                    "id": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 109,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
