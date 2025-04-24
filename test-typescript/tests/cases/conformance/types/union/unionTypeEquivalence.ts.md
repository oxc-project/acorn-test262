__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 492,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 62,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 92,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 92,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 92,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "C",
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
      "start": 105,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 118,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 118,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 113,
                "end": 118,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 113,
                    "end": 114,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 117,
                    "end": 118,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 154,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 176,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 176,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 161,
                "end": 176,
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
                ]
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
      "start": 178,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 201,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 201,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 186,
                "end": 201,
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
                ]
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
      "start": 274,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 307,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 307,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 307,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 282,
                "end": 307,
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
                ]
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
      "start": 309,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 344,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 344,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 317,
                "end": 344,
                "types": [
                  {
                    "type": "TSUnionType",
                    "start": 318,
                    "end": 333,
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
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 337,
                    "end": 344
                  }
                ]
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
      "start": 346,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 381,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 381,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 354,
                "end": 381,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 354,
                    "end": 360
                  },
                  {
                    "type": "TSUnionType",
                    "start": 364,
                    "end": 380,
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
                    ]
                  }
                ]
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
      "start": 383,
      "end": 408,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 407,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 407,
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 407,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 392,
                "end": 407,
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
                ]
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
      "start": 409,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 434,
            "decorators": [],
            "name": "BC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 434,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 418,
                "end": 434,
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
                ]
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
      "start": 436,
      "end": 464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 463,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 463,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 463,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 444,
                "end": 463,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 444,
                    "end": 453,
                    "exprName": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 453,
                      "decorators": [],
                      "name": "AB",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 456,
                    "end": 463
                  }
                ]
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
      "start": 465,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 491,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 491,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 491,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 473,
                "end": 491,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 473,
                    "end": 479
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 482,
                    "end": 491,
                    "exprName": {
                      "type": "Identifier",
                      "start": 489,
                      "end": 491,
                      "decorators": [],
                      "name": "BC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
