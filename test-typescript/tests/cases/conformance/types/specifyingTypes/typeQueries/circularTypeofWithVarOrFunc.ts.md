__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 531,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 43,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "typeAlias1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 18,
        "end": 42,
        "exprName": {
          "type": "Identifier",
          "start": 25,
          "end": 42,
          "decorators": [],
          "name": "varOfAliasedType1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 77,
            "decorators": [],
            "name": "varOfAliasedType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 77,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 77,
                  "decorators": [],
                  "name": "typeAlias1",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 113,
            "decorators": [],
            "name": "varOfAliasedType2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 113,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 113,
                  "decorators": [],
                  "name": "typeAlias2",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 158,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "decorators": [],
        "name": "typeAlias2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 133,
        "end": 157,
        "exprName": {
          "type": "Identifier",
          "start": 140,
          "end": 157,
          "decorators": [],
          "name": "varOfAliasedType2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 204,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 204,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 190,
            "end": 202,
            "argument": {
              "type": "Literal",
              "start": 197,
              "end": 201,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 173,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 187,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 187,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 187,
            "decorators": [],
            "name": "typeAlias3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 226,
            "decorators": [],
            "name": "varOfAliasedType3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 229,
            "end": 235,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 233,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 280,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 252,
        "decorators": [],
        "name": "typeAlias3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 255,
        "end": 279,
        "exprName": {
          "type": "Identifier",
          "start": 262,
          "end": 279,
          "decorators": [],
          "name": "varOfAliasedType3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 304,
      "end": 349,
      "body": {
        "type": "TSInterfaceBody",
        "start": 320,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 324,
            "end": 334,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 333,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 327,
                "end": 333
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 337,
            "end": 347,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 346,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 340,
                "end": 346
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 319,
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 351,
      "end": 383,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 357,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 360,
        "end": 382,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 370,
          "end": 382,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 371,
              "end": 381,
              "exprName": {
                "type": "Identifier",
                "start": 378,
                "end": 381,
                "decorators": [],
                "name": "mul",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 360,
          "end": 370,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 384,
      "end": 445,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 414,
        "end": 445,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 418,
            "end": 443,
            "argument": {
              "type": "BinaryExpression",
              "start": 425,
              "end": 442,
              "operator": "*",
              "left": {
                "type": "MemberExpression",
                "start": 425,
                "end": 432,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 430,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 435,
                "end": 442,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 440,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 396,
        "decorators": [],
        "name": "mul",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 397,
          "end": 409,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 409,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 409,
                "decorators": [],
                "name": "Input",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 410,
        "end": 413,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 412,
          "end": 413,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 469,
      "end": 500,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 479,
        "end": 499,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 489,
          "end": 499,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 490,
              "end": 498,
              "exprName": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 479,
          "end": 489,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 501,
      "end": 531,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 518,
        "end": 531,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 520,
            "end": 529,
            "argument": {
              "type": "Literal",
              "start": 527,
              "end": 528,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 511,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 513,
        "end": 517,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 515,
          "end": 517,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 515,
            "end": 517,
            "decorators": [],
            "name": "R2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
