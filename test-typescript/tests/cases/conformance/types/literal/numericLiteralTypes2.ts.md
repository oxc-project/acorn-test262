__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2273,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 12,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "A1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 10,
        "end": 11,
        "literal": {
          "type": "Literal",
          "start": 10,
          "end": 11,
          "value": 1,
          "raw": "1"
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 13,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 23,
        "end": 26,
        "literal": {
          "type": "Literal",
          "start": 23,
          "end": 26,
          "value": 1,
          "raw": "1.0"
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 35,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 38,
        "end": 41,
        "literal": {
          "type": "Literal",
          "start": 38,
          "end": 41,
          "value": 1,
          "raw": "1e0"
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 50,
        "name": "A4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 53,
        "end": 58,
        "literal": {
          "type": "Literal",
          "start": 53,
          "end": 58,
          "value": 1,
          "raw": "10e-1"
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 60,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "name": "A5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 70,
        "end": 91,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 70,
            "end": 71,
            "literal": {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 74,
            "end": 77,
            "literal": {
              "type": "Literal",
              "start": 74,
              "end": 77,
              "value": 1,
              "raw": "1.0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 80,
            "end": 83,
            "literal": {
              "type": "Literal",
              "start": 80,
              "end": 83,
              "value": 1,
              "raw": "1e0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 86,
            "end": 91,
            "literal": {
              "type": "Literal",
              "start": 86,
              "end": 91,
              "value": 1,
              "raw": "10e-1"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 206,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 128,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 123,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 123,
                        "name": "A1",
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
                "init": {
                  "type": "Literal",
                  "start": 126,
                  "end": 127,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 147,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 146,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 142,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 138,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 140,
                      "end": 142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 142,
                        "name": "A2",
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
                "init": {
                  "type": "Literal",
                  "start": 145,
                  "end": 146,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 152,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 156,
                "end": 165,
                "id": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 161,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 159,
                      "end": 161,
                      "typeName": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 161,
                        "name": "A3",
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
                "init": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 171,
            "end": 185,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 175,
                "end": 184,
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 180,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 180,
                        "name": "A4",
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
                "init": {
                  "type": "Literal",
                  "start": 183,
                  "end": 184,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 190,
            "end": 204,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 194,
                "end": 203,
                "id": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 199,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 195,
                    "end": 199,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 197,
                      "end": 199,
                      "typeName": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 199,
                        "name": "A5",
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
                "init": {
                  "type": "Literal",
                  "start": 202,
                  "end": 203,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 208,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 215,
        "name": "B1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 218,
        "end": 228,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 218,
            "end": 220,
            "literal": {
              "type": "UnaryExpression",
              "start": 218,
              "end": 220,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 219,
                "end": 220,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "TSLiteralType",
            "start": 223,
            "end": 224,
            "literal": {
              "type": "Literal",
              "start": 223,
              "end": 224,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 227,
            "end": 228,
            "literal": {
              "type": "Literal",
              "start": 227,
              "end": 228,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 230,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 237,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 240,
        "end": 250,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 240,
            "end": 241,
            "literal": {
              "type": "Literal",
              "start": 240,
              "end": 241,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 244,
            "end": 245,
            "literal": {
              "type": "Literal",
              "start": 244,
              "end": 245,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 248,
            "end": 250,
            "literal": {
              "type": "UnaryExpression",
              "start": 248,
              "end": 250,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 249,
                "end": 250,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 252,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 259,
        "name": "B3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 262,
        "end": 272,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 262,
            "end": 263,
            "literal": {
              "type": "Literal",
              "start": 262,
              "end": 263,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 266,
            "end": 268,
            "literal": {
              "type": "UnaryExpression",
              "start": 266,
              "end": 268,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 267,
                "end": 268,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "TSLiteralType",
            "start": 271,
            "end": 272,
            "literal": {
              "type": "Literal",
              "start": 271,
              "end": 272,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 350,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 350,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 295,
            "end": 310,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 309,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 304,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 300,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 302,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 304,
                        "name": "B1",
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
                "init": {
                  "type": "UnaryExpression",
                  "start": 307,
                  "end": 309,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 308,
                    "end": 309,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 315,
            "end": 329,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 328,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 324,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 324,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 324,
                        "name": "B2",
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
                "init": {
                  "type": "Literal",
                  "start": 327,
                  "end": 328,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 334,
            "end": 348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 338,
                "end": 347,
                "id": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 343,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 339,
                    "end": 343,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 341,
                      "end": 343,
                      "typeName": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 343,
                        "name": "B3",
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
                "init": {
                  "type": "Literal",
                  "start": 346,
                  "end": 347,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 747,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "name": "f3",
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
          "start": 364,
          "end": 368,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 368,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 367,
              "end": 368,
              "literal": {
                "type": "Literal",
                "start": 367,
                "end": 368,
                "value": 1,
                "raw": "1"
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 370,
          "end": 382,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 371,
            "end": 382,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 373,
              "end": 382,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 373,
                  "end": 374,
                  "literal": {
                    "type": "Literal",
                    "start": 373,
                    "end": 374,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 377,
                  "end": 378,
                  "literal": {
                    "type": "Literal",
                    "start": 377,
                    "end": 378,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 381,
                  "end": 382,
                  "literal": {
                    "type": "Literal",
                    "start": 381,
                    "end": 382,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 384,
        "end": 747,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 390,
            "end": 404,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 394,
                "end": 403,
                "id": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 398,
                  "end": 403,
                  "left": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 403,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 409,
            "end": 423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 422,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 417,
                  "end": 422,
                  "left": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 428,
            "end": 442,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 432,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 433,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 436,
                  "end": 441,
                  "left": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 447,
            "end": 461,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 451,
                "end": 460,
                "id": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 455,
                  "end": 460,
                  "left": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "start": 459,
                    "end": 460,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 466,
            "end": 480,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 470,
                "end": 479,
                "id": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 471,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 474,
                  "end": 479,
                  "left": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 479,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 485,
            "end": 499,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 489,
                "end": 498,
                "id": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 493,
                  "end": 498,
                  "left": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 504,
            "end": 518,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 508,
                "end": 517,
                "id": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 509,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 512,
                  "end": 517,
                  "left": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 513,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 523,
            "end": 537,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 527,
                "end": 536,
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 531,
                  "end": 536,
                  "left": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 553,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 552,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 547,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 550,
                  "end": 552,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 551,
                    "end": 552,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 558,
            "end": 569,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 562,
                "end": 568,
                "id": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 566,
                  "end": 568,
                  "operator": "~",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 568,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 574,
            "end": 589,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 578,
                "end": 588,
                "id": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 579,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 582,
                  "end": 588,
                  "left": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 583,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 587,
                    "end": 588,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 594,
            "end": 609,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 598,
                "end": 608,
                "id": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 599,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 602,
                  "end": 608,
                  "left": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 603,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 607,
                    "end": 608,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 614,
            "end": 630,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 618,
                "end": 629,
                "id": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 622,
                  "end": 629,
                  "left": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 623,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 635,
            "end": 651,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 650,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 643,
                  "end": 650,
                  "left": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 644,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 650,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 656,
            "end": 670,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 660,
                "end": 669,
                "id": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 661,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 664,
                  "end": 669,
                  "left": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 665,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 669,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 675,
            "end": 689,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 679,
                "end": 688,
                "id": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 680,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 683,
                  "end": 688,
                  "left": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 684,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 688,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 694,
            "end": 709,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 698,
                "end": 708,
                "id": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 699,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 702,
                  "end": 708,
                  "left": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 703,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 714,
            "end": 729,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 718,
                "end": 728,
                "id": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 719,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 722,
                  "end": 728,
                  "left": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 723,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 728,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 734,
            "end": 745,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 738,
                "end": 744,
                "id": {
                  "type": "Identifier",
                  "start": 738,
                  "end": 739,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 742,
                  "end": 744,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 744,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 749,
      "end": 802,
      "id": {
        "type": "Identifier",
        "start": 758,
        "end": 760,
        "name": "f4",
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
          "start": 761,
          "end": 765,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 762,
            "end": 765,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 764,
              "end": 765,
              "literal": {
                "type": "Literal",
                "start": 764,
                "end": 765,
                "value": 1,
                "raw": "1"
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 767,
          "end": 779,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 768,
            "end": 779,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 770,
              "end": 779,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 770,
                  "end": 771,
                  "literal": {
                    "type": "Literal",
                    "start": 770,
                    "end": 771,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 774,
                  "end": 775,
                  "literal": {
                    "type": "Literal",
                    "start": 774,
                    "end": 775,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 778,
                  "end": 779,
                  "literal": {
                    "type": "Literal",
                    "start": 778,
                    "end": 779,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 781,
        "end": 802,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 787,
            "end": 791,
            "expression": {
              "type": "UpdateExpression",
              "start": 787,
              "end": 790,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 787,
                "end": 788,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 796,
            "end": 800,
            "expression": {
              "type": "UpdateExpression",
              "start": 796,
              "end": 799,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 804,
      "end": 837,
      "id": {
        "type": "Identifier",
        "start": 821,
        "end": 822,
        "name": "g",
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
          "start": 823,
          "end": 827,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 824,
            "end": 827,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 826,
              "end": 827,
              "literal": {
                "type": "Literal",
                "start": 826,
                "end": 827,
                "value": 0,
                "raw": "0"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 828,
        "end": 836,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 830,
          "end": 836
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 838,
      "end": 872,
      "id": {
        "type": "Identifier",
        "start": 855,
        "end": 856,
        "name": "g",
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
          "start": 857,
          "end": 861,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 858,
            "end": 861,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 860,
              "end": 861,
              "literal": {
                "type": "Literal",
                "start": 860,
                "end": 861,
                "value": 1,
                "raw": "1"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 862,
        "end": 871,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 864,
          "end": 871
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 873,
      "end": 911,
      "id": {
        "type": "Identifier",
        "start": 890,
        "end": 891,
        "name": "g",
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
          "start": 892,
          "end": 901,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 893,
            "end": 901,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 895,
              "end": 901
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 902,
        "end": 910,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 904,
          "end": 910
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 913,
      "end": 1043,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "name": "f5",
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
          "start": 925,
          "end": 929,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 929,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 928,
              "end": 929,
              "literal": {
                "type": "Literal",
                "start": 928,
                "end": 929,
                "value": 1,
                "raw": "1"
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 931,
          "end": 943,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 932,
            "end": 943,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 934,
              "end": 943,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 934,
                  "end": 935,
                  "literal": {
                    "type": "Literal",
                    "start": 934,
                    "end": 935,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 938,
                  "end": 939,
                  "literal": {
                    "type": "Literal",
                    "start": 938,
                    "end": 939,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 942,
                  "end": 943,
                  "literal": {
                    "type": "Literal",
                    "start": 942,
                    "end": 943,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 945,
        "end": 1043,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 951,
            "end": 965,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 955,
                "end": 964,
                "id": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 957,
                  "name": "z1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 960,
                  "end": 964,
                  "callee": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 961,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 962,
                      "end": 963,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 970,
            "end": 984,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 974,
                "end": 983,
                "id": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 976,
                  "name": "z2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 979,
                  "end": 983,
                  "callee": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 980,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 981,
                      "end": 982,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 989,
            "end": 1003,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 993,
                "end": 1002,
                "id": {
                  "type": "Identifier",
                  "start": 993,
                  "end": 995,
                  "name": "z3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 998,
                  "end": 1002,
                  "callee": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 999,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1000,
                      "end": 1001,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1008,
            "end": 1022,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1012,
                "end": 1021,
                "id": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1014,
                  "name": "z4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1017,
                  "end": 1021,
                  "callee": {
                    "type": "Identifier",
                    "start": 1017,
                    "end": 1018,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1020,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1027,
            "end": 1041,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1031,
                "end": 1040,
                "id": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1033,
                  "name": "z5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1036,
                  "end": 1040,
                  "callee": {
                    "type": "Identifier",
                    "start": 1036,
                    "end": 1037,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1038,
                      "end": 1039,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1045,
      "end": 1127,
      "id": {
        "type": "Identifier",
        "start": 1054,
        "end": 1065,
        "name": "assertNever",
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
          "start": 1066,
          "end": 1074,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1067,
            "end": 1074,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 1069,
              "end": 1074
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1083,
        "end": 1127,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 1089,
            "end": 1125,
            "argument": {
              "type": "NewExpression",
              "start": 1095,
              "end": 1124,
              "callee": {
                "type": "Identifier",
                "start": 1099,
                "end": 1104,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1105,
                  "end": 1123,
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\""
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1075,
        "end": 1082,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1077,
          "end": 1082
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1129,
      "end": 1150,
      "id": {
        "type": "Identifier",
        "start": 1134,
        "end": 1137,
        "name": "Tag",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1140,
        "end": 1149,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 1140,
            "end": 1141,
            "literal": {
              "type": "Literal",
              "start": 1140,
              "end": 1141,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 1144,
            "end": 1145,
            "literal": {
              "type": "Literal",
              "start": 1144,
              "end": 1145,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 1148,
            "end": 1149,
            "literal": {
              "type": "Literal",
              "start": 1148,
              "end": 1149,
              "value": 2,
              "raw": "2"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1152,
      "end": 1283,
      "id": {
        "type": "Identifier",
        "start": 1161,
        "end": 1164,
        "name": "f10",
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
          "start": 1165,
          "end": 1171,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1166,
            "end": 1171,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1168,
              "end": 1171,
              "typeName": {
                "type": "Identifier",
                "start": 1168,
                "end": 1171,
                "name": "Tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1173,
        "end": 1283,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1179,
            "end": 1281,
            "discriminant": {
              "type": "Identifier",
              "start": 1187,
              "end": 1188,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1200,
                "end": 1219,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1208,
                    "end": 1219,
                    "argument": {
                      "type": "Literal",
                      "start": 1215,
                      "end": 1218,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1205,
                  "end": 1206,
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "SwitchCase",
                "start": 1228,
                "end": 1247,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1236,
                    "end": 1247,
                    "argument": {
                      "type": "Literal",
                      "start": 1243,
                      "end": 1246,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1233,
                  "end": 1234,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 1256,
                "end": 1275,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1264,
                    "end": 1275,
                    "argument": {
                      "type": "Literal",
                      "start": 1271,
                      "end": 1274,
                      "value": "c",
                      "raw": "\"c\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1261,
                  "end": 1262,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1285,
      "end": 1443,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1297,
        "name": "f11",
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
          "start": 1298,
          "end": 1304,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1299,
            "end": 1304,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1301,
              "end": 1304,
              "typeName": {
                "type": "Identifier",
                "start": 1301,
                "end": 1304,
                "name": "Tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1306,
        "end": 1443,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1312,
            "end": 1414,
            "discriminant": {
              "type": "Identifier",
              "start": 1320,
              "end": 1321,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1333,
                "end": 1352,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1341,
                    "end": 1352,
                    "argument": {
                      "type": "Literal",
                      "start": 1348,
                      "end": 1351,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1338,
                  "end": 1339,
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "SwitchCase",
                "start": 1361,
                "end": 1380,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1369,
                    "end": 1380,
                    "argument": {
                      "type": "Literal",
                      "start": 1376,
                      "end": 1379,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1366,
                  "end": 1367,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 1389,
                "end": 1408,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 1397,
                    "end": 1408,
                    "argument": {
                      "type": "Literal",
                      "start": 1404,
                      "end": 1407,
                      "value": "c",
                      "raw": "\"c\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 1394,
                  "end": 1395,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 1419,
            "end": 1441,
            "argument": {
              "type": "CallExpression",
              "start": 1426,
              "end": 1440,
              "callee": {
                "type": "Identifier",
                "start": 1426,
                "end": 1437,
                "name": "assertNever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1439,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1445,
      "end": 1527,
      "id": {
        "type": "Identifier",
        "start": 1454,
        "end": 1457,
        "name": "f12",
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
          "start": 1458,
          "end": 1464,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1459,
            "end": 1464,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1461,
              "end": 1464,
              "typeName": {
                "type": "Identifier",
                "start": 1461,
                "end": 1464,
                "name": "Tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1466,
        "end": 1527,
        "body": [
          {
            "type": "IfStatement",
            "start": 1472,
            "end": 1525,
            "test": {
              "type": "Identifier",
              "start": 1476,
              "end": 1477,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1479,
              "end": 1497,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1489,
                  "end": 1491,
                  "expression": {
                    "type": "Identifier",
                    "start": 1489,
                    "end": 1490,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1507,
              "end": 1525,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1517,
                  "end": 1519,
                  "expression": {
                    "type": "Identifier",
                    "start": 1517,
                    "end": 1518,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1529,
      "end": 1628,
      "id": {
        "type": "Identifier",
        "start": 1538,
        "end": 1541,
        "name": "f13",
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
          "start": 1542,
          "end": 1548,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1543,
            "end": 1548,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1545,
              "end": 1548,
              "typeName": {
                "type": "Identifier",
                "start": 1545,
                "end": 1548,
                "name": "Tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1550,
        "end": 1628,
        "body": [
          {
            "type": "IfStatement",
            "start": 1556,
            "end": 1626,
            "test": {
              "type": "LogicalExpression",
              "start": 1560,
              "end": 1578,
              "left": {
                "type": "BinaryExpression",
                "start": 1560,
                "end": 1567,
                "left": {
                  "type": "Identifier",
                  "start": 1560,
                  "end": 1561,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1566,
                  "end": 1567,
                  "value": 0,
                  "raw": "0"
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 1571,
                "end": 1578,
                "left": {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1572,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1577,
                  "end": 1578,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1580,
              "end": 1598,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1590,
                  "end": 1592,
                  "expression": {
                    "type": "Identifier",
                    "start": 1590,
                    "end": 1591,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1608,
              "end": 1626,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1618,
                  "end": 1620,
                  "expression": {
                    "type": "Identifier",
                    "start": 1618,
                    "end": 1619,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1630,
      "end": 1711,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1642,
        "name": "f14",
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
          "start": 1643,
          "end": 1655,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1644,
            "end": 1655,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1646,
              "end": 1655,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1646,
                  "end": 1647,
                  "literal": {
                    "type": "Literal",
                    "start": 1646,
                    "end": 1647,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1650,
                  "end": 1651,
                  "literal": {
                    "type": "Literal",
                    "start": 1650,
                    "end": 1651,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1654,
                  "end": 1655,
                  "literal": {
                    "type": "Literal",
                    "start": 1654,
                    "end": 1655,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1657,
          "end": 1666,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1658,
            "end": 1666,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1660,
              "end": 1666
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1668,
        "end": 1711,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1674,
            "end": 1689,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1678,
                "end": 1688,
                "id": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1682,
                  "end": 1688,
                  "left": {
                    "type": "Identifier",
                    "start": 1682,
                    "end": 1683,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1687,
                    "end": 1688,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1694,
            "end": 1709,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1698,
                "end": 1708,
                "id": {
                  "type": "Identifier",
                  "start": 1698,
                  "end": 1699,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1702,
                  "end": 1708,
                  "left": {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1703,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 1707,
                    "end": 1708,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1713,
      "end": 1869,
      "id": {
        "type": "Identifier",
        "start": 1722,
        "end": 1725,
        "name": "f15",
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
          "start": 1726,
          "end": 1738,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1727,
            "end": 1738,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1729,
              "end": 1738,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1729,
                  "end": 1730,
                  "literal": {
                    "type": "Literal",
                    "start": 1729,
                    "end": 1730,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1733,
                  "end": 1738,
                  "literal": {
                    "type": "Literal",
                    "start": 1733,
                    "end": 1738,
                    "value": false,
                    "raw": "false"
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1740,
          "end": 1752,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1741,
            "end": 1752,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1743,
              "end": 1752,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1743,
                  "end": 1744,
                  "literal": {
                    "type": "Literal",
                    "start": 1743,
                    "end": 1744,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1747,
                  "end": 1752,
                  "literal": {
                    "type": "Literal",
                    "start": 1747,
                    "end": 1752,
                    "value": "one",
                    "raw": "\"one\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1754,
        "end": 1869,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1760,
            "end": 1775,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1764,
                "end": 1774,
                "id": {
                  "type": "Identifier",
                  "start": 1764,
                  "end": 1765,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1768,
                  "end": 1774,
                  "left": {
                    "type": "Identifier",
                    "start": 1768,
                    "end": 1769,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1774,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1780,
            "end": 1795,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1784,
                "end": 1794,
                "id": {
                  "type": "Identifier",
                  "start": 1784,
                  "end": 1785,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1788,
                  "end": 1794,
                  "left": {
                    "type": "Identifier",
                    "start": 1788,
                    "end": 1789,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1793,
                    "end": 1794,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1800,
            "end": 1815,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1804,
                "end": 1814,
                "id": {
                  "type": "Identifier",
                  "start": 1804,
                  "end": 1805,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1808,
                  "end": 1814,
                  "left": {
                    "type": "Identifier",
                    "start": 1808,
                    "end": 1809,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 1813,
                    "end": 1814,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1820,
            "end": 1835,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1824,
                "end": 1834,
                "id": {
                  "type": "Identifier",
                  "start": 1824,
                  "end": 1825,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1828,
                  "end": 1834,
                  "left": {
                    "type": "Identifier",
                    "start": 1828,
                    "end": 1829,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 1833,
                    "end": 1834,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1840,
            "end": 1851,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1844,
                "end": 1850,
                "id": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1845,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 1848,
                  "end": 1850,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1849,
                    "end": 1850,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1856,
            "end": 1867,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1860,
                "end": 1866,
                "id": {
                  "type": "Identifier",
                  "start": 1860,
                  "end": 1861,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 1864,
                  "end": 1866,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1866,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1871,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1876,
        "end": 1880,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1887,
        "end": 1967,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1887,
            "end": 1909,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1889,
                "end": 1897,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1889,
                  "end": 1893,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1893,
                  "end": 1896,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1895,
                    "end": 1896,
                    "literal": {
                      "type": "Literal",
                      "start": 1895,
                      "end": 1896,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1898,
                "end": 1907,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1898,
                  "end": 1899,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1899,
                  "end": 1907,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1901,
                    "end": 1907
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1916,
            "end": 1938,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1918,
                "end": 1926,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1922,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1922,
                  "end": 1925,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1924,
                    "end": 1925,
                    "literal": {
                      "type": "Literal",
                      "start": 1924,
                      "end": 1925,
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
                "start": 1927,
                "end": 1936,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1927,
                  "end": 1928,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1928,
                  "end": 1936,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1930,
                    "end": 1936
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1945,
            "end": 1967,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1947,
                "end": 1955,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1947,
                  "end": 1951,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1951,
                  "end": 1954,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1953,
                    "end": 1954,
                    "literal": {
                      "type": "Literal",
                      "start": 1953,
                      "end": 1954,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1956,
                "end": 1965,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1956,
                  "end": 1957,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1957,
                  "end": 1965,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1959,
                    "end": 1965
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1970,
      "end": 2107,
      "id": {
        "type": "Identifier",
        "start": 1979,
        "end": 1982,
        "name": "f20",
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
          "start": 1983,
          "end": 1990,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1984,
            "end": 1990,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1986,
              "end": 1990,
              "typeName": {
                "type": "Identifier",
                "start": 1986,
                "end": 1990,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1992,
        "end": 2107,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1998,
            "end": 2105,
            "discriminant": {
              "type": "MemberExpression",
              "start": 2006,
              "end": 2012,
              "object": {
                "type": "Identifier",
                "start": 2006,
                "end": 2007,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2008,
                "end": 2012,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2024,
                "end": 2043,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2032,
                    "end": 2043,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2039,
                      "end": 2042,
                      "object": {
                        "type": "Identifier",
                        "start": 2039,
                        "end": 2040,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2041,
                        "end": 2042,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2029,
                  "end": 2030,
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "SwitchCase",
                "start": 2052,
                "end": 2071,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2060,
                    "end": 2071,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2067,
                      "end": 2070,
                      "object": {
                        "type": "Identifier",
                        "start": 2067,
                        "end": 2068,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2069,
                        "end": 2070,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2057,
                  "end": 2058,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 2080,
                "end": 2099,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2088,
                    "end": 2099,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2095,
                      "end": 2098,
                      "object": {
                        "type": "Identifier",
                        "start": 2095,
                        "end": 2096,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2097,
                        "end": 2098,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2085,
                  "end": 2086,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2109,
      "end": 2273,
      "id": {
        "type": "Identifier",
        "start": 2118,
        "end": 2121,
        "name": "f21",
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
          "start": 2122,
          "end": 2129,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2123,
            "end": 2129,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2125,
              "end": 2129,
              "typeName": {
                "type": "Identifier",
                "start": 2125,
                "end": 2129,
                "name": "Item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2131,
        "end": 2273,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2137,
            "end": 2244,
            "discriminant": {
              "type": "MemberExpression",
              "start": 2145,
              "end": 2151,
              "object": {
                "type": "Identifier",
                "start": 2145,
                "end": 2146,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2147,
                "end": 2151,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2163,
                "end": 2182,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2171,
                    "end": 2182,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2178,
                      "end": 2181,
                      "object": {
                        "type": "Identifier",
                        "start": 2178,
                        "end": 2179,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2180,
                        "end": 2181,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2168,
                  "end": 2169,
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "SwitchCase",
                "start": 2191,
                "end": 2210,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2199,
                    "end": 2210,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2206,
                      "end": 2209,
                      "object": {
                        "type": "Identifier",
                        "start": 2206,
                        "end": 2207,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2208,
                        "end": 2209,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2196,
                  "end": 2197,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 2219,
                "end": 2238,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 2227,
                    "end": 2238,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2234,
                      "end": 2237,
                      "object": {
                        "type": "Identifier",
                        "start": 2234,
                        "end": 2235,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2236,
                        "end": 2237,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2224,
                  "end": 2225,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2249,
            "end": 2271,
            "argument": {
              "type": "CallExpression",
              "start": 2256,
              "end": 2270,
              "callee": {
                "type": "Identifier",
                "start": 2256,
                "end": 2267,
                "name": "assertNever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2268,
                  "end": 2269,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
