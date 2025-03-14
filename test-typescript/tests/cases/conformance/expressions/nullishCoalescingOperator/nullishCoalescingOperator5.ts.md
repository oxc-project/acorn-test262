__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 620,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 35,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
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
      "start": 36,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 71,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 71,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 53,
                "end": 71,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 62,
                    "end": 71
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
      "start": 72,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 107,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 107,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 89,
                "end": 107,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 98,
                    "end": 107
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
      "type": "ExpressionStatement",
      "start": 137,
      "end": 149,
      "expression": {
        "type": "LogicalExpression",
        "start": 137,
        "end": 148,
        "operator": "??",
        "left": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 142,
          "end": 148,
          "operator": "||",
          "left": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 191,
      "expression": {
        "type": "LogicalExpression",
        "start": 179,
        "end": 190,
        "operator": "??",
        "left": {
          "type": "LogicalExpression",
          "start": 179,
          "end": 185,
          "operator": "||",
          "left": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 233,
      "expression": {
        "type": "LogicalExpression",
        "start": 221,
        "end": 232,
        "operator": "??",
        "left": {
          "type": "Identifier",
          "start": 221,
          "end": 222,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 226,
          "end": 232,
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 275,
      "expression": {
        "type": "LogicalExpression",
        "start": 263,
        "end": 274,
        "operator": "??",
        "left": {
          "type": "LogicalExpression",
          "start": 263,
          "end": 269,
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "start": 263,
            "end": 264,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 273,
          "end": 274,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 318,
      "expression": {
        "type": "LogicalExpression",
        "start": 304,
        "end": 317,
        "operator": "??",
        "left": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 310,
          "end": 316,
          "operator": "||",
          "left": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 315,
            "end": 316,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 347,
      "end": 361,
      "expression": {
        "type": "LogicalExpression",
        "start": 347,
        "end": 360,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 348,
          "end": 354,
          "operator": "??",
          "left": {
            "type": "Identifier",
            "start": 348,
            "end": 349,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 353,
            "end": 354,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 359,
          "end": 360,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 404,
      "expression": {
        "type": "LogicalExpression",
        "start": 390,
        "end": 403,
        "operator": "??",
        "left": {
          "type": "LogicalExpression",
          "start": 391,
          "end": 397,
          "operator": "||",
          "left": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 402,
          "end": 403,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 447,
      "expression": {
        "type": "LogicalExpression",
        "start": 433,
        "end": 446,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 439,
          "end": 445,
          "operator": "??",
          "left": {
            "type": "Identifier",
            "start": 439,
            "end": 440,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 476,
      "end": 490,
      "expression": {
        "type": "LogicalExpression",
        "start": 476,
        "end": 489,
        "operator": "??",
        "left": {
          "type": "Identifier",
          "start": 476,
          "end": 477,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 482,
          "end": 488,
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 487,
            "end": 488,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 519,
      "end": 533,
      "expression": {
        "type": "LogicalExpression",
        "start": 519,
        "end": 532,
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "start": 520,
          "end": 526,
          "operator": "??",
          "left": {
            "type": "Identifier",
            "start": 520,
            "end": 521,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 525,
            "end": 526,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 531,
          "end": 532,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 562,
      "end": 576,
      "expression": {
        "type": "LogicalExpression",
        "start": 562,
        "end": 575,
        "operator": "??",
        "left": {
          "type": "LogicalExpression",
          "start": 563,
          "end": 569,
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "start": 563,
            "end": 564,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 568,
            "end": 569,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 574,
          "end": 575,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 605,
      "end": 619,
      "expression": {
        "type": "LogicalExpression",
        "start": 605,
        "end": 618,
        "operator": "&&",
        "left": {
          "type": "Identifier",
          "start": 605,
          "end": 606,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 611,
          "end": 617,
          "operator": "??",
          "left": {
            "type": "Identifier",
            "start": 611,
            "end": 612,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
