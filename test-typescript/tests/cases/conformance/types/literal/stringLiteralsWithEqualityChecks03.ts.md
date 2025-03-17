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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 19,
        "name": "Runnable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 35,
              "name": "isRunning",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 44,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 37,
                "end": 44
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
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 71,
        "name": "Refrigerator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 80,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 80,
            "end": 88,
            "name": "Runnable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 110,
              "name": "makesFoodGoBrrr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 119,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
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
      "start": 124,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 166,
            "name": "y",
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "name": "Refrigerator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 183,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 183,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 176,
                "end": 183
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 189,
          "end": 196,
          "left": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 213,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 213,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 202,
          "end": 213,
          "left": {
            "type": "Literal",
            "start": 202,
            "end": 207,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 230,
      "expression": {
        "type": "AssignmentExpression",
        "start": 214,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 214,
          "end": 215,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 218,
          "end": 229,
          "left": {
            "type": "Identifier",
            "start": 218,
            "end": 219,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 224,
            "end": 229,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 231,
        "end": 250,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 235,
          "end": 250,
          "left": {
            "type": "Literal",
            "start": 235,
            "end": 240,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 245,
            "end": 250,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 252,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 256,
          "end": 267,
          "left": {
            "type": "Literal",
            "start": 256,
            "end": 261,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 285,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 273,
          "end": 284,
          "left": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 279,
            "end": 284,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 286,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 290,
          "end": 301,
          "left": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 296,
            "end": 301,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 319,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 318,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 303,
          "end": 304,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 307,
          "end": 318,
          "left": {
            "type": "Literal",
            "start": 307,
            "end": 312,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 333,
      "expression": {
        "type": "AssignmentExpression",
        "start": 321,
        "end": 332,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 325,
          "end": 332,
          "left": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 331,
            "end": 332,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 349,
      "expression": {
        "type": "AssignmentExpression",
        "start": 334,
        "end": 349,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 334,
          "end": 335,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 338,
          "end": 349,
          "left": {
            "type": "Literal",
            "start": 338,
            "end": 343,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 350,
      "end": 366,
      "expression": {
        "type": "AssignmentExpression",
        "start": 350,
        "end": 365,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 354,
          "end": 365,
          "left": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 360,
            "end": 365,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 387,
      "expression": {
        "type": "AssignmentExpression",
        "start": 367,
        "end": 386,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 371,
          "end": 386,
          "left": {
            "type": "Literal",
            "start": 371,
            "end": 376,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 381,
            "end": 386,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 404,
      "expression": {
        "type": "AssignmentExpression",
        "start": 388,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 388,
          "end": 389,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 392,
          "end": 403,
          "left": {
            "type": "Literal",
            "start": 392,
            "end": 397,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 405,
          "end": 406,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 409,
          "end": 420,
          "left": {
            "type": "Identifier",
            "start": 409,
            "end": 410,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 415,
            "end": 420,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 438,
      "expression": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 437,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 422,
          "end": 423,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 426,
          "end": 437,
          "left": {
            "type": "Identifier",
            "start": 426,
            "end": 427,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 432,
            "end": 437,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 455,
      "expression": {
        "type": "AssignmentExpression",
        "start": 439,
        "end": 454,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 439,
          "end": 440,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 443,
          "end": 454,
          "left": {
            "type": "Literal",
            "start": 443,
            "end": 448,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
