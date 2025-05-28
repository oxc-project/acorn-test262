__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 862,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 33,
                "end": 42,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 36,
                    "end": 42
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 44,
                "end": 58,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
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
        "decorators": [],
        "name": "foo",
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
          "start": 77,
          "end": 86,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 86,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 80,
              "end": 86
            }
          }
        },
        {
          "type": "Identifier",
          "start": 88,
          "end": 97,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 91,
              "end": 97
            }
          }
        },
        {
          "type": "RestElement",
          "start": 99,
          "end": 113,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 118,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 136,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 135,
            "decorators": [],
            "name": "a",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 153,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 152,
            "decorators": [],
            "name": "z",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 165,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 164,
            "decorators": [],
            "name": "obj",
            "optional": false,
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
                  "decorators": [],
                  "name": "X",
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
      "type": "VariableDeclaration",
      "start": 166,
      "end": 178,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 177,
            "decorators": [],
            "name": "xa",
            "optional": false,
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
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
              "decorators": [],
              "name": "a",
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 247,
            "decorators": [],
            "name": "foo",
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
        "optional": false
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "decorators": [],
            "name": "foo",
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
              "decorators": [],
              "name": "a",
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 287,
            "end": 290,
            "decorators": [],
            "name": "foo",
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 317,
            "end": 320,
            "decorators": [],
            "name": "foo",
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
        "optional": false
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 344,
            "decorators": [],
            "name": "foo",
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
              "decorators": [],
              "name": "a",
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
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "decorators": [],
            "name": "foo",
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false
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
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 393,
              "end": 394,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 396,
            "end": 399,
            "decorators": [],
            "name": "foo",
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
        "optional": false
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
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 417,
              "end": 418,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "decorators": [],
            "name": "foo",
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
              "decorators": [],
              "name": "a",
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
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 440,
              "end": 441,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 443,
            "end": 446,
            "decorators": [],
            "name": "foo",
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "optional": false
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
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 470,
            "end": 478,
            "typeName": {
              "type": "Identifier",
              "start": 470,
              "end": 478,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
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
                "decorators": [],
                "name": "xa",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 482,
                "end": 483,
                "value": 1,
                "raw": "1"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Identifier",
              "start": 485,
              "end": 488,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 510,
      "end": 691,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 518,
        "end": 691,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 524,
            "end": 635,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 535,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 535,
              "end": 635,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 536,
                  "end": 545,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 537,
                    "end": 545,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 539,
                      "end": 545
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 547,
                  "end": 556,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 548,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 550,
                      "end": 556
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 558,
                  "end": 572,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "returnType": null,
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
                          "decorators": [],
                          "name": "foo",
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
                          "start": 593,
                          "end": 594,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 596,
                          "end": 597,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                          "decorators": [],
                          "name": "foo",
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
                          "start": 617,
                          "end": 618,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 620,
                          "end": 621,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 623,
                          "end": 627,
                          "argument": {
                            "type": "Identifier",
                            "start": 626,
                            "end": 627,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 640,
            "end": 689,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 640,
              "end": 643,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 689,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 644,
                  "end": 653,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 645,
                    "end": 653,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 647,
                      "end": 653
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 655,
                  "end": 664,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 656,
                    "end": 664,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 658,
                      "end": 664
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 666,
                  "end": 680,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 669,
                    "end": 670,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 682,
                "end": 689,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 693,
      "end": 862,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 700,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 709,
        "end": 710,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 711,
        "end": 862,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 717,
            "end": 786,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 717,
              "end": 728,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 728,
              "end": 786,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
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
                      "optional": false
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
                      "typeArguments": null,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 791,
            "end": 860,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 791,
              "end": 794,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 794,
              "end": 860,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "foo",
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
                      "optional": false
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
                          "decorators": [],
                          "name": "foo",
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
