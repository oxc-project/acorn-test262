__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 863,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 62,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 60,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 33,
                "end": 42,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 36,
                    "end": 42
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 44,
                "end": 58,
                "argument": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 50,
                    "end": 58,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 86,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 80,
              "end": 86
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 88,
          "end": 97,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 91,
              "end": 97
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 99,
          "end": 113,
          "argument": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 113,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 105,
              "end": 113,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 105,
                "end": 111
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 118,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 135,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 135,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 127,
                "end": 135,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 152,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 152,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 144,
                "end": 152,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 144,
                  "end": 150
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 164,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 177,
            "name": "xa",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 177,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 174,
                "end": 177,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 175,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 197,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 196,
        "callee": {
          "type": "Identifier",
          "start": 180,
          "end": 183,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 184,
            "end": 185,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 190,
            "end": 195,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 214,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 213,
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 201,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 202,
            "end": 203,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 208,
            "end": 212,
            "argument": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 238,
      "expression": {
        "type": "CallExpression",
        "start": 215,
        "end": 237,
        "callee": {
          "type": "Identifier",
          "start": 215,
          "end": 218,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 222,
            "end": 223,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 225,
            "end": 229,
            "argument": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 231,
            "end": 236,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 261,
      "expression": {
        "type": "CallExpression",
        "start": 240,
        "end": 260,
        "callee": {
          "type": "MemberExpression",
          "start": 240,
          "end": 247,
          "object": {
            "type": "Identifier",
            "start": 240,
            "end": 243,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 247,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 248,
            "end": 249,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 251,
            "end": 252,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 254,
            "end": 259,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 282,
      "expression": {
        "type": "CallExpression",
        "start": 262,
        "end": 281,
        "callee": {
          "type": "MemberExpression",
          "start": 262,
          "end": 269,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 265,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 270,
            "end": 271,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 273,
            "end": 274,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 276,
            "end": 280,
            "argument": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 310,
      "expression": {
        "type": "CallExpression",
        "start": 283,
        "end": 309,
        "callee": {
          "type": "MemberExpression",
          "start": 283,
          "end": 290,
          "object": {
            "type": "Identifier",
            "start": 283,
            "end": 286,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 287,
            "end": 290,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 291,
            "end": 292,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 294,
            "end": 295,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 297,
            "end": 301,
            "argument": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 303,
            "end": 308,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 335,
      "expression": {
        "type": "CallExpression",
        "start": 312,
        "end": 334,
        "callee": {
          "type": "MemberExpression",
          "start": 313,
          "end": 320,
          "object": {
            "type": "Identifier",
            "start": 313,
            "end": 316,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 317,
            "end": 320,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 322,
            "end": 323,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 325,
            "end": 326,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 328,
            "end": 333,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 336,
      "end": 358,
      "expression": {
        "type": "CallExpression",
        "start": 336,
        "end": 357,
        "callee": {
          "type": "MemberExpression",
          "start": 337,
          "end": 344,
          "object": {
            "type": "Identifier",
            "start": 337,
            "end": 340,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 344,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 346,
            "end": 347,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 349,
            "end": 350,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 352,
            "end": 356,
            "argument": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 388,
      "expression": {
        "type": "CallExpression",
        "start": 359,
        "end": 387,
        "callee": {
          "type": "MemberExpression",
          "start": 360,
          "end": 367,
          "object": {
            "type": "Identifier",
            "start": 360,
            "end": 363,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 369,
            "end": 370,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 372,
            "end": 373,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 375,
            "end": 379,
            "argument": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 381,
            "end": 386,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 413,
      "expression": {
        "type": "CallExpression",
        "start": 390,
        "end": 412,
        "callee": {
          "type": "MemberExpression",
          "start": 390,
          "end": 399,
          "object": {
            "type": "MemberExpression",
            "start": 390,
            "end": 395,
            "object": {
              "type": "Identifier",
              "start": 390,
              "end": 392,
              "name": "xa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 393,
              "end": 394,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 396,
            "end": 399,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 400,
            "end": 401,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 403,
            "end": 404,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 406,
            "end": 411,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 436,
      "expression": {
        "type": "CallExpression",
        "start": 414,
        "end": 435,
        "callee": {
          "type": "MemberExpression",
          "start": 414,
          "end": 423,
          "object": {
            "type": "MemberExpression",
            "start": 414,
            "end": 419,
            "object": {
              "type": "Identifier",
              "start": 414,
              "end": 416,
              "name": "xa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 417,
              "end": 418,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 424,
            "end": 425,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 427,
            "end": 428,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 430,
            "end": 434,
            "argument": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 437,
      "end": 466,
      "expression": {
        "type": "CallExpression",
        "start": 437,
        "end": 465,
        "callee": {
          "type": "MemberExpression",
          "start": 437,
          "end": 446,
          "object": {
            "type": "MemberExpression",
            "start": 437,
            "end": 442,
            "object": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "name": "xa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 440,
              "end": 441,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 443,
            "end": 446,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 447,
            "end": 448,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 450,
            "end": 451,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 453,
            "end": 457,
            "argument": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 459,
            "end": 464,
            "value": "abc",
            "raw": "\"abc\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 508,
      "expression": {
        "type": "CallExpression",
        "start": 468,
        "end": 507,
        "callee": {
          "type": "TSTypeAssertion",
          "start": 469,
          "end": 488,
          "expression": {
            "type": "MemberExpression",
            "start": 479,
            "end": 488,
            "object": {
              "type": "MemberExpression",
              "start": 479,
              "end": 484,
              "object": {
                "type": "Identifier",
                "start": 479,
                "end": 481,
                "name": "xa",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 482,
                "end": 483,
                "value": 1,
                "raw": "1"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 485,
              "end": 488,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 470,
            "end": 478,
            "typeName": {
              "type": "Identifier",
              "start": 470,
              "end": 478,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 490,
            "end": 506,
            "argument": {
              "type": "ArrayExpression",
              "start": 493,
              "end": 506,
              "elements": [
                {
                  "type": "Literal",
                  "start": 494,
                  "end": 495,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 497,
                  "end": 498,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 500,
                  "end": 505,
                  "value": "abc",
                  "raw": "\"abc\""
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 510,
      "end": 691,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 518,
        "end": 691,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 524,
            "end": 635,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 535,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 535,
              "end": 635,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 545,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 537,
                    "end": 545,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 539,
                      "end": 545
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 547,
                  "end": 556,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 548,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 550,
                      "end": 556
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 558,
                  "end": 572,
                  "argument": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 562,
                    "end": 572,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 564,
                      "end": 572,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 564,
                        "end": 570
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 574,
                "end": 635,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 584,
                    "end": 599,
                    "expression": {
                      "type": "CallExpression",
                      "start": 584,
                      "end": 598,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 584,
                        "end": 592,
                        "object": {
                          "type": "ThisExpression",
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 589,
                          "end": 592,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 593,
                          "end": 594,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 596,
                          "end": 597,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 608,
                    "end": 629,
                    "expression": {
                      "type": "CallExpression",
                      "start": 608,
                      "end": 628,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 608,
                        "end": 616,
                        "object": {
                          "type": "ThisExpression",
                          "start": 608,
                          "end": 612
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 613,
                          "end": 616,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 617,
                          "end": 618,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 620,
                          "end": 621,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "SpreadElement",
                          "start": 623,
                          "end": 627,
                          "argument": {
                            "type": "Identifier",
                            "start": 626,
                            "end": 627,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 640,
            "end": 689,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 640,
              "end": 643,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 689,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 653,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 645,
                    "end": 653,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 647,
                      "end": 653
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 655,
                  "end": 664,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 656,
                    "end": 664,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 658,
                      "end": 664
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 666,
                  "end": 680,
                  "argument": {
                    "type": "Identifier",
                    "start": 669,
                    "end": 670,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 670,
                    "end": 680,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 672,
                      "end": 680,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 672,
                        "end": 678
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 682,
                "end": 689,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 693,
      "end": 862,
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 700,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 709,
        "end": 710,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 711,
        "end": 862,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 717,
            "end": 786,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 717,
              "end": 728,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 728,
              "end": 786,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 731,
                "end": 786,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 741,
                    "end": 753,
                    "expression": {
                      "type": "CallExpression",
                      "start": 741,
                      "end": 752,
                      "callee": {
                        "type": "Super",
                        "start": 741,
                        "end": 746
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 747,
                          "end": 748,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 750,
                          "end": 751,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 762,
                    "end": 780,
                    "expression": {
                      "type": "CallExpression",
                      "start": 762,
                      "end": 779,
                      "callee": {
                        "type": "Super",
                        "start": 762,
                        "end": 767
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 768,
                          "end": 769,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 771,
                          "end": 772,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 774,
                          "end": 778,
                          "argument": {
                            "type": "Identifier",
                            "start": 777,
                            "end": 778,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 791,
            "end": 860,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 791,
              "end": 794,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 794,
              "end": 860,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 797,
                "end": 860,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 807,
                    "end": 823,
                    "expression": {
                      "type": "CallExpression",
                      "start": 807,
                      "end": 822,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 816,
                        "object": {
                          "type": "Super",
                          "start": 807,
                          "end": 812
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 813,
                          "end": 816,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 817,
                          "end": 818,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 820,
                          "end": 821,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 832,
                    "end": 854,
                    "expression": {
                      "type": "CallExpression",
                      "start": 832,
                      "end": 853,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 832,
                        "end": 841,
                        "object": {
                          "type": "Super",
                          "start": 832,
                          "end": 837
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 841,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 842,
                          "end": 843,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 845,
                          "end": 846,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 848,
                          "end": 852,
                          "argument": {
                            "type": "Identifier",
                            "start": 851,
                            "end": 852,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
