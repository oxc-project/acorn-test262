__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 59,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 62
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 70
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 89,
                "end": 92
              },
              "expression": false,
              "start": 86,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 83,
            "end": 92
          }
        ],
        "start": 81,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 63,
      "end": 94
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "typeArguments": null,
                "start": 102,
                "end": 103
              },
              "start": 100,
              "end": 103
            },
            "start": 99,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 99,
          "end": 103
        }
      ],
      "declare": false,
      "start": 95,
      "end": 104
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "typeArguments": null,
                    "start": 113,
                    "end": 114
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 118
                    },
                    "typeArguments": null,
                    "start": 117,
                    "end": 118
                  }
                ],
                "start": 113,
                "end": 118
              },
              "start": 111,
              "end": 118
            },
            "start": 109,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 118
        }
      ],
      "declare": false,
      "start": 105,
      "end": 119
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 170,
                    "end": 176
                  }
                ],
                "start": 161,
                "end": 176
              },
              "start": 159,
              "end": 176
            },
            "start": 158,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 176
        }
      ],
      "declare": false,
      "start": 154,
      "end": 177
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 195,
                    "end": 201
                  }
                ],
                "start": 186,
                "end": 201
              },
              "start": 184,
              "end": 201
            },
            "start": 182,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 201
        }
      ],
      "declare": false,
      "start": 178,
      "end": 202
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 282,
                    "end": 288
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 291,
                    "end": 297
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 300,
                    "end": 307
                  }
                ],
                "start": 282,
                "end": 307
              },
              "start": 280,
              "end": 307
            },
            "start": 278,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 278,
          "end": 307
        }
      ],
      "declare": false,
      "start": 274,
      "end": 308
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 318,
                        "end": 324
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 327,
                        "end": 333
                      }
                    ],
                    "start": 318,
                    "end": 333
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 337,
                    "end": 344
                  }
                ],
                "start": 317,
                "end": 344
              },
              "start": 315,
              "end": 344
            },
            "start": 313,
            "end": 344
          },
          "init": null,
          "definite": false,
          "start": 313,
          "end": 344
        }
      ],
      "declare": false,
      "start": 309,
      "end": 345
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 354,
                    "end": 360
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 364,
                        "end": 370
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 373,
                        "end": 380
                      }
                    ],
                    "start": 364,
                    "end": 380
                  }
                ],
                "start": 354,
                "end": 381
              },
              "start": 352,
              "end": 381
            },
            "start": 350,
            "end": 381
          },
          "init": null,
          "definite": false,
          "start": 350,
          "end": 381
        }
      ],
      "declare": false,
      "start": 346,
      "end": 382
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
            "name": "AB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 392,
                    "end": 398
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 401,
                    "end": 407
                  }
                ],
                "start": 392,
                "end": 407
              },
              "start": 390,
              "end": 407
            },
            "start": 387,
            "end": 407
          },
          "init": null,
          "definite": false,
          "start": 387,
          "end": 407
        }
      ],
      "declare": false,
      "start": 383,
      "end": 408
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
            "name": "BC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 418,
                    "end": 424
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 427,
                    "end": 434
                  }
                ],
                "start": 418,
                "end": 434
              },
              "start": 416,
              "end": 434
            },
            "start": 413,
            "end": 434
          },
          "init": null,
          "definite": false,
          "start": 413,
          "end": 434
        }
      ],
      "declare": false,
      "start": 409,
      "end": 435
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 453
                    },
                    "typeArguments": null,
                    "start": 444,
                    "end": 453
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 456,
                    "end": 463
                  }
                ],
                "start": 444,
                "end": 463
              },
              "start": 442,
              "end": 463
            },
            "start": 440,
            "end": 463
          },
          "init": null,
          "definite": false,
          "start": 440,
          "end": 463
        }
      ],
      "declare": false,
      "start": 436,
      "end": 464
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 473,
                    "end": 479
                  },
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 489,
                      "end": 491
                    },
                    "typeArguments": null,
                    "start": 482,
                    "end": 491
                  }
                ],
                "start": 473,
                "end": 491
              },
              "start": 471,
              "end": 491
            },
            "start": 469,
            "end": 491
          },
          "init": null,
          "definite": false,
          "start": 469,
          "end": 491
        }
      ],
      "declare": false,
      "start": 465,
      "end": 492
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 51,
  "end": 492
}
```
