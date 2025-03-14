__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 505,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 32,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
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
        "end": 12,
        "decorators": [],
        "name": "A1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 64,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "B1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 77,
                  "decorators": [],
                  "name": "A1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 88,
                  "decorators": [],
                  "name": "B1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 112,
            "decorators": [],
            "name": "ra1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 115,
            "end": 120,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 129,
            "decorators": [],
            "name": "ra2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 132,
            "end": 137,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "decorators": [],
            "name": "rb1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 164,
            "end": 169,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 178,
            "decorators": [],
            "name": "rb2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 181,
            "end": 186,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 211,
            "decorators": [],
            "name": "rc1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 214,
            "end": 220,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 238,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "rc2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 232,
            "end": 238,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 263,
            "decorators": [],
            "name": "rd1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 266,
            "end": 272,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 281,
            "decorators": [],
            "name": "rd2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 284,
            "end": 290,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 324,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 315,
            "decorators": [],
            "name": "re1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 318,
            "end": 324,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 333,
            "decorators": [],
            "name": "re2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 336,
            "end": 342,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "decorators": [],
            "name": "rf1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 370,
            "end": 376,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 385,
            "decorators": [],
            "name": "rf2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 388,
            "end": 394,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 420,
            "decorators": [],
            "name": "rg1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 423,
            "end": 430,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 449,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 439,
            "decorators": [],
            "name": "rg2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 442,
            "end": 449,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 485,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 475,
            "decorators": [],
            "name": "rh1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 478,
            "end": 485,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 484,
              "end": 485,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 487,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 504,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 494,
            "decorators": [],
            "name": "rh2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 497,
            "end": 504,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
