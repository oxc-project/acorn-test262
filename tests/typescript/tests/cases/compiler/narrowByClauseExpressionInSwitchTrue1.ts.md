__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 935,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "A",
                  "raw": "\"A\""
                }
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
      "start": 81,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "B",
                  "raw": "\"B\""
                }
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
      "start": 105,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "AorB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 125,
      "end": 173,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 134,
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 137,
            "end": 172,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 148,
                "end": 154,
                "parameterName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "body": {
              "type": "BinaryExpression",
              "start": 158,
              "end": 172,
              "left": {
                "type": "MemberExpression",
                "start": 158,
                "end": 164,
                "object": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
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
                "start": 169,
                "end": 172,
                "value": "A",
                "raw": "\"A\""
              }
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
      "type": "VariableDeclaration",
      "start": 174,
      "end": 222,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "isB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 186,
            "end": 221,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 197,
                "end": 203,
                "parameterName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "body": {
              "type": "BinaryExpression",
              "start": 207,
              "end": 221,
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 213,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
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
                "start": 218,
                "end": 221,
                "value": "B",
                "raw": "\"B\""
              }
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
      "type": "FunctionDeclaration",
      "start": 224,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 238,
        "decorators": [],
        "name": "test1",
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
        "start": 248,
        "end": 351,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 252,
            "end": 349,
            "discriminant": {
              "type": "Literal",
              "start": 260,
              "end": 264,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 272,
                "end": 306,
                "test": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 283,
                  "callee": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 280,
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 300,
                    "end": 306,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 311,
                "end": 345,
                "test": {
                  "type": "CallExpression",
                  "start": 316,
                  "end": 322,
                  "callee": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 319,
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 320,
                      "end": 321,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 339,
                    "end": 345,
                    "label": null
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
      "start": 353,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 367,
        "decorators": [],
        "name": "test2",
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
        "start": 377,
        "end": 486,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 381,
            "end": 484,
            "discriminant": {
              "type": "Literal",
              "start": 389,
              "end": 393,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 401,
                "end": 422,
                "test": {
                  "type": "CallExpression",
                  "start": 406,
                  "end": 412,
                  "callee": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 409,
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 446,
                "end": 480,
                "test": {
                  "type": "CallExpression",
                  "start": 451,
                  "end": 457,
                  "callee": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 454,
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 474,
                    "end": 480,
                    "label": null
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
      "type": "VariableDeclaration",
      "start": 488,
      "end": 514,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 513,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 516,
      "end": 580,
      "discriminant": {
        "type": "Literal",
        "start": 524,
        "end": 528,
        "value": true,
        "raw": "true"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 534,
          "end": 578,
          "test": {
            "type": "BinaryExpression",
            "start": 539,
            "end": 563,
            "left": {
              "type": "UnaryExpression",
              "start": 539,
              "end": 547,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 546,
                "end": 547,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 552,
              "end": 563,
              "value": "undefined",
              "raw": "\"undefined\""
            }
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 569,
              "end": 578,
              "expression": {
                "type": "CallExpression",
                "start": 569,
                "end": 577,
                "callee": {
                  "type": "MemberExpression",
                  "start": 569,
                  "end": 575,
                  "object": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 575,
                    "decorators": [],
                    "name": "trim",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "directive": null
            }
          ]
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 582,
      "end": 619,
      "id": {
        "type": "Identifier",
        "start": 587,
        "end": 595,
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 604,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": "SomeType",
                  "raw": "\"SomeType\""
                }
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
      "type": "TSDeclareFunction",
      "start": 620,
      "end": 675,
      "id": {
        "type": "Identifier",
        "start": 637,
        "end": 647,
        "decorators": [],
        "name": "isSomeType",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
          "parameterName": {
            "type": "Identifier",
            "start": 661,
            "end": 662,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 677,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 698,
        "decorators": [],
        "name": "processInput",
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 734,
        "end": 935,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 738,
            "end": 933,
            "discriminant": {
              "type": "Literal",
              "start": 746,
              "end": 750,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 758,
                "end": 815,
                "test": {
                  "type": "BinaryExpression",
                  "start": 763,
                  "end": 788,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 763,
                    "end": 775,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 775,
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 780,
                    "end": 788,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 809,
                    "end": 815,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 820,
                "end": 875,
                "test": {
                  "type": "BinaryExpression",
                  "start": 825,
                  "end": 848,
                  "left": {
                    "type": "Identifier",
                    "start": 825,
                    "end": 830,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 848,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 869,
                    "end": 875,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 880,
                "end": 929,
                "test": {
                  "type": "CallExpression",
                  "start": 885,
                  "end": 902,
                  "callee": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 895,
                    "decorators": [],
                    "name": "isSomeType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 896,
                      "end": 901,
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 923,
                    "end": 929,
                    "label": null
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
