__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1117,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
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
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
      "start": 67,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
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
          "start": 80,
          "end": 89,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 89,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            }
          }
        },
        {
          "type": "Identifier",
          "start": 91,
          "end": 100,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 100,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            }
          }
        },
        {
          "type": "RestElement",
          "start": 102,
          "end": 116,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 116,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 108,
              "end": 116,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 121,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 139,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 138,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 138,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 130,
                "end": 138,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 130,
                  "end": 136
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
      "start": 140,
      "end": 156,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 155,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 147,
                "end": 155,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 147,
                  "end": 153
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
      "start": 157,
      "end": 168,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 167,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
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
      "start": 169,
      "end": 181,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 180,
            "decorators": [],
            "name": "xa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 180,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 177,
                "end": 180,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 177,
                  "end": 178,
                  "typeName": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
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
      "start": 183,
      "end": 200,
      "expression": {
        "type": "CallExpression",
        "start": 183,
        "end": 199,
        "callee": {
          "type": "Identifier",
          "start": 183,
          "end": 186,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 193,
            "end": 198,
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
      "start": 201,
      "end": 217,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 216,
        "callee": {
          "type": "Identifier",
          "start": 201,
          "end": 204,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 208,
            "end": 209,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 211,
            "end": 215,
            "argument": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
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
      "start": 218,
      "end": 241,
      "expression": {
        "type": "CallExpression",
        "start": 218,
        "end": 240,
        "callee": {
          "type": "Identifier",
          "start": 218,
          "end": 221,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 222,
            "end": 223,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 225,
            "end": 226,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 228,
            "end": 232,
            "argument": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 234,
            "end": 239,
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
      "start": 243,
      "end": 264,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 263,
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 250,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 250,
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
            "start": 251,
            "end": 252,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 254,
            "end": 255,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 257,
            "end": 262,
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
      "start": 265,
      "end": 285,
      "expression": {
        "type": "CallExpression",
        "start": 265,
        "end": 284,
        "callee": {
          "type": "MemberExpression",
          "start": 265,
          "end": 272,
          "object": {
            "type": "Identifier",
            "start": 265,
            "end": 268,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 269,
            "end": 272,
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
            "start": 273,
            "end": 274,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 276,
            "end": 277,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 279,
            "end": 283,
            "argument": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
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
      "start": 286,
      "end": 313,
      "expression": {
        "type": "CallExpression",
        "start": 286,
        "end": 312,
        "callee": {
          "type": "MemberExpression",
          "start": 286,
          "end": 293,
          "object": {
            "type": "Identifier",
            "start": 286,
            "end": 289,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 290,
            "end": 293,
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
            "start": 294,
            "end": 295,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 297,
            "end": 298,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 300,
            "end": 304,
            "argument": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 306,
            "end": 311,
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
      "start": 315,
      "end": 352,
      "expression": {
        "type": "CallExpression",
        "start": 315,
        "end": 351,
        "callee": {
          "type": "MemberExpression",
          "start": 315,
          "end": 338,
          "object": {
            "type": "CallExpression",
            "start": 315,
            "end": 334,
            "callee": {
              "type": "MemberExpression",
              "start": 315,
              "end": 322,
              "object": {
                "type": "Identifier",
                "start": 315,
                "end": 318,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 319,
                "end": 322,
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
                "start": 323,
                "end": 324,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 326,
                "end": 327,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "SpreadElement",
                "start": 329,
                "end": 333,
                "argument": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 333,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 338,
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
            "start": 339,
            "end": 340,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 342,
            "end": 343,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 345,
            "end": 350,
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
      "start": 353,
      "end": 389,
      "expression": {
        "type": "CallExpression",
        "start": 353,
        "end": 388,
        "callee": {
          "type": "MemberExpression",
          "start": 353,
          "end": 376,
          "object": {
            "type": "CallExpression",
            "start": 353,
            "end": 372,
            "callee": {
              "type": "MemberExpression",
              "start": 353,
              "end": 360,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 356,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 357,
                "end": 360,
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
                "start": 361,
                "end": 362,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 364,
                "end": 365,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "SpreadElement",
                "start": 367,
                "end": 371,
                "argument": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 373,
            "end": 376,
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
            "start": 377,
            "end": 378,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 380,
            "end": 381,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 383,
            "end": 387,
            "argument": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
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
      "start": 390,
      "end": 433,
      "expression": {
        "type": "CallExpression",
        "start": 390,
        "end": 432,
        "callee": {
          "type": "MemberExpression",
          "start": 390,
          "end": 413,
          "object": {
            "type": "CallExpression",
            "start": 390,
            "end": 409,
            "callee": {
              "type": "MemberExpression",
              "start": 390,
              "end": 397,
              "object": {
                "type": "Identifier",
                "start": 390,
                "end": 393,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 394,
                "end": 397,
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
                "start": 398,
                "end": 399,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 401,
                "end": 402,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "SpreadElement",
                "start": 404,
                "end": 408,
                "argument": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 408,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 410,
            "end": 413,
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
            "start": 414,
            "end": 415,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 417,
            "end": 418,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 420,
            "end": 424,
            "argument": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 426,
            "end": 431,
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
      "start": 435,
      "end": 458,
      "expression": {
        "type": "CallExpression",
        "start": 435,
        "end": 457,
        "callee": {
          "type": "MemberExpression",
          "start": 436,
          "end": 443,
          "object": {
            "type": "Identifier",
            "start": 436,
            "end": 439,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 440,
            "end": 443,
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
            "start": 445,
            "end": 446,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 448,
            "end": 449,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 451,
            "end": 456,
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
      "start": 459,
      "end": 481,
      "expression": {
        "type": "CallExpression",
        "start": 459,
        "end": 480,
        "callee": {
          "type": "MemberExpression",
          "start": 460,
          "end": 467,
          "object": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 464,
            "end": 467,
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
            "start": 469,
            "end": 470,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 472,
            "end": 473,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 475,
            "end": 479,
            "argument": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
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
      "start": 482,
      "end": 511,
      "expression": {
        "type": "CallExpression",
        "start": 482,
        "end": 510,
        "callee": {
          "type": "MemberExpression",
          "start": 483,
          "end": 490,
          "object": {
            "type": "Identifier",
            "start": 483,
            "end": 486,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 487,
            "end": 490,
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
            "start": 492,
            "end": 493,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 495,
            "end": 496,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 498,
            "end": 502,
            "argument": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 504,
            "end": 509,
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
      "start": 513,
      "end": 554,
      "expression": {
        "type": "CallExpression",
        "start": 513,
        "end": 553,
        "callee": {
          "type": "MemberExpression",
          "start": 514,
          "end": 539,
          "object": {
            "type": "CallExpression",
            "start": 514,
            "end": 535,
            "callee": {
              "type": "MemberExpression",
              "start": 515,
              "end": 522,
              "object": {
                "type": "Identifier",
                "start": 515,
                "end": 518,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 519,
                "end": 522,
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
                "start": 524,
                "end": 525,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 527,
                "end": 528,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "SpreadElement",
                "start": 530,
                "end": 534,
                "argument": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 534,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 536,
            "end": 539,
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
            "start": 541,
            "end": 542,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 544,
            "end": 545,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 547,
            "end": 552,
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
      "start": 555,
      "end": 595,
      "expression": {
        "type": "CallExpression",
        "start": 555,
        "end": 594,
        "callee": {
          "type": "MemberExpression",
          "start": 556,
          "end": 581,
          "object": {
            "type": "CallExpression",
            "start": 556,
            "end": 577,
            "callee": {
              "type": "MemberExpression",
              "start": 557,
              "end": 564,
              "object": {
                "type": "Identifier",
                "start": 557,
                "end": 560,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 561,
                "end": 564,
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
                "start": 566,
                "end": 567,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 569,
                "end": 570,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "SpreadElement",
                "start": 572,
                "end": 576,
                "argument": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 578,
            "end": 581,
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
            "start": 583,
            "end": 584,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 586,
            "end": 587,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 589,
            "end": 593,
            "argument": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
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
      "start": 596,
      "end": 643,
      "expression": {
        "type": "CallExpression",
        "start": 596,
        "end": 642,
        "callee": {
          "type": "MemberExpression",
          "start": 597,
          "end": 622,
          "object": {
            "type": "CallExpression",
            "start": 597,
            "end": 618,
            "callee": {
              "type": "MemberExpression",
              "start": 598,
              "end": 605,
              "object": {
                "type": "Identifier",
                "start": 598,
                "end": 601,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 602,
                "end": 605,
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
                "start": 607,
                "end": 608,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 610,
                "end": 611,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "SpreadElement",
                "start": 613,
                "end": 617,
                "argument": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 619,
            "end": 622,
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
            "start": 624,
            "end": 625,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 627,
            "end": 628,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 630,
            "end": 634,
            "argument": {
              "type": "Identifier",
              "start": 633,
              "end": 634,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 636,
            "end": 641,
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
      "start": 645,
      "end": 668,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 667,
        "callee": {
          "type": "MemberExpression",
          "start": 645,
          "end": 654,
          "object": {
            "type": "MemberExpression",
            "start": 645,
            "end": 650,
            "object": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 648,
              "end": 649,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 651,
            "end": 654,
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
            "start": 655,
            "end": 656,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 658,
            "end": 659,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 661,
            "end": 666,
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
      "start": 669,
      "end": 691,
      "expression": {
        "type": "CallExpression",
        "start": 669,
        "end": 690,
        "callee": {
          "type": "MemberExpression",
          "start": 669,
          "end": 678,
          "object": {
            "type": "MemberExpression",
            "start": 669,
            "end": 674,
            "object": {
              "type": "Identifier",
              "start": 669,
              "end": 671,
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 672,
              "end": 673,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 675,
            "end": 678,
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
            "start": 679,
            "end": 680,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 682,
            "end": 683,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 685,
            "end": 689,
            "argument": {
              "type": "Identifier",
              "start": 688,
              "end": 689,
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
      "start": 692,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 692,
        "end": 720,
        "callee": {
          "type": "MemberExpression",
          "start": 692,
          "end": 701,
          "object": {
            "type": "MemberExpression",
            "start": 692,
            "end": 697,
            "object": {
              "type": "Identifier",
              "start": 692,
              "end": 694,
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 695,
              "end": 696,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 698,
            "end": 701,
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
            "start": 702,
            "end": 703,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 705,
            "end": 706,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 708,
            "end": 712,
            "argument": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 714,
            "end": 719,
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
      "start": 723,
      "end": 763,
      "expression": {
        "type": "CallExpression",
        "start": 723,
        "end": 762,
        "callee": {
          "type": "TSTypeAssertion",
          "start": 724,
          "end": 743,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 725,
            "end": 733,
            "typeName": {
              "type": "Identifier",
              "start": 725,
              "end": 733,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "MemberExpression",
            "start": 734,
            "end": 743,
            "object": {
              "type": "MemberExpression",
              "start": 734,
              "end": 739,
              "object": {
                "type": "Identifier",
                "start": 734,
                "end": 736,
                "decorators": [],
                "name": "xa",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 737,
                "end": 738,
                "value": 1,
                "raw": "1"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Identifier",
              "start": 740,
              "end": 743,
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
            "start": 745,
            "end": 761,
            "argument": {
              "type": "ArrayExpression",
              "start": 748,
              "end": 761,
              "elements": [
                {
                  "type": "Literal",
                  "start": 749,
                  "end": 750,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 752,
                  "end": 753,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 755,
                  "end": 760,
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
      "start": 765,
      "end": 946,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 772,
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
        "start": 773,
        "end": 946,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 779,
            "end": 890,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 779,
              "end": 790,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 790,
              "end": 890,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 791,
                  "end": 800,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 792,
                    "end": 800,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 794,
                      "end": 800
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 802,
                  "end": 811,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 803,
                    "end": 811,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 805,
                      "end": 811
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 813,
                  "end": 827,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 817,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 817,
                    "end": 827,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 819,
                      "end": 827,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 819,
                        "end": 825
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 829,
                "end": 890,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 839,
                    "end": 854,
                    "expression": {
                      "type": "CallExpression",
                      "start": 839,
                      "end": 853,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 839,
                        "end": 847,
                        "object": {
                          "type": "ThisExpression",
                          "start": 839,
                          "end": 843
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 844,
                          "end": 847,
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
                          "start": 848,
                          "end": 849,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 851,
                          "end": 852,
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
                    "start": 863,
                    "end": 884,
                    "expression": {
                      "type": "CallExpression",
                      "start": 863,
                      "end": 883,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 863,
                        "end": 871,
                        "object": {
                          "type": "ThisExpression",
                          "start": 863,
                          "end": 867
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 871,
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
                          "start": 872,
                          "end": 873,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 875,
                          "end": 876,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 878,
                          "end": 882,
                          "argument": {
                            "type": "Identifier",
                            "start": 881,
                            "end": 882,
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
            "start": 895,
            "end": 944,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 895,
              "end": 898,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 898,
              "end": 944,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 899,
                  "end": 908,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 900,
                    "end": 908,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 902,
                      "end": 908
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 910,
                  "end": 919,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 911,
                    "end": 919,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 913,
                      "end": 919
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 921,
                  "end": 935,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 925,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 925,
                    "end": 935,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 927,
                      "end": 935,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 927,
                        "end": 933
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 937,
                "end": 944,
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
      "start": 948,
      "end": 1117,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 954,
        "end": 955,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 964,
        "end": 965,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 966,
        "end": 1117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 972,
            "end": 1041,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 972,
              "end": 983,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 983,
              "end": 1041,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 986,
                "end": 1041,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 996,
                    "end": 1008,
                    "expression": {
                      "type": "CallExpression",
                      "start": 996,
                      "end": 1007,
                      "callee": {
                        "type": "Super",
                        "start": 996,
                        "end": 1001
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1002,
                          "end": 1003,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 1005,
                          "end": 1006,
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
                    "start": 1017,
                    "end": 1035,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1017,
                      "end": 1034,
                      "callee": {
                        "type": "Super",
                        "start": 1017,
                        "end": 1022
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1023,
                          "end": 1024,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 1026,
                          "end": 1027,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 1029,
                          "end": 1033,
                          "argument": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1033,
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
            "start": 1046,
            "end": 1115,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1046,
              "end": 1049,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1049,
              "end": 1115,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1052,
                "end": 1115,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1062,
                    "end": 1078,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1062,
                      "end": 1077,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1062,
                        "end": 1071,
                        "object": {
                          "type": "Super",
                          "start": 1062,
                          "end": 1067
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1068,
                          "end": 1071,
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
                          "start": 1072,
                          "end": 1073,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 1075,
                          "end": 1076,
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
                    "start": 1087,
                    "end": 1109,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1087,
                      "end": 1108,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1087,
                        "end": 1096,
                        "object": {
                          "type": "Super",
                          "start": 1087,
                          "end": 1092
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1093,
                          "end": 1096,
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
                          "start": 1097,
                          "end": 1098,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 1100,
                          "end": 1101,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "SpreadElement",
                          "start": 1103,
                          "end": 1107,
                          "argument": {
                            "type": "Identifier",
                            "start": 1106,
                            "end": 1107,
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
