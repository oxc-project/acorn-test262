__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 207,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 29,
              "name": "narrowToLiterals",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 32,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 44,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 207,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 55,
                    "end": 203,
                    "discriminant": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                                  "name": "str",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                          "value": "abc",
                          "raw": "'abc'"
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
                              "value": "defaultValue",
                              "raw": "'defaultValue'"
                            }
                          }
                        ],
                        "test": null
                      }
                    ]
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 214,
      "end": 524,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 221,
        "end": 524,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 227,
            "end": 523,
            "id": {
              "type": "Identifier",
              "start": 227,
              "end": 241,
              "name": "narrowToString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 244,
              "end": 523,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 256,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 278,
                  "name": "someOtherStr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 272,
                      "end": 278
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 283,
                "end": 523,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 289,
                    "end": 519,
                    "discriminant": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 300,
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                                  "name": "str",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                          "value": "abc",
                          "raw": "'abc'"
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
                                  "name": "str",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                          "name": "someOtherStr",
                          "typeAnnotation": null,
                          "decorators": [],
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
                              "value": "defaultValue",
                              "raw": "'defaultValue'"
                            }
                          }
                        ],
                        "test": null
                      }
                    ]
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 530,
      "end": 877,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 537,
        "end": 877,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 543,
            "end": 876,
            "id": {
              "type": "Identifier",
              "start": 543,
              "end": 565,
              "name": "narrowToStringOrNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 568,
              "end": 876,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 569,
                  "end": 589,
                  "name": "str",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 591,
                  "end": 609,
                  "name": "someNumber",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 601,
                    "end": 609,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 603,
                      "end": 609
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 614,
                "end": 876,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 620,
                    "end": 872,
                    "discriminant": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 631,
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                                  "name": "str",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                          "value": "abc",
                          "raw": "'abc'"
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
                                  "name": "str",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                          "name": "someNumber",
                          "typeAnnotation": null,
                          "decorators": [],
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
                              "value": "defaultValue",
                              "raw": "'defaultValue'"
                            }
                          }
                        ],
                        "test": null
                      }
                    ]
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
