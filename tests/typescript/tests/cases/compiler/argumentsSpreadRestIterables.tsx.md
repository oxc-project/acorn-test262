__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 562,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 37,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 29,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
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
      "type": "ExpressionStatement",
      "start": 40,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 72,
        "callee": {
          "type": "FunctionExpression",
          "start": 41,
          "end": 61,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 50,
              "end": 57,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 53,
                "end": 57,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 59,
            "end": 61,
            "body": []
          },
          "expression": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 115,
      "expression": {
        "type": "CallExpression",
        "start": 74,
        "end": 113,
        "callee": {
          "type": "FunctionExpression",
          "start": 75,
          "end": 98,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 96,
            "end": 98,
            "body": []
          },
          "expression": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 100,
            "end": 102,
            "value": "",
            "raw": "''"
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 160,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 160,
        "callee": {
          "type": "FunctionExpression",
          "start": 116,
          "end": 139,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 131,
                "end": 135,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 137,
            "end": 139,
            "body": []
          },
          "expression": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 141,
            "end": 143,
            "value": "",
            "raw": "''"
          },
          {
            "type": "Literal",
            "start": 145,
            "end": 149,
            "value": true,
            "raw": "true"
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 162,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 182,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 182,
        "end": 218,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
            "out": false,
            "const": true
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 219,
          "end": 229,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 226,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 228,
              "end": 229,
              "typeName": {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 264,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 263,
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
            "callee": {
              "type": "Identifier",
              "start": 248,
              "end": 251,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 252,
                "end": 262,
                "argument": {
                  "type": "Literal",
                  "start": 255,
                  "end": 262,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 292,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 291,
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
            "callee": {
              "type": "Identifier",
              "start": 278,
              "end": 281,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 328,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 327,
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
            "callee": {
              "type": "Identifier",
              "start": 306,
              "end": 309,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 310,
                "end": 314,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 316,
                "end": 326,
                "argument": {
                  "type": "Literal",
                  "start": 319,
                  "end": 326,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 362,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 361,
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
            "callee": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 346,
                "end": 350,
                "value": true,
                "raw": "true"
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 385,
      "end": 442,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 405,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 405,
        "end": 426,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 406,
            "end": 425,
            "name": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "RestElement",
          "start": 427,
          "end": 437,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 430,
            "end": 434,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 440,
            "end": 441,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 443,
      "end": 470,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 469,
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
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 457,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 458,
                "end": 468,
                "argument": {
                  "type": "Literal",
                  "start": 461,
                  "end": 468,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 471,
      "end": 496,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 495,
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
            "callee": {
              "type": "Identifier",
              "start": 482,
              "end": 485,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 530,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 529,
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
            "callee": {
              "type": "Identifier",
              "start": 508,
              "end": 511,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 512,
                "end": 516,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 518,
                "end": 528,
                "argument": {
                  "type": "Literal",
                  "start": 521,
                  "end": 528,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 531,
      "end": 562,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 561,
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
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 545,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 546,
                "end": 550,
                "value": true,
                "raw": "true"
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
