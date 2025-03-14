narrowByClauseExpressionInSwitchTrue1.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 936,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 80,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 66,
        "end": 79,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 77,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 77,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 74,
                "end": 77,
                "literal": {
                  "type": "Literal",
                  "start": 74,
                  "end": 77,
                  "raw": "\"A\"",
                  "value": "A"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 104,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 90,
        "end": 103,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 101,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 101,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 98,
                "end": 101,
                "literal": {
                  "type": "Literal",
                  "start": 98,
                  "end": 101,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 105,
      "end": 123,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "AorB",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 117,
        "end": 122,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 117,
            "end": 118,
            "typeName": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 121,
            "end": 122,
            "typeName": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 134,
            "decorators": [],
            "name": "isA",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 137,
            "end": 172,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 158,
              "end": 172,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 158,
                "end": 164,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 169,
                "end": 172,
                "raw": "\"A\"",
                "value": "A"
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 138,
                "end": 145,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 139,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 141,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 145,
                      "decorators": [],
                      "name": "AorB",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 148,
                "end": 154,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 154,
                    "typeName": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "isB",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 186,
            "end": 221,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 207,
              "end": 221,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 213,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 218,
                "end": 221,
                "raw": "\"B\"",
                "value": "B"
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 187,
                "end": 194,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 194,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 194,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 194,
                      "decorators": [],
                      "name": "AorB",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 197,
                "end": 203,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 202,
                  "end": 203,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 202,
                    "end": 203,
                    "typeName": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 224,
      "end": 351,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 248,
        "end": 351,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 252,
            "end": 349,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 272,
                "end": 306,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 291,
                    "end": 293,
                    "expression": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 300,
                    "end": 306,
                    "label": null
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 283,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 280,
                    "decorators": [],
                    "name": "isA",
                    "optional": false
                  },
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 311,
                "end": 345,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 330,
                    "end": 332,
                    "expression": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 339,
                    "end": 345,
                    "label": null
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "start": 316,
                  "end": 322,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 320,
                      "end": 321,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 319,
                    "decorators": [],
                    "name": "isB",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 260,
              "end": 264,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 238,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 246,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 246,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 246,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 246,
                "decorators": [],
                "name": "AorB",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 353,
      "end": 486,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 377,
        "end": 486,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 381,
            "end": 484,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 401,
                "end": 422,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 420,
                    "end": 422,
                    "expression": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 421,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "start": 406,
                  "end": 412,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 409,
                    "decorators": [],
                    "name": "isA",
                    "optional": false
                  },
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 446,
                "end": 480,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 465,
                    "end": 467,
                    "expression": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 474,
                    "end": 480,
                    "label": null
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "start": 451,
                  "end": 457,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 454,
                    "decorators": [],
                    "name": "isB",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 389,
              "end": 393,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 367,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 368,
          "end": 375,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 371,
              "end": 375,
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 375,
                "decorators": [],
                "name": "AorB",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 513,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 513,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 495,
                "end": 513,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 495,
                    "end": 501
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 504,
                    "end": 513
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "SwitchStatement",
      "start": 516,
      "end": 580,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 534,
          "end": 578,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 569,
              "end": 578,
              "expression": {
                "type": "CallExpression",
                "start": 569,
                "end": 577,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 569,
                  "end": 575,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 575,
                    "decorators": [],
                    "name": "trim",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ],
          "test": {
            "type": "BinaryExpression",
            "start": 539,
            "end": 563,
            "operator": "!==",
            "left": {
              "type": "UnaryExpression",
              "start": 539,
              "end": 547,
              "argument": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 552,
              "end": 563,
              "raw": "\"undefined\"",
              "value": "undefined"
            }
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 524,
        "end": 528,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 582,
      "end": 619,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 587,
        "end": 595,
        "decorators": [],
        "name": "SomeType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 598,
        "end": 618,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 600,
            "end": 616,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 604,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 616,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 606,
                "end": 616,
                "literal": {
                  "type": "Literal",
                  "start": 606,
                  "end": 616,
                  "raw": "\"SomeType\"",
                  "value": "SomeType"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 620,
      "end": 675,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 637,
        "end": 647,
        "decorators": [],
        "name": "isSomeType",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 648,
          "end": 658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 649,
            "end": 658,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 651,
              "end": 658
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 659,
        "end": 674,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 661,
          "end": 674,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 661,
            "end": 662,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 666,
            "end": 674,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 666,
              "end": 674,
              "typeName": {
                "type": "Identifier",
                "start": 666,
                "end": 674,
                "decorators": [],
                "name": "SomeType",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 677,
      "end": 935,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 734,
        "end": 935,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 738,
            "end": 933,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 758,
                "end": 815,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 796,
                    "end": 802,
                    "expression": {
                      "type": "Identifier",
                      "start": 796,
                      "end": 801,
                      "decorators": [],
                      "name": "input",
                      "optional": false
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 809,
                    "end": 815,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 763,
                  "end": 788,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 763,
                    "end": 775,
                    "argument": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 775,
                      "decorators": [],
                      "name": "input",
                      "optional": false
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 780,
                    "end": 788,
                    "raw": "\"string\"",
                    "value": "string"
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 820,
                "end": 875,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 856,
                    "end": 862,
                    "expression": {
                      "type": "Identifier",
                      "start": 856,
                      "end": 861,
                      "decorators": [],
                      "name": "input",
                      "optional": false
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 869,
                    "end": 875,
                    "label": null
                  }
                ],
                "test": {
                  "type": "BinaryExpression",
                  "start": 825,
                  "end": 848,
                  "operator": "instanceof",
                  "left": {
                    "type": "Identifier",
                    "start": 825,
                    "end": 830,
                    "decorators": [],
                    "name": "input",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 848,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 880,
                "end": 929,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 910,
                    "end": 916,
                    "expression": {
                      "type": "Identifier",
                      "start": 910,
                      "end": 915,
                      "decorators": [],
                      "name": "input",
                      "optional": false
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 923,
                    "end": 929,
                    "label": null
                  }
                ],
                "test": {
                  "type": "CallExpression",
                  "start": 885,
                  "end": 902,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 896,
                      "end": 901,
                      "decorators": [],
                      "name": "input",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 895,
                    "decorators": [],
                    "name": "isSomeType",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "discriminant": {
              "type": "Literal",
              "start": 746,
              "end": 750,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 698,
        "decorators": [],
        "name": "processInput",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 699,
          "end": 732,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 704,
            "end": 732,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 706,
              "end": 732,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 706,
                  "end": 712
                },
                {
                  "type": "TSTypeReference",
                  "start": 715,
                  "end": 721,
                  "typeName": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 721,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 724,
                  "end": 732,
                  "typeName": {
                    "type": "Identifier",
                    "start": 724,
                    "end": 732,
                    "decorators": [],
                    "name": "SomeType",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
