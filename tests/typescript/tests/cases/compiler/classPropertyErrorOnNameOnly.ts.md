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
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 14,
              "end": 15
            },
            "start": 14,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 18,
              "end": 19
            },
            "start": 18,
            "end": 19
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 22,
              "end": 23
            },
            "start": 22,
            "end": 23
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 26,
              "end": 27
            },
            "start": 26,
            "end": 27
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 30,
              "end": 31
            },
            "start": 30,
            "end": 31
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 34,
              "end": 35
            },
            "start": 34,
            "end": 35
          }
        ],
        "start": 14,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FuncType",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 65
                },
                "typeArguments": null,
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "start": 54,
            "end": 65
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 70,
            "end": 76
          },
          "start": 67,
          "end": 76
        },
        "start": 53,
        "end": 76
      },
      "declare": false,
      "start": 37,
      "end": 76
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 119
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insideClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 145
                },
                "typeArguments": null,
                "start": 137,
                "end": 145
              },
              "start": 135,
              "end": 145
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 160
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 208
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 223,
                          "end": 224
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "1",
                              "raw": "\"1\"",
                              "start": 241,
                              "end": 244
                            },
                            "start": 234,
                            "end": 245
                          }
                        ],
                        "start": 218,
                        "end": 245
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 257,
                          "end": 258
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 275,
                              "end": 278
                            },
                            "start": 268,
                            "end": 279
                          }
                        ],
                        "start": 252,
                        "end": 279
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 291,
                          "end": 292
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 309,
                              "end": 312
                            },
                            "start": 302,
                            "end": 312
                          }
                        ],
                        "start": 286,
                        "end": 312
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 324,
                          "end": 325
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "4",
                              "raw": "\"4\"",
                              "start": 342,
                              "end": 345
                            },
                            "start": 335,
                            "end": 345
                          }
                        ],
                        "start": 319,
                        "end": 345
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 357,
                          "end": 358
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "5",
                              "raw": "\"5\"",
                              "start": 375,
                              "end": 378
                            },
                            "start": 368,
                            "end": 378
                          }
                        ],
                        "start": 352,
                        "end": 378
                      }
                    ],
                    "start": 197,
                    "end": 407
                  }
                ],
                "start": 162,
                "end": 411
              },
              "expression": false,
              "start": 148,
              "end": 411
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 124,
            "end": 411
          }
        ],
        "start": 120,
        "end": 436
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 436
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "outsideClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 466
                },
                "typeArguments": null,
                "start": 458,
                "end": 466
              },
              "start": 456,
              "end": 466
            },
            "start": 444,
            "end": 466
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 481
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 553
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 568,
                        "end": 569
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "1",
                            "raw": "\"1\"",
                            "start": 586,
                            "end": 589
                          },
                          "start": 579,
                          "end": 590
                        }
                      ],
                      "start": 563,
                      "end": 590
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 602,
                        "end": 603
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "2",
                            "raw": "\"2\"",
                            "start": 620,
                            "end": 623
                          },
                          "start": 613,
                          "end": 624
                        }
                      ],
                      "start": 597,
                      "end": 624
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 636,
                        "end": 637
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "3",
                            "raw": "\"3\"",
                            "start": 654,
                            "end": 657
                          },
                          "start": 647,
                          "end": 657
                        }
                      ],
                      "start": 631,
                      "end": 657
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 669,
                        "end": 670
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "4",
                            "raw": "\"4\"",
                            "start": 687,
                            "end": 690
                          },
                          "start": 680,
                          "end": 690
                        }
                      ],
                      "start": 664,
                      "end": 690
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 702,
                        "end": 703
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "5",
                            "raw": "\"5\"",
                            "start": 720,
                            "end": 723
                          },
                          "start": 713,
                          "end": 723
                        }
                      ],
                      "start": 697,
                      "end": 723
                    }
                  ],
                  "start": 542,
                  "end": 752
                }
              ],
              "start": 483,
              "end": 754
            },
            "expression": false,
            "start": 469,
            "end": 754
          },
          "definite": false,
          "start": 444,
          "end": 754
        }
      ],
      "declare": false,
      "start": 438,
      "end": 754
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 754
}
```
