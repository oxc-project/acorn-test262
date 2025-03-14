stringLiteralsWithEqualityChecks04.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 440,
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 35,
              "decorators": [],
              "name": "isRunning",
              "optional": false
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
        "optional": false
      }
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 110,
              "decorators": [],
              "name": "makesFoodGoBrrr",
              "optional": false
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 71,
        "decorators": [],
        "name": "Refrigerator",
        "optional": false
      }
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 166,
                      "decorators": [],
                      "name": "Refrigerator",
                      "optional": false
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
      "end": 196,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 189,
          "end": 195,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 197,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 201,
          "end": 211,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 201,
            "end": 206,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 227,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 226,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 216,
          "end": 226,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 221,
            "end": 226,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 247,
      "expression": {
        "type": "AssignmentExpression",
        "start": 228,
        "end": 246,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 228,
          "end": 229,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 232,
          "end": 246,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 232,
            "end": 237,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 241,
            "end": 246,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 263,
      "expression": {
        "type": "AssignmentExpression",
        "start": 248,
        "end": 262,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 248,
          "end": 249,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 252,
          "end": 262,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 252,
            "end": 257,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 279,
      "expression": {
        "type": "AssignmentExpression",
        "start": 264,
        "end": 278,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 264,
          "end": 265,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 268,
          "end": 278,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 273,
            "end": 278,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 295,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 294,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 280,
          "end": 281,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 284,
          "end": 294,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 289,
            "end": 294,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 311,
      "expression": {
        "type": "AssignmentExpression",
        "start": 296,
        "end": 310,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 300,
          "end": 310,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 300,
            "end": 305,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 313,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 313,
          "end": 314,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 317,
          "end": 323,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 339,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 325,
          "end": 326,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 329,
          "end": 339,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 329,
            "end": 334,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 355,
      "expression": {
        "type": "AssignmentExpression",
        "start": 340,
        "end": 354,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 340,
          "end": 341,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 344,
          "end": 354,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 344,
            "end": 345,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 349,
            "end": 354,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 375,
      "expression": {
        "type": "AssignmentExpression",
        "start": 356,
        "end": 374,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 356,
          "end": 357,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 360,
          "end": 374,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 360,
            "end": 365,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 369,
            "end": 374,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 391,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 390,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 380,
          "end": 390,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 380,
            "end": 385,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 389,
            "end": 390,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 392,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 392,
        "end": 406,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 392,
          "end": 393,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 396,
          "end": 406,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 401,
            "end": 406,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 408,
      "end": 423,
      "expression": {
        "type": "AssignmentExpression",
        "start": 408,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 408,
          "end": 409,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 412,
          "end": 422,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 417,
            "end": 422,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 424,
        "end": 438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 424,
          "end": 425,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 428,
          "end": 438,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 428,
            "end": 433,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 437,
            "end": 438,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
