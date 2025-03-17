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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 373,
        "body": [
          {
            "type": "IfStatement",
            "start": 101,
            "end": 129,
            "alternate": null,
            "consequent": {
              "type": "ThrowStatement",
              "start": 111,
              "end": 129,
              "argument": {
                "type": "NewExpression",
                "start": 117,
                "end": 128,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 126,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 105,
              "end": 109,
              "argument": {
                "type": "Identifier",
                "start": 106,
                "end": 109,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "SwitchStatement",
            "start": 133,
            "end": 341,
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
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 158,
                  "end": 183,
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 158,
                    "end": 175,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 158,
                      "end": 173,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 161,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 173,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 180,
                    "end": 183,
                    "raw": "\"A\"",
                    "value": "A"
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
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 213,
                    "end": 230,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 213,
                      "end": 228,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 216,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 228,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 235,
                    "end": 238,
                    "raw": "\"B\"",
                    "value": "B"
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
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 249,
                    "end": 266,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 249,
                      "end": 264,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 252,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 264,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 271,
                    "end": 274,
                    "raw": "\"C\"",
                    "value": "C"
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
                      "raw": "\"B, C or D\"",
                      "value": "B, C or D"
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 285,
                  "end": 310,
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 285,
                    "end": 302,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 285,
                      "end": 300,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 288,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 300,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 307,
                    "end": 310,
                    "raw": "\"D\"",
                    "value": "D"
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ReturnStatement",
            "start": 345,
            "end": 371,
            "argument": {
              "type": "Literal",
              "start": 352,
              "end": 370,
              "raw": "\"Not A, B, C or D\"",
              "value": "Not A, B, C or D"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 71,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 95,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 375,
      "end": 690,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 690,
        "body": [
          {
            "type": "IfStatement",
            "start": 419,
            "end": 447,
            "alternate": null,
            "consequent": {
              "type": "ThrowStatement",
              "start": 429,
              "end": 447,
              "argument": {
                "type": "NewExpression",
                "start": 435,
                "end": 446,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 444,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 423,
              "end": 427,
              "argument": {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "SwitchStatement",
            "start": 451,
            "end": 658,
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
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 476,
                    "end": 493,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 476,
                      "end": 491,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 479,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 491,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 498,
                    "end": 501,
                    "raw": "\"A\"",
                    "value": "A"
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
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 512,
                    "end": 529,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 512,
                      "end": 527,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 515,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 527,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 534,
                    "end": 537,
                    "raw": "\"B\"",
                    "value": "B"
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
                      "raw": "\"A, B or C\"",
                      "value": "A, B or C"
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 548,
                  "end": 573,
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 548,
                    "end": 565,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 548,
                      "end": 563,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 551,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 563,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 570,
                    "end": 573,
                    "raw": "\"C\"",
                    "value": "C"
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
                      "raw": "\"D\"",
                      "value": "D"
                    }
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 610,
                  "end": 635,
                  "operator": "===",
                  "left": {
                    "type": "CallExpression",
                    "start": 610,
                    "end": 627,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 610,
                      "end": 625,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 613,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 625,
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 632,
                    "end": 635,
                    "raw": "\"D\"",
                    "value": "D"
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 459,
              "end": 463,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ReturnStatement",
            "start": 662,
            "end": 688,
            "argument": {
              "type": "Literal",
              "start": 669,
              "end": 687,
              "raw": "\"Not A, B, C or D\"",
              "value": "Not A, B, C or D"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 389,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 413,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 692,
      "end": 986,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 851,
        "end": 986,
        "body": [
          {
            "type": "IfStatement",
            "start": 855,
            "end": 882,
            "alternate": null,
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
            "test": {
              "type": "UnaryExpression",
              "start": 859,
              "end": 863,
              "argument": {
                "type": "Identifier",
                "start": 860,
                "end": 863,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "SwitchStatement",
            "start": 886,
            "end": 984,
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
                  "raw": "\"a\"",
                  "value": "a"
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 946,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 951,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 894,
              "end": 902,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 894,
                "end": 897,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 898,
                "end": 902,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 706,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 710,
          "end": 817,
          "decorators": [],
          "name": "foo",
          "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 723,
                        "end": 727,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "\"a\"",
                            "value": "a"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 734,
                      "end": 746,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 738,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 738,
                        "end": 746,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 740,
                          "end": 746
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 761,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "\"b\"",
                            "value": "b"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 768,
                      "end": 780,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 768,
                        "end": 772,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 772,
                        "end": 780,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 774,
                          "end": 780
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 791,
                        "end": 795,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "\"c\"",
                            "value": "c"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 802,
                      "end": 815,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 802,
                        "end": 806,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 806,
                        "end": 815,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 808,
                          "end": 815
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 821,
          "end": 847,
          "decorators": [],
          "name": "bar",
          "optional": true,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 833,
                    "end": 837,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "raw": "\"b\"",
                        "value": "b"
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
