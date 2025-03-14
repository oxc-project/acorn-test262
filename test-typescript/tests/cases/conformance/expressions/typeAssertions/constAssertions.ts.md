__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3029,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "v1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 9,
            "end": 23,
            "expression": {
              "type": "Literal",
              "start": 9,
              "end": 14,
              "raw": "'abc'",
              "value": "abc"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 23,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 23,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "v2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 34,
            "end": 48,
            "expression": {
              "type": "TemplateLiteral",
              "start": 34,
              "end": 39,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 39,
                  "tail": true,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 43,
              "end": 48,
              "typeName": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "decorators": [],
            "name": "v3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 59,
            "end": 70,
            "expression": {
              "type": "Literal",
              "start": 59,
              "end": 61,
              "raw": "10",
              "value": 10
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 70,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "v4",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 81,
            "end": 93,
            "expression": {
              "type": "UnaryExpression",
              "start": 81,
              "end": 84,
              "argument": {
                "type": "Literal",
                "start": 82,
                "end": 84,
                "raw": "10",
                "value": 10
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 93,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "v5",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 104,
            "end": 116,
            "expression": {
              "type": "UnaryExpression",
              "start": 104,
              "end": 107,
              "argument": {
                "type": "Literal",
                "start": 105,
                "end": 107,
                "raw": "10",
                "value": 10
              },
              "operator": "+",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 116,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "v6",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 127,
            "end": 139,
            "expression": {
              "type": "Literal",
              "start": 127,
              "end": 130,
              "bigint": "10",
              "raw": "10n",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 139,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 147,
            "decorators": [],
            "name": "v7",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 150,
            "end": 163,
            "expression": {
              "type": "UnaryExpression",
              "start": 150,
              "end": 154,
              "argument": {
                "type": "Literal",
                "start": 151,
                "end": 154,
                "bigint": "10",
                "raw": "10n",
                "value": null
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 163,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 163,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "decorators": [],
            "name": "v8",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 174,
            "end": 187,
            "expression": {
              "type": "Literal",
              "start": 174,
              "end": 178,
              "raw": "true",
              "value": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 182,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 187,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "decorators": [],
            "name": "v9",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 198,
            "end": 212,
            "expression": {
              "type": "Literal",
              "start": 198,
              "end": 203,
              "raw": "false",
              "value": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 207,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 212,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 221,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 224,
            "end": 238,
            "expression": {
              "type": "Literal",
              "start": 224,
              "end": 229,
              "raw": "'abc'",
              "value": "abc"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 238,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 249,
            "end": 263,
            "expression": {
              "type": "TemplateLiteral",
              "start": 249,
              "end": 254,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 249,
                  "end": 254,
                  "tail": true,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 258,
              "end": 263,
              "typeName": {
                "type": "Identifier",
                "start": 258,
                "end": 263,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 271,
            "decorators": [],
            "name": "c3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 274,
            "end": 285,
            "expression": {
              "type": "Literal",
              "start": 274,
              "end": 276,
              "raw": "10",
              "value": 10
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 280,
              "end": 285,
              "typeName": {
                "type": "Identifier",
                "start": 280,
                "end": 285,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "decorators": [],
            "name": "c4",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 296,
            "end": 308,
            "expression": {
              "type": "UnaryExpression",
              "start": 296,
              "end": 299,
              "argument": {
                "type": "Literal",
                "start": 297,
                "end": 299,
                "raw": "10",
                "value": 10
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 303,
              "end": 308,
              "typeName": {
                "type": "Identifier",
                "start": 303,
                "end": 308,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 331,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 316,
            "decorators": [],
            "name": "c5",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 319,
            "end": 331,
            "expression": {
              "type": "UnaryExpression",
              "start": 319,
              "end": 322,
              "argument": {
                "type": "Literal",
                "start": 320,
                "end": 322,
                "raw": "10",
                "value": 10
              },
              "operator": "+",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 331,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 331,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "decorators": [],
            "name": "c6",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 342,
            "end": 354,
            "expression": {
              "type": "Literal",
              "start": 342,
              "end": 345,
              "bigint": "10",
              "raw": "10n",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 349,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 349,
                "end": 354,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 378,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 362,
            "decorators": [],
            "name": "c7",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 365,
            "end": 378,
            "expression": {
              "type": "UnaryExpression",
              "start": 365,
              "end": 369,
              "argument": {
                "type": "Literal",
                "start": 366,
                "end": 369,
                "bigint": "10",
                "raw": "10n",
                "value": null
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 373,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 373,
                "end": 378,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "c8",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 389,
            "end": 402,
            "expression": {
              "type": "Literal",
              "start": 389,
              "end": 393,
              "raw": "true",
              "value": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 397,
              "end": 402,
              "typeName": {
                "type": "Identifier",
                "start": 397,
                "end": 402,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "decorators": [],
            "name": "c9",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 413,
            "end": 427,
            "expression": {
              "type": "Literal",
              "start": 413,
              "end": 418,
              "raw": "false",
              "value": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 427,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 427,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 437,
            "decorators": [],
            "name": "vv1",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 440,
            "end": 442,
            "decorators": [],
            "name": "v1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 451,
            "decorators": [],
            "name": "vc1",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "c1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 459,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 465,
            "decorators": [],
            "name": "a1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 468,
            "end": 479,
            "expression": {
              "type": "ArrayExpression",
              "start": 468,
              "end": 470,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 474,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 474,
                "end": 479,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 487,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 490,
            "end": 508,
            "expression": {
              "type": "ArrayExpression",
              "start": 490,
              "end": 499,
              "elements": [
                {
                  "type": "Literal",
                  "start": 491,
                  "end": 492,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 497,
                  "end": 498,
                  "raw": "3",
                  "value": 3
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 503,
              "end": 508,
              "typeName": {
                "type": "Identifier",
                "start": 503,
                "end": 508,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 547,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 516,
            "decorators": [],
            "name": "a3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 519,
            "end": 547,
            "expression": {
              "type": "ArrayExpression",
              "start": 519,
              "end": 538,
              "elements": [
                {
                  "type": "Literal",
                  "start": 520,
                  "end": 522,
                  "raw": "10",
                  "value": 10
                },
                {
                  "type": "Literal",
                  "start": 524,
                  "end": 531,
                  "raw": "'hello'",
                  "value": "hello"
                },
                {
                  "type": "Literal",
                  "start": 533,
                  "end": 537,
                  "raw": "true",
                  "value": true
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 542,
              "end": 547,
              "typeName": {
                "type": "Identifier",
                "start": 542,
                "end": 547,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 549,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 581,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "a4",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 558,
            "end": 581,
            "expression": {
              "type": "ArrayExpression",
              "start": 558,
              "end": 572,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 559,
                  "end": 571,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 562,
                    "end": 571,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 563,
                        "end": 564,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 566,
                        "end": 567,
                        "raw": "2",
                        "value": 2
                      },
                      {
                        "type": "Literal",
                        "start": 569,
                        "end": 570,
                        "raw": "3",
                        "value": 3
                      }
                    ]
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 576,
              "end": 581,
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 581,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 601,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 589,
            "decorators": [],
            "name": "a5",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 592,
            "end": 601,
            "elements": [
              {
                "type": "Literal",
                "start": 593,
                "end": 594,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 596,
                "end": 597,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 599,
                "end": 600,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 603,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 628,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 609,
            "decorators": [],
            "name": "a6",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 612,
            "end": 628,
            "expression": {
              "type": "ArrayExpression",
              "start": 612,
              "end": 619,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 613,
                  "end": 618,
                  "argument": {
                    "type": "Identifier",
                    "start": 616,
                    "end": 618,
                    "decorators": [],
                    "name": "a5",
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 623,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 623,
                "end": 628,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 646,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 636,
            "decorators": [],
            "name": "a7",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 639,
            "end": 646,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 640,
                "end": 645,
                "argument": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 645,
                  "decorators": [],
                  "name": "a6",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 648,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 680,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 654,
            "decorators": [],
            "name": "a8",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 657,
            "end": 680,
            "expression": {
              "type": "ArrayExpression",
              "start": 657,
              "end": 671,
              "elements": [
                {
                  "type": "Literal",
                  "start": 658,
                  "end": 663,
                  "raw": "'abc'",
                  "value": "abc"
                },
                {
                  "type": "SpreadElement",
                  "start": 665,
                  "end": 670,
                  "argument": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 670,
                    "decorators": [],
                    "name": "a7",
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 675,
              "end": 680,
              "typeName": {
                "type": "Identifier",
                "start": 675,
                "end": 680,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 699,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 698,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 688,
            "decorators": [],
            "name": "a9",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 691,
            "end": 698,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 692,
                "end": 697,
                "argument": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 697,
                  "decorators": [],
                  "name": "a8",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 739,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 739,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 739,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 716,
                "end": 739,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 718,
                    "end": 737,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 719,
                        "end": 728,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 720,
                          "end": 728,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 722,
                            "end": 728
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 729,
                      "end": 737,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 731,
                        "end": 737
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 742,
      "end": 777,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 776,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 751,
            "end": 776,
            "expression": {
              "type": "ObjectExpression",
              "start": 751,
              "end": 767,
              "properties": [
                {
                  "type": "Property",
                  "start": 753,
                  "end": 758,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 754,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 756,
                    "end": 758,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Property",
                  "start": 760,
                  "end": 765,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 761,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 763,
                    "end": 765,
                    "raw": "20",
                    "value": 20
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 771,
              "end": 776,
              "typeName": {
                "type": "Identifier",
                "start": 771,
                "end": 776,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 778,
      "end": 846,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 845,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "decorators": [],
            "name": "o2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 787,
            "end": 845,
            "expression": {
              "type": "ObjectExpression",
              "start": 787,
              "end": 836,
              "properties": [
                {
                  "type": "Property",
                  "start": 789,
                  "end": 793,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 789,
                    "end": 790,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 792,
                    "end": 793,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 795,
                  "end": 801,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 795,
                    "end": 798,
                    "raw": "'b'",
                    "value": "b"
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 800,
                    "end": 801,
                    "raw": "2",
                    "value": 2
                  }
                },
                {
                  "type": "Property",
                  "start": 803,
                  "end": 811,
                  "computed": true,
                  "key": {
                    "type": "Literal",
                    "start": 804,
                    "end": 807,
                    "raw": "'c'",
                    "value": "c"
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 810,
                    "end": 811,
                    "raw": "3",
                    "value": 3
                  }
                },
                {
                  "type": "Property",
                  "start": 813,
                  "end": 819,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 814,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 814,
                    "end": 819,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 817,
                      "end": 819,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 821,
                  "end": 834,
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "start": 822,
                    "end": 830,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 822,
                      "end": 825,
                      "raw": "'e'",
                      "value": "e"
                    },
                    "right": {
                      "type": "Literal",
                      "start": 828,
                      "end": 830,
                      "raw": "''",
                      "value": ""
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 833,
                    "end": 834,
                    "raw": "4",
                    "value": 4
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 840,
              "end": 845,
              "typeName": {
                "type": "Identifier",
                "start": 840,
                "end": 845,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 847,
      "end": 882,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 881,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 853,
            "decorators": [],
            "name": "o3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 856,
            "end": 881,
            "expression": {
              "type": "ObjectExpression",
              "start": 856,
              "end": 872,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 858,
                  "end": 863,
                  "argument": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 863,
                    "decorators": [],
                    "name": "o1",
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 865,
                  "end": 870,
                  "argument": {
                    "type": "Identifier",
                    "start": 868,
                    "end": 870,
                    "decorators": [],
                    "name": "o2",
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 876,
              "end": 881,
              "typeName": {
                "type": "Identifier",
                "start": 876,
                "end": 881,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 883,
      "end": 907,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 887,
          "end": 906,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 887,
            "end": 889,
            "decorators": [],
            "name": "o4",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 892,
            "end": 906,
            "properties": [
              {
                "type": "Property",
                "start": 894,
                "end": 898,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 895,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 897,
                  "end": 898,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 900,
                "end": 904,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 901,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 903,
                  "end": 904,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 908,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 912,
          "end": 935,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 912,
            "end": 914,
            "decorators": [],
            "name": "o5",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 917,
            "end": 935,
            "expression": {
              "type": "ObjectExpression",
              "start": 917,
              "end": 926,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 919,
                  "end": 924,
                  "argument": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 924,
                    "decorators": [],
                    "name": "o4",
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 930,
              "end": 935,
              "typeName": {
                "type": "Identifier",
                "start": 930,
                "end": 935,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 937,
      "end": 956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 941,
          "end": 955,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 941,
            "end": 943,
            "decorators": [],
            "name": "o6",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 946,
            "end": 955,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 948,
                "end": 953,
                "argument": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 953,
                  "decorators": [],
                  "name": "o5",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 984,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 961,
          "end": 983,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 961,
            "end": 963,
            "decorators": [],
            "name": "o7",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 966,
            "end": 983,
            "expression": {
              "type": "ObjectExpression",
              "start": 966,
              "end": 974,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 968,
                  "end": 972,
                  "argument": {
                    "type": "Identifier",
                    "start": 971,
                    "end": 972,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 978,
              "end": 983,
              "typeName": {
                "type": "Identifier",
                "start": 978,
                "end": 983,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 985,
      "end": 1004,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 989,
          "end": 1003,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 991,
            "decorators": [],
            "name": "o8",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 994,
            "end": 1003,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 996,
                "end": 1001,
                "argument": {
                  "type": "Identifier",
                  "start": 999,
                  "end": 1001,
                  "decorators": [],
                  "name": "o7",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1005,
      "end": 1056,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1055,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1011,
            "decorators": [],
            "name": "o9",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1014,
            "end": 1055,
            "expression": {
              "type": "ObjectExpression",
              "start": 1014,
              "end": 1046,
              "properties": [
                {
                  "type": "Property",
                  "start": 1016,
                  "end": 1021,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1017,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1019,
                    "end": 1021,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Property",
                  "start": 1023,
                  "end": 1044,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1023,
                    "end": 1026,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1026,
                    "end": 1044,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1029,
                      "end": 1044,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1031,
                          "end": 1042,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1031,
                            "end": 1042,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1031,
                              "end": 1037,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1031,
                                "end": 1035
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1036,
                                "end": 1037,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1040,
                              "end": 1042,
                              "raw": "20",
                              "value": 20
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1050,
              "end": 1055,
              "typeName": {
                "type": "Identifier",
                "start": 1050,
                "end": 1055,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1068,
      "end": 1091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1072,
          "end": 1090,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1072,
            "end": 1074,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1077,
            "end": 1090,
            "expression": {
              "type": "Literal",
              "start": 1078,
              "end": 1080,
              "raw": "10",
              "value": 10
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1085,
              "end": 1090,
              "typeName": {
                "type": "Identifier",
                "start": 1085,
                "end": 1090,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1092,
      "end": 1118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1096,
          "end": 1117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1096,
            "end": 1098,
            "decorators": [],
            "name": "p2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1101,
            "end": 1117,
            "expression": {
              "type": "UnaryExpression",
              "start": 1103,
              "end": 1106,
              "argument": {
                "type": "Literal",
                "start": 1104,
                "end": 1106,
                "raw": "10",
                "value": 10
              },
              "operator": "-",
              "prefix": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1112,
              "end": 1117,
              "typeName": {
                "type": "Identifier",
                "start": 1112,
                "end": 1117,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1119,
      "end": 1146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1123,
          "end": 1145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1123,
            "end": 1125,
            "decorators": [],
            "name": "p3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1128,
            "end": 1145,
            "expression": {
              "type": "ArrayExpression",
              "start": 1129,
              "end": 1135,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1131,
                  "end": 1133,
                  "raw": "10",
                  "value": 10
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1140,
              "end": 1145,
              "typeName": {
                "type": "Identifier",
                "start": 1140,
                "end": 1145,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1147,
      "end": 1176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1151,
          "end": 1175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1151,
            "end": 1153,
            "decorators": [],
            "name": "p4",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1156,
            "end": 1175,
            "expression": {
              "type": "ArrayExpression",
              "start": 1156,
              "end": 1166,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 1157,
                  "end": 1165,
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "start": 1158,
                      "end": 1164,
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "start": 1159,
                          "end": 1163,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 1160,
                              "end": 1162,
                              "raw": "10",
                              "value": 10
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1170,
              "end": 1175,
              "typeName": {
                "type": "Identifier",
                "start": 1170,
                "end": 1175,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1178,
      "end": 1240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1182,
          "end": 1239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1182,
            "end": 1184,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1187,
            "end": 1239,
            "expression": {
              "type": "ObjectExpression",
              "start": 1187,
              "end": 1230,
              "properties": [
                {
                  "type": "Property",
                  "start": 1189,
                  "end": 1194,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1189,
                    "end": 1190,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1192,
                    "end": 1194,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Property",
                  "start": 1196,
                  "end": 1207,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1197,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrayExpression",
                    "start": 1199,
                    "end": 1207,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1200,
                        "end": 1202,
                        "raw": "20",
                        "value": 20
                      },
                      {
                        "type": "Literal",
                        "start": 1204,
                        "end": 1206,
                        "raw": "30",
                        "value": 30
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 1209,
                  "end": 1228,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1209,
                    "end": 1210,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 1212,
                    "end": 1228,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1214,
                        "end": 1226,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1214,
                          "end": 1215,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 1217,
                          "end": 1226,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1219,
                              "end": 1224,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1219,
                                "end": 1220,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 1222,
                                "end": 1224,
                                "raw": "42",
                                "value": 42
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1234,
              "end": 1239,
              "typeName": {
                "type": "Identifier",
                "start": 1234,
                "end": 1239,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1242,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1246,
          "end": 1261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1246,
            "end": 1248,
            "decorators": [],
            "name": "q1",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1251,
            "end": 1261,
            "expression": {
              "type": "Literal",
              "start": 1259,
              "end": 1261,
              "raw": "10",
              "value": 10
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1252,
              "end": 1257,
              "typeName": {
                "type": "Identifier",
                "start": 1252,
                "end": 1257,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1263,
      "end": 1286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1269,
            "decorators": [],
            "name": "q2",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1272,
            "end": 1285,
            "expression": {
              "type": "Literal",
              "start": 1280,
              "end": 1285,
              "raw": "'abc'",
              "value": "abc"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1273,
              "end": 1278,
              "typeName": {
                "type": "Identifier",
                "start": 1273,
                "end": 1278,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1287,
      "end": 1309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1291,
          "end": 1308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1291,
            "end": 1293,
            "decorators": [],
            "name": "q3",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1296,
            "end": 1308,
            "expression": {
              "type": "Literal",
              "start": 1304,
              "end": 1308,
              "raw": "true",
              "value": true
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1297,
              "end": 1302,
              "typeName": {
                "type": "Identifier",
                "start": 1297,
                "end": 1302,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1310,
      "end": 1337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1314,
          "end": 1336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1314,
            "end": 1316,
            "decorators": [],
            "name": "q4",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1319,
            "end": 1336,
            "expression": {
              "type": "ArrayExpression",
              "start": 1327,
              "end": 1336,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1328,
                  "end": 1329,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 1331,
                  "end": 1332,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 1334,
                  "end": 1335,
                  "raw": "3",
                  "value": 3
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1320,
              "end": 1325,
              "typeName": {
                "type": "Identifier",
                "start": 1320,
                "end": 1325,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1338,
      "end": 1372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1342,
          "end": 1371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1342,
            "end": 1344,
            "decorators": [],
            "name": "q5",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1347,
            "end": 1371,
            "expression": {
              "type": "ObjectExpression",
              "start": 1355,
              "end": 1371,
              "properties": [
                {
                  "type": "Property",
                  "start": 1357,
                  "end": 1362,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1360,
                    "end": 1362,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Property",
                  "start": 1364,
                  "end": 1369,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1364,
                    "end": 1365,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1367,
                    "end": 1369,
                    "raw": "20",
                    "value": 20
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1348,
              "end": 1353,
              "typeName": {
                "type": "Identifier",
                "start": 1348,
                "end": 1353,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1374,
      "end": 1406,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1391,
        "end": 1393,
        "decorators": [],
        "name": "id",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1397,
          "end": 1401,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1398,
            "end": 1401,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1400,
              "end": 1401,
              "typeName": {
                "type": "Identifier",
                "start": 1400,
                "end": 1401,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1402,
        "end": 1405,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1404,
          "end": 1405,
          "typeName": {
            "type": "Identifier",
            "start": 1404,
            "end": 1405,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1393,
        "end": 1396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1394,
            "end": 1395,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1394,
              "end": 1395,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1408,
      "end": 1429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1412,
          "end": 1428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1412,
            "end": 1414,
            "decorators": [],
            "name": "e1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1417,
            "end": 1428,
            "expression": {
              "type": "Identifier",
              "start": 1417,
              "end": 1419,
              "decorators": [],
              "name": "v1",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1423,
              "end": 1428,
              "typeName": {
                "type": "Identifier",
                "start": 1423,
                "end": 1428,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1440,
      "end": 1473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1444,
          "end": 1472,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1446,
            "decorators": [],
            "name": "e2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1449,
            "end": 1472,
            "expression": {
              "type": "ConditionalExpression",
              "start": 1450,
              "end": 1462,
              "alternate": {
                "type": "Literal",
                "start": 1461,
                "end": 1462,
                "raw": "0",
                "value": 0
              },
              "consequent": {
                "type": "Literal",
                "start": 1457,
                "end": 1458,
                "raw": "1",
                "value": 1
              },
              "test": {
                "type": "Literal",
                "start": 1450,
                "end": 1454,
                "raw": "true",
                "value": true
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1467,
              "end": 1472,
              "typeName": {
                "type": "Identifier",
                "start": 1467,
                "end": 1472,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1484,
      "end": 1508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1488,
          "end": 1507,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1488,
            "end": 1490,
            "decorators": [],
            "name": "e3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1493,
            "end": 1507,
            "expression": {
              "type": "CallExpression",
              "start": 1493,
              "end": 1498,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1496,
                  "end": 1497,
                  "raw": "1",
                  "value": 1
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1493,
                "end": 1495,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1502,
              "end": 1507,
              "typeName": {
                "type": "Identifier",
                "start": 1502,
                "end": 1507,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1520,
      "end": 1544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1524,
          "end": 1543,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1524,
            "end": 1526,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1529,
            "end": 1543,
            "expression": {
              "type": "Literal",
              "start": 1529,
              "end": 1534,
              "raw": "'foo'",
              "value": "foo"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1538,
              "end": 1543,
              "typeName": {
                "type": "Identifier",
                "start": 1538,
                "end": 1543,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1545,
      "end": 1569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1549,
          "end": 1568,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1549,
            "end": 1551,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1554,
            "end": 1568,
            "expression": {
              "type": "Literal",
              "start": 1554,
              "end": 1559,
              "raw": "'bar'",
              "value": "bar"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1563,
              "end": 1568,
              "typeName": {
                "type": "Identifier",
                "start": 1563,
                "end": 1568,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1570,
      "end": 1602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1574,
          "end": 1601,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1574,
            "end": 1576,
            "decorators": [],
            "name": "t3",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1579,
            "end": 1601,
            "expression": {
              "type": "TemplateLiteral",
              "start": 1579,
              "end": 1592,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1584,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1588,
                  "end": 1590,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1579,
                  "end": 1582,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1584,
                  "end": 1588,
                  "tail": false,
                  "value": {
                    "cooked": "-",
                    "raw": "-"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1590,
                  "end": 1592,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1596,
              "end": 1601,
              "typeName": {
                "type": "Identifier",
                "start": 1596,
                "end": 1601,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1603,
      "end": 1649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1607,
          "end": 1648,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1607,
            "end": 1609,
            "decorators": [],
            "name": "t4",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1612,
            "end": 1648,
            "expression": {
              "type": "TemplateLiteral",
              "start": 1612,
              "end": 1639,
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "start": 1615,
                  "end": 1624,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1619,
                      "end": 1621,
                      "decorators": [],
                      "name": "t1",
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1615,
                      "end": 1619,
                      "tail": false,
                      "value": {
                        "cooked": "(",
                        "raw": "("
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1621,
                      "end": 1624,
                      "tail": true,
                      "value": {
                        "cooked": ")",
                        "raw": ")"
                      }
                    }
                  ]
                },
                {
                  "type": "TemplateLiteral",
                  "start": 1628,
                  "end": 1637,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1632,
                      "end": 1634,
                      "decorators": [],
                      "name": "t2",
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1628,
                      "end": 1632,
                      "tail": false,
                      "value": {
                        "cooked": "(",
                        "raw": "("
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1634,
                      "end": 1637,
                      "tail": true,
                      "value": {
                        "cooked": ")",
                        "raw": ")"
                      }
                    }
                  ]
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1612,
                  "end": 1615,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1624,
                  "end": 1628,
                  "tail": false,
                  "value": {
                    "cooked": "-",
                    "raw": "-"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1637,
                  "end": 1639,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1643,
              "end": 1648,
              "typeName": {
                "type": "Identifier",
                "start": 1643,
                "end": 1648,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1651,
      "end": 1728,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1692,
        "end": 1728,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1698,
            "end": 1726,
            "argument": {
              "type": "TSAsExpression",
              "start": 1705,
              "end": 1725,
              "expression": {
                "type": "TemplateLiteral",
                "start": 1705,
                "end": 1716,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 1708,
                    "end": 1709,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1713,
                    "end": 1714,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1705,
                    "end": 1708,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1709,
                    "end": 1713,
                    "tail": false,
                    "value": {
                      "cooked": "-",
                      "raw": "-"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1714,
                    "end": 1716,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1720,
                "end": 1725,
                "typeName": {
                  "type": "Identifier",
                  "start": 1720,
                  "end": 1725,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
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
        "start": 1660,
        "end": 1663,
        "decorators": [],
        "name": "ff1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1664,
          "end": 1680,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1665,
            "end": 1680,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1667,
              "end": 1680,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1667,
                  "end": 1672,
                  "literal": {
                    "type": "Literal",
                    "start": 1667,
                    "end": 1672,
                    "raw": "'foo'",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1675,
                  "end": 1680,
                  "literal": {
                    "type": "Literal",
                    "start": 1675,
                    "end": 1680,
                    "raw": "'bar'",
                    "value": "bar"
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1682,
          "end": 1690,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1683,
            "end": 1690,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1685,
              "end": 1690,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1685,
                  "end": 1686,
                  "literal": {
                    "type": "Literal",
                    "start": 1685,
                    "end": 1686,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1689,
                  "end": 1690,
                  "literal": {
                    "type": "Literal",
                    "start": 1689,
                    "end": 1690,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1730,
      "end": 1827,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1791,
        "end": 1827,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1797,
            "end": 1825,
            "argument": {
              "type": "TSAsExpression",
              "start": 1804,
              "end": 1824,
              "expression": {
                "type": "TemplateLiteral",
                "start": 1804,
                "end": 1815,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 1807,
                    "end": 1808,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1812,
                    "end": 1813,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1804,
                    "end": 1807,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1808,
                    "end": 1812,
                    "tail": false,
                    "value": {
                      "cooked": "-",
                      "raw": "-"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1813,
                    "end": 1815,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1819,
                "end": 1824,
                "typeName": {
                  "type": "Identifier",
                  "start": 1819,
                  "end": 1824,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
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
        "start": 1739,
        "end": 1742,
        "decorators": [],
        "name": "ff2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1779,
          "end": 1783,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1780,
            "end": 1783,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1782,
              "end": 1783,
              "typeName": {
                "type": "Identifier",
                "start": 1782,
                "end": 1783,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1785,
          "end": 1789,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1786,
            "end": 1789,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1788,
              "end": 1789,
              "typeName": {
                "type": "Identifier",
                "start": 1788,
                "end": 1789,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1742,
        "end": 1778,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1743,
            "end": 1759,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1753,
              "end": 1759
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1743,
              "end": 1744,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1761,
            "end": 1777,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1771,
              "end": 1777
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1761,
              "end": 1762,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1829,
      "end": 1859,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1835,
          "end": 1858,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1835,
            "end": 1838,
            "decorators": [],
            "name": "ts1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1841,
            "end": 1858,
            "arguments": [
              {
                "type": "Literal",
                "start": 1845,
                "end": 1850,
                "raw": "'foo'",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 1852,
                "end": 1857,
                "raw": "'bar'",
                "value": "bar"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1841,
              "end": 1844,
              "decorators": [],
              "name": "ff2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1860,
      "end": 1903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1866,
          "end": 1902,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1866,
            "end": 1869,
            "decorators": [],
            "name": "ts2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1872,
            "end": 1902,
            "arguments": [
              {
                "type": "Literal",
                "start": 1876,
                "end": 1881,
                "raw": "'foo'",
                "value": "foo"
              },
              {
                "type": "ConditionalExpression",
                "start": 1883,
                "end": 1901,
                "alternate": {
                  "type": "Literal",
                  "start": 1898,
                  "end": 1901,
                  "raw": "'1'",
                  "value": "1"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1892,
                  "end": 1895,
                  "raw": "'0'",
                  "value": "0"
                },
                "test": {
                  "type": "UnaryExpression",
                  "start": 1883,
                  "end": 1889,
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1884,
                    "end": 1889,
                    "argument": {
                      "type": "Literal",
                      "start": 1885,
                      "end": 1889,
                      "raw": "true",
                      "value": true
                    },
                    "operator": "!",
                    "prefix": true
                  },
                  "operator": "!",
                  "prefix": true
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1872,
              "end": 1875,
              "decorators": [],
              "name": "ff2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1904,
      "end": 1974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1910,
          "end": 1973,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1910,
            "end": 1913,
            "decorators": [],
            "name": "ts3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1916,
            "end": 1973,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1920,
                "end": 1945,
                "alternate": {
                  "type": "Literal",
                  "start": 1937,
                  "end": 1945,
                  "raw": "'bottom'",
                  "value": "bottom"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1929,
                  "end": 1934,
                  "raw": "'top'",
                  "value": "top"
                },
                "test": {
                  "type": "UnaryExpression",
                  "start": 1920,
                  "end": 1926,
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1921,
                    "end": 1926,
                    "argument": {
                      "type": "Literal",
                      "start": 1922,
                      "end": 1926,
                      "raw": "true",
                      "value": true
                    },
                    "operator": "!",
                    "prefix": true
                  },
                  "operator": "!",
                  "prefix": true
                }
              },
              {
                "type": "ConditionalExpression",
                "start": 1947,
                "end": 1972,
                "alternate": {
                  "type": "Literal",
                  "start": 1965,
                  "end": 1972,
                  "raw": "'right'",
                  "value": "right"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1956,
                  "end": 1962,
                  "raw": "'left'",
                  "value": "left"
                },
                "test": {
                  "type": "UnaryExpression",
                  "start": 1947,
                  "end": 1953,
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1948,
                    "end": 1953,
                    "argument": {
                      "type": "Literal",
                      "start": 1949,
                      "end": 1953,
                      "raw": "true",
                      "value": true
                    },
                    "operator": "!",
                    "prefix": true
                  },
                  "operator": "!",
                  "prefix": true
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1916,
              "end": 1919,
              "decorators": [],
              "name": "ff2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1976,
      "end": 2053,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2018,
        "end": 2053,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2024,
            "end": 2051,
            "argument": {
              "type": "TSAsExpression",
              "start": 2031,
              "end": 2050,
              "expression": {
                "type": "TemplateLiteral",
                "start": 2031,
                "end": 2041,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2035,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2039,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2031,
                    "end": 2034,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2035,
                    "end": 2038,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2039,
                    "end": 2041,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2045,
                "end": 2050,
                "typeName": {
                  "type": "Identifier",
                  "start": 2045,
                  "end": 2050,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
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
        "start": 1985,
        "end": 1988,
        "decorators": [],
        "name": "ff3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1989,
          "end": 2005,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1990,
            "end": 2005,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1992,
              "end": 2005,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1992,
                  "end": 1997,
                  "literal": {
                    "type": "Literal",
                    "start": 1992,
                    "end": 1997,
                    "raw": "'foo'",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 2000,
                  "end": 2005,
                  "literal": {
                    "type": "Literal",
                    "start": 2000,
                    "end": 2005,
                    "raw": "'bar'",
                    "value": "bar"
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2007,
          "end": 2016,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2008,
            "end": 2016,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 2010,
              "end": 2016
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2055,
      "end": 2088,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2060,
        "end": 2066,
        "decorators": [],
        "name": "Action",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2069,
        "end": 2087,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2069,
            "end": 2077,
            "literal": {
              "type": "Literal",
              "start": 2069,
              "end": 2077,
              "raw": "\"verify\"",
              "value": "verify"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2080,
            "end": 2087,
            "literal": {
              "type": "Literal",
              "start": 2080,
              "end": 2087,
              "raw": "\"write\"",
              "value": "write"
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2089,
      "end": 2130,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2094,
        "end": 2106,
        "decorators": [],
        "name": "ContentMatch",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2109,
        "end": 2129,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 2109,
            "end": 2116,
            "literal": {
              "type": "Literal",
              "start": 2109,
              "end": 2116,
              "raw": "\"match\"",
              "value": "match"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 2119,
            "end": 2129,
            "literal": {
              "type": "Literal",
              "start": 2119,
              "end": 2129,
              "raw": "\"nonMatch\"",
              "value": "nonMatch"
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2131,
      "end": 2174,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2136,
        "end": 2143,
        "decorators": [],
        "name": "Outcome",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2146,
        "end": 2173,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2146,
            "end": 2149,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 2155,
            "end": 2159,
            "tail": false,
            "value": {
              "cooked": "_",
              "raw": "_"
            }
          },
          {
            "type": "TemplateElement",
            "start": 2171,
            "end": 2173,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2149,
            "end": 2155,
            "typeName": {
              "type": "Identifier",
              "start": 2149,
              "end": 2155,
              "decorators": [],
              "name": "Action",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 2159,
            "end": 2171,
            "typeName": {
              "type": "Identifier",
              "start": 2159,
              "end": 2171,
              "decorators": [],
              "name": "ContentMatch",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2176,
      "end": 2456,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2231,
        "end": 2456,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2237,
            "end": 2289,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2243,
                "end": 2288,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2243,
                  "end": 2258,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2250,
                    "end": 2258,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2252,
                      "end": 2258,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2252,
                        "end": 2258,
                        "decorators": [],
                        "name": "Action",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2261,
                  "end": 2288,
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2281,
                    "end": 2288,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2281,
                        "end": 2288,
                        "tail": true,
                        "value": {
                          "cooked": "write",
                          "raw": "write"
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2270,
                    "end": 2278,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2270,
                        "end": 2278,
                        "tail": true,
                        "value": {
                          "cooked": "verify",
                          "raw": "verify"
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 2261,
                    "end": 2267,
                    "decorators": [],
                    "name": "verify",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2294,
            "end": 2367,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2300,
                "end": 2366,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2300,
                  "end": 2326,
                  "decorators": [],
                  "name": "contentMatch",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2312,
                    "end": 2326,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2314,
                      "end": 2326,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2314,
                        "end": 2326,
                        "decorators": [],
                        "name": "ContentMatch",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2329,
                  "end": 2366,
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2356,
                    "end": 2366,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2356,
                        "end": 2366,
                        "tail": true,
                        "value": {
                          "cooked": "nonMatch",
                          "raw": "nonMatch"
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2346,
                    "end": 2353,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2346,
                        "end": 2353,
                        "tail": true,
                        "value": {
                          "cooked": "match",
                          "raw": "match"
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 2329,
                    "end": 2343,
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2372,
            "end": 2434,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2378,
                "end": 2433,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2378,
                  "end": 2394,
                  "decorators": [],
                  "name": "outcome",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2385,
                    "end": 2394,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2387,
                      "end": 2394,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2387,
                        "end": 2394,
                        "decorators": [],
                        "name": "Outcome",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 2397,
                  "end": 2433,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 2397,
                    "end": 2424,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2400,
                        "end": 2406,
                        "decorators": [],
                        "name": "action",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2410,
                        "end": 2422,
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2397,
                        "end": 2400,
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2406,
                        "end": 2410,
                        "tail": false,
                        "value": {
                          "cooked": "_",
                          "raw": "_"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2422,
                        "end": 2424,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2428,
                    "end": 2433,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2428,
                      "end": 2433,
                      "decorators": [],
                      "name": "const",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2439,
            "end": 2454,
            "argument": {
              "type": "Identifier",
              "start": 2446,
              "end": 2453,
              "decorators": [],
              "name": "outcome",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2185,
        "end": 2188,
        "decorators": [],
        "name": "ff4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2189,
          "end": 2204,
          "decorators": [],
          "name": "verify",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2195,
            "end": 2204,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2197,
              "end": 2204
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2206,
          "end": 2229,
          "decorators": [],
          "name": "contentMatches",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2220,
            "end": 2229,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2222,
              "end": 2229
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2458,
      "end": 2706,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2513,
        "end": 2706,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2519,
            "end": 2562,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2525,
                "end": 2561,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2525,
                  "end": 2531,
                  "decorators": [],
                  "name": "action",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2534,
                  "end": 2561,
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2554,
                    "end": 2561,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2554,
                        "end": 2561,
                        "tail": true,
                        "value": {
                          "cooked": "write",
                          "raw": "write"
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2543,
                    "end": 2551,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2543,
                        "end": 2551,
                        "tail": true,
                        "value": {
                          "cooked": "verify",
                          "raw": "verify"
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 2534,
                    "end": 2540,
                    "decorators": [],
                    "name": "verify",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2567,
            "end": 2626,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2573,
                "end": 2625,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2573,
                  "end": 2585,
                  "decorators": [],
                  "name": "contentMatch",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2588,
                  "end": 2625,
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2615,
                    "end": 2625,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2615,
                        "end": 2625,
                        "tail": true,
                        "value": {
                          "cooked": "nonMatch",
                          "raw": "nonMatch"
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2605,
                    "end": 2612,
                    "expressions": [],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2605,
                        "end": 2612,
                        "tail": true,
                        "value": {
                          "cooked": "match",
                          "raw": "match"
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 2588,
                    "end": 2602,
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2631,
            "end": 2684,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2637,
                "end": 2683,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2637,
                  "end": 2644,
                  "decorators": [],
                  "name": "outcome",
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 2647,
                  "end": 2683,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 2647,
                    "end": 2674,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2650,
                        "end": 2656,
                        "decorators": [],
                        "name": "action",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2660,
                        "end": 2672,
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2647,
                        "end": 2650,
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2656,
                        "end": 2660,
                        "tail": false,
                        "value": {
                          "cooked": "_",
                          "raw": "_"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2672,
                        "end": 2674,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2678,
                    "end": 2683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2678,
                      "end": 2683,
                      "decorators": [],
                      "name": "const",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2689,
            "end": 2704,
            "argument": {
              "type": "Identifier",
              "start": 2696,
              "end": 2703,
              "decorators": [],
              "name": "outcome",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2467,
        "end": 2470,
        "decorators": [],
        "name": "ff5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2471,
          "end": 2486,
          "decorators": [],
          "name": "verify",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2477,
            "end": 2486,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2479,
              "end": 2486
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2488,
          "end": 2511,
          "decorators": [],
          "name": "contentMatches",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2502,
            "end": 2511,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2504,
              "end": 2511
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2708,
      "end": 2825,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2762,
        "end": 2825,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2768,
            "end": 2823,
            "argument": {
              "type": "TSAsExpression",
              "start": 2775,
              "end": 2822,
              "expression": {
                "type": "ArrayExpression",
                "start": 2775,
                "end": 2813,
                "elements": [
                  {
                    "type": "TemplateLiteral",
                    "start": 2776,
                    "end": 2793,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2783,
                        "end": 2791,
                        "decorators": [],
                        "name": "propName",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2776,
                        "end": 2783,
                        "tail": false,
                        "value": {
                          "cooked": "get-",
                          "raw": "get-"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2791,
                        "end": 2793,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  },
                  {
                    "type": "TemplateLiteral",
                    "start": 2795,
                    "end": 2812,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2802,
                        "end": 2810,
                        "decorators": [],
                        "name": "propName",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2795,
                        "end": 2802,
                        "tail": false,
                        "value": {
                          "cooked": "set-",
                          "raw": "set-"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2810,
                        "end": 2812,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ]
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2817,
                "end": 2822,
                "typeName": {
                  "type": "Identifier",
                  "start": 2817,
                  "end": 2822,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
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
        "start": 2717,
        "end": 2730,
        "decorators": [],
        "name": "accessorNames",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2749,
          "end": 2760,
          "decorators": [],
          "name": "propName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2757,
            "end": 2760,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2759,
              "end": 2760,
              "typeName": {
                "type": "Identifier",
                "start": 2759,
                "end": 2760,
                "decorators": [],
                "name": "S",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2730,
        "end": 2748,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2731,
            "end": 2747,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2741,
              "end": 2747
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2731,
              "end": 2732,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2827,
      "end": 2860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2833,
          "end": 2859,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2833,
            "end": 2836,
            "decorators": [],
            "name": "ns1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2839,
            "end": 2859,
            "arguments": [
              {
                "type": "Literal",
                "start": 2853,
                "end": 2858,
                "raw": "'foo'",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2839,
              "end": 2852,
              "decorators": [],
              "name": "accessorNames",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2929,
      "end": 2967,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2948,
        "end": 2967,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2952,
            "end": 2957,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2952,
              "end": 2953,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2953,
              "end": 2956,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2955,
                "end": 2956,
                "literal": {
                  "type": "Literal",
                  "start": 2955,
                  "end": 2956,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2960,
            "end": 2965,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2960,
              "end": 2961,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2961,
              "end": 2964,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2963,
                "end": 2964,
                "literal": {
                  "type": "Literal",
                  "start": 2963,
                  "end": 2964,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2939,
        "end": 2947,
        "decorators": [],
        "name": "Foo54374",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2969,
      "end": 3028,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2975,
          "end": 3028,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2975,
            "end": 2998,
            "decorators": [],
            "name": "fooConst54374",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2988,
              "end": 2998,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2990,
                "end": 2998,
                "typeName": {
                  "type": "Identifier",
                  "start": 2990,
                  "end": 2998,
                  "decorators": [],
                  "name": "Foo54374",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3001,
            "end": 3028,
            "expression": {
              "type": "ObjectExpression",
              "start": 3001,
              "end": 3019,
              "properties": [
                {
                  "type": "Property",
                  "start": 3005,
                  "end": 3009,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3005,
                    "end": 3006,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 3008,
                    "end": 3009,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 3013,
                  "end": 3017,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3013,
                    "end": 3014,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 3016,
                    "end": 3017,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3023,
              "end": 3028,
              "typeName": {
                "type": "Identifier",
                "start": 3023,
                "end": 3028,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
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
