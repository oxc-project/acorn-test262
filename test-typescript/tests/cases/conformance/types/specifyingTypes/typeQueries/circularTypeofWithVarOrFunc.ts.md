__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 532,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "typeAlias1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 18,
        "end": 42,
        "exprName": {
          "type": "Identifier",
          "start": 25,
          "end": 42,
          "name": "varOfAliasedType1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 77,
            "name": "varOfAliasedType1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 77,
                  "name": "typeAlias1",
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
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 113,
            "name": "varOfAliasedType2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 113,
                  "name": "typeAlias2",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 130,
        "name": "typeAlias2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 133,
        "end": 157,
        "exprName": {
          "type": "Identifier",
          "start": 140,
          "end": 157,
          "name": "varOfAliasedType2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 173,
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 187,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 187,
          "typeName": {
            "type": "Identifier",
            "start": 177,
            "end": 187,
            "name": "typeAlias3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 226,
            "name": "varOfAliasedType3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 229,
            "end": 235,
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 233,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 252,
        "name": "typeAlias3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 255,
        "end": 279,
        "exprName": {
          "type": "Identifier",
          "start": 262,
          "end": 279,
          "name": "varOfAliasedType3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 304,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 319,
        "name": "Input",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 320,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 324,
            "end": 334,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 333,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 327,
                "end": 333
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 337,
            "end": 347,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 346,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 340,
                "end": 346
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 351,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 357,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 360,
        "end": 382,
        "typeName": {
          "type": "Identifier",
          "start": 360,
          "end": 370,
          "name": "ReturnType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "mul",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 384,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 396,
        "name": "mul",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 397,
          "end": 409,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 409,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 409,
                "name": "Input",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "MemberExpression",
                "start": 425,
                "end": 432,
                "object": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 430,
                  "name": "input",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "start": 435,
                "end": 442,
                "object": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 440,
                  "name": "input",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 410,
        "end": 413,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 412,
          "end": 413,
          "typeName": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 469,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "name": "R2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 479,
        "end": 499,
        "typeName": {
          "type": "Identifier",
          "start": 479,
          "end": 489,
          "name": "ReturnType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 501,
      "end": 531,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 511,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 513,
        "end": 517,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 515,
          "end": 517,
          "typeName": {
            "type": "Identifier",
            "start": 515,
            "end": 517,
            "name": "R2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
