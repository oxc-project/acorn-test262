__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Runnable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 34,
              "decorators": [],
              "name": "isRunning",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 43,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 36,
                "end": 43
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
      "start": 48,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 70,
        "decorators": [],
        "name": "Refrigerator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 119,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 109,
              "decorators": [],
              "name": "makesFoodGoBrrr",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 118,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 111,
                "end": 118
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
      "start": 123,
      "end": 137,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 136,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 166,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 165,
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
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 165,
                    "typeName": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 165,
                      "decorators": [],
                      "name": "Refrigerator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 168,
      "end": 183,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 182,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 195,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 194,
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
          "end": 194,
          "left": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 210,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 200,
          "end": 210,
          "left": {
            "type": "Literal",
            "start": 200,
            "end": 205,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 226,
      "expression": {
        "type": "AssignmentExpression",
        "start": 211,
        "end": 225,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 215,
          "end": 225,
          "left": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 220,
            "end": 225,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 246,
      "expression": {
        "type": "AssignmentExpression",
        "start": 227,
        "end": 245,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 231,
          "end": 245,
          "left": {
            "type": "Literal",
            "start": 231,
            "end": 236,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 240,
            "end": 245,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 262,
      "expression": {
        "type": "AssignmentExpression",
        "start": 247,
        "end": 261,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 251,
          "end": 261,
          "left": {
            "type": "Literal",
            "start": 251,
            "end": 256,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 278,
      "expression": {
        "type": "AssignmentExpression",
        "start": 263,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 263,
          "end": 264,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 267,
          "end": 277,
          "left": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 272,
            "end": 277,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 294,
      "expression": {
        "type": "AssignmentExpression",
        "start": 279,
        "end": 293,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 279,
          "end": 280,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 283,
          "end": 293,
          "left": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 288,
            "end": 293,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 310,
      "expression": {
        "type": "AssignmentExpression",
        "start": 295,
        "end": 309,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 295,
          "end": 296,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 299,
          "end": 309,
          "left": {
            "type": "Literal",
            "start": 299,
            "end": 304,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 323,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 322,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 316,
          "end": 322,
          "left": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 338,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 338,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 324,
          "end": 325,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 328,
          "end": 338,
          "left": {
            "type": "Literal",
            "start": 328,
            "end": 333,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 343,
          "end": 353,
          "left": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 348,
            "end": 353,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 374,
      "expression": {
        "type": "AssignmentExpression",
        "start": 355,
        "end": 373,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 355,
          "end": 356,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 359,
          "end": 373,
          "left": {
            "type": "Literal",
            "start": 359,
            "end": 364,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 368,
            "end": 373,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 375,
      "end": 390,
      "expression": {
        "type": "AssignmentExpression",
        "start": 375,
        "end": 389,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 375,
          "end": 376,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 379,
          "end": 389,
          "left": {
            "type": "Literal",
            "start": 379,
            "end": 384,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 391,
      "end": 406,
      "expression": {
        "type": "AssignmentExpression",
        "start": 391,
        "end": 405,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 391,
          "end": 392,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 395,
          "end": 405,
          "left": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 400,
            "end": 405,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 407,
      "end": 422,
      "expression": {
        "type": "AssignmentExpression",
        "start": 407,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 407,
          "end": 408,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 411,
          "end": 421,
          "left": {
            "type": "Identifier",
            "start": 411,
            "end": 412,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 416,
            "end": 421,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 438,
      "expression": {
        "type": "AssignmentExpression",
        "start": 423,
        "end": 437,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 423,
          "end": 424,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 427,
          "end": 437,
          "left": {
            "type": "Literal",
            "start": 427,
            "end": 432,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
