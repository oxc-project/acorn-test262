__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2013,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 15,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 17,
                "end": 20,
                "literal": {
                  "type": "Literal",
                  "start": 17,
                  "end": 20,
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
      "start": 24,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 41,
                "end": 44,
                "literal": {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
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
      "start": 48,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 57,
        "end": 70,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 68,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 65,
                "end": 68,
                "literal": {
                  "type": "Literal",
                  "start": 65,
                  "end": 68,
                  "value": "C",
                  "raw": "\"C\""
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
      "start": 72,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 84,
        "decorators": [],
        "name": "MyUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 87,
        "end": 96,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 87,
            "end": 88,
            "typeName": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 92,
            "typeName": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "C",
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
      "start": 99,
      "end": 150,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 111,
            "end": 149,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 122,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 122,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 122,
                      "decorators": [],
                      "name": "MyUnion",
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
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 125,
                "end": 131,
                "parameterName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 131,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 130,
                    "end": 131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
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
              "start": 135,
              "end": 149,
              "left": {
                "type": "MemberExpression",
                "start": 135,
                "end": 141,
                "object": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
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
                "start": 146,
                "end": 149,
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
      "type": "FunctionDeclaration",
      "start": 152,
      "end": 541,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 166,
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
          "start": 167,
          "end": 177,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 177,
                "decorators": [],
                "name": "MyUnion",
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
        "start": 179,
        "end": 541,
        "body": [
          {
            "type": "IfStatement",
            "start": 185,
            "end": 224,
            "test": {
              "type": "BinaryExpression",
              "start": 189,
              "end": 204,
              "left": {
                "type": "CallExpression",
                "start": 189,
                "end": 195,
                "callee": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 200,
                "end": 204,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 206,
              "end": 224,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 216,
                  "end": 218,
                  "expression": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 230,
            "end": 270,
            "test": {
              "type": "BinaryExpression",
              "start": 234,
              "end": 250,
              "left": {
                "type": "CallExpression",
                "start": 234,
                "end": 240,
                "callee": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 237,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 245,
                "end": 250,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 252,
              "end": 270,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 262,
                  "end": 264,
                  "expression": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 276,
            "end": 316,
            "test": {
              "type": "BinaryExpression",
              "start": 280,
              "end": 296,
              "left": {
                "type": "CallExpression",
                "start": 280,
                "end": 286,
                "callee": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 283,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 291,
                "end": 296,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 298,
              "end": 316,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 308,
                  "end": 310,
                  "expression": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 309,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 322,
            "end": 361,
            "test": {
              "type": "BinaryExpression",
              "start": 326,
              "end": 341,
              "left": {
                "type": "CallExpression",
                "start": 326,
                "end": 332,
                "callee": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 329,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 337,
                "end": 341,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 343,
              "end": 361,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 353,
                  "end": 355,
                  "expression": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 367,
            "end": 405,
            "test": {
              "type": "BinaryExpression",
              "start": 371,
              "end": 385,
              "left": {
                "type": "CallExpression",
                "start": 371,
                "end": 377,
                "callee": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 374,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "!=",
              "right": {
                "type": "Literal",
                "start": 381,
                "end": 385,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 387,
              "end": 405,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 397,
                  "end": 399,
                  "expression": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 398,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 411,
            "end": 449,
            "test": {
              "type": "BinaryExpression",
              "start": 415,
              "end": 429,
              "left": {
                "type": "CallExpression",
                "start": 415,
                "end": 421,
                "callee": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 425,
                "end": 429,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 431,
              "end": 449,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 441,
                  "end": 443,
                  "expression": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 455,
            "end": 494,
            "test": {
              "type": "BinaryExpression",
              "start": 459,
              "end": 474,
              "left": {
                "type": "Literal",
                "start": 459,
                "end": 463,
                "value": true,
                "raw": "true"
              },
              "operator": "!==",
              "right": {
                "type": "CallExpression",
                "start": 468,
                "end": 474,
                "callee": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 471,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 472,
                    "end": 473,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 476,
              "end": 494,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 486,
                  "end": 488,
                  "expression": {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 500,
            "end": 539,
            "test": {
              "type": "BinaryExpression",
              "start": 504,
              "end": 519,
              "left": {
                "type": "Literal",
                "start": 504,
                "end": 508,
                "value": true,
                "raw": "true"
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "start": 513,
                "end": 519,
                "callee": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 516,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 521,
              "end": 539,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 531,
                  "end": 533,
                  "expression": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 599,
      "end": 698,
      "id": {
        "type": "Identifier",
        "start": 608,
        "end": 613,
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
          "start": 614,
          "end": 624,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 615,
            "end": 624,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 617,
              "end": 624
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 626,
        "end": 698,
        "body": [
          {
            "type": "IfStatement",
            "start": 632,
            "end": 689,
            "test": {
              "type": "BinaryExpression",
              "start": 636,
              "end": 664,
              "left": {
                "type": "BinaryExpression",
                "start": 636,
                "end": 654,
                "left": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 654,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 659,
                "end": 664,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 666,
              "end": 689,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 676,
                  "end": 683,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 694,
            "end": 696,
            "expression": {
              "type": "Identifier",
              "start": 694,
              "end": 695,
              "decorators": [],
              "name": "x",
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
      "start": 756,
      "end": 923,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 770,
        "decorators": [],
        "name": "test3",
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
          "start": 771,
          "end": 783,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 774,
            "end": 783,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 776,
              "end": 783
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 785,
        "end": 923,
        "body": [
          {
            "type": "IfStatement",
            "start": 791,
            "end": 912,
            "test": {
              "type": "LogicalExpression",
              "start": 795,
              "end": 850,
              "left": {
                "type": "BinaryExpression",
                "start": 795,
                "end": 818,
                "left": {
                  "type": "UnaryExpression",
                  "start": 795,
                  "end": 805,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 805,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 810,
                  "end": 818,
                  "value": "string",
                  "raw": "'string'"
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 822,
                "end": 850,
                "left": {
                  "type": "CallExpression",
                  "start": 822,
                  "end": 840,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 822,
                    "end": 835,
                    "object": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 827,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 828,
                      "end": 835,
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 836,
                      "end": 839,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 845,
                  "end": 850,
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 852,
              "end": 912,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 862,
                  "end": 906,
                  "argument": {
                    "type": "NewExpression",
                    "start": 868,
                    "end": 905,
                    "callee": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 877,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 878,
                        "end": 904,
                        "value": "Not a string or an array",
                        "raw": "'Not a string or an array'"
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 917,
            "end": 921,
            "expression": {
              "type": "Identifier",
              "start": 917,
              "end": 920,
              "decorators": [],
              "name": "foo",
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
      "type": "ClassDeclaration",
      "start": 981,
      "end": 1037,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 987,
        "end": 995,
        "decorators": [],
        "name": "WebError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1004,
        "end": 1012,
        "decorators": [],
        "name": "URIError",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1013,
        "end": 1037,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1019,
            "end": 1035,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1019,
              "end": 1025,
              "decorators": [],
              "name": "status",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1026,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1028,
                "end": 1034
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1038,
      "end": 1232,
      "id": {
        "type": "Identifier",
        "start": 1047,
        "end": 1052,
        "decorators": [],
        "name": "test4",
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
        "start": 1055,
        "end": 1232,
        "body": [
          {
            "type": "TryStatement",
            "start": 1061,
            "end": 1230,
            "block": {
              "type": "BlockStatement",
              "start": 1065,
              "end": 1098,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 1099,
              "end": 1230,
              "param": {
                "type": "Identifier",
                "start": 1106,
                "end": 1109,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1111,
                "end": 1230,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1121,
                    "end": 1224,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 1125,
                      "end": 1179,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1125,
                        "end": 1158,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1125,
                          "end": 1148,
                          "left": {
                            "type": "Identifier",
                            "start": 1125,
                            "end": 1128,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "start": 1140,
                            "end": 1148,
                            "decorators": [],
                            "name": "WebError",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 1153,
                          "end": 1158,
                          "value": false,
                          "raw": "false"
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 1162,
                        "end": 1179,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1162,
                          "end": 1172,
                          "object": {
                            "type": "Identifier",
                            "start": 1162,
                            "end": 1165,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1166,
                            "end": 1172,
                            "decorators": [],
                            "name": "status",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "!=",
                        "right": {
                          "type": "Literal",
                          "start": 1176,
                          "end": 1179,
                          "value": 401,
                          "raw": "401"
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1181,
                      "end": 1224,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1195,
                          "end": 1214,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1195,
                            "end": 1213,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1195,
                              "end": 1208,
                              "object": {
                                "type": "Identifier",
                                "start": 1195,
                                "end": 1202,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1203,
                                "end": 1208,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1209,
                                "end": 1212,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1290,
      "end": 1328,
      "id": {
        "type": "Identifier",
        "start": 1300,
        "end": 1306,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1307,
        "end": 1328,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1313,
            "end": 1326,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1313,
              "end": 1317,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1317,
              "end": 1325,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1319,
                "end": 1325
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
      "type": "VariableDeclaration",
      "start": 1329,
      "end": 1356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1335,
          "end": 1355,
          "id": {
            "type": "Identifier",
            "start": 1335,
            "end": 1345,
            "decorators": [],
            "name": "ACTOR_TYPE",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1348,
            "end": 1355,
            "value": "actor",
            "raw": "\"actor\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1357,
      "end": 1420,
      "id": {
        "type": "Identifier",
        "start": 1367,
        "end": 1372,
        "decorators": [],
        "name": "Actor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1381,
          "end": 1387,
          "expression": {
            "type": "Identifier",
            "start": 1381,
            "end": 1387,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1388,
        "end": 1420,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1394,
            "end": 1418,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1394,
              "end": 1398,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1398,
              "end": 1417,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1400,
                "end": 1417,
                "exprName": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1417,
                  "decorators": [],
                  "name": "ACTOR_TYPE",
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
      "type": "FunctionDeclaration",
      "start": 1421,
      "end": 1513,
      "id": {
        "type": "Identifier",
        "start": 1430,
        "end": 1437,
        "decorators": [],
        "name": "isActor",
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
          "start": 1438,
          "end": 1452,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1444,
            "end": 1452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1446,
              "end": 1452,
              "typeName": {
                "type": "Identifier",
                "start": 1446,
                "end": 1452,
                "decorators": [],
                "name": "Entity",
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
        "start": 1453,
        "end": 1470,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1455,
          "end": 1470,
          "parameterName": {
            "type": "Identifier",
            "start": 1455,
            "end": 1461,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1465,
            "end": 1470,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1465,
              "end": 1470,
              "typeName": {
                "type": "Identifier",
                "start": 1465,
                "end": 1470,
                "decorators": [],
                "name": "Actor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1471,
        "end": 1513,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1477,
            "end": 1511,
            "argument": {
              "type": "BinaryExpression",
              "start": 1484,
              "end": 1510,
              "left": {
                "type": "MemberExpression",
                "start": 1484,
                "end": 1495,
                "object": {
                  "type": "Identifier",
                  "start": 1484,
                  "end": 1490,
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1491,
                  "end": 1495,
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
                "type": "Identifier",
                "start": 1500,
                "end": 1510,
                "decorators": [],
                "name": "ACTOR_TYPE",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1514,
      "end": 1624,
      "id": {
        "type": "Identifier",
        "start": 1523,
        "end": 1528,
        "decorators": [],
        "name": "test5",
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
          "start": 1529,
          "end": 1540,
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1532,
            "end": 1540,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1534,
              "end": 1540,
              "typeName": {
                "type": "Identifier",
                "start": 1534,
                "end": 1540,
                "decorators": [],
                "name": "Entity",
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
        "start": 1542,
        "end": 1624,
        "body": [
          {
            "type": "IfStatement",
            "start": 1548,
            "end": 1622,
            "test": {
              "type": "BinaryExpression",
              "start": 1552,
              "end": 1574,
              "left": {
                "type": "CallExpression",
                "start": 1552,
                "end": 1564,
                "callee": {
                  "type": "Identifier",
                  "start": 1552,
                  "end": 1559,
                  "decorators": [],
                  "name": "isActor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1560,
                    "end": 1563,
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1569,
                "end": 1574,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1576,
              "end": 1596,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1586,
                  "end": 1590,
                  "expression": {
                    "type": "Identifier",
                    "start": 1586,
                    "end": 1589,
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1602,
              "end": 1622,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1612,
                  "end": 1616,
                  "expression": {
                    "type": "Identifier",
                    "start": 1612,
                    "end": 1615,
                    "decorators": [],
                    "name": "bin",
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
      "start": 1625,
      "end": 1734,
      "id": {
        "type": "Identifier",
        "start": 1634,
        "end": 1639,
        "decorators": [],
        "name": "test6",
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
          "start": 1640,
          "end": 1651,
          "decorators": [],
          "name": "bin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1643,
            "end": 1651,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1645,
              "end": 1651,
              "typeName": {
                "type": "Identifier",
                "start": 1645,
                "end": 1651,
                "decorators": [],
                "name": "Entity",
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
        "start": 1653,
        "end": 1734,
        "body": [
          {
            "type": "IfStatement",
            "start": 1659,
            "end": 1732,
            "test": {
              "type": "BinaryExpression",
              "start": 1663,
              "end": 1684,
              "left": {
                "type": "CallExpression",
                "start": 1663,
                "end": 1675,
                "callee": {
                  "type": "Identifier",
                  "start": 1663,
                  "end": 1670,
                  "decorators": [],
                  "name": "isActor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1671,
                    "end": 1674,
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1679,
                "end": 1684,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1686,
              "end": 1706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1696,
                  "end": 1700,
                  "expression": {
                    "type": "Identifier",
                    "start": 1696,
                    "end": 1699,
                    "decorators": [],
                    "name": "bin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1712,
              "end": 1732,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1722,
                  "end": 1726,
                  "expression": {
                    "type": "Identifier",
                    "start": 1722,
                    "end": 1725,
                    "decorators": [],
                    "name": "bin",
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
      "start": 1792,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1801,
        "end": 1811,
        "decorators": [],
        "name": "isFunction",
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
          "start": 1812,
          "end": 1822,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1813,
            "end": 1822,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1815,
              "end": 1822
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1823,
        "end": 1838,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1825,
          "end": 1838,
          "parameterName": {
            "type": "Identifier",
            "start": 1825,
            "end": 1826,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1830,
            "end": 1838,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1830,
              "end": 1838,
              "typeName": {
                "type": "Identifier",
                "start": 1830,
                "end": 1838,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1839,
        "end": 1878,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1845,
            "end": 1876,
            "argument": {
              "type": "BinaryExpression",
              "start": 1852,
              "end": 1875,
              "left": {
                "type": "UnaryExpression",
                "start": 1852,
                "end": 1860,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 1859,
                  "end": 1860,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1865,
                "end": 1875,
                "value": "function",
                "raw": "\"function\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1880,
      "end": 2013,
      "id": {
        "type": "Identifier",
        "start": 1889,
        "end": 1894,
        "decorators": [],
        "name": "test7",
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
          "start": 1895,
          "end": 1905,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1896,
            "end": 1905,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1898,
              "end": 1905
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1907,
        "end": 2013,
        "body": [
          {
            "type": "IfStatement",
            "start": 1913,
            "end": 1960,
            "test": {
              "type": "BinaryExpression",
              "start": 1917,
              "end": 1940,
              "left": {
                "type": "CallExpression",
                "start": 1917,
                "end": 1930,
                "callee": {
                  "type": "Identifier",
                  "start": 1917,
                  "end": 1927,
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1928,
                    "end": 1929,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 1935,
                "end": 1940,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1942,
              "end": 1960,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1952,
                  "end": 1954,
                  "expression": {
                    "type": "Identifier",
                    "start": 1952,
                    "end": 1953,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1965,
            "end": 2011,
            "test": {
              "type": "BinaryExpression",
              "start": 1969,
              "end": 1991,
              "left": {
                "type": "CallExpression",
                "start": 1969,
                "end": 1982,
                "callee": {
                  "type": "Identifier",
                  "start": 1969,
                  "end": 1979,
                  "decorators": [],
                  "name": "isFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1980,
                    "end": 1981,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1987,
                "end": 1991,
                "value": true,
                "raw": "true"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1993,
              "end": 2011,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2003,
                  "end": 2005,
                  "expression": {
                    "type": "Identifier",
                    "start": 2003,
                    "end": 2004,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
