__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 456,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 35,
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
              "start": 35,
              "end": 44,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 37,
                "end": 44
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 19,
        "decorators": [],
        "name": "Runnable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 122,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 122,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 95,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 110,
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
              "start": 110,
              "end": 119,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 80,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 80,
            "end": 88,
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
        "start": 59,
        "end": 71,
        "decorators": [],
        "name": "Refrigerator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
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
      "start": 139,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 166,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 166,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 146,
                "end": 166,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 146,
                    "end": 151,
                    "literal": {
                      "type": "Literal",
                      "start": 146,
                      "end": 151,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 166,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 166,
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
      "start": 169,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 183,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 183,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 176,
                "end": 183
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
      "start": 185,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 189,
          "end": 196,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
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
      "start": 198,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 213,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 202,
          "end": 213,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 202,
            "end": 207,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
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
      "start": 214,
      "end": 230,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 214,
          "end": 215,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 218,
          "end": 229,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 218,
            "end": 219,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 224,
            "end": 229,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 251,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 231,
        "end": 250,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 235,
          "end": 250,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 235,
            "end": 240,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 245,
            "end": 250,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 252,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 256,
          "end": 267,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 256,
            "end": 261,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
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
      "start": 269,
      "end": 285,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 273,
          "end": 284,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 279,
            "end": 284,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 302,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 286,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 290,
          "end": 301,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 296,
            "end": 301,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 319,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 318,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 303,
          "end": 304,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 307,
          "end": 318,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 307,
            "end": 312,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
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
      "start": 321,
      "end": 333,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 321,
        "end": 332,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 325,
          "end": 332,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 331,
            "end": 332,
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
      "start": 334,
      "end": 349,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 334,
        "end": 349,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 334,
          "end": 335,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 338,
          "end": 349,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 338,
            "end": 343,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
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
      "start": 350,
      "end": 366,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 350,
        "end": 365,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 354,
          "end": 365,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 360,
            "end": 365,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 387,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 367,
        "end": 386,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 371,
          "end": 386,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 371,
            "end": 376,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 381,
            "end": 386,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 404,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 388,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 388,
          "end": 389,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 392,
          "end": 403,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 392,
            "end": 397,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
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
      "start": 405,
      "end": 421,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 405,
          "end": 406,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 409,
          "end": 420,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 409,
            "end": 410,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 415,
            "end": 420,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 438,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 437,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 422,
          "end": 423,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 426,
          "end": 437,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 426,
            "end": 427,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 432,
            "end": 437,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 455,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 439,
        "end": 454,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 439,
          "end": 440,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 443,
          "end": 454,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 443,
            "end": 448,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
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
