__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4785,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
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
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 20,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 15,
              "end": 20,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 15,
                  "end": 16,
                  "literal": {
                    "type": "Literal",
                    "start": 15,
                    "end": 16,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 19,
                  "end": 20,
                  "literal": {
                    "type": "Literal",
                    "start": 19,
                    "end": 20,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 21,
        "end": 29,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 23,
          "end": 29
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 213,
        "body": [
          {
            "type": "IfStatement",
            "start": 36,
            "end": 211,
            "test": {
              "type": "UnaryExpression",
              "start": 40,
              "end": 46,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 41,
                "end": 46,
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "start": 42,
                  "end": 46,
                  "value": true,
                  "raw": "true"
                },
                "prefix": true
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 48,
              "end": 177,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 58,
                  "end": 144,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 83,
                      "end": 102,
                      "test": {
                        "type": "Literal",
                        "start": 88,
                        "end": 89,
                        "value": 1,
                        "raw": "1"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 91,
                          "end": 102,
                          "argument": {
                            "type": "Literal",
                            "start": 98,
                            "end": 101,
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 115,
                      "end": 134,
                      "test": {
                        "type": "Literal",
                        "start": 120,
                        "end": 121,
                        "value": 2,
                        "raw": "2"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 123,
                          "end": 134,
                          "argument": {
                            "type": "Literal",
                            "start": 130,
                            "end": 133,
                            "value": "b",
                            "raw": "'b'"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 155,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 187,
              "end": 211,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 197,
                  "end": 205,
                  "argument": {
                    "type": "Literal",
                    "start": 203,
                    "end": 204,
                    "value": 0,
                    "raw": "0"
                  }
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
      "start": 215,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "f2",
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
          "start": 227,
          "end": 235,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 235,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 230,
              "end": 235,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 230,
                  "end": 231,
                  "literal": {
                    "type": "Literal",
                    "start": 230,
                    "end": 231,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 234,
                  "end": 235,
                  "literal": {
                    "type": "Literal",
                    "start": 234,
                    "end": 235,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 375,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 243,
            "end": 257,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 247,
                "end": 256,
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 256,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 250,
                      "end": 256
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 262,
            "end": 342,
            "discriminant": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 283,
                "end": 305,
                "test": {
                  "type": "Literal",
                  "start": 288,
                  "end": 289,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 291,
                    "end": 298,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 291,
                      "end": 297,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 292,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 295,
                        "end": 297,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 299,
                    "end": 305,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 314,
                "end": 336,
                "test": {
                  "type": "Literal",
                  "start": 319,
                  "end": 320,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 322,
                    "end": 329,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 322,
                      "end": 328,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 326,
                        "end": 328,
                        "value": 20,
                        "raw": "20"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 330,
                    "end": 336,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 347,
            "end": 349,
            "expression": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 592,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 388,
        "decorators": [],
        "name": "f3",
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
          "start": 389,
          "end": 397,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 390,
            "end": 397,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 392,
              "end": 397,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 392,
                  "end": 393,
                  "literal": {
                    "type": "Literal",
                    "start": 392,
                    "end": 393,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 396,
                  "end": 397,
                  "literal": {
                    "type": "Literal",
                    "start": 396,
                    "end": 397,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 399,
        "end": 592,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 405,
            "end": 590,
            "discriminant": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 426,
                "end": 444,
                "test": {
                  "type": "Literal",
                  "start": 431,
                  "end": 432,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 434,
                    "end": 444,
                    "argument": {
                      "type": "Literal",
                      "start": 441,
                      "end": 443,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 453,
                "end": 471,
                "test": {
                  "type": "Literal",
                  "start": 458,
                  "end": 459,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 461,
                    "end": 471,
                    "argument": {
                      "type": "Literal",
                      "start": 468,
                      "end": 470,
                      "value": 20,
                      "raw": "20"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 546,
                "end": 584,
                "test": null,
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "start": 555,
                    "end": 584,
                    "argument": {
                      "type": "NewExpression",
                      "start": 561,
                      "end": 583,
                      "callee": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 570,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 571,
                          "end": 582,
                          "value": "Bad input",
                          "raw": "\"Bad input\""
                        }
                      ]
                    }
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
      "type": "TSEnumDeclaration",
      "start": 616,
      "end": 631,
      "id": {
        "type": "Identifier",
        "start": 621,
        "end": 622,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 623,
        "end": 631,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 625,
            "end": 626,
            "id": {
              "type": "Identifier",
              "start": 625,
              "end": 626,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 628,
            "end": 629,
            "id": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 633,
      "end": 738,
      "id": {
        "type": "Identifier",
        "start": 642,
        "end": 643,
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
          "start": 644,
          "end": 648,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 645,
            "end": 648,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 647,
              "end": 648,
              "typeName": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 649,
        "end": 657,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 651,
          "end": 657
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 658,
        "end": 738,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 664,
            "end": 736,
            "discriminant": {
              "type": "Identifier",
              "start": 672,
              "end": 673,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 685,
                "end": 703,
                "test": {
                  "type": "MemberExpression",
                  "start": 690,
                  "end": 693,
                  "object": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 691,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 693,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 695,
                    "end": 703,
                    "argument": {
                      "type": "Literal",
                      "start": 702,
                      "end": 703,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 712,
                "end": 730,
                "test": {
                  "type": "MemberExpression",
                  "start": 717,
                  "end": 720,
                  "object": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 718,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 719,
                    "end": 720,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 722,
                    "end": 730,
                    "argument": {
                      "type": "Literal",
                      "start": 729,
                      "end": 730,
                      "value": 1,
                      "raw": "1"
                    }
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
      "start": 740,
      "end": 903,
      "id": {
        "type": "Identifier",
        "start": 749,
        "end": 750,
        "decorators": [],
        "name": "g",
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
          "start": 751,
          "end": 755,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 752,
            "end": 755,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 754,
              "end": 755,
              "typeName": {
                "type": "Identifier",
                "start": 754,
                "end": 755,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 756,
        "end": 764,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 758,
          "end": 764
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 765,
        "end": 903,
        "body": [
          {
            "type": "IfStatement",
            "start": 771,
            "end": 901,
            "test": {
              "type": "UnaryExpression",
              "start": 775,
              "end": 780,
              "operator": "!",
              "argument": {
                "type": "Literal",
                "start": 776,
                "end": 780,
                "value": true,
                "raw": "true"
              },
              "prefix": true
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 790,
              "end": 799,
              "argument": {
                "type": "UnaryExpression",
                "start": 797,
                "end": 799,
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "start": 798,
                  "end": 799,
                  "value": 1,
                  "raw": "1"
                },
                "prefix": true
              }
            },
            "alternate": {
              "type": "SwitchStatement",
              "start": 817,
              "end": 901,
              "discriminant": {
                "type": "Identifier",
                "start": 825,
                "end": 826,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "start": 842,
                  "end": 860,
                  "test": {
                    "type": "MemberExpression",
                    "start": 847,
                    "end": 850,
                    "object": {
                      "type": "Identifier",
                      "start": 847,
                      "end": 848,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 850,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "consequent": [
                    {
                      "type": "ReturnStatement",
                      "start": 852,
                      "end": 860,
                      "argument": {
                        "type": "Literal",
                        "start": 859,
                        "end": 860,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                {
                  "type": "SwitchCase",
                  "start": 873,
                  "end": 891,
                  "test": {
                    "type": "MemberExpression",
                    "start": 878,
                    "end": 881,
                    "object": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 879,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 880,
                      "end": 881,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "consequent": [
                    {
                      "type": "ReturnStatement",
                      "start": 883,
                      "end": 891,
                      "argument": {
                        "type": "Literal",
                        "start": 890,
                        "end": 891,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 927,
      "end": 977,
      "id": {
        "type": "Identifier",
        "start": 937,
        "end": 943,
        "decorators": [],
        "name": "Square",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 944,
        "end": 977,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 946,
            "end": 961,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 950,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 950,
              "end": 960,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 952,
                "end": 960,
                "literal": {
                  "type": "Literal",
                  "start": 952,
                  "end": 960,
                  "value": "square",
                  "raw": "\"square\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 962,
            "end": 975,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 962,
              "end": 966,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 966,
              "end": 974,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 968,
                "end": 974
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
      "start": 979,
      "end": 1052,
      "id": {
        "type": "Identifier",
        "start": 989,
        "end": 998,
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 999,
        "end": 1052,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1001,
            "end": 1019,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1001,
              "end": 1005,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1005,
              "end": 1018,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1007,
                "end": 1018,
                "literal": {
                  "type": "Literal",
                  "start": 1007,
                  "end": 1018,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1020,
            "end": 1034,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1020,
              "end": 1025,
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1025,
              "end": 1033,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1027,
                "end": 1033
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1035,
            "end": 1050,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1035,
              "end": 1041,
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1041,
              "end": 1049,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1043,
                "end": 1049
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
      "start": 1054,
      "end": 1106,
      "id": {
        "type": "Identifier",
        "start": 1064,
        "end": 1070,
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1071,
        "end": 1106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1073,
            "end": 1088,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1073,
              "end": 1077,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1077,
              "end": 1087,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1079,
                "end": 1087,
                "literal": {
                  "type": "Literal",
                  "start": 1079,
                  "end": 1087,
                  "value": "circle",
                  "raw": "\"circle\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1089,
            "end": 1104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1089,
              "end": 1095,
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1095,
              "end": 1103,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1097,
                "end": 1103
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
      "start": 1108,
      "end": 1162,
      "id": {
        "type": "Identifier",
        "start": 1118,
        "end": 1126,
        "decorators": [],
        "name": "Triangle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1127,
        "end": 1162,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1129,
            "end": 1146,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1129,
              "end": 1133,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1133,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1135,
                "end": 1145,
                "literal": {
                  "type": "Literal",
                  "start": 1135,
                  "end": 1145,
                  "value": "triangle",
                  "raw": "\"triangle\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1147,
            "end": 1160,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1147,
              "end": 1151,
              "decorators": [],
              "name": "side",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1151,
              "end": 1159,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1153,
                "end": 1159
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
      "start": 1164,
      "end": 1216,
      "id": {
        "type": "Identifier",
        "start": 1169,
        "end": 1174,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1177,
        "end": 1215,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1177,
            "end": 1183,
            "typeName": {
              "type": "Identifier",
              "start": 1177,
              "end": 1183,
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1186,
            "end": 1195,
            "typeName": {
              "type": "Identifier",
              "start": 1186,
              "end": 1195,
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1198,
            "end": 1204,
            "typeName": {
              "type": "Identifier",
              "start": 1198,
              "end": 1204,
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1207,
            "end": 1215,
            "typeName": {
              "type": "Identifier",
              "start": 1207,
              "end": 1215,
              "decorators": [],
              "name": "Triangle",
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
      "start": 1218,
      "end": 1569,
      "id": {
        "type": "Identifier",
        "start": 1227,
        "end": 1231,
        "decorators": [],
        "name": "area",
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
          "start": 1232,
          "end": 1240,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1233,
            "end": 1240,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1235,
              "end": 1240,
              "typeName": {
                "type": "Identifier",
                "start": 1235,
                "end": 1240,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1241,
        "end": 1249,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1243,
          "end": 1249
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1250,
        "end": 1569,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1256,
            "end": 1265,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1260,
                "end": 1264,
                "id": {
                  "type": "Identifier",
                  "start": 1260,
                  "end": 1264,
                  "decorators": [],
                  "name": "area",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 1270,
            "end": 1550,
            "discriminant": {
              "type": "MemberExpression",
              "start": 1278,
              "end": 1284,
              "object": {
                "type": "Identifier",
                "start": 1278,
                "end": 1279,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1280,
                "end": 1284,
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
                "start": 1296,
                "end": 1341,
                "test": {
                  "type": "Literal",
                  "start": 1301,
                  "end": 1309,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1311,
                    "end": 1334,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1311,
                      "end": 1333,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1311,
                        "end": 1315,
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 1318,
                        "end": 1333,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1318,
                          "end": 1324,
                          "object": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1319,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1320,
                            "end": 1324,
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1327,
                          "end": 1333,
                          "object": {
                            "type": "Identifier",
                            "start": 1327,
                            "end": 1328,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1329,
                            "end": 1333,
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1335,
                    "end": 1341,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1350,
                "end": 1401,
                "test": {
                  "type": "Literal",
                  "start": 1355,
                  "end": 1366,
                  "value": "rectangle",
                  "raw": "\"rectangle\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1368,
                    "end": 1394,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1368,
                      "end": 1393,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1368,
                        "end": 1372,
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 1375,
                        "end": 1393,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1375,
                          "end": 1382,
                          "object": {
                            "type": "Identifier",
                            "start": 1375,
                            "end": 1376,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1377,
                            "end": 1382,
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1385,
                          "end": 1393,
                          "object": {
                            "type": "Identifier",
                            "start": 1385,
                            "end": 1386,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1387,
                            "end": 1393,
                            "decorators": [],
                            "name": "height",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1395,
                    "end": 1401,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1410,
                "end": 1469,
                "test": {
                  "type": "Literal",
                  "start": 1415,
                  "end": 1423,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1425,
                    "end": 1462,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1425,
                      "end": 1461,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1425,
                        "end": 1429,
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 1432,
                        "end": 1461,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1432,
                          "end": 1450,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1432,
                            "end": 1439,
                            "object": {
                              "type": "Identifier",
                              "start": 1432,
                              "end": 1436,
                              "decorators": [],
                              "name": "Math",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1437,
                              "end": 1439,
                              "decorators": [],
                              "name": "PI",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "*",
                          "right": {
                            "type": "MemberExpression",
                            "start": 1442,
                            "end": 1450,
                            "object": {
                              "type": "Identifier",
                              "start": 1442,
                              "end": 1443,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1444,
                              "end": 1450,
                              "decorators": [],
                              "name": "radius",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1453,
                          "end": 1461,
                          "object": {
                            "type": "Identifier",
                            "start": 1453,
                            "end": 1454,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1455,
                            "end": 1461,
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1463,
                    "end": 1469,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1478,
                "end": 1544,
                "test": {
                  "type": "Literal",
                  "start": 1483,
                  "end": 1493,
                  "value": "triangle",
                  "raw": "\"triangle\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1495,
                    "end": 1537,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1495,
                      "end": 1536,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1495,
                        "end": 1499,
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 1502,
                        "end": 1536,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1502,
                          "end": 1527,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1502,
                            "end": 1518,
                            "left": {
                              "type": "CallExpression",
                              "start": 1502,
                              "end": 1514,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1502,
                                "end": 1511,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1502,
                                  "end": 1506,
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1507,
                                  "end": 1511,
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1512,
                                  "end": 1513,
                                  "value": 3,
                                  "raw": "3"
                                }
                              ],
                              "optional": false
                            },
                            "operator": "/",
                            "right": {
                              "type": "Literal",
                              "start": 1517,
                              "end": 1518,
                              "value": 4,
                              "raw": "4"
                            }
                          },
                          "operator": "*",
                          "right": {
                            "type": "MemberExpression",
                            "start": 1521,
                            "end": 1527,
                            "object": {
                              "type": "Identifier",
                              "start": 1521,
                              "end": 1522,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1523,
                              "end": 1527,
                              "decorators": [],
                              "name": "side",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "start": 1530,
                          "end": 1536,
                          "object": {
                            "type": "Identifier",
                            "start": 1530,
                            "end": 1531,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1532,
                            "end": 1536,
                            "decorators": [],
                            "name": "side",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1538,
                    "end": 1544,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 1555,
            "end": 1567,
            "argument": {
              "type": "Identifier",
              "start": 1562,
              "end": 1566,
              "decorators": [],
              "name": "area",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1571,
      "end": 1955,
      "id": {
        "type": "Identifier",
        "start": 1580,
        "end": 1591,
        "decorators": [],
        "name": "areaWrapped",
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
          "start": 1592,
          "end": 1600,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1593,
            "end": 1600,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1595,
              "end": 1600,
              "typeName": {
                "type": "Identifier",
                "start": 1595,
                "end": 1600,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1601,
        "end": 1609,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1603,
          "end": 1609
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1610,
        "end": 1955,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1616,
            "end": 1625,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1620,
                "end": 1624,
                "id": {
                  "type": "Identifier",
                  "start": 1620,
                  "end": 1624,
                  "decorators": [],
                  "name": "area",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1630,
            "end": 1936,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1630,
              "end": 1935,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1630,
                "end": 1634,
                "decorators": [],
                "name": "area",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 1637,
                "end": 1935,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 1638,
                  "end": 1932,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1644,
                    "end": 1932,
                    "body": [
                      {
                        "type": "SwitchStatement",
                        "start": 1654,
                        "end": 1926,
                        "discriminant": {
                          "type": "MemberExpression",
                          "start": 1662,
                          "end": 1668,
                          "object": {
                            "type": "Identifier",
                            "start": 1662,
                            "end": 1663,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1664,
                            "end": 1668,
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
                            "start": 1684,
                            "end": 1722,
                            "test": {
                              "type": "Literal",
                              "start": 1689,
                              "end": 1697,
                              "value": "square",
                              "raw": "\"square\""
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 1699,
                                "end": 1722,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 1706,
                                  "end": 1721,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 1706,
                                    "end": 1712,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1706,
                                      "end": 1707,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1708,
                                      "end": 1712,
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 1715,
                                    "end": 1721,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1715,
                                      "end": 1716,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1717,
                                      "end": 1721,
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1735,
                            "end": 1779,
                            "test": {
                              "type": "Literal",
                              "start": 1740,
                              "end": 1751,
                              "value": "rectangle",
                              "raw": "\"rectangle\""
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 1753,
                                "end": 1779,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 1760,
                                  "end": 1778,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 1760,
                                    "end": 1767,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1760,
                                      "end": 1761,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1762,
                                      "end": 1767,
                                      "decorators": [],
                                      "name": "width",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 1770,
                                    "end": 1778,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1770,
                                      "end": 1771,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1772,
                                      "end": 1778,
                                      "decorators": [],
                                      "name": "height",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1792,
                            "end": 1844,
                            "test": {
                              "type": "Literal",
                              "start": 1797,
                              "end": 1805,
                              "value": "circle",
                              "raw": "\"circle\""
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 1807,
                                "end": 1844,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 1814,
                                  "end": 1843,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 1814,
                                    "end": 1832,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1814,
                                      "end": 1821,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1814,
                                        "end": 1818,
                                        "decorators": [],
                                        "name": "Math",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1819,
                                        "end": 1821,
                                        "decorators": [],
                                        "name": "PI",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 1824,
                                      "end": 1832,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1824,
                                        "end": 1825,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1826,
                                        "end": 1832,
                                        "decorators": [],
                                        "name": "radius",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 1835,
                                    "end": 1843,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1835,
                                      "end": 1836,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1837,
                                      "end": 1843,
                                      "decorators": [],
                                      "name": "radius",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1857,
                            "end": 1916,
                            "test": {
                              "type": "Literal",
                              "start": 1862,
                              "end": 1872,
                              "value": "triangle",
                              "raw": "\"triangle\""
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 1874,
                                "end": 1916,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 1881,
                                  "end": 1915,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 1881,
                                    "end": 1906,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 1881,
                                      "end": 1897,
                                      "left": {
                                        "type": "CallExpression",
                                        "start": 1881,
                                        "end": 1893,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1881,
                                          "end": 1890,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1881,
                                            "end": 1885,
                                            "decorators": [],
                                            "name": "Math",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1886,
                                            "end": 1890,
                                            "decorators": [],
                                            "name": "sqrt",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "start": 1891,
                                            "end": 1892,
                                            "value": 3,
                                            "raw": "3"
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "operator": "/",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1896,
                                        "end": 1897,
                                        "value": 4,
                                        "raw": "4"
                                      }
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 1900,
                                      "end": 1906,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1900,
                                        "end": 1901,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1902,
                                        "end": 1906,
                                        "decorators": [],
                                        "name": "side",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 1909,
                                    "end": 1915,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1909,
                                      "end": 1910,
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1911,
                                      "end": 1915,
                                      "decorators": [],
                                      "name": "side",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1941,
            "end": 1953,
            "argument": {
              "type": "Identifier",
              "start": 1948,
              "end": 1952,
              "decorators": [],
              "name": "area",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1979,
      "end": 2001,
      "id": {
        "type": "Identifier",
        "start": 1984,
        "end": 1990,
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 1991,
        "end": 2001,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1994,
            "end": 1995,
            "id": {
              "type": "Identifier",
              "start": 1994,
              "end": 1995,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1998,
            "end": 1999,
            "id": {
              "type": "Identifier",
              "start": 1998,
              "end": 1999,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2003,
      "end": 2173,
      "id": {
        "type": "Identifier",
        "start": 2012,
        "end": 2026,
        "decorators": [],
        "name": "thisGivesError",
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
          "start": 2027,
          "end": 2036,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2028,
            "end": 2036,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2030,
              "end": 2036,
              "typeName": {
                "type": "Identifier",
                "start": 2030,
                "end": 2036,
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2037,
        "end": 2045,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2039,
          "end": 2045
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2046,
        "end": 2173,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2049,
            "end": 2063,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2053,
                "end": 2062,
                "id": {
                  "type": "Identifier",
                  "start": 2053,
                  "end": 2062,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2054,
                    "end": 2062,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2056,
                      "end": 2062
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 2065,
            "end": 2160,
            "discriminant": {
              "type": "Identifier",
              "start": 2073,
              "end": 2074,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2080,
                "end": 2117,
                "test": {
                  "type": "MemberExpression",
                  "start": 2085,
                  "end": 2093,
                  "object": {
                    "type": "Identifier",
                    "start": 2085,
                    "end": 2091,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2092,
                    "end": 2093,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2095,
                    "end": 2110,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2095,
                      "end": 2109,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2095,
                        "end": 2096,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2099,
                        "end": 2109,
                        "value": "it was A",
                        "raw": "\"it was A\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2111,
                    "end": 2117,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2120,
                "end": 2157,
                "test": {
                  "type": "MemberExpression",
                  "start": 2125,
                  "end": 2133,
                  "object": {
                    "type": "Identifier",
                    "start": 2125,
                    "end": 2131,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2132,
                    "end": 2133,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2135,
                    "end": 2150,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2135,
                      "end": 2149,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2135,
                        "end": 2136,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2139,
                        "end": 2149,
                        "value": "it was B",
                        "raw": "\"it was B\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2151,
                    "end": 2157,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2162,
            "end": 2171,
            "argument": {
              "type": "Identifier",
              "start": 2169,
              "end": 2170,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2175,
      "end": 2383,
      "id": {
        "type": "Identifier",
        "start": 2184,
        "end": 2189,
        "decorators": [],
        "name": "good1",
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
          "start": 2190,
          "end": 2199,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2191,
            "end": 2199,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2193,
              "end": 2199,
              "typeName": {
                "type": "Identifier",
                "start": 2193,
                "end": 2199,
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2200,
        "end": 2208,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2202,
          "end": 2208
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2209,
        "end": 2383,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2212,
            "end": 2226,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2216,
                "end": 2225,
                "id": {
                  "type": "Identifier",
                  "start": 2216,
                  "end": 2225,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2217,
                    "end": 2225,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2219,
                      "end": 2225
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 2228,
            "end": 2370,
            "discriminant": {
              "type": "Identifier",
              "start": 2236,
              "end": 2237,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2243,
                "end": 2280,
                "test": {
                  "type": "MemberExpression",
                  "start": 2248,
                  "end": 2256,
                  "object": {
                    "type": "Identifier",
                    "start": 2248,
                    "end": 2254,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2255,
                    "end": 2256,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2258,
                    "end": 2273,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2258,
                      "end": 2272,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2258,
                        "end": 2259,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2262,
                        "end": 2272,
                        "value": "it was A",
                        "raw": "\"it was A\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2274,
                    "end": 2280,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2283,
                "end": 2320,
                "test": {
                  "type": "MemberExpression",
                  "start": 2288,
                  "end": 2296,
                  "object": {
                    "type": "Identifier",
                    "start": 2288,
                    "end": 2294,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2295,
                    "end": 2296,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2298,
                    "end": 2313,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2298,
                      "end": 2312,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2298,
                        "end": 2299,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2302,
                        "end": 2312,
                        "value": "it was B",
                        "raw": "\"it was B\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2314,
                    "end": 2320,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2323,
                "end": 2367,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2332,
                    "end": 2360,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2332,
                      "end": 2359,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2332,
                        "end": 2333,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2336,
                        "end": 2359,
                        "value": "it was something else",
                        "raw": "\"it was something else\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2361,
                    "end": 2367,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2372,
            "end": 2381,
            "argument": {
              "type": "Identifier",
              "start": 2379,
              "end": 2380,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2385,
      "end": 2511,
      "id": {
        "type": "Identifier",
        "start": 2394,
        "end": 2399,
        "decorators": [],
        "name": "good2",
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
          "start": 2400,
          "end": 2409,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2401,
            "end": 2409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2403,
              "end": 2409,
              "typeName": {
                "type": "Identifier",
                "start": 2403,
                "end": 2409,
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2410,
        "end": 2418,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2412,
          "end": 2418
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2419,
        "end": 2511,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2422,
            "end": 2509,
            "discriminant": {
              "type": "Identifier",
              "start": 2430,
              "end": 2431,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2437,
                "end": 2470,
                "test": {
                  "type": "MemberExpression",
                  "start": 2442,
                  "end": 2450,
                  "object": {
                    "type": "Identifier",
                    "start": 2442,
                    "end": 2448,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2449,
                    "end": 2450,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2452,
                    "end": 2470,
                    "argument": {
                      "type": "Literal",
                      "start": 2459,
                      "end": 2469,
                      "value": "it was A",
                      "raw": "\"it was A\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2473,
                "end": 2506,
                "test": {
                  "type": "MemberExpression",
                  "start": 2478,
                  "end": 2486,
                  "object": {
                    "type": "Identifier",
                    "start": 2478,
                    "end": 2484,
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2485,
                    "end": 2486,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2488,
                    "end": 2506,
                    "argument": {
                      "type": "Literal",
                      "start": 2495,
                      "end": 2505,
                      "value": "it was B",
                      "raw": "\"it was B\""
                    }
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
      "type": "TSEnumDeclaration",
      "start": 2535,
      "end": 2563,
      "id": {
        "type": "Identifier",
        "start": 2540,
        "end": 2545,
        "decorators": [],
        "name": "Level",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 2546,
        "end": 2563,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 2550,
            "end": 2553,
            "id": {
              "type": "Identifier",
              "start": 2550,
              "end": 2553,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 2557,
            "end": 2560,
            "id": {
              "type": "Identifier",
              "start": 2557,
              "end": 2560,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2565,
      "end": 2787,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2571,
          "end": 2786,
          "id": {
            "type": "Identifier",
            "start": 2571,
            "end": 2591,
            "decorators": [],
            "name": "doSomethingWithLevel",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2594,
            "end": 2786,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2595,
                "end": 2607,
                "decorators": [],
                "name": "level",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2600,
                  "end": 2607,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2602,
                    "end": 2607,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2602,
                      "end": 2607,
                      "decorators": [],
                      "name": "Level",
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
              "start": 2612,
              "end": 2786,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2616,
                  "end": 2632,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2620,
                      "end": 2631,
                      "id": {
                        "type": "Identifier",
                        "start": 2620,
                        "end": 2631,
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2624,
                          "end": 2631,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2626,
                            "end": 2631,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2626,
                              "end": 2631,
                              "decorators": [],
                              "name": "Level",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "SwitchStatement",
                  "start": 2635,
                  "end": 2769,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 2643,
                    "end": 2648,
                    "decorators": [],
                    "name": "level",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 2656,
                      "end": 2708,
                      "test": {
                        "type": "MemberExpression",
                        "start": 2661,
                        "end": 2670,
                        "object": {
                          "type": "Identifier",
                          "start": 2661,
                          "end": 2666,
                          "decorators": [],
                          "name": "Level",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2667,
                          "end": 2670,
                          "decorators": [],
                          "name": "One",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2678,
                          "end": 2695,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2678,
                            "end": 2694,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2678,
                              "end": 2682,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 2685,
                              "end": 2694,
                              "object": {
                                "type": "Identifier",
                                "start": 2685,
                                "end": 2690,
                                "decorators": [],
                                "name": "Level",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2691,
                                "end": 2694,
                                "decorators": [],
                                "name": "Two",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "BreakStatement",
                          "start": 2702,
                          "end": 2708,
                          "label": null
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 2713,
                      "end": 2765,
                      "test": {
                        "type": "MemberExpression",
                        "start": 2718,
                        "end": 2727,
                        "object": {
                          "type": "Identifier",
                          "start": 2718,
                          "end": 2723,
                          "decorators": [],
                          "name": "Level",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2724,
                          "end": 2727,
                          "decorators": [],
                          "name": "Two",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2735,
                          "end": 2752,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2735,
                            "end": 2751,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 2735,
                              "end": 2739,
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 2742,
                              "end": 2751,
                              "object": {
                                "type": "Identifier",
                                "start": 2742,
                                "end": 2747,
                                "decorators": [],
                                "name": "Level",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2748,
                                "end": 2751,
                                "decorators": [],
                                "name": "One",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "BreakStatement",
                          "start": 2759,
                          "end": 2765,
                          "label": null
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ReturnStatement",
                  "start": 2772,
                  "end": 2784,
                  "argument": {
                    "type": "Identifier",
                    "start": 2779,
                    "end": 2783,
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2811,
      "end": 2870,
      "id": {
        "type": "Identifier",
        "start": 2821,
        "end": 2828,
        "decorators": [],
        "name": "Square2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2829,
        "end": 2870,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2835,
            "end": 2850,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2835,
              "end": 2839,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2839,
              "end": 2849,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2841,
                "end": 2849,
                "literal": {
                  "type": "Literal",
                  "start": 2841,
                  "end": 2849,
                  "value": "square",
                  "raw": "\"square\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2855,
            "end": 2868,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2855,
              "end": 2859,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2859,
              "end": 2867,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2861,
                "end": 2867
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
      "start": 2872,
      "end": 2933,
      "id": {
        "type": "Identifier",
        "start": 2882,
        "end": 2889,
        "decorators": [],
        "name": "Circle2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2890,
        "end": 2933,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2896,
            "end": 2911,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2896,
              "end": 2900,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2900,
              "end": 2910,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2902,
                "end": 2910,
                "literal": {
                  "type": "Literal",
                  "start": 2902,
                  "end": 2910,
                  "value": "circle",
                  "raw": "\"circle\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2916,
            "end": 2931,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2916,
              "end": 2922,
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2922,
              "end": 2930,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2924,
                "end": 2930
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
      "start": 2935,
      "end": 2967,
      "id": {
        "type": "Identifier",
        "start": 2940,
        "end": 2946,
        "decorators": [],
        "name": "Shape2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2949,
        "end": 2966,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2949,
            "end": 2956,
            "typeName": {
              "type": "Identifier",
              "start": 2949,
              "end": 2956,
              "decorators": [],
              "name": "Square2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 2959,
            "end": 2966,
            "typeName": {
              "type": "Identifier",
              "start": 2959,
              "end": 2966,
              "decorators": [],
              "name": "Circle2",
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
      "start": 2969,
      "end": 3356,
      "id": {
        "type": "Identifier",
        "start": 2978,
        "end": 2989,
        "decorators": [],
        "name": "withDefault",
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
          "start": 2990,
          "end": 3000,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2992,
            "end": 3000,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2994,
              "end": 3000,
              "typeName": {
                "type": "Identifier",
                "start": 2994,
                "end": 3000,
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3002,
          "end": 3012,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3004,
            "end": 3012,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3006,
              "end": 3012,
              "typeName": {
                "type": "Identifier",
                "start": 3006,
                "end": 3012,
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3013,
        "end": 3021,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3015,
          "end": 3021
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3022,
        "end": 3356,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 3028,
            "end": 3354,
            "discriminant": {
              "type": "MemberExpression",
              "start": 3036,
              "end": 3043,
              "object": {
                "type": "Identifier",
                "start": 3036,
                "end": 3038,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3039,
                "end": 3043,
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
                "start": 3055,
                "end": 3093,
                "test": {
                  "type": "Literal",
                  "start": 3060,
                  "end": 3068,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3082,
                    "end": 3093,
                    "argument": {
                      "type": "Literal",
                      "start": 3089,
                      "end": 3092,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3102,
                "end": 3348,
                "test": {
                  "type": "Literal",
                  "start": 3107,
                  "end": 3115,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "start": 3129,
                    "end": 3348,
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 3137,
                      "end": 3144,
                      "object": {
                        "type": "Identifier",
                        "start": 3137,
                        "end": 3139,
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3140,
                        "end": 3144,
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
                        "start": 3164,
                        "end": 3210,
                        "test": {
                          "type": "Literal",
                          "start": 3169,
                          "end": 3177,
                          "value": "square",
                          "raw": "\"square\""
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 3199,
                            "end": 3210,
                            "argument": {
                              "type": "Literal",
                              "start": 3206,
                              "end": 3209,
                              "value": "2",
                              "raw": "\"2\""
                            }
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 3227,
                        "end": 3273,
                        "test": {
                          "type": "Literal",
                          "start": 3232,
                          "end": 3240,
                          "value": "circle",
                          "raw": "\"circle\""
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 3262,
                            "end": 3273,
                            "argument": {
                              "type": "Literal",
                              "start": 3269,
                              "end": 3272,
                              "value": "3",
                              "raw": "\"3\""
                            }
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 3290,
                        "end": 3334,
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 3319,
                            "end": 3334,
                            "argument": {
                              "type": "Literal",
                              "start": 3326,
                              "end": 3333,
                              "value": "never",
                              "raw": "\"never\""
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
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3358,
      "end": 3687,
      "id": {
        "type": "Identifier",
        "start": 3367,
        "end": 3381,
        "decorators": [],
        "name": "withoutDefault",
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
          "start": 3382,
          "end": 3392,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3384,
            "end": 3392,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3386,
              "end": 3392,
              "typeName": {
                "type": "Identifier",
                "start": 3386,
                "end": 3392,
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3394,
          "end": 3404,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3396,
            "end": 3404,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3398,
              "end": 3404,
              "typeName": {
                "type": "Identifier",
                "start": 3398,
                "end": 3404,
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3405,
        "end": 3413,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3407,
          "end": 3413
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3414,
        "end": 3687,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 3420,
            "end": 3685,
            "discriminant": {
              "type": "MemberExpression",
              "start": 3428,
              "end": 3435,
              "object": {
                "type": "Identifier",
                "start": 3428,
                "end": 3430,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3431,
                "end": 3435,
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
                "start": 3447,
                "end": 3485,
                "test": {
                  "type": "Literal",
                  "start": 3452,
                  "end": 3460,
                  "value": "square",
                  "raw": "\"square\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3474,
                    "end": 3485,
                    "argument": {
                      "type": "Literal",
                      "start": 3481,
                      "end": 3484,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3494,
                "end": 3679,
                "test": {
                  "type": "Literal",
                  "start": 3499,
                  "end": 3507,
                  "value": "circle",
                  "raw": "\"circle\""
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "start": 3521,
                    "end": 3679,
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 3529,
                      "end": 3536,
                      "object": {
                        "type": "Identifier",
                        "start": 3529,
                        "end": 3531,
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3532,
                        "end": 3536,
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
                        "start": 3556,
                        "end": 3602,
                        "test": {
                          "type": "Literal",
                          "start": 3561,
                          "end": 3569,
                          "value": "square",
                          "raw": "\"square\""
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 3591,
                            "end": 3602,
                            "argument": {
                              "type": "Literal",
                              "start": 3598,
                              "end": 3601,
                              "value": "2",
                              "raw": "\"2\""
                            }
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 3619,
                        "end": 3665,
                        "test": {
                          "type": "Literal",
                          "start": 3624,
                          "end": 3632,
                          "value": "circle",
                          "raw": "\"circle\""
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "start": 3654,
                            "end": 3665,
                            "argument": {
                              "type": "Literal",
                              "start": 3661,
                              "end": 3664,
                              "value": "3",
                              "raw": "\"3\""
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
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3711,
      "end": 3871,
      "id": {
        "type": "Identifier",
        "start": 3720,
        "end": 3725,
        "decorators": [],
        "name": "test4",
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
          "start": 3726,
          "end": 3738,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3731,
            "end": 3738,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3733,
              "end": 3738,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 3733,
                  "end": 3734,
                  "literal": {
                    "type": "Literal",
                    "start": 3733,
                    "end": 3734,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 3737,
                  "end": 3738,
                  "literal": {
                    "type": "Literal",
                    "start": 3737,
                    "end": 3738,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3740,
        "end": 3871,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3746,
            "end": 3760,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3750,
                "end": 3759,
                "id": {
                  "type": "Identifier",
                  "start": 3750,
                  "end": 3759,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3751,
                    "end": 3759,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3753,
                      "end": 3759
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 3765,
            "end": 3855,
            "discriminant": {
              "type": "Identifier",
              "start": 3773,
              "end": 3778,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 3790,
                "end": 3815,
                "test": {
                  "type": "Literal",
                  "start": 3795,
                  "end": 3796,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3798,
                    "end": 3808,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3798,
                      "end": 3807,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3798,
                        "end": 3799,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3802,
                        "end": 3807,
                        "value": "one",
                        "raw": "\"one\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3809,
                    "end": 3815,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3824,
                "end": 3849,
                "test": {
                  "type": "Literal",
                  "start": 3829,
                  "end": 3830,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3832,
                    "end": 3842,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3832,
                      "end": 3841,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3832,
                        "end": 3833,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3836,
                        "end": 3841,
                        "value": "two",
                        "raw": "\"two\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3843,
                    "end": 3849,
                    "label": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 3860,
            "end": 3869,
            "argument": {
              "type": "Identifier",
              "start": 3867,
              "end": 3868,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 3895,
      "end": 3919,
      "id": {
        "type": "Identifier",
        "start": 3900,
        "end": 3906,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 3907,
        "end": 3919,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 3909,
            "end": 3912,
            "id": {
              "type": "Identifier",
              "start": 3909,
              "end": 3912,
              "decorators": [],
              "name": "DOG",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 3914,
            "end": 3917,
            "id": {
              "type": "Identifier",
              "start": 3914,
              "end": 3917,
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3921,
      "end": 3971,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3935,
          "end": 3970,
          "id": {
            "type": "Identifier",
            "start": 3935,
            "end": 3970,
            "decorators": [],
            "name": "zoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3938,
              "end": 3970,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3940,
                "end": 3970,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 3940,
                    "end": 3958,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3942,
                        "end": 3956,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3942,
                          "end": 3948,
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3948,
                          "end": 3956,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3950,
                            "end": 3956,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3950,
                              "end": 3956,
                              "decorators": [],
                              "name": "Animal",
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
                    "type": "TSUndefinedKeyword",
                    "start": 3961,
                    "end": 3970
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 3973,
      "end": 4139,
      "id": {
        "type": "Identifier",
        "start": 3982,
        "end": 3992,
        "decorators": [],
        "name": "expression",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3994,
        "end": 4002,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3996,
          "end": 4002,
          "typeName": {
            "type": "Identifier",
            "start": 3996,
            "end": 4002,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4003,
        "end": 4139,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4009,
            "end": 4137,
            "discriminant": {
              "type": "LogicalExpression",
              "start": 4017,
              "end": 4042,
              "left": {
                "type": "ChainExpression",
                "start": 4017,
                "end": 4028,
                "expression": {
                  "type": "MemberExpression",
                  "start": 4017,
                  "end": 4028,
                  "object": {
                    "type": "Identifier",
                    "start": 4017,
                    "end": 4020,
                    "decorators": [],
                    "name": "zoo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4022,
                    "end": 4028,
                    "decorators": [],
                    "name": "animal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                }
              },
              "operator": "??",
              "right": {
                "type": "MemberExpression",
                "start": 4032,
                "end": 4042,
                "object": {
                  "type": "Identifier",
                  "start": 4032,
                  "end": 4038,
                  "decorators": [],
                  "name": "Animal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4039,
                  "end": 4042,
                  "decorators": [],
                  "name": "DOG",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4054,
                "end": 4088,
                "test": {
                  "type": "MemberExpression",
                  "start": 4059,
                  "end": 4069,
                  "object": {
                    "type": "Identifier",
                    "start": 4059,
                    "end": 4065,
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4066,
                    "end": 4069,
                    "decorators": [],
                    "name": "DOG",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4071,
                    "end": 4088,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4078,
                      "end": 4088,
                      "object": {
                        "type": "Identifier",
                        "start": 4078,
                        "end": 4084,
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4085,
                        "end": 4088,
                        "decorators": [],
                        "name": "DOG",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4097,
                "end": 4131,
                "test": {
                  "type": "MemberExpression",
                  "start": 4102,
                  "end": 4112,
                  "object": {
                    "type": "Identifier",
                    "start": 4102,
                    "end": 4108,
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4109,
                    "end": 4112,
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4114,
                    "end": 4131,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 4121,
                      "end": 4131,
                      "object": {
                        "type": "Identifier",
                        "start": 4121,
                        "end": 4127,
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4128,
                        "end": 4131,
                        "decorators": [],
                        "name": "CAT",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
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
      "start": 4163,
      "end": 4361,
      "id": {
        "type": "Identifier",
        "start": 4172,
        "end": 4175,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4178,
        "end": 4361,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4184,
            "end": 4218,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4190,
                "end": 4217,
                "id": {
                  "type": "Identifier",
                  "start": 4190,
                  "end": 4213,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4193,
                    "end": 4213,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 4195,
                      "end": 4213,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4195,
                          "end": 4201
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 4204,
                          "end": 4213
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 4216,
                  "end": 4217,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 4223,
            "end": 4359,
            "test": {
              "type": "Literal",
              "start": 4230,
              "end": 4234,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 4236,
              "end": 4359,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4246,
                  "end": 4264,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4252,
                      "end": 4263,
                      "id": {
                        "type": "Identifier",
                        "start": 4252,
                        "end": 4257,
                        "decorators": [],
                        "name": "stats",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 4260,
                        "end": 4263,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "SwitchStatement",
                  "start": 4273,
                  "end": 4353,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 4281,
                    "end": 4286,
                    "decorators": [],
                    "name": "stats",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 4302,
                      "end": 4316,
                      "test": {
                        "type": "Literal",
                        "start": 4307,
                        "end": 4308,
                        "value": 1,
                        "raw": "1"
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 4310,
                          "end": 4316,
                          "label": null
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 4329,
                      "end": 4343,
                      "test": {
                        "type": "Literal",
                        "start": 4334,
                        "end": 4335,
                        "value": 2,
                        "raw": "2"
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 4337,
                          "end": 4343,
                          "label": null
                        }
                      ]
                    }
                  ]
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
      "start": 4385,
      "end": 4427,
      "id": {
        "type": "Identifier",
        "start": 4390,
        "end": 4391,
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 4394,
        "end": 4426,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 4400,
            "end": 4410,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4400,
              "end": 4401,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4401,
              "end": 4409,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4403,
                "end": 4409
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4415,
            "end": 4424,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4415,
              "end": 4416,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4416,
              "end": 4424,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4418,
                "end": 4424
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
      "start": 4428,
      "end": 4451,
      "id": {
        "type": "Identifier",
        "start": 4433,
        "end": 4434,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4437,
        "end": 4450,
        "types": [
          {
            "type": "TSTypeOperator",
            "start": 4437,
            "end": 4444,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4443,
              "end": 4444,
              "typeName": {
                "type": "Identifier",
                "start": 4443,
                "end": 4444,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 4447,
            "end": 4450,
            "literal": {
              "type": "Literal",
              "start": 4447,
              "end": 4450,
              "value": "c",
              "raw": "'c'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4452,
      "end": 4582,
      "id": {
        "type": "Identifier",
        "start": 4461,
        "end": 4463,
        "decorators": [],
        "name": "ff",
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
          "start": 4464,
          "end": 4468,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4465,
            "end": 4468,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4467,
              "end": 4468,
              "typeName": {
                "type": "Identifier",
                "start": 4467,
                "end": 4468,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4470,
          "end": 4474,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4471,
            "end": 4474,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4473,
              "end": 4474,
              "typeName": {
                "type": "Identifier",
                "start": 4473,
                "end": 4474,
                "decorators": [],
                "name": "K",
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
        "start": 4476,
        "end": 4582,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4482,
            "end": 4538,
            "discriminant": {
              "type": "Identifier",
              "start": 4489,
              "end": 4490,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4502,
                "end": 4532,
                "test": {
                  "type": "Literal",
                  "start": 4507,
                  "end": 4510,
                  "value": "c",
                  "raw": "'c'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4524,
                    "end": 4532,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4524,
                      "end": 4531,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 4524,
                        "end": 4525,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4528,
                        "end": 4531,
                        "value": "a",
                        "raw": "'a'"
                      }
                    },
                    "directive": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 4543,
            "end": 4553,
            "expression": {
              "type": "BinaryExpression",
              "start": 4543,
              "end": 4552,
              "left": {
                "type": "Identifier",
                "start": 4543,
                "end": 4544,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4549,
                "end": 4552,
                "value": "c",
                "raw": "'c'"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 4568,
            "end": 4580,
            "argument": {
              "type": "MemberExpression",
              "start": 4575,
              "end": 4579,
              "object": {
                "type": "Identifier",
                "start": 4575,
                "end": 4576,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4577,
                "end": 4578,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4605,
      "end": 4648,
      "id": {
        "type": "Identifier",
        "start": 4610,
        "end": 4611,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4614,
        "end": 4647,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 4614,
            "end": 4629,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4616,
                "end": 4627,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4616,
                  "end": 4620,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4620,
                  "end": 4627,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4622,
                    "end": 4627,
                    "literal": {
                      "type": "Literal",
                      "start": 4622,
                      "end": 4627,
                      "value": "abc",
                      "raw": "\"abc\""
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
            "start": 4632,
            "end": 4647,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4634,
                "end": 4645,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4634,
                  "end": 4638,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4638,
                  "end": 4645,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4640,
                    "end": 4645,
                    "literal": {
                      "type": "Literal",
                      "start": 4640,
                      "end": 4645,
                      "value": "def",
                      "raw": "\"def\""
                    }
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
      "start": 4650,
      "end": 4785,
      "id": {
        "type": "Identifier",
        "start": 4659,
        "end": 4665,
        "decorators": [],
        "name": "f35431",
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
          "start": 4666,
          "end": 4670,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4667,
            "end": 4670,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4669,
              "end": 4670,
              "typeName": {
                "type": "Identifier",
                "start": 4669,
                "end": 4670,
                "decorators": [],
                "name": "A",
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
        "start": 4672,
        "end": 4785,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4676,
            "end": 4783,
            "discriminant": {
              "type": "MemberExpression",
              "start": 4684,
              "end": 4690,
              "object": {
                "type": "Identifier",
                "start": 4684,
                "end": 4685,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4686,
                "end": 4690,
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
                "start": 4698,
                "end": 4709,
                "test": {
                  "type": "Literal",
                  "start": 4703,
                  "end": 4708,
                  "value": "abc",
                  "raw": "\"abc\""
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 4714,
                "end": 4733,
                "test": {
                  "type": "Literal",
                  "start": 4719,
                  "end": 4724,
                  "value": "def",
                  "raw": "\"def\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4726,
                    "end": 4733,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4738,
                "end": 4761,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4753,
                    "end": 4761,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4753,
                      "end": 4760,
                      "object": {
                        "type": "TSNonNullExpression",
                        "start": 4753,
                        "end": 4755,
                        "expression": {
                          "type": "Identifier",
                          "start": 4753,
                          "end": 4754,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4756,
                        "end": 4760,
                        "decorators": [],
                        "name": "kind",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
