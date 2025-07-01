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
        "name": "Match",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "range",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                },
                "start": 40,
                "end": 45
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 76
                    },
                    "start": 60,
                    "end": 77
                  }
                ],
                "start": 46,
                "end": 87
              },
              "expression": false,
              "start": 38,
              "end": 87
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 26,
            "end": 87
          }
        ],
        "start": 16,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 4,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FileMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 114
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "resource",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 144,
                  "end": 147
                },
                "start": 142,
                "end": 147
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 178
                    },
                    "start": 162,
                    "end": 179
                  }
                ],
                "start": 148,
                "end": 189
              },
              "expression": false,
              "start": 140,
              "end": 189
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 125,
            "end": 189
          }
        ],
        "start": 115,
        "end": 195
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 195
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FileMatchOrMatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 218
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FileMatch",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 230
            },
            "typeArguments": null,
            "start": 221,
            "end": 230
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 238
            },
            "typeArguments": null,
            "start": 233,
            "end": 238
          }
        ],
        "start": 221,
        "end": 238
      },
      "declare": false,
      "start": 197,
      "end": 239
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elementA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FileMatchOrMatch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 272
                },
                "typeArguments": null,
                "start": 256,
                "end": 272
              },
              "start": 254,
              "end": 272
            },
            "start": 246,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 246,
          "end": 272
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elementB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FileMatchOrMatch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 300
                },
                "typeArguments": null,
                "start": 284,
                "end": 300
              },
              "start": 282,
              "end": 300
            },
            "start": 274,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 300
        }
      ],
      "declare": false,
      "start": 242,
      "end": 301
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "elementA",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 315
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "FileMatch",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 336
          },
          "start": 307,
          "end": 336
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "elementB",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 348
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "FileMatch",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 369
          },
          "start": 340,
          "end": 369
        },
        "start": 307,
        "end": 369
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 382
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elementA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 385,
                        "end": 393
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resource",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 402
                      },
                      "optional": false,
                      "computed": false,
                      "start": 385,
                      "end": 402
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 385,
                    "end": 404
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 409
                  },
                  "optional": false,
                  "computed": false,
                  "start": 385,
                  "end": 409
                },
                "definite": false,
                "start": 381,
                "end": 409
              }
            ],
            "declare": false,
            "start": 377,
            "end": 410
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 420
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elementB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resource",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 440
                      },
                      "optional": false,
                      "computed": false,
                      "start": 423,
                      "end": 440
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 423,
                    "end": 442
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 447
                  },
                  "optional": false,
                  "computed": false,
                  "start": 423,
                  "end": 447
                },
                "definite": false,
                "start": 419,
                "end": 447
              }
            ],
            "declare": false,
            "start": 415,
            "end": 448
          }
        ],
        "start": 371,
        "end": 450
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "elementA",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 468
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 485
            },
            "start": 460,
            "end": 485
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "elementB",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 497
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 514
            },
            "start": 489,
            "end": 514
          },
          "start": 460,
          "end": 514
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elementA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 538
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "range",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 544
                      },
                      "optional": false,
                      "computed": false,
                      "start": 530,
                      "end": 544
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 530,
                    "end": 546
                  },
                  "definite": false,
                  "start": 526,
                  "end": 546
                }
              ],
              "declare": false,
              "start": 522,
              "end": 547
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 557
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elementB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 568
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "range",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 574
                      },
                      "optional": false,
                      "computed": false,
                      "start": 560,
                      "end": 574
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 560,
                    "end": 576
                  },
                  "definite": false,
                  "start": 556,
                  "end": 576
                }
              ],
              "declare": false,
              "start": 552,
              "end": 577
            }
          ],
          "start": 516,
          "end": 579
        },
        "alternate": null,
        "start": 456,
        "end": 579
      },
      "start": 303,
      "end": 579
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 579
}
```
