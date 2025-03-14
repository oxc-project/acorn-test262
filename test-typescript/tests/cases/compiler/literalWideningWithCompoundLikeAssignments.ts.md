__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 649,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 37,
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 37,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 35,
                "end": 37,
                "literal": {
                  "type": "Literal",
                  "start": 35,
                  "end": 37,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 42,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 54,
            "end": 59,
            "decorators": [],
            "name": "empty",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 78,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 64,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 67,
          "end": 78,
          "operator": "+",
          "left": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 73,
            "end": 78,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 82,
      "expression": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 121,
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 120,
                "end": 121,
                "literal": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "raw": "0",
                  "value": 0
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 130,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 133,
            "end": 143,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 157,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 157,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 147,
          "decorators": [],
          "name": "t1",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 150,
          "end": 157,
          "operator": "+",
          "left": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 155,
            "end": 157,
            "raw": "42",
            "value": 42
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 160,
      "expression": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "decorators": [],
        "name": "t1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 181,
            "end": 191,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 205,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 205,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 193,
          "end": 195,
          "decorators": [],
          "name": "t2",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 198,
          "end": 205,
          "operator": "-",
          "left": {
            "type": "Identifier",
            "start": 198,
            "end": 200,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 203,
            "end": 205,
            "raw": "42",
            "value": 42
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 208,
      "expression": {
        "type": "Identifier",
        "start": 206,
        "end": 208,
        "decorators": [],
        "name": "t2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "decorators": [],
            "name": "t3",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 229,
            "end": 239,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 241,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 241,
          "end": 243,
          "decorators": [],
          "name": "t3",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 246,
          "end": 253,
          "operator": "*",
          "left": {
            "type": "Identifier",
            "start": 246,
            "end": 248,
            "decorators": [],
            "name": "t3",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 251,
            "end": 253,
            "raw": "42",
            "value": 42
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 256,
      "expression": {
        "type": "Identifier",
        "start": 254,
        "end": 256,
        "decorators": [],
        "name": "t3",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 287,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 274,
            "decorators": [],
            "name": "t4",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 277,
            "end": 287,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 289,
        "end": 302,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 289,
          "end": 291,
          "decorators": [],
          "name": "t4",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 294,
          "end": 302,
          "operator": "**",
          "left": {
            "type": "Identifier",
            "start": 294,
            "end": 296,
            "decorators": [],
            "name": "t4",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 300,
            "end": 302,
            "raw": "42",
            "value": 42
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 305,
      "expression": {
        "type": "Identifier",
        "start": 303,
        "end": 305,
        "decorators": [],
        "name": "t4",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 323,
            "decorators": [],
            "name": "t5",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 326,
            "end": 336,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 338,
      "end": 350,
      "expression": {
        "type": "AssignmentExpression",
        "start": 338,
        "end": 350,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 338,
          "end": 340,
          "decorators": [],
          "name": "t5",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 343,
          "end": 350,
          "operator": "/",
          "left": {
            "type": "Identifier",
            "start": 343,
            "end": 345,
            "decorators": [],
            "name": "t5",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 348,
            "end": 350,
            "raw": "42",
            "value": 42
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 351,
      "end": 353,
      "expression": {
        "type": "Identifier",
        "start": 351,
        "end": 353,
        "decorators": [],
        "name": "t5",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 371,
            "decorators": [],
            "name": "t6",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 374,
            "end": 384,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 386,
      "end": 398,
      "expression": {
        "type": "AssignmentExpression",
        "start": 386,
        "end": 398,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 386,
          "end": 388,
          "decorators": [],
          "name": "t6",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 391,
          "end": 398,
          "operator": "%",
          "left": {
            "type": "Identifier",
            "start": 391,
            "end": 393,
            "decorators": [],
            "name": "t6",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 396,
            "end": 398,
            "raw": "42",
            "value": 42
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 401,
      "expression": {
        "type": "Identifier",
        "start": 399,
        "end": 401,
        "decorators": [],
        "name": "t6",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 419,
            "decorators": [],
            "name": "t7",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 422,
            "end": 432,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 446,
      "expression": {
        "type": "AssignmentExpression",
        "start": 434,
        "end": 446,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 434,
          "end": 436,
          "decorators": [],
          "name": "t7",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 439,
          "end": 446,
          "operator": ">>",
          "left": {
            "type": "Identifier",
            "start": 439,
            "end": 441,
            "decorators": [],
            "name": "t7",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 445,
            "end": 446,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 449,
      "expression": {
        "type": "Identifier",
        "start": 447,
        "end": 449,
        "decorators": [],
        "name": "t7",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 461,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 480,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 467,
            "decorators": [],
            "name": "t8",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 470,
            "end": 480,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 482,
      "end": 495,
      "expression": {
        "type": "AssignmentExpression",
        "start": 482,
        "end": 495,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 482,
          "end": 484,
          "decorators": [],
          "name": "t8",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 487,
          "end": 495,
          "operator": ">>>",
          "left": {
            "type": "Identifier",
            "start": 487,
            "end": 489,
            "decorators": [],
            "name": "t8",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 494,
            "end": 495,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 498,
      "expression": {
        "type": "Identifier",
        "start": 496,
        "end": 498,
        "decorators": [],
        "name": "t8",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 529,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 516,
            "decorators": [],
            "name": "t9",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 519,
            "end": 529,
            "decorators": [],
            "name": "numLiteral",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 543,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 531,
          "end": 533,
          "decorators": [],
          "name": "t9",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 536,
          "end": 543,
          "operator": "<<",
          "left": {
            "type": "Identifier",
            "start": 536,
            "end": 538,
            "decorators": [],
            "name": "t9",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 542,
            "end": 543,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 546,
      "expression": {
        "type": "Identifier",
        "start": 544,
        "end": 546,
        "decorators": [],
        "name": "t9",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 593,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 593,
            "decorators": [],
            "name": "literalUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 593,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 586,
                "end": 593,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 586,
                    "end": 589,
                    "literal": {
                      "type": "Literal",
                      "start": 586,
                      "end": 589,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 592,
                    "end": 593,
                    "literal": {
                      "type": "Literal",
                      "start": 592,
                      "end": 593,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 595,
      "end": 618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 617,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 602,
            "decorators": [],
            "name": "t10",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 605,
            "end": 617,
            "decorators": [],
            "name": "literalUnion",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 619,
      "end": 634,
      "expression": {
        "type": "AssignmentExpression",
        "start": 619,
        "end": 634,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 619,
          "end": 622,
          "decorators": [],
          "name": "t10",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 625,
          "end": 634,
          "operator": "+",
          "left": {
            "type": "Identifier",
            "start": 625,
            "end": 628,
            "decorators": [],
            "name": "t10",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 631,
            "end": 634,
            "raw": "'b'",
            "value": "b"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 638,
      "expression": {
        "type": "Identifier",
        "start": 635,
        "end": 638,
        "decorators": [],
        "name": "t10",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
