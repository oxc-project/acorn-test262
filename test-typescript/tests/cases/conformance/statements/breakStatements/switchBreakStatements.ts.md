__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 864,
  "body": [
    {
      "type": "SwitchStatement",
      "start": 0,
      "end": 44,
      "discriminant": {
        "type": "Literal",
        "start": 8,
        "end": 10,
        "value": "",
        "raw": "''"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 18,
          "end": 42,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 36,
              "end": 42,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 23,
            "end": 26,
            "value": "a",
            "raw": "'a'"
          }
        }
      ]
    },
    {
      "type": "LabeledStatement",
      "start": 46,
      "end": 99,
      "body": {
        "type": "SwitchStatement",
        "start": 51,
        "end": 99,
        "discriminant": {
          "type": "Literal",
          "start": 59,
          "end": 61,
          "value": "",
          "raw": "''"
        },
        "cases": [
          {
            "type": "SwitchCase",
            "start": 69,
            "end": 97,
            "consequent": [
              {
                "type": "BreakStatement",
                "start": 87,
                "end": 97,
                "label": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "ONE",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "test": {
              "type": "Literal",
              "start": 74,
              "end": 77,
              "value": "a",
              "raw": "'a'"
            }
          }
        ]
      },
      "label": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "name": "ONE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 101,
      "end": 163,
      "body": {
        "type": "LabeledStatement",
        "start": 106,
        "end": 163,
        "body": {
          "type": "SwitchStatement",
          "start": 113,
          "end": 163,
          "discriminant": {
            "type": "Literal",
            "start": 121,
            "end": 123,
            "value": "",
            "raw": "''"
          },
          "cases": [
            {
              "type": "SwitchCase",
              "start": 131,
              "end": 161,
              "consequent": [
                {
                  "type": "BreakStatement",
                  "start": 149,
                  "end": 161,
                  "label": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 160,
                    "name": "THREE",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "test": {
                "type": "Literal",
                "start": 136,
                "end": 139,
                "value": "a",
                "raw": "'a'"
              }
            }
          ]
        },
        "label": {
          "type": "Identifier",
          "start": 106,
          "end": 111,
          "name": "THREE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "label": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 165,
      "end": 296,
      "body": {
        "type": "SwitchStatement",
        "start": 171,
        "end": 296,
        "discriminant": {
          "type": "Literal",
          "start": 179,
          "end": 181,
          "value": "",
          "raw": "''"
        },
        "cases": [
          {
            "type": "SwitchCase",
            "start": 189,
            "end": 294,
            "consequent": [
              {
                "type": "LabeledStatement",
                "start": 207,
                "end": 294,
                "body": {
                  "type": "SwitchStatement",
                  "start": 221,
                  "end": 294,
                  "discriminant": {
                    "type": "Literal",
                    "start": 229,
                    "end": 231,
                    "value": "",
                    "raw": "''"
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 247,
                      "end": 284,
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 273,
                          "end": 284,
                          "label": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 283,
                            "name": "FOUR",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 252,
                        "end": 255,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  ]
                },
                "label": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 211,
                  "name": "FIVE",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "test": {
              "type": "Literal",
              "start": 194,
              "end": 197,
              "value": "a",
              "raw": "'a'"
            }
          }
        ]
      },
      "label": {
        "type": "Identifier",
        "start": 165,
        "end": 169,
        "name": "FOUR",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "SwitchStatement",
      "start": 298,
      "end": 421,
      "discriminant": {
        "type": "Literal",
        "start": 306,
        "end": 308,
        "value": "",
        "raw": "''"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 316,
          "end": 419,
          "consequent": [
            {
              "type": "LabeledStatement",
              "start": 334,
              "end": 419,
              "body": {
                "type": "SwitchStatement",
                "start": 347,
                "end": 419,
                "discriminant": {
                  "type": "Literal",
                  "start": 355,
                  "end": 357,
                  "value": "",
                  "raw": "''"
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "start": 373,
                    "end": 409,
                    "consequent": [
                      {
                        "type": "BreakStatement",
                        "start": 399,
                        "end": 409,
                        "label": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 408,
                          "name": "SIX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "test": {
                      "type": "Literal",
                      "start": 378,
                      "end": 381,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                ]
              },
              "label": {
                "type": "Identifier",
                "start": 334,
                "end": 337,
                "name": "SIX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "test": {
            "type": "Literal",
            "start": 321,
            "end": 324,
            "value": "a",
            "raw": "'a'"
          }
        }
      ]
    },
    {
      "type": "LabeledStatement",
      "start": 423,
      "end": 863,
      "body": {
        "type": "SwitchStatement",
        "start": 430,
        "end": 863,
        "discriminant": {
          "type": "Literal",
          "start": 438,
          "end": 440,
          "value": "",
          "raw": "''"
        },
        "cases": [
          {
            "type": "SwitchCase",
            "start": 448,
            "end": 861,
            "consequent": [
              {
                "type": "SwitchStatement",
                "start": 466,
                "end": 861,
                "discriminant": {
                  "type": "Literal",
                  "start": 474,
                  "end": 476,
                  "value": "",
                  "raw": "''"
                },
                "cases": [
                  {
                    "type": "SwitchCase",
                    "start": 492,
                    "end": 851,
                    "consequent": [
                      {
                        "type": "SwitchStatement",
                        "start": 518,
                        "end": 851,
                        "discriminant": {
                          "type": "Literal",
                          "start": 526,
                          "end": 528,
                          "value": "",
                          "raw": "''"
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 552,
                            "end": 833,
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "start": 586,
                                "end": 598,
                                "label": {
                                  "type": "Identifier",
                                  "start": 592,
                                  "end": 597,
                                  "name": "SEVEN",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              {
                                "type": "LabeledStatement",
                                "start": 623,
                                "end": 833,
                                "body": {
                                  "type": "SwitchStatement",
                                  "start": 654,
                                  "end": 833,
                                  "discriminant": {
                                    "type": "Literal",
                                    "start": 662,
                                    "end": 664,
                                    "value": "",
                                    "raw": "''"
                                  },
                                  "cases": [
                                    {
                                      "type": "SwitchCase",
                                      "start": 696,
                                      "end": 807,
                                      "consequent": [
                                        {
                                          "type": "VariableDeclaration",
                                          "start": 738,
                                          "end": 762,
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "start": 742,
                                              "end": 762,
                                              "id": {
                                                "type": "Identifier",
                                                "start": 742,
                                                "end": 744,
                                                "name": "fn",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "init": {
                                                "type": "FunctionExpression",
                                                "start": 747,
                                                "end": 762,
                                                "id": null,
                                                "expression": false,
                                                "generator": false,
                                                "async": false,
                                                "params": [],
                                                "body": {
                                                  "type": "BlockStatement",
                                                  "start": 759,
                                                  "end": 762,
                                                  "body": []
                                                },
                                                "declare": false,
                                                "typeParameters": null,
                                                "returnType": null
                                              },
                                              "definite": false
                                            }
                                          ],
                                          "kind": "var",
                                          "declare": false
                                        },
                                        {
                                          "type": "BreakStatement",
                                          "start": 795,
                                          "end": 807,
                                          "label": {
                                            "type": "Identifier",
                                            "start": 801,
                                            "end": 806,
                                            "name": "EIGHT",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      ],
                                      "test": {
                                        "type": "Literal",
                                        "start": 701,
                                        "end": 704,
                                        "value": "a",
                                        "raw": "'a'"
                                      }
                                    }
                                  ]
                                },
                                "label": {
                                  "type": "Identifier",
                                  "start": 623,
                                  "end": 628,
                                  "name": "EIGHT",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 557,
                              "end": 560,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        ]
                      }
                    ],
                    "test": {
                      "type": "Literal",
                      "start": 497,
                      "end": 500,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                ]
              }
            ],
            "test": {
              "type": "Literal",
              "start": 453,
              "end": 456,
              "value": "a",
              "raw": "'a'"
            }
          }
        ]
      },
      "label": {
        "type": "Identifier",
        "start": 423,
        "end": 428,
        "name": "SEVEN",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
