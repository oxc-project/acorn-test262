__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 863,
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
          "test": {
            "type": "Literal",
            "start": 23,
            "end": 26,
            "value": "a",
            "raw": "'a'"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 36,
              "end": 42,
              "label": null
            }
          ]
        }
      ]
    },
    {
      "type": "LabeledStatement",
      "start": 46,
      "end": 99,
      "label": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
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
            "test": {
              "type": "Literal",
              "start": 74,
              "end": 77,
              "value": "a",
              "raw": "'a'"
            },
            "consequent": [
              {
                "type": "BreakStatement",
                "start": 87,
                "end": 97,
                "label": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "ONE",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 101,
      "end": 163,
      "label": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "LabeledStatement",
        "start": 106,
        "end": 163,
        "label": {
          "type": "Identifier",
          "start": 106,
          "end": 111,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        },
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
              "test": {
                "type": "Literal",
                "start": 136,
                "end": 139,
                "value": "a",
                "raw": "'a'"
              },
              "consequent": [
                {
                  "type": "BreakStatement",
                  "start": 149,
                  "end": 161,
                  "label": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 160,
                    "decorators": [],
                    "name": "THREE",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 165,
      "end": 296,
      "label": {
        "type": "Identifier",
        "start": 165,
        "end": 169,
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null
      },
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
            "test": {
              "type": "Literal",
              "start": 194,
              "end": 197,
              "value": "a",
              "raw": "'a'"
            },
            "consequent": [
              {
                "type": "LabeledStatement",
                "start": 207,
                "end": 294,
                "label": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 211,
                  "decorators": [],
                  "name": "FIVE",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "test": {
                        "type": "Literal",
                        "start": 252,
                        "end": 255,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 273,
                          "end": 284,
                          "label": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 283,
                            "decorators": [],
                            "name": "FOUR",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
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
          "test": {
            "type": "Literal",
            "start": 321,
            "end": 324,
            "value": "a",
            "raw": "'a'"
          },
          "consequent": [
            {
              "type": "LabeledStatement",
              "start": 334,
              "end": 419,
              "label": {
                "type": "Identifier",
                "start": 334,
                "end": 337,
                "decorators": [],
                "name": "SIX",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "test": {
                      "type": "Literal",
                      "start": 378,
                      "end": 381,
                      "value": "a",
                      "raw": "'a'"
                    },
                    "consequent": [
                      {
                        "type": "BreakStatement",
                        "start": 399,
                        "end": 409,
                        "label": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 408,
                          "decorators": [],
                          "name": "SIX",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "LabeledStatement",
      "start": 423,
      "end": 863,
      "label": {
        "type": "Identifier",
        "start": 423,
        "end": 428,
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null
      },
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
            "test": {
              "type": "Literal",
              "start": 453,
              "end": 456,
              "value": "a",
              "raw": "'a'"
            },
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
                    "test": {
                      "type": "Literal",
                      "start": 497,
                      "end": 500,
                      "value": "a",
                      "raw": "'a'"
                    },
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
                            "test": {
                              "type": "Literal",
                              "start": 557,
                              "end": 560,
                              "value": "a",
                              "raw": "'a'"
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "start": 586,
                                "end": 598,
                                "label": {
                                  "type": "Identifier",
                                  "start": 592,
                                  "end": 597,
                                  "decorators": [],
                                  "name": "SEVEN",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "LabeledStatement",
                                "start": 623,
                                "end": 833,
                                "label": {
                                  "type": "Identifier",
                                  "start": 623,
                                  "end": 628,
                                  "decorators": [],
                                  "name": "EIGHT",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                      "test": {
                                        "type": "Literal",
                                        "start": 701,
                                        "end": 704,
                                        "value": "a",
                                        "raw": "'a'"
                                      },
                                      "consequent": [
                                        {
                                          "type": "VariableDeclaration",
                                          "start": 738,
                                          "end": 762,
                                          "kind": "var",
                                          "declarations": [
                                            {
                                              "type": "VariableDeclarator",
                                              "start": 742,
                                              "end": 762,
                                              "id": {
                                                "type": "Identifier",
                                                "start": 742,
                                                "end": 744,
                                                "decorators": [],
                                                "name": "fn",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "init": {
                                                "type": "FunctionExpression",
                                                "start": 747,
                                                "end": 762,
                                                "id": null,
                                                "generator": false,
                                                "async": false,
                                                "declare": false,
                                                "typeParameters": null,
                                                "params": [],
                                                "returnType": null,
                                                "body": {
                                                  "type": "BlockStatement",
                                                  "start": 759,
                                                  "end": 762,
                                                  "body": []
                                                },
                                                "expression": false
                                              },
                                              "definite": false
                                            }
                                          ],
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
                                            "decorators": [],
                                            "name": "EIGHT",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
