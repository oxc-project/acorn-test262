__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 8,
        "end": 10
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 23,
            "end": 26
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 36,
              "end": 42
            }
          ],
          "start": 18,
          "end": 42
        }
      ],
      "start": 0,
      "end": 44
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 59,
          "end": 61
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 74,
              "end": 77
            },
            "consequent": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ONE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "start": 87,
                "end": 97
              }
            ],
            "start": 69,
            "end": 97
          }
        ],
        "start": 51,
        "end": 99
      },
      "start": 46,
      "end": 99
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 104
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 111
        },
        "body": {
          "type": "SwitchStatement",
          "discriminant": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 121,
            "end": 123
          },
          "cases": [
            {
              "type": "SwitchCase",
              "test": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 136,
                "end": 139
              },
              "consequent": [
                {
                  "type": "BreakStatement",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "THREE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 160
                  },
                  "start": 149,
                  "end": 161
                }
              ],
              "start": 131,
              "end": 161
            }
          ],
          "start": 113,
          "end": 163
        },
        "start": 106,
        "end": 163
      },
      "start": 101,
      "end": 163
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 169
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 179,
          "end": 181
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 194,
              "end": 197
            },
            "consequent": [
              {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FIVE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 211
                },
                "body": {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 229,
                    "end": 231
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 252,
                        "end": 255
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FOUR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 283
                          },
                          "start": 273,
                          "end": 284
                        }
                      ],
                      "start": 247,
                      "end": 284
                    }
                  ],
                  "start": 221,
                  "end": 294
                },
                "start": 207,
                "end": 294
              }
            ],
            "start": 189,
            "end": 294
          }
        ],
        "start": 171,
        "end": 296
      },
      "start": 165,
      "end": 296
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 306,
        "end": 308
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 321,
            "end": 324
          },
          "consequent": [
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "SIX",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 337
              },
              "body": {
                "type": "SwitchStatement",
                "discriminant": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 355,
                  "end": 357
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 378,
                      "end": 381
                    },
                    "consequent": [
                      {
                        "type": "BreakStatement",
                        "label": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SIX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 408
                        },
                        "start": 399,
                        "end": 409
                      }
                    ],
                    "start": 373,
                    "end": 409
                  }
                ],
                "start": 347,
                "end": 419
              },
              "start": 334,
              "end": 419
            }
          ],
          "start": 316,
          "end": 419
        }
      ],
      "start": 298,
      "end": 421
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 428
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 438,
          "end": 440
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 453,
              "end": 456
            },
            "consequent": [
              {
                "type": "SwitchStatement",
                "discriminant": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 474,
                  "end": 476
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "test": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 497,
                      "end": 500
                    },
                    "consequent": [
                      {
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 526,
                          "end": 528
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'",
                              "start": 557,
                              "end": 560
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SEVEN",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 592,
                                  "end": 597
                                },
                                "start": 586,
                                "end": 598
                              },
                              {
                                "type": "LabeledStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "EIGHT",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 623,
                                  "end": 628
                                },
                                "body": {
                                  "type": "SwitchStatement",
                                  "discriminant": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "''",
                                    "start": 662,
                                    "end": 664
                                  },
                                  "cases": [
                                    {
                                      "type": "SwitchCase",
                                      "test": {
                                        "type": "Literal",
                                        "value": "a",
                                        "raw": "'a'",
                                        "start": 701,
                                        "end": 704
                                      },
                                      "consequent": [
                                        {
                                          "type": "VariableDeclaration",
                                          "kind": "var",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "id": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "fn",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 742,
                                                "end": 744
                                              },
                                              "init": {
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
                                                  "start": 759,
                                                  "end": 762
                                                },
                                                "expression": false,
                                                "start": 747,
                                                "end": 762
                                              },
                                              "definite": false,
                                              "start": 742,
                                              "end": 762
                                            }
                                          ],
                                          "declare": false,
                                          "start": 738,
                                          "end": 762
                                        },
                                        {
                                          "type": "BreakStatement",
                                          "label": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "EIGHT",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 801,
                                            "end": 806
                                          },
                                          "start": 795,
                                          "end": 807
                                        }
                                      ],
                                      "start": 696,
                                      "end": 807
                                    }
                                  ],
                                  "start": 654,
                                  "end": 833
                                },
                                "start": 623,
                                "end": 833
                              }
                            ],
                            "start": 552,
                            "end": 833
                          }
                        ],
                        "start": 518,
                        "end": 851
                      }
                    ],
                    "start": 492,
                    "end": 851
                  }
                ],
                "start": 466,
                "end": 861
              }
            ],
            "start": 448,
            "end": 861
          }
        ],
        "start": 430,
        "end": 863
      },
      "start": 423,
      "end": 863
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 863
}
```
