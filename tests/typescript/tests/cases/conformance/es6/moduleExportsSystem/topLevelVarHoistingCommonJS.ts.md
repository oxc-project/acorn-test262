__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 639,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "BlockStatement",
      "start": 21,
      "end": 39,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 27,
          "end": 37,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 31,
              "end": 36,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "IfStatement",
      "start": 41,
      "end": 90,
      "test": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 48,
        "end": 66,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 54,
            "end": 64,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 58,
                "end": 63,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 72,
        "end": 90,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 88,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 87,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "SwitchStatement",
      "start": 92,
      "end": 169,
      "discriminant": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 109,
          "end": 135,
          "test": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 125,
              "end": 135,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 129,
                  "end": 134,
                  "id": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 140,
          "end": 167,
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 157,
              "end": 167,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 161,
                  "end": 166,
                  "id": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
      ]
    },
    {
      "type": "WhileStatement",
      "start": 171,
      "end": 199,
      "test": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 181,
        "end": 199,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 187,
            "end": 197,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 191,
                "end": 196,
                "id": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 201,
      "end": 233,
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 222,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 210,
            "end": 220,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 214,
                "end": 219,
                "id": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForStatement",
      "start": 235,
      "end": 268,
      "init": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 249,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 249,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 254,
        "end": 268,
        "body": [
          {
            "type": "BreakStatement",
            "start": 260,
            "end": 266,
            "label": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 270,
      "end": 309,
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 280,
        "end": 309,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 286,
            "end": 296,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 290,
                "end": 295,
                "id": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "BreakStatement",
            "start": 301,
            "end": 307,
            "label": null
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 311,
      "end": 334,
      "left": {
        "type": "VariableDeclaration",
        "start": 316,
        "end": 321,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 320,
            "end": 321,
            "id": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 325,
        "end": 326,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BreakStatement",
        "start": 328,
        "end": 334,
        "label": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 336,
      "end": 367,
      "left": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 346,
        "end": 347,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 367,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 365,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 364,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 369,
      "end": 392,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 374,
        "end": 379,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 378,
            "end": 379,
            "id": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BreakStatement",
        "start": 386,
        "end": 392,
        "label": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 394,
      "end": 425,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 399,
        "end": 400,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 404,
        "end": 405,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 407,
        "end": 425,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 413,
            "end": 423,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 417,
                "end": 422,
                "id": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "TryStatement",
      "start": 427,
      "end": 474,
      "block": {
        "type": "BlockStatement",
        "start": 431,
        "end": 449,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 447,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 446,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 446,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 450,
        "end": 474,
        "param": null,
        "body": {
          "type": "BlockStatement",
          "start": 456,
          "end": 474,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 462,
              "end": 472,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 466,
                  "end": 471,
                  "id": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 467,
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "LabeledStatement",
      "start": 476,
      "end": 518,
      "label": {
        "type": "Identifier",
        "start": 476,
        "end": 481,
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 518,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 489,
            "end": 499,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 493,
                "end": 498,
                "id": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 498,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "BreakStatement",
            "start": 504,
            "end": 516,
            "label": {
              "type": "Identifier",
              "start": 510,
              "end": 515,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    },
    {
      "type": "WithStatement",
      "start": 534,
      "end": 561,
      "object": {
        "type": "Identifier",
        "start": 540,
        "end": 541,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 543,
        "end": 561,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 549,
            "end": 559,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 553,
                "end": 558,
                "id": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 554,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 573,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 572,
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 568,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 575,
      "end": 639,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 584,
          "end": 585,
          "local": {
            "type": "Identifier",
            "start": 584,
            "end": 585,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 584,
            "end": 585,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 587,
          "end": 588,
          "local": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 590,
          "end": 591,
          "local": {
            "type": "Identifier",
            "start": 590,
            "end": 591,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 590,
            "end": 591,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 593,
          "end": 594,
          "local": {
            "type": "Identifier",
            "start": 593,
            "end": 594,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 593,
            "end": 594,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 596,
          "end": 597,
          "local": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 599,
          "end": 600,
          "local": {
            "type": "Identifier",
            "start": 599,
            "end": 600,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 599,
            "end": 600,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 602,
          "end": 603,
          "local": {
            "type": "Identifier",
            "start": 602,
            "end": 603,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 602,
            "end": 603,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 605,
          "end": 606,
          "local": {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 608,
          "end": 609,
          "local": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 611,
          "end": 612,
          "local": {
            "type": "Identifier",
            "start": 611,
            "end": 612,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 611,
            "end": 612,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 614,
          "end": 615,
          "local": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 617,
          "end": 618,
          "local": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 620,
          "end": 621,
          "local": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 623,
          "end": 624,
          "local": {
            "type": "Identifier",
            "start": 623,
            "end": 624,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 623,
            "end": 624,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 626,
          "end": 627,
          "local": {
            "type": "Identifier",
            "start": 626,
            "end": 627,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 626,
            "end": 627,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 629,
          "end": 630,
          "local": {
            "type": "Identifier",
            "start": 629,
            "end": 630,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 629,
            "end": 630,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 632,
          "end": 633,
          "local": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 635,
          "end": 636,
          "local": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
