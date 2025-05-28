__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 406,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 64,
            "end": 81,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 71,
              "end": 81,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 75,
                  "end": 80,
                  "id": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 95,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 94,
            "decorators": [],
            "name": "p",
            "optional": false,
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
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 143,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "decorators": [],
            "name": "m",
            "optional": false,
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
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 237,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 232,
            "decorators": [],
            "name": "m2",
            "optional": false,
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
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 295,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 291,
            "end": 294,
            "object": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 348,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 344,
            "end": 347,
            "object": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 385,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 384,
            "decorators": [],
            "name": "q",
            "optional": false,
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
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
