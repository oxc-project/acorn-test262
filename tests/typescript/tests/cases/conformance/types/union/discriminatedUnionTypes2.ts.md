__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2607,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 101,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 17,
              "end": 101,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 17,
                  "end": 43,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 19,
                      "end": 31,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 23,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 23,
                        "end": 30,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 25,
                          "end": 30,
                          "literal": {
                            "type": "Literal",
                            "start": 25,
                            "end": 30,
                            "value": false,
                            "raw": "false"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 32,
                      "end": 41,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 33,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 41,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 46,
                  "end": 71,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 48,
                      "end": 59,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 52,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 52,
                        "end": 58,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 54,
                          "end": 58,
                          "literal": {
                            "type": "Literal",
                            "start": 54,
                            "end": 58,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 60,
                      "end": 69,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 69,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 74,
                  "end": 101,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 76,
                      "end": 89,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 80,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 80,
                        "end": 88,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 90,
                      "end": 99,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 91,
                        "end": 99,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 93,
                          "end": 99
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 103,
        "end": 234,
        "body": [
          {
            "type": "IfStatement",
            "start": 109,
            "end": 232,
            "test": {
              "type": "BinaryExpression",
              "start": 113,
              "end": 129,
              "left": {
                "type": "MemberExpression",
                "start": 113,
                "end": 119,
                "object": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 124,
                "end": 129,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 131,
              "end": 151,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 141,
                  "end": 145,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 141,
                    "end": 144,
                    "object": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 161,
              "end": 232,
              "test": {
                "type": "BinaryExpression",
                "start": 165,
                "end": 180,
                "left": {
                  "type": "MemberExpression",
                  "start": 165,
                  "end": 171,
                  "object": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 171,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 176,
                  "end": 180,
                  "value": true,
                  "raw": "true"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 182,
                "end": 202,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 192,
                    "end": 196,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 192,
                      "end": 195,
                      "object": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 195,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 212,
                "end": 232,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 222,
                    "end": 226,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 222,
                      "end": 225,
                      "object": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 225,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 515,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 248,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 249,
          "end": 337,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 337,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 253,
              "end": 337,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 253,
                  "end": 279,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 255,
                      "end": 267,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 259,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 259,
                        "end": 266,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 261,
                          "end": 266,
                          "literal": {
                            "type": "Literal",
                            "start": 261,
                            "end": 266,
                            "value": false,
                            "raw": "false"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 268,
                      "end": 277,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 269,
                        "end": 277,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 282,
                  "end": 307,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 284,
                      "end": 295,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 288,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 288,
                        "end": 294,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 290,
                          "end": 294,
                          "literal": {
                            "type": "Literal",
                            "start": 290,
                            "end": 294,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 296,
                      "end": 305,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 297,
                        "end": 305,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 299,
                          "end": 305
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 310,
                  "end": 337,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 312,
                      "end": 325,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 316,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 316,
                        "end": 324,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 318,
                          "end": 324
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 326,
                      "end": 335,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 327,
                        "end": 335,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 329,
                          "end": 335
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 515,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 345,
            "end": 513,
            "discriminant": {
              "type": "MemberExpression",
              "start": 353,
              "end": 359,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 355,
                "end": 359,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 371,
                "end": 418,
                "test": {
                  "type": "Literal",
                  "start": 376,
                  "end": 381,
                  "value": false,
                  "raw": "false"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 395,
                    "end": 399,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 395,
                      "end": 398,
                      "object": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 412,
                    "end": 418,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 427,
                "end": 473,
                "test": {
                  "type": "Literal",
                  "start": 432,
                  "end": 436,
                  "value": true,
                  "raw": "true"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 450,
                    "end": 454,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 450,
                      "end": 453,
                      "object": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 451,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 467,
                    "end": 473,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 482,
                "end": 507,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 503,
                    "end": 507,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 503,
                      "end": 506,
                      "object": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 504,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 517,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 529,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 530,
          "end": 582,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 531,
            "end": 582,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 533,
              "end": 582,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 533,
                  "end": 555,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 535,
                      "end": 543,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 536,
                        "end": 542,
                        "typeAnnotation": {
                          "type": "TSNullKeyword",
                          "start": 538,
                          "end": 542
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 544,
                      "end": 553,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 544,
                        "end": 545,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 545,
                        "end": 553,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 547,
                          "end": 553
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 558,
                  "end": 582,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 560,
                      "end": 570,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 561,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 561,
                        "end": 569,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 563,
                          "end": 569
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 571,
                      "end": 580,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 572,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 572,
                        "end": 580,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 574,
                          "end": 580
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 584,
        "end": 633,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 590,
            "end": 621,
            "expression": {
              "type": "AssignmentExpression",
              "start": 590,
              "end": 620,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 590,
                "end": 591,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 594,
                "end": 620,
                "properties": [
                  {
                    "type": "Property",
                    "start": 596,
                    "end": 603,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 596,
                      "end": 597,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 599,
                      "end": 603,
                      "value": null,
                      "raw": "null"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 605,
                    "end": 613,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 606,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 608,
                      "end": 613,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 615,
                    "end": 619,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 615,
                      "end": 616,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 618,
                      "end": 619,
                      "value": 4,
                      "raw": "4"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 635,
      "end": 750,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 647,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 647,
        "end": 650,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 648,
            "end": 649,
            "name": {
              "type": "Identifier",
              "start": 648,
              "end": 649,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 651,
          "end": 695,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 652,
            "end": 695,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 654,
              "end": 695,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 654,
                  "end": 673,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 656,
                      "end": 661,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 657,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 657,
                        "end": 660,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 659,
                          "end": 660,
                          "literal": {
                            "type": "Literal",
                            "start": 659,
                            "end": 660,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 662,
                      "end": 671,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 663,
                        "end": 671,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 665,
                          "end": 671
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 676,
                  "end": 695,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 678,
                      "end": 683,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 678,
                        "end": 679,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 679,
                        "end": 682,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 681,
                          "end": 682,
                          "typeName": {
                            "type": "Identifier",
                            "start": 681,
                            "end": 682,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 684,
                      "end": 693,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 684,
                        "end": 685,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 685,
                        "end": 693,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 687,
                          "end": 693
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 697,
        "end": 750,
        "body": [
          {
            "type": "IfStatement",
            "start": 703,
            "end": 748,
            "test": {
              "type": "BinaryExpression",
              "start": 707,
              "end": 716,
              "left": {
                "type": "MemberExpression",
                "start": 707,
                "end": 710,
                "object": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 708,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 710,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 715,
                "end": 716,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 718,
              "end": 748,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 728,
                  "end": 732,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 728,
                    "end": 731,
                    "object": {
                      "type": "Identifier",
                      "start": 728,
                      "end": 729,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 752,
      "end": 820,
      "id": {
        "type": "Identifier",
        "start": 757,
        "end": 763,
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 763,
        "end": 766,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 764,
            "end": 765,
            "name": {
              "type": "Identifier",
              "start": 764,
              "end": 765,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 769,
        "end": 819,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 769,
            "end": 800,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 771,
                "end": 789,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 776,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 777,
                  "end": 788,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 779,
                    "end": 788
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 790,
                "end": 798,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 795,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 795,
                  "end": 798,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 797,
                    "end": 798,
                    "typeName": {
                      "type": "Identifier",
                      "start": 797,
                      "end": 798,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 803,
            "end": 819,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 805,
                "end": 817,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 810,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 810,
                  "end": 817,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 812,
                    "end": 817,
                    "typeName": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 817,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 822,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 831,
        "end": 834,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 835,
          "end": 852,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 836,
            "end": 852,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 838,
              "end": 852,
              "typeName": {
                "type": "Identifier",
                "start": 838,
                "end": 844,
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 844,
                "end": 852,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 845,
                    "end": 851
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 854,
        "end": 942,
        "body": [
          {
            "type": "IfStatement",
            "start": 860,
            "end": 940,
            "test": {
              "type": "UnaryExpression",
              "start": 864,
              "end": 872,
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "start": 865,
                "end": 872,
                "object": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 866,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 867,
                  "end": 872,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 874,
              "end": 898,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 884,
                  "end": 892,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 884,
                    "end": 891,
                    "object": {
                      "type": "Identifier",
                      "start": 884,
                      "end": 885,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 886,
                      "end": 891,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 908,
              "end": 940,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 918,
                  "end": 934,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 918,
                    "end": 933,
                    "object": {
                      "type": "MemberExpression",
                      "start": 918,
                      "end": 925,
                      "object": {
                        "type": "Identifier",
                        "start": 918,
                        "end": 919,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 920,
                        "end": 925,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 926,
                      "end": 933,
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 944,
      "end": 963,
      "expression": {
        "type": "CallExpression",
        "start": 944,
        "end": 962,
        "callee": {
          "type": "Identifier",
          "start": 944,
          "end": 947,
          "decorators": [],
          "name": "f15",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 948,
            "end": 961,
            "properties": [
              {
                "type": "Property",
                "start": 950,
                "end": 959,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 950,
                  "end": 955,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 957,
                  "end": 959,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 964,
      "end": 998,
      "expression": {
        "type": "CallExpression",
        "start": 964,
        "end": 997,
        "callee": {
          "type": "Identifier",
          "start": 964,
          "end": 967,
          "decorators": [],
          "name": "f15",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 968,
            "end": 996,
            "properties": [
              {
                "type": "Property",
                "start": 970,
                "end": 994,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 970,
                  "end": 975,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "NewExpression",
                  "start": 977,
                  "end": 994,
                  "callee": {
                    "type": "Identifier",
                    "start": 981,
                    "end": 986,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 987,
                      "end": 993,
                      "value": "boom",
                      "raw": "\"boom\""
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1022,
      "end": 1077,
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1041,
        "decorators": [],
        "name": "WithError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1042,
        "end": 1077,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1048,
            "end": 1060,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1048,
              "end": 1053,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1053,
              "end": 1060,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1055,
                "end": 1060,
                "typeName": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1060,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1065,
            "end": 1075,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1065,
              "end": 1069,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1069,
              "end": 1075,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 1071,
                "end": 1075
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1079,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1089,
        "end": 1101,
        "decorators": [],
        "name": "WithoutError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1101,
        "end": 1107,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1102,
            "end": 1106,
            "name": {
              "type": "Identifier",
              "start": 1102,
              "end": 1106,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1108,
        "end": 1142,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1114,
            "end": 1125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1114,
              "end": 1119,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1119,
              "end": 1125,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 1121,
                "end": 1125
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1130,
            "end": 1140,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1130,
              "end": 1134,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1134,
              "end": 1140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1136,
                "end": 1140,
                "typeName": {
                  "type": "Identifier",
                  "start": 1136,
                  "end": 1140,
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1144,
      "end": 1199,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1160,
        "decorators": [],
        "name": "DataCarrier",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1160,
        "end": 1166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1161,
            "end": 1165,
            "name": {
              "type": "Identifier",
              "start": 1161,
              "end": 1165,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1169,
        "end": 1199,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1169,
            "end": 1178,
            "typeName": {
              "type": "Identifier",
              "start": 1169,
              "end": 1178,
              "decorators": [],
              "name": "WithError",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1181,
            "end": 1199,
            "typeName": {
              "type": "Identifier",
              "start": 1181,
              "end": 1193,
              "decorators": [],
              "name": "WithoutError",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1193,
              "end": 1199,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1194,
                  "end": 1198,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1194,
                    "end": 1198,
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1201,
      "end": 1469,
      "id": {
        "type": "Identifier",
        "start": 1210,
        "end": 1213,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1213,
        "end": 1219,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1214,
            "end": 1218,
            "name": {
              "type": "Identifier",
              "start": 1214,
              "end": 1218,
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1220,
          "end": 1246,
          "decorators": [],
          "name": "carrier",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1227,
            "end": 1246,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1229,
              "end": 1246,
              "typeName": {
                "type": "Identifier",
                "start": 1229,
                "end": 1240,
                "decorators": [],
                "name": "DataCarrier",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1240,
                "end": 1246,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1241,
                    "end": 1245,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1245,
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1248,
        "end": 1469,
        "body": [
          {
            "type": "IfStatement",
            "start": 1254,
            "end": 1467,
            "test": {
              "type": "BinaryExpression",
              "start": 1258,
              "end": 1280,
              "left": {
                "type": "MemberExpression",
                "start": 1258,
                "end": 1271,
                "object": {
                  "type": "Identifier",
                  "start": 1258,
                  "end": 1265,
                  "decorators": [],
                  "name": "carrier",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1271,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1276,
                "end": 1280,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1282,
              "end": 1371,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1292,
                  "end": 1325,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1298,
                      "end": 1325,
                      "id": {
                        "type": "Identifier",
                        "start": 1298,
                        "end": 1309,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1303,
                          "end": 1309,
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 1305,
                            "end": 1309
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1312,
                        "end": 1325,
                        "object": {
                          "type": "Identifier",
                          "start": 1312,
                          "end": 1319,
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1320,
                          "end": 1325,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1334,
                  "end": 1365,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1340,
                      "end": 1365,
                      "id": {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1350,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1344,
                          "end": 1350,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1346,
                            "end": 1350,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1346,
                              "end": 1350,
                              "decorators": [],
                              "name": "Data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1353,
                        "end": 1365,
                        "object": {
                          "type": "Identifier",
                          "start": 1353,
                          "end": 1360,
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1361,
                          "end": 1365,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1377,
              "end": 1467,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1387,
                  "end": 1421,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1393,
                      "end": 1421,
                      "id": {
                        "type": "Identifier",
                        "start": 1393,
                        "end": 1405,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1398,
                          "end": 1405,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1400,
                            "end": 1405,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1400,
                              "end": 1405,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1408,
                        "end": 1421,
                        "object": {
                          "type": "Identifier",
                          "start": 1408,
                          "end": 1415,
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1416,
                          "end": 1421,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1430,
                  "end": 1461,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1436,
                      "end": 1461,
                      "id": {
                        "type": "Identifier",
                        "start": 1436,
                        "end": 1446,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1440,
                          "end": 1446,
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 1442,
                            "end": 1446
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1449,
                        "end": 1461,
                        "object": {
                          "type": "Identifier",
                          "start": 1449,
                          "end": 1456,
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1457,
                          "end": 1461,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1493,
      "end": 1583,
      "id": {
        "type": "Identifier",
        "start": 1498,
        "end": 1501,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1504,
        "end": 1582,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1504,
            "end": 1528,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1506,
                "end": 1516,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1506,
                  "end": 1509,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1509,
                  "end": 1515,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1511,
                    "end": 1515,
                    "literal": {
                      "type": "Literal",
                      "start": 1511,
                      "end": 1515,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1517,
                "end": 1526,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1517,
                  "end": 1518,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1518,
                  "end": 1526,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1520,
                    "end": 1526
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1531,
            "end": 1556,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1533,
                "end": 1544,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1533,
                  "end": 1536,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1536,
                  "end": 1543,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1538,
                    "end": 1543,
                    "literal": {
                      "type": "Literal",
                      "start": 1538,
                      "end": 1543,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1545,
                "end": 1554,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1545,
                  "end": 1546,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1546,
                  "end": 1554,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1548,
                    "end": 1554
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1559,
            "end": 1582,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 1561,
                "end": 1580,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 1562,
                    "end": 1571,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1563,
                      "end": 1571,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1565,
                        "end": 1571
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1572,
                  "end": 1580,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1574,
                    "end": 1580
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1585,
      "end": 1679,
      "id": {
        "type": "Identifier",
        "start": 1594,
        "end": 1597,
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1598,
          "end": 1606,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1601,
            "end": 1606,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1603,
              "end": 1606,
              "typeName": {
                "type": "Identifier",
                "start": 1603,
                "end": 1606,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1608,
        "end": 1679,
        "body": [
          {
            "type": "IfStatement",
            "start": 1614,
            "end": 1677,
            "test": {
              "type": "MemberExpression",
              "start": 1618,
              "end": 1625,
              "object": {
                "type": "Identifier",
                "start": 1618,
                "end": 1621,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1622,
                "end": 1625,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1627,
              "end": 1647,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1637,
                  "end": 1641,
                  "expression": {
                    "type": "Identifier",
                    "start": 1637,
                    "end": 1640,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1657,
              "end": 1677,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1667,
                  "end": 1671,
                  "expression": {
                    "type": "Identifier",
                    "start": 1667,
                    "end": 1670,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1681,
      "end": 1784,
      "id": {
        "type": "Identifier",
        "start": 1690,
        "end": 1693,
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1694,
          "end": 1702,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1697,
            "end": 1702,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1699,
              "end": 1702,
              "typeName": {
                "type": "Identifier",
                "start": 1699,
                "end": 1702,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1704,
        "end": 1784,
        "body": [
          {
            "type": "IfStatement",
            "start": 1710,
            "end": 1782,
            "test": {
              "type": "BinaryExpression",
              "start": 1714,
              "end": 1730,
              "left": {
                "type": "MemberExpression",
                "start": 1714,
                "end": 1721,
                "object": {
                  "type": "Identifier",
                  "start": 1714,
                  "end": 1717,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1718,
                  "end": 1721,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1726,
                "end": 1730,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1732,
              "end": 1752,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1742,
                  "end": 1746,
                  "expression": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1745,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1762,
              "end": 1782,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1772,
                  "end": 1776,
                  "expression": {
                    "type": "Identifier",
                    "start": 1772,
                    "end": 1775,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1808,
      "end": 1852,
      "id": {
        "type": "Identifier",
        "start": 1813,
        "end": 1814,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1817,
        "end": 1852,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1823,
            "end": 1833,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1823,
              "end": 1827,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1827,
              "end": 1832,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1829,
                "end": 1832,
                "literal": {
                  "type": "Literal",
                  "start": 1829,
                  "end": 1832,
                  "value": "a",
                  "raw": "'a'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1838,
            "end": 1850,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1838,
              "end": 1842,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1842,
              "end": 1850,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1844,
                "end": 1850
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1853,
      "end": 1897,
      "id": {
        "type": "Identifier",
        "start": 1858,
        "end": 1859,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1862,
        "end": 1897,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1868,
            "end": 1878,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1868,
              "end": 1872,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1872,
              "end": 1877,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1874,
                "end": 1877,
                "literal": {
                  "type": "Literal",
                  "start": 1874,
                  "end": 1877,
                  "value": "b",
                  "raw": "'b'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1883,
            "end": 1895,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1883,
              "end": 1887,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1887,
              "end": 1895,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1889,
                "end": 1895
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1898,
      "end": 1943,
      "id": {
        "type": "Identifier",
        "start": 1903,
        "end": 1904,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1907,
        "end": 1943,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1913,
            "end": 1923,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1913,
              "end": 1917,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1917,
              "end": 1922,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1919,
                "end": 1922,
                "literal": {
                  "type": "Literal",
                  "start": 1919,
                  "end": 1922,
                  "value": "c",
                  "raw": "'c'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1928,
            "end": 1941,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1928,
              "end": 1933,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1933,
              "end": 1941,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1935,
                "end": 1941
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1945,
      "end": 1966,
      "id": {
        "type": "Identifier",
        "start": 1950,
        "end": 1953,
        "decorators": [],
        "name": "abc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1956,
        "end": 1965,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1956,
            "end": 1957,
            "typeName": {
              "type": "Identifier",
              "start": 1956,
              "end": 1957,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1960,
            "end": 1961,
            "typeName": {
              "type": "Identifier",
              "start": 1960,
              "end": 1961,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1964,
            "end": 1965,
            "typeName": {
              "type": "Identifier",
              "start": 1964,
              "end": 1965,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1968,
      "end": 2106,
      "id": {
        "type": "Identifier",
        "start": 1977,
        "end": 1978,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1979,
          "end": 2001,
          "decorators": [],
          "name": "problem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1986,
            "end": 2001,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1988,
              "end": 2001,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1988,
                  "end": 1991,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1988,
                    "end": 1991,
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 1995,
                  "end": 2000,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 1995,
                      "end": 1996,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1995,
                        "end": 1996,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1999,
                      "end": 2000,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1999,
                        "end": 2000,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2003,
        "end": 2106,
        "body": [
          {
            "type": "IfStatement",
            "start": 2009,
            "end": 2104,
            "test": {
              "type": "BinaryExpression",
              "start": 2013,
              "end": 2033,
              "left": {
                "type": "MemberExpression",
                "start": 2013,
                "end": 2025,
                "object": {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2020,
                  "decorators": [],
                  "name": "problem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2021,
                  "end": 2025,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2030,
                "end": 2033,
                "value": "b",
                "raw": "'b'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2035,
              "end": 2064,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2045,
                  "end": 2058,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2045,
                    "end": 2057,
                    "object": {
                      "type": "Identifier",
                      "start": 2045,
                      "end": 2052,
                      "decorators": [],
                      "name": "problem",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2057,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2074,
              "end": 2104,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2084,
                  "end": 2098,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2084,
                    "end": 2097,
                    "object": {
                      "type": "Identifier",
                      "start": 2084,
                      "end": 2091,
                      "decorators": [],
                      "name": "problem",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2092,
                      "end": 2097,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2108,
      "end": 2250,
      "id": {
        "type": "Identifier",
        "start": 2113,
        "end": 2125,
        "decorators": [],
        "name": "RuntimeValue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2132,
        "end": 2249,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 2134,
            "end": 2167,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2136,
                "end": 2151,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2136,
                  "end": 2140,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2140,
                  "end": 2150,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2142,
                    "end": 2150,
                    "literal": {
                      "type": "Literal",
                      "start": 2142,
                      "end": 2150,
                      "value": "number",
                      "raw": "'number'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2152,
                "end": 2165,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2152,
                  "end": 2157,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2157,
                  "end": 2165,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2159,
                    "end": 2165
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2174,
            "end": 2207,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2176,
                "end": 2191,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2176,
                  "end": 2180,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2180,
                  "end": 2190,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2182,
                    "end": 2190,
                    "literal": {
                      "type": "Literal",
                      "start": 2182,
                      "end": 2190,
                      "value": "string",
                      "raw": "'string'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2192,
                "end": 2205,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2192,
                  "end": 2197,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2197,
                  "end": 2205,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2199,
                    "end": 2205
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2214,
            "end": 2249,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2216,
                "end": 2232,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2216,
                  "end": 2220,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2220,
                  "end": 2231,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2222,
                    "end": 2231,
                    "literal": {
                      "type": "Literal",
                      "start": 2222,
                      "end": 2231,
                      "value": "boolean",
                      "raw": "'boolean'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2233,
                "end": 2247,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2233,
                  "end": 2238,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2238,
                  "end": 2247,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2240,
                    "end": 2247
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2252,
      "end": 2417,
      "id": {
        "type": "Identifier",
        "start": 2261,
        "end": 2265,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2266,
          "end": 2302,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2267,
            "end": 2302,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2269,
              "end": 2302,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2269,
                  "end": 2281,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2269,
                    "end": 2281,
                    "decorators": [],
                    "name": "RuntimeValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2284,
                  "end": 2302,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2286,
                      "end": 2300,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2286,
                        "end": 2290,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2290,
                        "end": 2300,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2292,
                          "end": 2300,
                          "literal": {
                            "type": "Literal",
                            "start": 2292,
                            "end": 2300,
                            "value": "number",
                            "raw": "'number'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2304,
        "end": 2417,
        "body": [
          {
            "type": "IfStatement",
            "start": 2310,
            "end": 2415,
            "test": {
              "type": "BinaryExpression",
              "start": 2314,
              "end": 2333,
              "left": {
                "type": "MemberExpression",
                "start": 2314,
                "end": 2320,
                "object": {
                  "type": "Identifier",
                  "start": 2314,
                  "end": 2315,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2316,
                  "end": 2320,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2325,
                "end": 2333,
                "value": "number",
                "raw": "'number'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2335,
              "end": 2370,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2345,
                  "end": 2353,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2345,
                    "end": 2352,
                    "object": {
                      "type": "Identifier",
                      "start": 2345,
                      "end": 2346,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2347,
                      "end": 2352,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2380,
              "end": 2415,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2390,
                  "end": 2398,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2390,
                    "end": 2397,
                    "object": {
                      "type": "Identifier",
                      "start": 2390,
                      "end": 2391,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2392,
                      "end": 2397,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2419,
      "end": 2607,
      "id": {
        "type": "Identifier",
        "start": 2428,
        "end": 2432,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2433,
          "end": 2492,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2434,
            "end": 2492,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2436,
              "end": 2492,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2436,
                  "end": 2448,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2436,
                    "end": 2448,
                    "decorators": [],
                    "name": "RuntimeValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUnionType",
                  "start": 2452,
                  "end": 2491,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 2452,
                      "end": 2470,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2454,
                          "end": 2468,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2454,
                            "end": 2458,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2458,
                            "end": 2468,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 2460,
                              "end": 2468,
                              "literal": {
                                "type": "Literal",
                                "start": 2460,
                                "end": 2468,
                                "value": "number",
                                "raw": "'number'"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 2473,
                      "end": 2491,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2475,
                          "end": 2489,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2475,
                            "end": 2479,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2479,
                            "end": 2489,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 2481,
                              "end": 2489,
                              "literal": {
                                "type": "Literal",
                                "start": 2481,
                                "end": 2489,
                                "value": "string",
                                "raw": "'string'"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2494,
        "end": 2607,
        "body": [
          {
            "type": "IfStatement",
            "start": 2500,
            "end": 2605,
            "test": {
              "type": "BinaryExpression",
              "start": 2504,
              "end": 2523,
              "left": {
                "type": "MemberExpression",
                "start": 2504,
                "end": 2510,
                "object": {
                  "type": "Identifier",
                  "start": 2504,
                  "end": 2505,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2506,
                  "end": 2510,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2515,
                "end": 2523,
                "value": "number",
                "raw": "'number'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2525,
              "end": 2560,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2535,
                  "end": 2543,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2535,
                    "end": 2542,
                    "object": {
                      "type": "Identifier",
                      "start": 2535,
                      "end": 2536,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2537,
                      "end": 2542,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2570,
              "end": 2605,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2580,
                  "end": 2588,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2580,
                    "end": 2587,
                    "object": {
                      "type": "Identifier",
                      "start": 2580,
                      "end": 2581,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2582,
                      "end": 2587,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
