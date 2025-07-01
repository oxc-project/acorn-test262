__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "typeAlias1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "varOfAliasedType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 42
        },
        "typeArguments": null,
        "start": 18,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "varOfAliasedType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeAlias1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 77
                },
                "typeArguments": null,
                "start": 67,
                "end": 77
              },
              "start": 65,
              "end": 77
            },
            "start": 48,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 77
        }
      ],
      "declare": false,
      "start": 44,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "varOfAliasedType2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "typeAlias2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 113
                },
                "typeArguments": null,
                "start": 103,
                "end": 113
              },
              "start": 101,
              "end": 113
            },
            "start": 84,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 113
        }
      ],
      "declare": false,
      "start": 80,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "typeAlias2",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 130
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "varOfAliasedType2",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 157
        },
        "typeArguments": null,
        "start": 133,
        "end": 157
      },
      "declare": false,
      "start": 115,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeAlias3",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 187
          },
          "typeArguments": null,
          "start": 177,
          "end": 187
        },
        "start": 175,
        "end": 187
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 197,
              "end": 201
            },
            "start": 190,
            "end": 202
          }
        ],
        "start": 188,
        "end": 204
      },
      "expression": false,
      "start": 160,
      "end": 204
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "varOfAliasedType3",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 233
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 229,
            "end": 235
          },
          "definite": false,
          "start": 209,
          "end": 235
        }
      ],
      "declare": false,
      "start": 205,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "typeAlias3",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 252
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "varOfAliasedType3",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 279
        },
        "typeArguments": null,
        "start": 255,
        "end": 279
      },
      "declare": false,
      "start": 237,
      "end": 280
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 319
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 327,
                "end": 333
              },
              "start": 325,
              "end": 333
            },
            "accessibility": null,
            "static": false,
            "start": 324,
            "end": 334
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 340,
                "end": 346
              },
              "start": 338,
              "end": 346
            },
            "accessibility": null,
            "static": false,
            "start": 337,
            "end": 347
          }
        ],
        "start": 320,
        "end": 349
      },
      "declare": false,
      "start": 304,
      "end": 349
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 357
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 370
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "mul",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 381
              },
              "typeArguments": null,
              "start": 371,
              "end": 381
            }
          ],
          "start": 370,
          "end": 382
        },
        "start": 360,
        "end": 382
      },
      "declare": false,
      "start": 351,
      "end": 383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mul",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 396
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Input",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 409
              },
              "typeArguments": null,
              "start": 404,
              "end": 409
            },
            "start": 402,
            "end": 409
          },
          "start": 397,
          "end": 409
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 413
          },
          "typeArguments": null,
          "start": 412,
          "end": 413
        },
        "start": 410,
        "end": 413
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 430
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "optional": false,
                "computed": false,
                "start": 425,
                "end": 432
              },
              "operator": "*",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 440
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 442
                },
                "optional": false,
                "computed": false,
                "start": 435,
                "end": 442
              },
              "start": 425,
              "end": 442
            },
            "start": 418,
            "end": 443
          }
        ],
        "start": 414,
        "end": 445
      },
      "expression": false,
      "start": 384,
      "end": 445
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 489
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "start": 490,
              "end": 498
            }
          ],
          "start": 489,
          "end": 499
        },
        "start": 479,
        "end": 499
      },
      "declare": false,
      "start": 469,
      "end": 500
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 511
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R2",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 517
          },
          "typeArguments": null,
          "start": 515,
          "end": 517
        },
        "start": 513,
        "end": 517
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 527,
              "end": 528
            },
            "start": 520,
            "end": 529
          }
        ],
        "start": 518,
        "end": 531
      },
      "expression": false,
      "start": 501,
      "end": 531
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 531
}
```
