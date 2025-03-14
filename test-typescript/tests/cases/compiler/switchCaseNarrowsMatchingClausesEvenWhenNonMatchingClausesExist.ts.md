switchCaseNarrowsMatchingClausesEvenWhenNonMatchingClausesExist.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 877,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 208,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 207,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 29,
              "decorators": [],
              "name": "narrowToLiterals",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 32,
              "end": 207,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 207,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 55,
                    "end": 203,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 76,
                        "end": 151,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 88,
                            "end": 151,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 132,
                                "end": 143,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 139,
                                  "end": 142,
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 81,
                          "end": 86,
                          "raw": "'abc'",
                          "value": "abc"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 158,
                        "end": 197,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 175,
                            "end": 197,
                            "argument": {
                              "type": "Literal",
                              "start": 182,
                              "end": 196,
                              "raw": "'defaultValue'",
                              "value": "defaultValue"
                            }
                          }
                        ],
                        "test": null
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 44,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 214,
      "end": 524,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 221,
        "end": 524,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 227,
            "end": 523,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 227,
              "end": 241,
              "decorators": [],
              "name": "narrowToString",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 244,
              "end": 523,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 283,
                "end": 523,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 289,
                    "end": 519,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 310,
                        "end": 392,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 322,
                            "end": 392,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 373,
                                "end": 384,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 380,
                                  "end": 383,
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 315,
                          "end": 320,
                          "raw": "'abc'",
                          "value": "abc"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 399,
                        "end": 467,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 418,
                            "end": 467,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 448,
                                "end": 459,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 455,
                                  "end": 458,
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 416,
                          "decorators": [],
                          "name": "someOtherStr",
                          "optional": false
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 474,
                        "end": 513,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 491,
                            "end": 513,
                            "argument": {
                              "type": "Literal",
                              "start": 498,
                              "end": 512,
                              "raw": "'defaultValue'",
                              "value": "defaultValue"
                            }
                          }
                        ],
                        "test": null
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 300,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 256,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 278,
                  "decorators": [],
                  "name": "someOtherStr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 272,
                      "end": 278
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 530,
      "end": 877,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 537,
        "end": 877,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 543,
            "end": 876,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 543,
              "end": 565,
              "decorators": [],
              "name": "narrowToStringOrNumber",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 568,
              "end": 876,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 614,
                "end": 876,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 620,
                    "end": 872,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 641,
                        "end": 723,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 653,
                            "end": 723,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 704,
                                "end": 715,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 711,
                                  "end": 714,
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 646,
                          "end": 651,
                          "raw": "'abc'",
                          "value": "abc"
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 730,
                        "end": 820,
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "start": 747,
                            "end": 820,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 801,
                                "end": 812,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 808,
                                  "end": 811,
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        ],
                        "test": {
                          "type": "Identifier",
                          "start": 735,
                          "end": 745,
                          "decorators": [],
                          "name": "someNumber",
                          "optional": false
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 827,
                        "end": 866,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 844,
                            "end": 866,
                            "argument": {
                              "type": "Literal",
                              "start": 851,
                              "end": 865,
                              "raw": "'defaultValue'",
                              "value": "defaultValue"
                            }
                          }
                        ],
                        "test": null
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 631,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 569,
                  "end": 589,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 572,
                    "end": 589,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 574,
                      "end": 589,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 574,
                          "end": 580
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 583,
                          "end": 589
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 591,
                  "end": 609,
                  "decorators": [],
                  "name": "someNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 609,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 603,
                      "end": 609
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
