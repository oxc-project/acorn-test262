__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
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
              "start": 68,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 74,
                  "end": 77
                },
                "start": 74,
                "end": 77
              },
              "start": 72,
              "end": 77
            },
            "accessibility": null,
            "static": false,
            "start": 68,
            "end": 77
          }
        ],
        "start": 66,
        "end": 79
      },
      "declare": false,
      "start": 57,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "typeParameters": null,
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
              "start": 92,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 98,
                  "end": 101
                },
                "start": 98,
                "end": 101
              },
              "start": 96,
              "end": 101
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 101
          }
        ],
        "start": 90,
        "end": 103
      },
      "declare": false,
      "start": 81,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AorB",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeArguments": null,
            "start": 117,
            "end": 118
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "typeArguments": null,
            "start": 121,
            "end": 122
          }
        ],
        "start": 117,
        "end": 122
      },
      "declare": false,
      "start": 105,
      "end": 123
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 134
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AorB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 145
                    },
                    "typeArguments": null,
                    "start": 141,
                    "end": 145
                  },
                  "start": 139,
                  "end": 145
                },
                "start": 138,
                "end": 145
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 153,
                    "end": 154
                  },
                  "start": 153,
                  "end": 154
                },
                "start": 148,
                "end": 154
              },
              "start": 146,
              "end": 154
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 158,
                "end": 164
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 169,
                "end": 172
              },
              "start": 158,
              "end": 172
            },
            "id": null,
            "generator": false,
            "start": 137,
            "end": 172
          },
          "definite": false,
          "start": 131,
          "end": 172
        }
      ],
      "declare": false,
      "start": 125,
      "end": 173
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isB",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AorB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 194
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 194
                  },
                  "start": 188,
                  "end": 194
                },
                "start": 187,
                "end": 194
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 202,
                    "end": 203
                  },
                  "start": 202,
                  "end": 203
                },
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "optional": false,
                "computed": false,
                "start": 207,
                "end": 213
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 218,
                "end": 221
              },
              "start": 207,
              "end": 221
            },
            "id": null,
            "generator": false,
            "start": 186,
            "end": 221
          },
          "definite": false,
          "start": 180,
          "end": 221
        }
      ],
      "declare": false,
      "start": 174,
      "end": 222
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AorB",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 246
              },
              "typeArguments": null,
              "start": 242,
              "end": 246
            },
            "start": 240,
            "end": 246
          },
          "start": 239,
          "end": 246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 260,
              "end": 264
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 280
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 282
                    }
                  ],
                  "optional": false,
                  "start": 277,
                  "end": 283
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "directive": null,
                    "start": 291,
                    "end": 293
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 300,
                    "end": 306
                  }
                ],
                "start": 272,
                "end": 306
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 319
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 321
                    }
                  ],
                  "optional": false,
                  "start": 316,
                  "end": 322
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 331
                    },
                    "directive": null,
                    "start": 330,
                    "end": 332
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 311,
                "end": 345
              }
            ],
            "start": 252,
            "end": 349
          }
        ],
        "start": 248,
        "end": 351
      },
      "expression": false,
      "start": 224,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 367
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AorB",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 375
              },
              "typeArguments": null,
              "start": 371,
              "end": 375
            },
            "start": 369,
            "end": 375
          },
          "start": 368,
          "end": 375
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 389,
              "end": 393
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 409
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "start": 406,
                  "end": 412
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 421
                    },
                    "directive": null,
                    "start": 420,
                    "end": 422
                  }
                ],
                "start": 401,
                "end": 422
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 451,
                    "end": 454
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 456
                    }
                  ],
                  "optional": false,
                  "start": 451,
                  "end": 457
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 466
                    },
                    "directive": null,
                    "start": 465,
                    "end": 467
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 474,
                    "end": 480
                  }
                ],
                "start": 446,
                "end": 480
              }
            ],
            "start": 381,
            "end": 484
          }
        ],
        "start": 377,
        "end": 486
      },
      "expression": false,
      "start": 353,
      "end": 486
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 495,
                "end": 513
              },
              "start": 493,
              "end": 513
            },
            "start": 492,
            "end": 513
          },
          "init": null,
          "definite": false,
          "start": 492,
          "end": 513
        }
      ],
      "declare": false,
      "start": 488,
      "end": 514
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 524,
        "end": 528
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 547
              },
              "prefix": true,
              "start": 539,
              "end": 547
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "undefined",
              "raw": "\"undefined\"",
              "start": 552,
              "end": 563
            },
            "start": 539,
            "end": 563
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 570
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "trim",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 575
                  },
                  "optional": false,
                  "computed": false,
                  "start": 569,
                  "end": 575
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 569,
                "end": 577
              },
              "directive": null,
              "start": 569,
              "end": 578
            }
          ],
          "start": 534,
          "end": 578
        }
      ],
      "start": 516,
      "end": 580
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 587,
        "end": 595
      },
      "typeParameters": null,
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
              "start": 600,
              "end": 604
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "SomeType",
                  "raw": "\"SomeType\"",
                  "start": 606,
                  "end": 616
                },
                "start": 606,
                "end": 616
              },
              "start": 604,
              "end": 616
            },
            "accessibility": null,
            "static": false,
            "start": 600,
            "end": 616
          }
        ],
        "start": 598,
        "end": 618
      },
      "declare": false,
      "start": 582,
      "end": 619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isSomeType",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 647
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 651,
              "end": 658
            },
            "start": 649,
            "end": 658
          },
          "start": 648,
          "end": 658
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 662
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeType",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 674
              },
              "typeArguments": null,
              "start": 666,
              "end": 674
            },
            "start": 666,
            "end": 674
          },
          "start": 661,
          "end": 674
        },
        "start": 659,
        "end": 674
      },
      "body": null,
      "expression": false,
      "start": 620,
      "end": 675
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 698
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 706,
                  "end": 712
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 721
                  },
                  "typeArguments": null,
                  "start": 715,
                  "end": 721
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 724,
                    "end": 732
                  },
                  "typeArguments": null,
                  "start": 724,
                  "end": 732
                }
              ],
              "start": 706,
              "end": 732
            },
            "start": 704,
            "end": 732
          },
          "start": 699,
          "end": 732
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 746,
              "end": 750
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 770,
                      "end": 775
                    },
                    "prefix": true,
                    "start": 763,
                    "end": 775
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 780,
                    "end": 788
                  },
                  "start": 763,
                  "end": 788
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 796,
                      "end": 801
                    },
                    "directive": null,
                    "start": 796,
                    "end": 802
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 809,
                    "end": 815
                  }
                ],
                "start": 758,
                "end": 815
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 830
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 848
                  },
                  "start": 825,
                  "end": 848
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 856,
                      "end": 861
                    },
                    "directive": null,
                    "start": 856,
                    "end": 862
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 869,
                    "end": 875
                  }
                ],
                "start": 820,
                "end": 875
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSomeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 895
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 901
                    }
                  ],
                  "optional": false,
                  "start": 885,
                  "end": 902
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 915
                    },
                    "directive": null,
                    "start": 910,
                    "end": 916
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 923,
                    "end": 929
                  }
                ],
                "start": 880,
                "end": 929
              }
            ],
            "start": 738,
            "end": 933
          }
        ],
        "start": 734,
        "end": 935
      },
      "expression": false,
      "start": 677,
      "end": 935
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 935
}
```
