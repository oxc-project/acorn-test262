__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 986,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 373,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 71,
        "name": "test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 95,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 95,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 77,
              "end": 95,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 373,
        "body": [
          {
            "type": "IfStatement",
            "start": 101,
            "end": 129,
            "test": {
              "type": "UnaryExpression",
              "start": 105,
              "end": 109,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 106,
                "end": 109,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "start": 111,
              "end": 129,
              "argument": {
                "type": "NewExpression",
                "start": 117,
                "end": 128,
                "callee": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 126,
                  "name": "Error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "alternate": null
          },
          {
            "type": "SwitchStatement",
            "start": 133,
            "end": 341,
            "discriminant": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 153,
                "end": 202,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 191,
                    "end": 202,
                    "argument": {
                      "type": "Literal",
                      "start": 198,
                      "end": 201,
                      "value": "A",
                      "raw": "\"A\""
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 158,
                  "end": 183,
                  "left": {
                    "type": "CallExpression",
                    "start": 158,
                    "end": 175,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 158,
                      "end": 173,
                      "object": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 161,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 173,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 180,
                    "end": 183,
                    "value": "A",
                    "raw": "\"A\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 208,
                "end": 239,
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "start": 213,
                  "end": 238,
                  "left": {
                    "type": "CallExpression",
                    "start": 213,
                    "end": 230,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 213,
                      "end": 228,
                      "object": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 216,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 228,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 235,
                    "end": 238,
                    "value": "B",
                    "raw": "\"B\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 244,
                "end": 275,
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "start": 249,
                  "end": 274,
                  "left": {
                    "type": "CallExpression",
                    "start": 249,
                    "end": 266,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 249,
                      "end": 264,
                      "object": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 252,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 264,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 271,
                    "end": 274,
                    "value": "C",
                    "raw": "\"C\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 280,
                "end": 337,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 318,
                    "end": 337,
                    "argument": {
                      "type": "Literal",
                      "start": 325,
                      "end": 336,
                      "value": "B, C or D",
                      "raw": "\"B, C or D\""
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 285,
                  "end": 310,
                  "left": {
                    "type": "CallExpression",
                    "start": 285,
                    "end": 302,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 285,
                      "end": 300,
                      "object": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 288,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 300,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 307,
                    "end": 310,
                    "value": "D",
                    "raw": "\"D\""
                  }
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 345,
            "end": 371,
            "argument": {
              "type": "Literal",
              "start": 352,
              "end": 370,
              "value": "Not A, B, C or D",
              "raw": "\"Not A, B, C or D\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 375,
      "end": 690,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 389,
        "name": "test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 413,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 393,
            "end": 413,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 395,
              "end": 413,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 690,
        "body": [
          {
            "type": "IfStatement",
            "start": 419,
            "end": 447,
            "test": {
              "type": "UnaryExpression",
              "start": 423,
              "end": 427,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "ThrowStatement",
              "start": 429,
              "end": 447,
              "argument": {
                "type": "NewExpression",
                "start": 435,
                "end": 446,
                "callee": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 444,
                  "name": "Error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            },
            "alternate": null
          },
          {
            "type": "SwitchStatement",
            "start": 451,
            "end": 658,
            "discriminant": {
              "type": "Literal",
              "start": 459,
              "end": 463,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 471,
                "end": 502,
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "start": 476,
                  "end": 501,
                  "left": {
                    "type": "CallExpression",
                    "start": 476,
                    "end": 493,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 476,
                      "end": 491,
                      "object": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 479,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 491,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 498,
                    "end": 501,
                    "value": "A",
                    "raw": "\"A\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 507,
                "end": 538,
                "consequent": [],
                "test": {
                  "type": "BinaryExpression",
                  "start": 512,
                  "end": 537,
                  "left": {
                    "type": "CallExpression",
                    "start": 512,
                    "end": 529,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 512,
                      "end": 527,
                      "object": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 515,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 527,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 534,
                    "end": 537,
                    "value": "B",
                    "raw": "\"B\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 543,
                "end": 600,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 581,
                    "end": 600,
                    "argument": {
                      "type": "Literal",
                      "start": 588,
                      "end": 599,
                      "value": "A, B or C",
                      "raw": "\"A, B or C\""
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 548,
                  "end": 573,
                  "left": {
                    "type": "CallExpression",
                    "start": 548,
                    "end": 565,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 548,
                      "end": 563,
                      "object": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 551,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 563,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 570,
                    "end": 573,
                    "value": "C",
                    "raw": "\"C\""
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 605,
                "end": 654,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 643,
                    "end": 654,
                    "argument": {
                      "type": "Literal",
                      "start": 650,
                      "end": 653,
                      "value": "D",
                      "raw": "\"D\""
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 610,
                  "end": 635,
                  "left": {
                    "type": "CallExpression",
                    "start": 610,
                    "end": 627,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 610,
                      "end": 625,
                      "object": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 613,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 625,
                        "name": "toUpperCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 632,
                    "end": 635,
                    "value": "D",
                    "raw": "\"D\""
                  }
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 662,
            "end": 688,
            "argument": {
              "type": "Literal",
              "start": 669,
              "end": 687,
              "value": "Not A, B, C or D",
              "raw": "\"Not A, B, C or D\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 692,
      "end": 986,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 706,
        "name": "test3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 710,
          "end": 817,
          "name": "foo",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 817,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 719,
              "end": 817,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 721,
                  "end": 748,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 723,
                      "end": 733,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 723,
                        "end": 727,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 727,
                        "end": 732,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 729,
                          "end": 732,
                          "literal": {
                            "type": "Literal",
                            "start": 729,
                            "end": 732,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 734,
                      "end": 746,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 738,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 738,
                        "end": 746,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 740,
                          "end": 746
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 755,
                  "end": 782,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 757,
                      "end": 767,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 761,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 761,
                        "end": 766,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 763,
                          "end": 766,
                          "literal": {
                            "type": "Literal",
                            "start": 763,
                            "end": 766,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 768,
                      "end": 780,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 768,
                        "end": 772,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 772,
                        "end": 780,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 774,
                          "end": 780
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 789,
                  "end": 817,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 791,
                      "end": 801,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 791,
                        "end": 795,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 795,
                        "end": 800,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 797,
                          "end": 800,
                          "literal": {
                            "type": "Literal",
                            "start": 797,
                            "end": 800,
                            "value": "c",
                            "raw": "\"c\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 802,
                      "end": 815,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 802,
                        "end": 806,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 806,
                        "end": 815,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 808,
                          "end": 815
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 821,
          "end": 847,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 847,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 827,
              "end": 847,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 833,
                  "end": 843,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 833,
                    "end": 837,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 837,
                    "end": 842,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 839,
                      "end": 842,
                      "literal": {
                        "type": "Literal",
                        "start": 839,
                        "end": 842,
                        "value": "b",
                        "raw": "\"b\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 851,
        "end": 986,
        "body": [
          {
            "type": "IfStatement",
            "start": 855,
            "end": 882,
            "test": {
              "type": "UnaryExpression",
              "start": 859,
              "end": 863,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 860,
                "end": 863,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 865,
              "end": 882,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 871,
                  "end": 878,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "SwitchStatement",
            "start": 886,
            "end": 984,
            "discriminant": {
              "type": "MemberExpression",
              "start": 894,
              "end": 902,
              "object": {
                "type": "Identifier",
                "start": 894,
                "end": 897,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 898,
                "end": 902,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 910,
                "end": 933,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 926,
                    "end": 933,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 915,
                  "end": 918,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "SwitchCase",
                "start": 938,
                "end": 952,
                "consequent": [],
                "test": {
                  "type": "MemberExpression",
                  "start": 943,
                  "end": 951,
                  "object": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 946,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 951,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 957,
                "end": 980,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 973,
                    "end": 980,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 962,
                  "end": 965,
                  "value": "c",
                  "raw": "\"c\""
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
