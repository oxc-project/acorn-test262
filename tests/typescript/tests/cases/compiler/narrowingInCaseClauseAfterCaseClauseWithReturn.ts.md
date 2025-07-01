__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 86,
                  "end": 95
                }
              ],
              "start": 77,
              "end": 95
            },
            "start": 75,
            "end": 95
          },
          "start": 72,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 109
              },
              "prefix": true,
              "start": 105,
              "end": 109
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 126
                },
                "typeArguments": null,
                "arguments": [],
                "start": 117,
                "end": 128
              },
              "start": 111,
              "end": 129
            },
            "alternate": null,
            "start": 101,
            "end": 129
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 141,
              "end": 145
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 161
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 173
                      },
                      "optional": false,
                      "computed": false,
                      "start": 158,
                      "end": 173
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 158,
                    "end": 175
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 180,
                    "end": 183
                  },
                  "start": 158,
                  "end": 183
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 198,
                      "end": 201
                    },
                    "start": 191,
                    "end": 202
                  }
                ],
                "start": 153,
                "end": 202
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 216
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 228
                      },
                      "optional": false,
                      "computed": false,
                      "start": 213,
                      "end": 228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 213,
                    "end": 230
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 235,
                    "end": 238
                  },
                  "start": 213,
                  "end": 238
                },
                "consequent": [],
                "start": 208,
                "end": 239
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 252
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 264
                      },
                      "optional": false,
                      "computed": false,
                      "start": 249,
                      "end": 264
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 249,
                    "end": 266
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "C",
                    "raw": "\"C\"",
                    "start": 271,
                    "end": 274
                  },
                  "start": 249,
                  "end": 274
                },
                "consequent": [],
                "start": 244,
                "end": 275
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 288
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 289,
                        "end": 300
                      },
                      "optional": false,
                      "computed": false,
                      "start": 285,
                      "end": 300
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 285,
                    "end": 302
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"D\"",
                    "start": 307,
                    "end": 310
                  },
                  "start": 285,
                  "end": 310
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "B, C or D",
                      "raw": "\"B, C or D\"",
                      "start": 325,
                      "end": 336
                    },
                    "start": 318,
                    "end": 337
                  }
                ],
                "start": 280,
                "end": 337
              }
            ],
            "start": 133,
            "end": 341
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "Not A, B, C or D",
              "raw": "\"Not A, B, C or D\"",
              "start": 352,
              "end": 370
            },
            "start": 345,
            "end": 371
          }
        ],
        "start": 97,
        "end": 373
      },
      "expression": false,
      "start": 57,
      "end": 373
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 404,
                  "end": 413
                }
              ],
              "start": 395,
              "end": 413
            },
            "start": 393,
            "end": 413
          },
          "start": 390,
          "end": 413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 427
              },
              "prefix": true,
              "start": 423,
              "end": 427
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 444
                },
                "typeArguments": null,
                "arguments": [],
                "start": 435,
                "end": 446
              },
              "start": 429,
              "end": 447
            },
            "alternate": null,
            "start": 419,
            "end": 447
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 459,
              "end": 463
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 479
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 491
                      },
                      "optional": false,
                      "computed": false,
                      "start": 476,
                      "end": 491
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 476,
                    "end": 493
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 498,
                    "end": 501
                  },
                  "start": 476,
                  "end": 501
                },
                "consequent": [],
                "start": 471,
                "end": 502
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 515
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 527
                      },
                      "optional": false,
                      "computed": false,
                      "start": 512,
                      "end": 527
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 512,
                    "end": 529
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 534,
                    "end": 537
                  },
                  "start": 512,
                  "end": 537
                },
                "consequent": [],
                "start": 507,
                "end": 538
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 551
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 563
                      },
                      "optional": false,
                      "computed": false,
                      "start": 548,
                      "end": 563
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 548,
                    "end": 565
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "C",
                    "raw": "\"C\"",
                    "start": 570,
                    "end": 573
                  },
                  "start": 548,
                  "end": 573
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "A, B or C",
                      "raw": "\"A, B or C\"",
                      "start": 588,
                      "end": 599
                    },
                    "start": 581,
                    "end": 600
                  }
                ],
                "start": 543,
                "end": 600
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 613
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 625
                      },
                      "optional": false,
                      "computed": false,
                      "start": 610,
                      "end": 625
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 610,
                    "end": 627
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"D\"",
                    "start": 632,
                    "end": 635
                  },
                  "start": 610,
                  "end": 635
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "D",
                      "raw": "\"D\"",
                      "start": 650,
                      "end": 653
                    },
                    "start": 643,
                    "end": 654
                  }
                ],
                "start": 605,
                "end": 654
              }
            ],
            "start": 451,
            "end": 658
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "Not A, B, C or D",
              "raw": "\"Not A, B, C or D\"",
              "start": 669,
              "end": 687
            },
            "start": 662,
            "end": 688
          }
        ],
        "start": 415,
        "end": 690
      },
      "expression": false,
      "start": 375,
      "end": 690
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 706
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 723,
                        "end": 727
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 729,
                            "end": 732
                          },
                          "start": 729,
                          "end": 732
                        },
                        "start": 727,
                        "end": 732
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 723,
                      "end": 733
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 738
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 740,
                          "end": 746
                        },
                        "start": 738,
                        "end": 746
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 734,
                      "end": 746
                    }
                  ],
                  "start": 721,
                  "end": 748
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 761
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 763,
                            "end": 766
                          },
                          "start": 763,
                          "end": 766
                        },
                        "start": 761,
                        "end": 766
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 757,
                      "end": 767
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 768,
                        "end": 772
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 774,
                          "end": 780
                        },
                        "start": 772,
                        "end": 780
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 768,
                      "end": 780
                    }
                  ],
                  "start": 755,
                  "end": 782
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 795
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 797,
                            "end": 800
                          },
                          "start": 797,
                          "end": 800
                        },
                        "start": 795,
                        "end": 800
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 791,
                      "end": 801
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 806
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 808,
                          "end": 815
                        },
                        "start": 806,
                        "end": 815
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 802,
                      "end": 815
                    }
                  ],
                  "start": 789,
                  "end": 817
                }
              ],
              "start": 719,
              "end": 817
            },
            "start": 713,
            "end": 817
          },
          "start": 710,
          "end": 817
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 833,
                    "end": 837
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 839,
                        "end": 842
                      },
                      "start": 839,
                      "end": 842
                    },
                    "start": 837,
                    "end": 842
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 833,
                  "end": 843
                }
              ],
              "start": 827,
              "end": 847
            },
            "start": 825,
            "end": 847
          },
          "start": 821,
          "end": 847
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 860,
                "end": 863
              },
              "prefix": true,
              "start": 859,
              "end": 863
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 871,
                  "end": 878
                }
              ],
              "start": 865,
              "end": 882
            },
            "alternate": null,
            "start": 855,
            "end": 882
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 894,
                "end": 897
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 902
              },
              "optional": false,
              "computed": false,
              "start": 894,
              "end": 902
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 915,
                  "end": 918
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 926,
                    "end": 933
                  }
                ],
                "start": 910,
                "end": 933
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 946
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 951
                  },
                  "optional": false,
                  "computed": false,
                  "start": 943,
                  "end": 951
                },
                "consequent": [],
                "start": 938,
                "end": 952
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 962,
                  "end": 965
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 973,
                    "end": 980
                  }
                ],
                "start": 957,
                "end": 980
              }
            ],
            "start": 886,
            "end": 984
          }
        ],
        "start": 851,
        "end": 986
      },
      "expression": false,
      "start": 692,
      "end": 986
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 986
}
```
