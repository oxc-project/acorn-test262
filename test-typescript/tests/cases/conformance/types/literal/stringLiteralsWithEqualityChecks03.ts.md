__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 34,
              "decorators": [],
              "name": "isRunning",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 43,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 36,
                "end": 43
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Runnable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 48,
      "end": 121,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 109,
              "decorators": [],
              "name": "makesFoodGoBrrr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 118,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 111,
                "end": 118
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 79,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 87,
            "decorators": [],
            "name": "Runnable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 70,
        "decorators": [],
        "name": "Refrigerator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 136,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 165,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 165,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 145,
                "end": 165,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 145,
                    "end": 150,
                    "literal": {
                      "type": "Literal",
                      "start": 145,
                      "end": 150,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 165,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 165,
                      "decorators": [],
                      "name": "Refrigerator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 182,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 182,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 175,
                "end": 182
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 188,
          "end": 195,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 212,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 197,
        "end": 212,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 201,
          "end": 212,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 201,
            "end": 206,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 213,
        "end": 228,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 217,
          "end": 228,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 223,
            "end": 228,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 250,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 230,
        "end": 249,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 234,
          "end": 249,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 234,
            "end": 239,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 244,
            "end": 249,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 267,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 266,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 251,
          "end": 252,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 255,
          "end": 266,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 255,
            "end": 260,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 284,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 268,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 272,
          "end": 283,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 278,
            "end": 283,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 300,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 289,
          "end": 300,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 295,
            "end": 300,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 318,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 302,
        "end": 317,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 302,
          "end": 303,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 306,
          "end": 317,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 306,
            "end": 311,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 320,
      "end": 332,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 320,
        "end": 331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 320,
          "end": 321,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 324,
          "end": 331,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 348,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 348,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 337,
          "end": 348,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 337,
            "end": 342,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Identifier",
            "start": 347,
            "end": 348,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 365,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 364,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 349,
          "end": 350,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 353,
          "end": 364,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 353,
            "end": 354,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 359,
            "end": 364,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 386,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 366,
        "end": 385,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 370,
          "end": 385,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 370,
            "end": 375,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Literal",
            "start": 380,
            "end": 385,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 403,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 387,
        "end": 402,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 391,
          "end": 402,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 391,
            "end": 396,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 420,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 404,
        "end": 419,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 404,
          "end": 405,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 408,
          "end": 419,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 414,
            "end": 419,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 437,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 421,
        "end": 436,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 421,
          "end": 422,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 425,
          "end": 436,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 425,
            "end": 426,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 431,
            "end": 436,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 438,
      "end": 454,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 438,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 442,
          "end": 453,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 442,
            "end": 447,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          },
          "right": {
            "type": "Identifier",
            "start": 452,
            "end": 453,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
