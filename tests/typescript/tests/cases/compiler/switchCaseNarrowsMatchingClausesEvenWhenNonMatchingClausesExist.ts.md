__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "narrowToLiterals",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 29
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 33,
                  "end": 44
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 66
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 81,
                          "end": 86
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 142
                                },
                                "start": 132,
                                "end": 143
                              }
                            ],
                            "start": 88,
                            "end": 151
                          }
                        ],
                        "start": 76,
                        "end": 151
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "defaultValue",
                              "raw": "'defaultValue'",
                              "start": 182,
                              "end": 196
                            },
                            "start": 175,
                            "end": 197
                          }
                        ],
                        "start": 158,
                        "end": 197
                      }
                    ],
                    "start": 55,
                    "end": 203
                  }
                ],
                "start": 49,
                "end": 207
              },
              "id": null,
              "generator": false,
              "start": 32,
              "end": 207
            },
            "definite": false,
            "start": 13,
            "end": 207
          }
        ],
        "declare": false,
        "start": 7,
        "end": 208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 208
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "narrowToString",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 241
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
                  },
                  "start": 245,
                  "end": 256
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOtherStr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 272,
                      "end": 278
                    },
                    "start": 270,
                    "end": 278
                  },
                  "start": 258,
                  "end": 278
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 300
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 315,
                          "end": 320
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 380,
                                  "end": 383
                                },
                                "start": 373,
                                "end": 384
                              }
                            ],
                            "start": 322,
                            "end": 392
                          }
                        ],
                        "start": 310,
                        "end": 392
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someOtherStr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 416
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 455,
                                  "end": 458
                                },
                                "start": 448,
                                "end": 459
                              }
                            ],
                            "start": 418,
                            "end": 467
                          }
                        ],
                        "start": 399,
                        "end": 467
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "defaultValue",
                              "raw": "'defaultValue'",
                              "start": 498,
                              "end": 512
                            },
                            "start": 491,
                            "end": 513
                          }
                        ],
                        "start": 474,
                        "end": 513
                      }
                    ],
                    "start": 289,
                    "end": 519
                  }
                ],
                "start": 283,
                "end": 523
              },
              "id": null,
              "generator": false,
              "start": 244,
              "end": 523
            },
            "definite": false,
            "start": 227,
            "end": 523
          }
        ],
        "declare": false,
        "start": 221,
        "end": 524
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 214,
      "end": 524
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "narrowToStringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 565
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 574,
                      "end": 589
                    },
                    "start": 572,
                    "end": 589
                  },
                  "start": 569,
                  "end": 589
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 603,
                      "end": 609
                    },
                    "start": 601,
                    "end": 609
                  },
                  "start": 591,
                  "end": 609
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 631
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "'abc'",
                          "start": 646,
                          "end": 651
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 711,
                                  "end": 714
                                },
                                "start": 704,
                                "end": 715
                              }
                            ],
                            "start": 653,
                            "end": 723
                          }
                        ],
                        "start": 641,
                        "end": 723
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 745
                        },
                        "consequent": [
                          {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "str",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 808,
                                  "end": 811
                                },
                                "start": 801,
                                "end": 812
                              }
                            ],
                            "start": 747,
                            "end": 820
                          }
                        ],
                        "start": 730,
                        "end": 820
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "defaultValue",
                              "raw": "'defaultValue'",
                              "start": 851,
                              "end": 865
                            },
                            "start": 844,
                            "end": 866
                          }
                        ],
                        "start": 827,
                        "end": 866
                      }
                    ],
                    "start": 620,
                    "end": 872
                  }
                ],
                "start": 614,
                "end": 876
              },
              "id": null,
              "generator": false,
              "start": 568,
              "end": 876
            },
            "definite": false,
            "start": 543,
            "end": 876
          }
        ],
        "declare": false,
        "start": 537,
        "end": 877
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 530,
      "end": 877
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 877
}
```
