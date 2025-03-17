__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 407,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 83,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 59,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 59,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 59,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 36,
                    "end": 46,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 47,
                    "end": 57,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 64,
            "end": 81,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 71,
              "end": 81,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 75,
                  "end": 80,
                  "id": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 79,
                    "end": 80,
                    "value": 1,
                    "raw": "1"
                  },
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
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 94,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 94,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 91,
                  "end": 94,
                  "left": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "P",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "name": "M",
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
          "init": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 232,
            "name": "m2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 224,
                "end": 232,
                "exprName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "name": "M",
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
          "init": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 291,
            "end": 294,
            "object": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 344,
            "end": 347,
            "object": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 384,
            "name": "q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 384,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 381,
                "end": 384,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 381,
                  "end": 384,
                  "left": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "name": "P",
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
