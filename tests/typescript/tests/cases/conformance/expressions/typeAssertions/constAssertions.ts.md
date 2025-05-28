__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3028,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 9,
            "end": 23,
            "expression": {
              "type": "Literal",
              "start": 9,
              "end": 14,
              "value": "abc",
              "raw": "'abc'"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 49,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 34,
            "end": 48,
            "expression": {
              "type": "TemplateLiteral",
              "start": 34,
              "end": 39,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 39,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": true
                }
              ],
              "expressions": []
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 71,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 59,
            "end": 70,
            "expression": {
              "type": "Literal",
              "start": 59,
              "end": 61,
              "value": 10,
              "raw": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 94,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 81,
            "end": 93,
            "expression": {
              "type": "UnaryExpression",
              "start": 81,
              "end": 84,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 82,
                "end": 84,
                "value": 10,
                "raw": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 117,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 104,
            "end": 116,
            "expression": {
              "type": "UnaryExpression",
              "start": 104,
              "end": 107,
              "operator": "+",
              "argument": {
                "type": "Literal",
                "start": 105,
                "end": 107,
                "value": 10,
                "raw": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 140,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 127,
            "end": 139,
            "expression": {
              "type": "Literal",
              "start": 127,
              "end": 130,
              "value": null,
              "raw": "10n",
              "bigint": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 164,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 147,
            "decorators": [],
            "name": "v7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 150,
            "end": 163,
            "expression": {
              "type": "UnaryExpression",
              "start": 150,
              "end": 154,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 151,
                "end": 154,
                "value": null,
                "raw": "10n",
                "bigint": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 188,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "decorators": [],
            "name": "v8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 174,
            "end": 187,
            "expression": {
              "type": "Literal",
              "start": 174,
              "end": 178,
              "value": true,
              "raw": "true"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 213,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "decorators": [],
            "name": "v9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 198,
            "end": 212,
            "expression": {
              "type": "Literal",
              "start": 198,
              "end": 203,
              "value": false,
              "raw": "false"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 239,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 238,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 221,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 224,
            "end": 238,
            "expression": {
              "type": "Literal",
              "start": 224,
              "end": 229,
              "value": "abc",
              "raw": "'abc'"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 264,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 249,
            "end": 263,
            "expression": {
              "type": "TemplateLiteral",
              "start": 249,
              "end": 254,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 249,
                  "end": 254,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": true
                }
              ],
              "expressions": []
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 286,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 271,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 274,
            "end": 285,
            "expression": {
              "type": "Literal",
              "start": 274,
              "end": 276,
              "value": 10,
              "raw": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 309,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 308,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 296,
            "end": 308,
            "expression": {
              "type": "UnaryExpression",
              "start": 296,
              "end": 299,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 297,
                "end": 299,
                "value": 10,
                "raw": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 332,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 316,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 319,
            "end": 331,
            "expression": {
              "type": "UnaryExpression",
              "start": 319,
              "end": 322,
              "operator": "+",
              "argument": {
                "type": "Literal",
                "start": 320,
                "end": 322,
                "value": 10,
                "raw": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 333,
      "end": 355,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 339,
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 342,
            "end": 354,
            "expression": {
              "type": "Literal",
              "start": 342,
              "end": 345,
              "value": null,
              "raw": "10n",
              "bigint": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 379,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 362,
            "decorators": [],
            "name": "c7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 365,
            "end": 378,
            "expression": {
              "type": "UnaryExpression",
              "start": 365,
              "end": 369,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 366,
                "end": 369,
                "value": null,
                "raw": "10n",
                "bigint": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 380,
      "end": 403,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "c8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 389,
            "end": 402,
            "expression": {
              "type": "Literal",
              "start": 389,
              "end": 393,
              "value": true,
              "raw": "true"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 428,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "decorators": [],
            "name": "c9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 413,
            "end": 427,
            "expression": {
              "type": "Literal",
              "start": 413,
              "end": 418,
              "value": false,
              "raw": "false"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 443,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 437,
            "decorators": [],
            "name": "vv1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 440,
            "end": 442,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 457,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 451,
            "decorators": [],
            "name": "vc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 459,
      "end": 480,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 465,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 509,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 487,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
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
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 497,
                  "end": 498,
                  "value": 3,
                  "raw": "3"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 548,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 547,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 516,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
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
                  "value": 10,
                  "raw": "10"
                },
                {
                  "type": "Literal",
                  "start": 524,
                  "end": 531,
                  "value": "hello",
                  "raw": "'hello'"
                },
                {
                  "type": "Literal",
                  "start": 533,
                  "end": 537,
                  "value": true,
                  "raw": "true"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 549,
      "end": 582,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
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
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 566,
                        "end": 567,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 569,
                        "end": 570,
                        "value": 3,
                        "raw": "3"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 602,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 601,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 589,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 596,
                "end": 597,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 599,
                "end": 600,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 603,
      "end": 629,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 609,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 647,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 636,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 648,
      "end": 681,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 654,
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null
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
                  "value": "abc",
                  "raw": "'abc'"
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
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 699,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 698,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 688,
            "decorators": [],
            "name": "a9",
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 740,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 739,
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 729,
                      "end": 737,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 731,
                        "end": 737
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "type": "VariableDeclaration",
      "start": 742,
      "end": 777,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 754,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 756,
                    "end": 758,
                    "value": 10,
                    "raw": "10"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 760,
                  "end": 765,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 761,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 763,
                    "end": 765,
                    "value": 20,
                    "raw": "20"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 778,
      "end": 846,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 845,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 789,
                    "end": 790,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 792,
                    "end": 793,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 795,
                  "end": 801,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 795,
                    "end": 798,
                    "value": "b",
                    "raw": "'b'"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 800,
                    "end": 801,
                    "value": 2,
                    "raw": "2"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 803,
                  "end": 811,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 804,
                    "end": 807,
                    "value": "c",
                    "raw": "'c'"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 810,
                    "end": 811,
                    "value": 3,
                    "raw": "3"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 813,
                  "end": 819,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 814,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 814,
                    "end": 819,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 817,
                      "end": 819,
                      "body": []
                    },
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 821,
                  "end": 834,
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "start": 822,
                    "end": 830,
                    "left": {
                      "type": "Literal",
                      "start": 822,
                      "end": 825,
                      "value": "e",
                      "raw": "'e'"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 828,
                      "end": 830,
                      "value": "",
                      "raw": "''"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 833,
                    "end": 834,
                    "value": 4,
                    "raw": "4"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 847,
      "end": 882,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 851,
          "end": 881,
          "id": {
            "type": "Identifier",
            "start": 851,
            "end": 853,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 883,
      "end": 907,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 887,
          "end": 906,
          "id": {
            "type": "Identifier",
            "start": 887,
            "end": 889,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 895,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 897,
                  "end": 898,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 900,
                "end": 904,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 901,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 903,
                  "end": 904,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 908,
      "end": 936,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 912,
          "end": 935,
          "id": {
            "type": "Identifier",
            "start": 912,
            "end": 914,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 937,
      "end": 956,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 941,
          "end": 955,
          "id": {
            "type": "Identifier",
            "start": 941,
            "end": 943,
            "decorators": [],
            "name": "o6",
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 984,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 961,
          "end": 983,
          "id": {
            "type": "Identifier",
            "start": 961,
            "end": 963,
            "decorators": [],
            "name": "o7",
            "optional": false,
            "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 985,
      "end": 1004,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 989,
          "end": 1003,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 991,
            "decorators": [],
            "name": "o8",
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1005,
      "end": 1056,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1055,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1011,
            "decorators": [],
            "name": "o9",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1017,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1019,
                    "end": 1021,
                    "value": 10,
                    "raw": "10"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1023,
                  "end": 1044,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1023,
                    "end": 1026,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1026,
                    "end": 1044,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "object": {
                                "type": "ThisExpression",
                                "start": 1031,
                                "end": 1035
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1036,
                                "end": 1037,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1040,
                              "end": 1042,
                              "value": 20,
                              "raw": "20"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1068,
      "end": 1091,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1072,
          "end": 1090,
          "id": {
            "type": "Identifier",
            "start": 1072,
            "end": 1074,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1077,
            "end": 1090,
            "expression": {
              "type": "Literal",
              "start": 1078,
              "end": 1080,
              "value": 10,
              "raw": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1092,
      "end": 1118,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1096,
          "end": 1117,
          "id": {
            "type": "Identifier",
            "start": 1096,
            "end": 1098,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1101,
            "end": 1117,
            "expression": {
              "type": "UnaryExpression",
              "start": 1103,
              "end": 1106,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 1104,
                "end": 1106,
                "value": 10,
                "raw": "10"
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1119,
      "end": 1146,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1123,
          "end": 1145,
          "id": {
            "type": "Identifier",
            "start": 1123,
            "end": 1125,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
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
                  "value": 10,
                  "raw": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1147,
      "end": 1176,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1151,
          "end": 1175,
          "id": {
            "type": "Identifier",
            "start": 1151,
            "end": 1153,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null
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
                              "value": 10,
                              "raw": "10"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1178,
      "end": 1240,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1182,
          "end": 1239,
          "id": {
            "type": "Identifier",
            "start": 1182,
            "end": 1184,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1189,
                    "end": 1190,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1192,
                    "end": 1194,
                    "value": 10,
                    "raw": "10"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1196,
                  "end": 1207,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1197,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "start": 1199,
                    "end": 1207,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1200,
                        "end": 1202,
                        "value": 20,
                        "raw": "20"
                      },
                      {
                        "type": "Literal",
                        "start": 1204,
                        "end": 1206,
                        "value": 30,
                        "raw": "30"
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1209,
                  "end": 1228,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1209,
                    "end": 1210,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 1212,
                    "end": 1228,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1214,
                        "end": 1226,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1214,
                          "end": 1215,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 1217,
                          "end": 1226,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1219,
                              "end": 1224,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1219,
                                "end": 1220,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 1222,
                                "end": 1224,
                                "value": 42,
                                "raw": "42"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1242,
      "end": 1262,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1246,
          "end": 1261,
          "id": {
            "type": "Identifier",
            "start": 1246,
            "end": 1248,
            "decorators": [],
            "name": "q1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1251,
            "end": 1261,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 1259,
              "end": 1261,
              "value": 10,
              "raw": "10"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1263,
      "end": 1286,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1285,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1269,
            "decorators": [],
            "name": "q2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1272,
            "end": 1285,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 1280,
              "end": 1285,
              "value": "abc",
              "raw": "'abc'"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1287,
      "end": 1309,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1291,
          "end": 1308,
          "id": {
            "type": "Identifier",
            "start": 1291,
            "end": 1293,
            "decorators": [],
            "name": "q3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1296,
            "end": 1308,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Literal",
              "start": 1304,
              "end": 1308,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1310,
      "end": 1337,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1314,
          "end": 1336,
          "id": {
            "type": "Identifier",
            "start": 1314,
            "end": 1316,
            "decorators": [],
            "name": "q4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1319,
            "end": 1336,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "ArrayExpression",
              "start": 1327,
              "end": 1336,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1328,
                  "end": 1329,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1331,
                  "end": 1332,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1334,
                  "end": 1335,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1338,
      "end": 1372,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1342,
          "end": 1371,
          "id": {
            "type": "Identifier",
            "start": 1342,
            "end": 1344,
            "decorators": [],
            "name": "q5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1347,
            "end": 1371,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 1355,
              "end": 1371,
              "properties": [
                {
                  "type": "Property",
                  "start": 1357,
                  "end": 1362,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1360,
                    "end": 1362,
                    "value": 10,
                    "raw": "10"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1364,
                  "end": 1369,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1364,
                    "end": 1365,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1367,
                    "end": 1369,
                    "value": 20,
                    "raw": "20"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1374,
      "end": 1406,
      "id": {
        "type": "Identifier",
        "start": 1391,
        "end": 1393,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1393,
        "end": 1396,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1394,
            "end": 1395,
            "name": {
              "type": "Identifier",
              "start": 1394,
              "end": 1395,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
      "start": 1408,
      "end": 1429,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1412,
          "end": 1428,
          "id": {
            "type": "Identifier",
            "start": 1412,
            "end": 1414,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1440,
      "end": 1473,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1444,
          "end": 1472,
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1446,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1449,
            "end": 1472,
            "expression": {
              "type": "ConditionalExpression",
              "start": 1450,
              "end": 1462,
              "test": {
                "type": "Literal",
                "start": 1450,
                "end": 1454,
                "value": true,
                "raw": "true"
              },
              "consequent": {
                "type": "Literal",
                "start": 1457,
                "end": 1458,
                "value": 1,
                "raw": "1"
              },
              "alternate": {
                "type": "Literal",
                "start": 1461,
                "end": 1462,
                "value": 0,
                "raw": "0"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1484,
      "end": 1508,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1488,
          "end": 1507,
          "id": {
            "type": "Identifier",
            "start": 1488,
            "end": 1490,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1493,
            "end": 1507,
            "expression": {
              "type": "CallExpression",
              "start": 1493,
              "end": 1498,
              "callee": {
                "type": "Identifier",
                "start": 1493,
                "end": 1495,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1496,
                  "end": 1497,
                  "value": 1,
                  "raw": "1"
                }
              ],
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1520,
      "end": 1544,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1524,
          "end": 1543,
          "id": {
            "type": "Identifier",
            "start": 1524,
            "end": 1526,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1529,
            "end": 1543,
            "expression": {
              "type": "Literal",
              "start": 1529,
              "end": 1534,
              "value": "foo",
              "raw": "'foo'"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1545,
      "end": 1569,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1549,
          "end": 1568,
          "id": {
            "type": "Identifier",
            "start": 1549,
            "end": 1551,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1554,
            "end": 1568,
            "expression": {
              "type": "Literal",
              "start": 1554,
              "end": 1559,
              "value": "bar",
              "raw": "'bar'"
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1570,
      "end": 1602,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1574,
          "end": 1601,
          "id": {
            "type": "Identifier",
            "start": 1574,
            "end": 1576,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1579,
            "end": 1601,
            "expression": {
              "type": "TemplateLiteral",
              "start": 1579,
              "end": 1592,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1579,
                  "end": 1582,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1584,
                  "end": 1588,
                  "value": {
                    "cooked": "-",
                    "raw": "-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1590,
                  "end": 1592,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1584,
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1588,
                  "end": 1590,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1603,
      "end": 1649,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1607,
          "end": 1648,
          "id": {
            "type": "Identifier",
            "start": 1607,
            "end": 1609,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1612,
            "end": 1648,
            "expression": {
              "type": "TemplateLiteral",
              "start": 1612,
              "end": 1639,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1612,
                  "end": 1615,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1624,
                  "end": 1628,
                  "value": {
                    "cooked": "-",
                    "raw": "-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1637,
                  "end": 1639,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "start": 1615,
                  "end": 1624,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1615,
                      "end": 1619,
                      "value": {
                        "cooked": "(",
                        "raw": "("
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1621,
                      "end": 1624,
                      "value": {
                        "cooked": ")",
                        "raw": ")"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1619,
                      "end": 1621,
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                {
                  "type": "TemplateLiteral",
                  "start": 1628,
                  "end": 1637,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1628,
                      "end": 1632,
                      "value": {
                        "cooked": "(",
                        "raw": "("
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1634,
                      "end": 1637,
                      "value": {
                        "cooked": ")",
                        "raw": ")"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1632,
                      "end": 1634,
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1651,
      "end": 1728,
      "id": {
        "type": "Identifier",
        "start": 1660,
        "end": 1663,
        "decorators": [],
        "name": "ff1",
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
                    "value": "foo",
                    "raw": "'foo'"
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
                    "value": "bar",
                    "raw": "'bar'"
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
                    "value": 1,
                    "raw": "1"
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
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1705,
                    "end": 1708,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1709,
                    "end": 1713,
                    "value": {
                      "cooked": "-",
                      "raw": "-"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1714,
                    "end": 1716,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 1708,
                    "end": 1709,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1713,
                    "end": 1714,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1730,
      "end": 1827,
      "id": {
        "type": "Identifier",
        "start": 1739,
        "end": 1742,
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1742,
        "end": 1778,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1743,
            "end": 1759,
            "name": {
              "type": "Identifier",
              "start": 1743,
              "end": 1744,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1753,
              "end": 1759
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1761,
            "end": 1777,
            "name": {
              "type": "Identifier",
              "start": 1761,
              "end": 1762,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1771,
              "end": 1777
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1804,
                    "end": 1807,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1808,
                    "end": 1812,
                    "value": {
                      "cooked": "-",
                      "raw": "-"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1813,
                    "end": 1815,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 1807,
                    "end": 1808,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1812,
                    "end": 1813,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1829,
      "end": 1859,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1835,
          "end": 1858,
          "id": {
            "type": "Identifier",
            "start": 1835,
            "end": 1838,
            "decorators": [],
            "name": "ts1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1841,
            "end": 1858,
            "callee": {
              "type": "Identifier",
              "start": 1841,
              "end": 1844,
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1845,
                "end": 1850,
                "value": "foo",
                "raw": "'foo'"
              },
              {
                "type": "Literal",
                "start": 1852,
                "end": 1857,
                "value": "bar",
                "raw": "'bar'"
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
      "start": 1860,
      "end": 1903,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1866,
          "end": 1902,
          "id": {
            "type": "Identifier",
            "start": 1866,
            "end": 1869,
            "decorators": [],
            "name": "ts2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1872,
            "end": 1902,
            "callee": {
              "type": "Identifier",
              "start": 1872,
              "end": 1875,
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1876,
                "end": 1881,
                "value": "foo",
                "raw": "'foo'"
              },
              {
                "type": "ConditionalExpression",
                "start": 1883,
                "end": 1901,
                "test": {
                  "type": "UnaryExpression",
                  "start": 1883,
                  "end": 1889,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1884,
                    "end": 1889,
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "start": 1885,
                      "end": 1889,
                      "value": true,
                      "raw": "true"
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1892,
                  "end": 1895,
                  "value": "0",
                  "raw": "'0'"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 1898,
                  "end": 1901,
                  "value": "1",
                  "raw": "'1'"
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
      "start": 1904,
      "end": 1974,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1910,
          "end": 1973,
          "id": {
            "type": "Identifier",
            "start": 1910,
            "end": 1913,
            "decorators": [],
            "name": "ts3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1916,
            "end": 1973,
            "callee": {
              "type": "Identifier",
              "start": 1916,
              "end": 1919,
              "decorators": [],
              "name": "ff2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1920,
                "end": 1945,
                "test": {
                  "type": "UnaryExpression",
                  "start": 1920,
                  "end": 1926,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1921,
                    "end": 1926,
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "start": 1922,
                      "end": 1926,
                      "value": true,
                      "raw": "true"
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1929,
                  "end": 1934,
                  "value": "top",
                  "raw": "'top'"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 1937,
                  "end": 1945,
                  "value": "bottom",
                  "raw": "'bottom'"
                }
              },
              {
                "type": "ConditionalExpression",
                "start": 1947,
                "end": 1972,
                "test": {
                  "type": "UnaryExpression",
                  "start": 1947,
                  "end": 1953,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1948,
                    "end": 1953,
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "start": 1949,
                      "end": 1953,
                      "value": true,
                      "raw": "true"
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "consequent": {
                  "type": "Literal",
                  "start": 1956,
                  "end": 1962,
                  "value": "left",
                  "raw": "'left'"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 1965,
                  "end": 1972,
                  "value": "right",
                  "raw": "'right'"
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
      "type": "FunctionDeclaration",
      "start": 1976,
      "end": 2053,
      "id": {
        "type": "Identifier",
        "start": 1985,
        "end": 1988,
        "decorators": [],
        "name": "ff3",
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
                    "value": "foo",
                    "raw": "'foo'"
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
                    "value": "bar",
                    "raw": "'bar'"
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
      ],
      "returnType": null,
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
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2031,
                    "end": 2034,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2035,
                    "end": 2038,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2039,
                    "end": 2041,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2035,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2039,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2055,
      "end": 2088,
      "id": {
        "type": "Identifier",
        "start": 2060,
        "end": 2066,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "verify",
              "raw": "\"verify\""
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
              "value": "write",
              "raw": "\"write\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2089,
      "end": 2130,
      "id": {
        "type": "Identifier",
        "start": 2094,
        "end": 2106,
        "decorators": [],
        "name": "ContentMatch",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "match",
              "raw": "\"match\""
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
              "value": "nonMatch",
              "raw": "\"nonMatch\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2131,
      "end": 2174,
      "id": {
        "type": "Identifier",
        "start": 2136,
        "end": 2143,
        "decorators": [],
        "name": "Outcome",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2146,
        "end": 2173,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2146,
            "end": 2149,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 2155,
            "end": 2159,
            "value": {
              "cooked": "_",
              "raw": "_"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 2171,
            "end": 2173,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
      "start": 2176,
      "end": 2456,
      "id": {
        "type": "Identifier",
        "start": 2185,
        "end": 2188,
        "decorators": [],
        "name": "ff4",
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2231,
        "end": 2456,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2237,
            "end": 2289,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2243,
                "end": 2288,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2261,
                  "end": 2288,
                  "test": {
                    "type": "Identifier",
                    "start": 2261,
                    "end": 2267,
                    "decorators": [],
                    "name": "verify",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2270,
                    "end": 2278,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2270,
                        "end": 2278,
                        "value": {
                          "cooked": "verify",
                          "raw": "verify"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2281,
                    "end": 2288,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2281,
                        "end": 2288,
                        "value": {
                          "cooked": "write",
                          "raw": "write"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2294,
            "end": 2367,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2300,
                "end": 2366,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2329,
                  "end": 2366,
                  "test": {
                    "type": "Identifier",
                    "start": 2329,
                    "end": 2343,
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2346,
                    "end": 2353,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2346,
                        "end": 2353,
                        "value": {
                          "cooked": "match",
                          "raw": "match"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2356,
                    "end": 2366,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2356,
                        "end": 2366,
                        "value": {
                          "cooked": "nonMatch",
                          "raw": "nonMatch"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2372,
            "end": 2434,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2378,
                "end": 2433,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2397,
                        "end": 2400,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2406,
                        "end": 2410,
                        "value": {
                          "cooked": "_",
                          "raw": "_"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2422,
                        "end": 2424,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2400,
                        "end": 2406,
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 2410,
                        "end": 2422,
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false,
                        "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
      "start": 2458,
      "end": 2706,
      "id": {
        "type": "Identifier",
        "start": 2467,
        "end": 2470,
        "decorators": [],
        "name": "ff5",
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2513,
        "end": 2706,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2519,
            "end": 2562,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2525,
                "end": 2561,
                "id": {
                  "type": "Identifier",
                  "start": 2525,
                  "end": 2531,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2534,
                  "end": 2561,
                  "test": {
                    "type": "Identifier",
                    "start": 2534,
                    "end": 2540,
                    "decorators": [],
                    "name": "verify",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2543,
                    "end": 2551,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2543,
                        "end": 2551,
                        "value": {
                          "cooked": "verify",
                          "raw": "verify"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2554,
                    "end": 2561,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2554,
                        "end": 2561,
                        "value": {
                          "cooked": "write",
                          "raw": "write"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2567,
            "end": 2626,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2573,
                "end": 2625,
                "id": {
                  "type": "Identifier",
                  "start": 2573,
                  "end": 2585,
                  "decorators": [],
                  "name": "contentMatch",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2588,
                  "end": 2625,
                  "test": {
                    "type": "Identifier",
                    "start": 2588,
                    "end": 2602,
                    "decorators": [],
                    "name": "contentMatches",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 2605,
                    "end": 2612,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2605,
                        "end": 2612,
                        "value": {
                          "cooked": "match",
                          "raw": "match"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 2615,
                    "end": 2625,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2615,
                        "end": 2625,
                        "value": {
                          "cooked": "nonMatch",
                          "raw": "nonMatch"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2631,
            "end": 2684,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2637,
                "end": 2683,
                "id": {
                  "type": "Identifier",
                  "start": 2637,
                  "end": 2644,
                  "decorators": [],
                  "name": "outcome",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 2647,
                  "end": 2683,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 2647,
                    "end": 2674,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2647,
                        "end": 2650,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2656,
                        "end": 2660,
                        "value": {
                          "cooked": "_",
                          "raw": "_"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2672,
                        "end": 2674,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2650,
                        "end": 2656,
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 2660,
                        "end": 2672,
                        "decorators": [],
                        "name": "contentMatch",
                        "optional": false,
                        "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
      "start": 2708,
      "end": 2825,
      "id": {
        "type": "Identifier",
        "start": 2717,
        "end": 2730,
        "decorators": [],
        "name": "accessorNames",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2730,
        "end": 2748,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2731,
            "end": 2747,
            "name": {
              "type": "Identifier",
              "start": 2731,
              "end": 2732,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2741,
              "end": 2747
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
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2776,
                        "end": 2783,
                        "value": {
                          "cooked": "get-",
                          "raw": "get-"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2791,
                        "end": 2793,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2783,
                        "end": 2791,
                        "decorators": [],
                        "name": "propName",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  {
                    "type": "TemplateLiteral",
                    "start": 2795,
                    "end": 2812,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 2795,
                        "end": 2802,
                        "value": {
                          "cooked": "set-",
                          "raw": "set-"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 2810,
                        "end": 2812,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2802,
                        "end": 2810,
                        "decorators": [],
                        "name": "propName",
                        "optional": false,
                        "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2827,
      "end": 2860,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2833,
          "end": 2859,
          "id": {
            "type": "Identifier",
            "start": 2833,
            "end": 2836,
            "decorators": [],
            "name": "ns1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2839,
            "end": 2859,
            "callee": {
              "type": "Identifier",
              "start": 2839,
              "end": 2852,
              "decorators": [],
              "name": "accessorNames",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2853,
                "end": 2858,
                "value": "foo",
                "raw": "'foo'"
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
      "type": "TSInterfaceDeclaration",
      "start": 2929,
      "end": 2967,
      "id": {
        "type": "Identifier",
        "start": 2939,
        "end": 2947,
        "decorators": [],
        "name": "Foo54374",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2952,
              "end": 2953,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2960,
            "end": 2965,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2960,
              "end": 2961,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": 2,
                  "raw": "2"
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
      "type": "VariableDeclaration",
      "start": 2969,
      "end": 3028,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2975,
          "end": 3028,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3005,
                    "end": 3006,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3008,
                    "end": 3009,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3013,
                  "end": 3017,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3013,
                    "end": 3014,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3016,
                    "end": 3017,
                    "value": 3,
                    "raw": "3"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
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
