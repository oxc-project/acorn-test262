__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 563,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 37,
            "decorators": [],
            "name": "itNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 37,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 29,
                  "end": 37,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 29,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 72,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 63,
            "end": 71,
            "argument": {
              "type": "Identifier",
              "start": 66,
              "end": 71,
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 41,
          "end": 61,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 59,
            "end": 61,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "RestElement",
              "start": 50,
              "end": 57,
              "argument": {
                "type": "Identifier",
                "start": 53,
                "end": 57,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 74,
        "end": 113,
        "arguments": [
          {
            "type": "Literal",
            "start": 100,
            "end": 102,
            "raw": "''",
            "value": ""
          },
          {
            "type": "SpreadElement",
            "start": 104,
            "end": 112,
            "argument": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 75,
          "end": 98,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 96,
            "end": 98,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 87,
              "end": 94,
              "argument": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 160,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 160,
        "arguments": [
          {
            "type": "Literal",
            "start": 141,
            "end": 143,
            "raw": "''",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 145,
            "end": 149,
            "raw": "true",
            "value": true
          },
          {
            "type": "SpreadElement",
            "start": 151,
            "end": 159,
            "argument": {
              "type": "Identifier",
              "start": 154,
              "end": 159,
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "FunctionExpression",
          "start": 116,
          "end": 139,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 137,
            "end": 139,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 128,
              "end": 135,
              "argument": {
                "type": "Identifier",
                "start": 131,
                "end": 135,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 162,
      "end": 234,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 182,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 219,
          "end": 229,
          "argument": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 226,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 228,
              "end": 229,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 230,
        "end": 233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 232,
          "end": 233,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 182,
        "end": 218,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 217,
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 199,
              "end": 217,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 208,
                "end": 217,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 208,
                  "end": 215
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "res1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 248,
            "end": 263,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 252,
                "end": 262,
                "argument": {
                  "type": "Literal",
                  "start": 255,
                  "end": 262,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 248,
              "end": 251,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 275,
            "decorators": [],
            "name": "res2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 278,
            "end": 291,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 282,
                "end": 290,
                "argument": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 290,
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 278,
              "end": 281,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 303,
            "decorators": [],
            "name": "res3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 306,
            "end": 327,
            "arguments": [
              {
                "type": "Literal",
                "start": 310,
                "end": 314,
                "raw": "true",
                "value": true
              },
              {
                "type": "SpreadElement",
                "start": 316,
                "end": 326,
                "argument": {
                  "type": "Literal",
                  "start": 319,
                  "end": 326,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 306,
              "end": 309,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 339,
            "decorators": [],
            "name": "res4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 342,
            "end": 361,
            "arguments": [
              {
                "type": "Literal",
                "start": 346,
                "end": 350,
                "raw": "true",
                "value": true
              },
              {
                "type": "SpreadElement",
                "start": 352,
                "end": 360,
                "argument": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 360,
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 385,
      "end": 442,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 405,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 427,
          "end": 437,
          "argument": {
            "type": "Identifier",
            "start": 430,
            "end": 434,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 438,
        "end": 441,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 440,
          "end": 441,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 440,
            "end": 441,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 405,
        "end": 426,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 406,
            "end": 425,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 416,
              "end": 425,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 416,
                "end": 423
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 443,
      "end": 470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 469,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 451,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 454,
            "end": 469,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 458,
                "end": 468,
                "argument": {
                  "type": "Literal",
                  "start": 461,
                  "end": 468,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 457,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 471,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 495,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 479,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 482,
            "end": 495,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 486,
                "end": 494,
                "argument": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 494,
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 482,
              "end": 485,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 529,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 505,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 508,
            "end": 529,
            "arguments": [
              {
                "type": "Literal",
                "start": 512,
                "end": 516,
                "raw": "true",
                "value": true
              },
              {
                "type": "SpreadElement",
                "start": 518,
                "end": 528,
                "argument": {
                  "type": "Literal",
                  "start": 521,
                  "end": 528,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 508,
              "end": 511,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 531,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 561,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 539,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 561,
            "arguments": [
              {
                "type": "Literal",
                "start": 546,
                "end": 550,
                "raw": "true",
                "value": true
              },
              {
                "type": "SpreadElement",
                "start": 552,
                "end": 560,
                "argument": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 560,
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 545,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
