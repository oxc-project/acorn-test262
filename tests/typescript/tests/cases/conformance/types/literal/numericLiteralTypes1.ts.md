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
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "A5",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
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
        "start": 108,
        "end": 206,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 128,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 123,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 147,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 146,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 142,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 152,
            "end": 166,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 156,
                "end": 165,
                "id": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 161,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 171,
            "end": 185,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 175,
                "end": 184,
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 180,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 190,
            "end": 204,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 194,
                "end": 203,
                "id": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 199,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 208,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 215,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
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
              "argument": {
                "type": "Literal",
                "start": 219,
                "end": 220,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
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
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
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
              "argument": {
                "type": "Literal",
                "start": 249,
                "end": 250,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
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
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null
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
              "argument": {
                "type": "Literal",
                "start": 267,
                "end": 268,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
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
        "decorators": [],
        "name": "f2",
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
        "start": 289,
        "end": 350,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 295,
            "end": 310,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 309,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 304,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "B1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 307,
                  "end": 309,
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "start": 308,
                    "end": 309,
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 315,
            "end": 329,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 328,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 324,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "B2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 334,
            "end": 348,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 338,
                "end": 347,
                "id": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 343,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "B3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 747,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "decorators": [],
        "name": "f3",
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
          "start": 364,
          "end": 368,
          "decorators": [],
          "name": "a",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 370,
          "end": 382,
          "decorators": [],
          "name": "b",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 384,
        "end": 747,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 390,
            "end": 404,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 394,
                "end": 403,
                "id": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 398,
                  "end": 403,
                  "left": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 403,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 409,
            "end": 423,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 413,
                "end": 422,
                "id": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 417,
                  "end": 422,
                  "left": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 422,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 428,
            "end": 442,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 432,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 433,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 436,
                  "end": 441,
                  "left": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 447,
            "end": 461,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 451,
                "end": 460,
                "id": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 455,
                  "end": 460,
                  "left": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "start": 459,
                    "end": 460,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 466,
            "end": 480,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 470,
                "end": 479,
                "id": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 471,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 474,
                  "end": 479,
                  "left": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 479,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 485,
            "end": 499,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 489,
                "end": 498,
                "id": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 493,
                  "end": 498,
                  "left": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 504,
            "end": 518,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 508,
                "end": 517,
                "id": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 509,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 512,
                  "end": 517,
                  "left": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 513,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 523,
            "end": 537,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 527,
                "end": 536,
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 531,
                  "end": 536,
                  "left": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 553,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 552,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 547,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 550,
                  "end": 552,
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "start": 551,
                    "end": 552,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 558,
            "end": 569,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 562,
                "end": 568,
                "id": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 566,
                  "end": 568,
                  "operator": "~",
                  "argument": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 568,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 574,
            "end": 589,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 578,
                "end": 588,
                "id": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 579,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 582,
                  "end": 588,
                  "left": {
                    "type": "Identifier",
                    "start": 582,
                    "end": 583,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 587,
                    "end": 588,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 594,
            "end": 609,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 598,
                "end": 608,
                "id": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 599,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 602,
                  "end": 608,
                  "left": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 603,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 607,
                    "end": 608,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 614,
            "end": 630,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 618,
                "end": 629,
                "id": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 622,
                  "end": 629,
                  "left": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 623,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 635,
            "end": 651,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 650,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 643,
                  "end": 650,
                  "left": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 644,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 650,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 656,
            "end": 670,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 660,
                "end": 669,
                "id": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 661,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 664,
                  "end": 669,
                  "left": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 665,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 669,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 675,
            "end": 689,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 679,
                "end": 688,
                "id": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 680,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 683,
                  "end": 688,
                  "left": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 684,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 688,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 694,
            "end": 709,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 698,
                "end": 708,
                "id": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 699,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 702,
                  "end": 708,
                  "left": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 703,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 708,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 714,
            "end": 729,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 718,
                "end": 728,
                "id": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 719,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 722,
                  "end": 728,
                  "left": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 723,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 728,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 734,
            "end": 745,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 738,
                "end": 744,
                "id": {
                  "type": "Identifier",
                  "start": 738,
                  "end": 739,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 742,
                  "end": 744,
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 744,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 749,
      "end": 802,
      "id": {
        "type": "Identifier",
        "start": 758,
        "end": 760,
        "decorators": [],
        "name": "f4",
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
          "start": 761,
          "end": 765,
          "decorators": [],
          "name": "a",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 767,
          "end": 779,
          "decorators": [],
          "name": "b",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 804,
      "end": 837,
      "id": {
        "type": "Identifier",
        "start": 821,
        "end": 822,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 823,
          "end": 827,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 828,
        "end": 836,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 830,
          "end": 836
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 838,
      "end": 872,
      "id": {
        "type": "Identifier",
        "start": 855,
        "end": 856,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 857,
          "end": 861,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 862,
        "end": 871,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 864,
          "end": 871
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 873,
      "end": 911,
      "id": {
        "type": "Identifier",
        "start": 890,
        "end": 891,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 892,
          "end": 901,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 893,
            "end": 901,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 895,
              "end": 901
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 902,
        "end": 910,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 904,
          "end": 910
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 913,
      "end": 1043,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "decorators": [],
        "name": "f5",
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
          "start": 925,
          "end": 929,
          "decorators": [],
          "name": "a",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 931,
          "end": 943,
          "decorators": [],
          "name": "b",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 945,
        "end": 1043,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 951,
            "end": 965,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 955,
                "end": 964,
                "id": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 957,
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 960,
                  "end": 964,
                  "callee": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 961,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 962,
                      "end": 963,
                      "value": 0,
                      "raw": "0"
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
            "start": 970,
            "end": 984,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 974,
                "end": 983,
                "id": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 976,
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 979,
                  "end": 983,
                  "callee": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 980,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 981,
                      "end": 982,
                      "value": 1,
                      "raw": "1"
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
            "start": 989,
            "end": 1003,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 993,
                "end": 1002,
                "id": {
                  "type": "Identifier",
                  "start": 993,
                  "end": 995,
                  "decorators": [],
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 998,
                  "end": 1002,
                  "callee": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 999,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1000,
                      "end": 1001,
                      "value": 2,
                      "raw": "2"
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
            "start": 1008,
            "end": 1022,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1012,
                "end": 1021,
                "id": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1014,
                  "decorators": [],
                  "name": "z4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1017,
                  "end": 1021,
                  "callee": {
                    "type": "Identifier",
                    "start": 1017,
                    "end": 1018,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1020,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 1027,
            "end": 1041,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1031,
                "end": 1040,
                "id": {
                  "type": "Identifier",
                  "start": 1031,
                  "end": 1033,
                  "decorators": [],
                  "name": "z5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1036,
                  "end": 1040,
                  "callee": {
                    "type": "Identifier",
                    "start": 1036,
                    "end": 1037,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1038,
                      "end": 1039,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1045,
      "end": 1127,
      "id": {
        "type": "Identifier",
        "start": 1054,
        "end": 1065,
        "decorators": [],
        "name": "assertNever",
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
          "start": 1066,
          "end": 1074,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1067,
            "end": 1074,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 1069,
              "end": 1074
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1075,
        "end": 1082,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1077,
          "end": 1082
        }
      },
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
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1105,
                  "end": 1123,
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\""
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1129,
      "end": 1150,
      "id": {
        "type": "Identifier",
        "start": 1134,
        "end": 1137,
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "f10",
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
          "start": 1165,
          "end": 1171,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Tag",
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1200,
                "end": 1219,
                "test": {
                  "type": "Literal",
                  "start": 1205,
                  "end": 1206,
                  "value": 0,
                  "raw": "0"
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1228,
                "end": 1247,
                "test": {
                  "type": "Literal",
                  "start": 1233,
                  "end": 1234,
                  "value": 1,
                  "raw": "1"
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1256,
                "end": 1275,
                "test": {
                  "type": "Literal",
                  "start": 1261,
                  "end": 1262,
                  "value": 2,
                  "raw": "2"
                },
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
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1285,
      "end": 1443,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1297,
        "decorators": [],
        "name": "f11",
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
          "start": 1298,
          "end": 1304,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Tag",
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1333,
                "end": 1352,
                "test": {
                  "type": "Literal",
                  "start": 1338,
                  "end": 1339,
                  "value": 0,
                  "raw": "0"
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1361,
                "end": 1380,
                "test": {
                  "type": "Literal",
                  "start": 1366,
                  "end": 1367,
                  "value": 1,
                  "raw": "1"
                },
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1389,
                "end": 1408,
                "test": {
                  "type": "Literal",
                  "start": 1394,
                  "end": 1395,
                  "value": 2,
                  "raw": "2"
                },
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
                ]
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
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1439,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1445,
      "end": 1527,
      "id": {
        "type": "Identifier",
        "start": 1454,
        "end": 1457,
        "decorators": [],
        "name": "f12",
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
          "start": 1458,
          "end": 1464,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Tag",
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
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
      "start": 1529,
      "end": 1628,
      "id": {
        "type": "Identifier",
        "start": 1538,
        "end": 1541,
        "decorators": [],
        "name": "f13",
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
          "start": 1542,
          "end": 1548,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Tag",
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
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
      "start": 1630,
      "end": 1711,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1642,
        "decorators": [],
        "name": "f14",
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
          "start": 1643,
          "end": 1655,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 1657,
          "end": 1666,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1658,
            "end": 1666,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1660,
              "end": 1666
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1668,
        "end": 1711,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1674,
            "end": 1689,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1678,
                "end": 1688,
                "id": {
                  "type": "Identifier",
                  "start": 1678,
                  "end": 1679,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1682,
                  "end": 1688,
                  "left": {
                    "type": "Identifier",
                    "start": 1682,
                    "end": 1683,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1687,
                    "end": 1688,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1694,
            "end": 1709,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1698,
                "end": 1708,
                "id": {
                  "type": "Identifier",
                  "start": 1698,
                  "end": 1699,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1702,
                  "end": 1708,
                  "left": {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1703,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 1707,
                    "end": 1708,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1713,
      "end": 1869,
      "id": {
        "type": "Identifier",
        "start": 1722,
        "end": 1725,
        "decorators": [],
        "name": "f15",
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
          "start": 1726,
          "end": 1738,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 1740,
          "end": 1752,
          "decorators": [],
          "name": "y",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1754,
        "end": 1869,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1760,
            "end": 1775,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1764,
                "end": 1774,
                "id": {
                  "type": "Identifier",
                  "start": 1764,
                  "end": 1765,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1768,
                  "end": 1774,
                  "left": {
                    "type": "Identifier",
                    "start": 1768,
                    "end": 1769,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1774,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1780,
            "end": 1795,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1784,
                "end": 1794,
                "id": {
                  "type": "Identifier",
                  "start": 1784,
                  "end": 1785,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1788,
                  "end": 1794,
                  "left": {
                    "type": "Identifier",
                    "start": 1788,
                    "end": 1789,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1793,
                    "end": 1794,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1800,
            "end": 1815,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1804,
                "end": 1814,
                "id": {
                  "type": "Identifier",
                  "start": 1804,
                  "end": 1805,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1808,
                  "end": 1814,
                  "left": {
                    "type": "Identifier",
                    "start": 1808,
                    "end": 1809,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 1813,
                    "end": 1814,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1820,
            "end": 1835,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1824,
                "end": 1834,
                "id": {
                  "type": "Identifier",
                  "start": 1824,
                  "end": 1825,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 1828,
                  "end": 1834,
                  "left": {
                    "type": "Identifier",
                    "start": 1828,
                    "end": 1829,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 1833,
                    "end": 1834,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1840,
            "end": 1851,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1844,
                "end": 1850,
                "id": {
                  "type": "Identifier",
                  "start": 1844,
                  "end": 1845,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 1848,
                  "end": 1850,
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "start": 1849,
                    "end": 1850,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1856,
            "end": 1867,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1860,
                "end": 1866,
                "id": {
                  "type": "Identifier",
                  "start": 1860,
                  "end": 1861,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "UnaryExpression",
                  "start": 1864,
                  "end": 1866,
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "start": 1865,
                    "end": 1866,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1871,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1876,
        "end": 1880,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "f20",
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
          "start": 1983,
          "end": 1990,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Item",
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2008,
                "end": 2012,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2024,
                "end": 2043,
                "test": {
                  "type": "Literal",
                  "start": 2029,
                  "end": 2030,
                  "value": 0,
                  "raw": "0"
                },
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2041,
                        "end": 2042,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2052,
                "end": 2071,
                "test": {
                  "type": "Literal",
                  "start": 2057,
                  "end": 2058,
                  "value": 1,
                  "raw": "1"
                },
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2069,
                        "end": 2070,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2080,
                "end": 2099,
                "test": {
                  "type": "Literal",
                  "start": 2085,
                  "end": 2086,
                  "value": 2,
                  "raw": "2"
                },
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2097,
                        "end": 2098,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2109,
      "end": 2273,
      "id": {
        "type": "Identifier",
        "start": 2118,
        "end": 2121,
        "decorators": [],
        "name": "f21",
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
          "start": 2122,
          "end": 2129,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Item",
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2147,
                "end": 2151,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2163,
                "end": 2182,
                "test": {
                  "type": "Literal",
                  "start": 2168,
                  "end": 2169,
                  "value": 0,
                  "raw": "0"
                },
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2180,
                        "end": 2181,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2191,
                "end": 2210,
                "test": {
                  "type": "Literal",
                  "start": 2196,
                  "end": 2197,
                  "value": 1,
                  "raw": "1"
                },
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2208,
                        "end": 2209,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2219,
                "end": 2238,
                "test": {
                  "type": "Literal",
                  "start": 2224,
                  "end": 2225,
                  "value": 2,
                  "raw": "2"
                },
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2236,
                        "end": 2237,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
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
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2268,
                  "end": 2269,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
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
