__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 754,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 35,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Values",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 14,
        "end": 35,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 14,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 14,
              "end": 15,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 19,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSLiteralType",
            "start": 22,
            "end": 23,
            "literal": {
              "type": "Literal",
              "start": 22,
              "end": 23,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "TSLiteralType",
            "start": 26,
            "end": 27,
            "literal": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "4",
              "value": 4
            }
          },
          {
            "type": "TSLiteralType",
            "start": 30,
            "end": 31,
            "literal": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "5",
              "value": 5
            }
          },
          {
            "type": "TSLiteralType",
            "start": 34,
            "end": 35,
            "literal": {
              "type": "Literal",
              "start": 34,
              "end": 35,
              "raw": "6",
              "value": 6
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 37,
      "end": 76,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 50,
        "decorators": [],
        "name": "FuncType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 53,
        "end": 76,
        "params": [
          {
            "type": "Identifier",
            "start": 54,
            "end": 65,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 65,
                  "decorators": [],
                  "name": "Values",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 67,
          "end": 76,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 70,
            "end": 76
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 436,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 436,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 124,
            "end": 411,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 135,
              "decorators": [],
              "name": "insideClass",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 145,
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 411,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 411,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 197,
                    "end": 407,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 218,
                        "end": 245,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 234,
                            "end": 245,
                            "argument": {
                              "type": "Literal",
                              "start": 241,
                              "end": 244,
                              "raw": "\"1\"",
                              "value": "1"
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 223,
                          "end": 224,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 252,
                        "end": 279,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 268,
                            "end": 279,
                            "argument": {
                              "type": "Literal",
                              "start": 275,
                              "end": 278,
                              "raw": "\"2\"",
                              "value": "2"
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 257,
                          "end": 258,
                          "raw": "2",
                          "value": 2
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 286,
                        "end": 312,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 302,
                            "end": 312,
                            "argument": {
                              "type": "Literal",
                              "start": 309,
                              "end": 312,
                              "raw": "\"3\"",
                              "value": "3"
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 291,
                          "end": 292,
                          "raw": "3",
                          "value": 3
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 319,
                        "end": 345,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 335,
                            "end": 345,
                            "argument": {
                              "type": "Literal",
                              "start": 342,
                              "end": 345,
                              "raw": "\"4\"",
                              "value": "4"
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 324,
                          "end": 325,
                          "raw": "4",
                          "value": 4
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 352,
                        "end": 378,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 368,
                            "end": 378,
                            "argument": {
                              "type": "Literal",
                              "start": 375,
                              "end": 378,
                              "raw": "\"5\"",
                              "value": "5"
                            }
                          }
                        ],
                        "test": {
                          "type": "Literal",
                          "start": 357,
                          "end": 358,
                          "raw": "5",
                          "value": 5
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 208,
                      "decorators": [],
                      "name": "val",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 160,
                  "decorators": [],
                  "name": "val",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
        "decorators": [],
        "name": "Example",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 754,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 466,
            "decorators": [],
            "name": "outsideClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 458,
                "end": 466,
                "typeName": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 466,
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 469,
            "end": 754,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 483,
              "end": 754,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 542,
                  "end": 752,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 563,
                      "end": 590,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 579,
                          "end": 590,
                          "argument": {
                            "type": "Literal",
                            "start": 586,
                            "end": 589,
                            "raw": "\"1\"",
                            "value": "1"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 568,
                        "end": 569,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 597,
                      "end": 624,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 613,
                          "end": 624,
                          "argument": {
                            "type": "Literal",
                            "start": 620,
                            "end": 623,
                            "raw": "\"2\"",
                            "value": "2"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 602,
                        "end": 603,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 631,
                      "end": 657,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 647,
                          "end": 657,
                          "argument": {
                            "type": "Literal",
                            "start": 654,
                            "end": 657,
                            "raw": "\"3\"",
                            "value": "3"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 636,
                        "end": 637,
                        "raw": "3",
                        "value": 3
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 664,
                      "end": 690,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 680,
                          "end": 690,
                          "argument": {
                            "type": "Literal",
                            "start": 687,
                            "end": 690,
                            "raw": "\"4\"",
                            "value": "4"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 669,
                        "end": 670,
                        "raw": "4",
                        "value": 4
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 697,
                      "end": 723,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 713,
                          "end": 723,
                          "argument": {
                            "type": "Literal",
                            "start": 720,
                            "end": 723,
                            "raw": "\"5\"",
                            "value": "5"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 702,
                        "end": 703,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 553,
                    "decorators": [],
                    "name": "val",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 478,
                "end": 481,
                "decorators": [],
                "name": "val",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
