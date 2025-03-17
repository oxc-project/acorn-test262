__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 101,
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
        "end": 101,
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
            "end": 99,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 81,
              "end": 99,
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 92,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 93,
                    "end": 94,
                    "name": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 96,
                "end": 99,
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
      "start": 102,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 114,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 114,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 109,
                  "end": 114,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 109,
                    "end": 112,
                    "left": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
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
            "start": 117,
            "end": 121,
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
      "start": 123,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 142,
            "name": "z2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 142,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 131,
                  "end": 134,
                  "left": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "Y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 134,
                  "end": 142,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 135,
                      "end": 141
                    }
                  ]
                }
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
