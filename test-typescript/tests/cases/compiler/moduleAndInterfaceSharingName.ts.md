__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 69,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 69,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 69,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 63,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 48,
                      "end": 63,
                      "id": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 60,
                        "end": 63,
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
            "start": 74,
            "end": 96,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 81,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 93,
                "end": 96,
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
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 111,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 111,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 106,
                  "end": 111,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 106,
                    "end": 109,
                    "left": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "name": "Z",
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
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 118,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 131,
            "name": "z2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 131,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 128,
                  "end": 131,
                  "left": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "name": "Y",
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
