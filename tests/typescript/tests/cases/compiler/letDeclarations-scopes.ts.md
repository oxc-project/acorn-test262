__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 1659,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 27,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 18,
            "end": 26,
            "value": "string",
            "raw": "\"string\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 43,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 42,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
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
      "type": "IfStatement",
      "start": 84,
      "end": 158,
      "test": {
        "type": "Literal",
        "start": 88,
        "end": 92,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 94,
        "end": 123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 100,
            "end": 110,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 104,
                "end": 109,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 108,
                  "end": 109,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 121,
            "expression": {
              "type": "AssignmentExpression",
              "start": 115,
              "end": 120,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 129,
        "end": 158,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 135,
            "end": 145,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 144,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 143,
                  "end": 144,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 150,
            "end": 156,
            "expression": {
              "type": "AssignmentExpression",
              "start": 150,
              "end": 155,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 160,
      "end": 202,
      "test": {
        "type": "Literal",
        "start": 167,
        "end": 171,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 173,
        "end": 202,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 179,
            "end": 189,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 183,
                "end": 188,
                "id": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 200,
            "expression": {
              "type": "AssignmentExpression",
              "start": 194,
              "end": 199,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 204,
      "end": 249,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 235,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 212,
            "end": 222,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 216,
                "end": 221,
                "id": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 220,
                  "end": 221,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 227,
            "end": 233,
            "expression": {
              "type": "AssignmentExpression",
              "start": 227,
              "end": 232,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 243,
        "end": 247,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 259,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 258,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "WithStatement",
      "start": 260,
      "end": 300,
      "object": {
        "type": "Identifier",
        "start": 266,
        "end": 269,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 271,
        "end": 300,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 277,
            "end": 287,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 281,
                "end": 286,
                "id": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 285,
                  "end": 286,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 292,
            "end": 298,
            "expression": {
              "type": "AssignmentExpression",
              "start": 292,
              "end": 297,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 296,
                "end": 297,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 302,
      "end": 360,
      "init": {
        "type": "VariableDeclaration",
        "start": 307,
        "end": 316,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 311,
            "end": 316,
            "id": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 318,
        "end": 324,
        "left": {
          "type": "Identifier",
          "start": 318,
          "end": 319,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 322,
          "end": 324,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 326,
        "end": 329,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 331,
        "end": 360,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 337,
            "end": 347,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 341,
                "end": 346,
                "id": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 345,
                  "end": 346,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 352,
            "end": 358,
            "expression": {
              "type": "AssignmentExpression",
              "start": 352,
              "end": 357,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 362,
      "end": 410,
      "left": {
        "type": "VariableDeclaration",
        "start": 367,
        "end": 373,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 371,
            "end": 373,
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 373,
              "decorators": [],
              "name": "i2",
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
        "type": "ObjectExpression",
        "start": 377,
        "end": 379,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 381,
        "end": 410,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 387,
            "end": 397,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 391,
                "end": 396,
                "id": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 395,
                  "end": 396,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 402,
            "end": 408,
            "expression": {
              "type": "AssignmentExpression",
              "start": 402,
              "end": 407,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 406,
                "end": 407,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 412,
      "end": 458,
      "test": {
        "type": "Literal",
        "start": 416,
        "end": 420,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 422,
        "end": 458,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 428,
            "end": 445,
            "label": {
              "type": "Identifier",
              "start": 428,
              "end": 433,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 435,
              "end": 445,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 439,
                  "end": 444,
                  "id": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 443,
                    "end": 444,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 450,
            "end": 456,
            "expression": {
              "type": "AssignmentExpression",
              "start": 450,
              "end": 455,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 450,
                "end": 451,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 460,
      "end": 527,
      "test": {
        "type": "Literal",
        "start": 467,
        "end": 472,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "BlockStatement",
        "start": 474,
        "end": 527,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 480,
            "end": 514,
            "label": {
              "type": "Identifier",
              "start": 480,
              "end": 486,
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "LabeledStatement",
              "start": 488,
              "end": 514,
              "label": {
                "type": "Identifier",
                "start": 488,
                "end": 494,
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "LabeledStatement",
                "start": 496,
                "end": 514,
                "label": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 502,
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "VariableDeclaration",
                  "start": 504,
                  "end": 514,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 508,
                      "end": 513,
                      "id": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 509,
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 512,
                        "end": 513,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 519,
            "end": 525,
            "expression": {
              "type": "AssignmentExpression",
              "start": 519,
              "end": 524,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 519,
                "end": 520,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 529,
      "end": 603,
      "init": {
        "type": "VariableDeclaration",
        "start": 534,
        "end": 543,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 538,
            "end": 543,
            "id": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 542,
              "end": 543,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 545,
        "end": 550,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 545,
          "end": 546,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 549,
          "end": 550,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 552,
        "end": 555,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 557,
        "end": 603,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 563,
            "end": 576,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 567,
                "end": 575,
                "id": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 571,
                  "end": 575,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 581,
            "end": 601,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 585,
                "end": 600,
                "id": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 596,
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 587,
                    "end": 596,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 589,
                      "end": 596
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 600,
                  "decorators": [],
                  "name": "l",
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
      "type": "ForInStatement",
      "start": 605,
      "end": 627,
      "left": {
        "type": "VariableDeclaration",
        "start": 610,
        "end": 615,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 614,
            "end": 615,
            "id": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "l",
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
        "type": "ObjectExpression",
        "start": 619,
        "end": 621,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 623,
        "end": 627,
        "body": []
      }
    },
    {
      "type": "TryStatement",
      "start": 650,
      "end": 761,
      "block": {
        "type": "BlockStatement",
        "start": 654,
        "end": 683,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 660,
            "end": 670,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 664,
                "end": 669,
                "id": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 668,
                  "end": 669,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 675,
            "end": 681,
            "expression": {
              "type": "AssignmentExpression",
              "start": 675,
              "end": 680,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 675,
                "end": 676,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 679,
                "end": 680,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 684,
        "end": 723,
        "param": {
          "type": "Identifier",
          "start": 691,
          "end": 692,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 694,
          "end": 723,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 700,
              "end": 710,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 704,
                  "end": 709,
                  "id": {
                    "type": "Identifier",
                    "start": 704,
                    "end": 705,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 708,
                    "end": 709,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 715,
              "end": 721,
              "expression": {
                "type": "AssignmentExpression",
                "start": 715,
                "end": 720,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 715,
                  "end": 716,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 720,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 732,
        "end": 761,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 738,
            "end": 748,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 742,
                "end": 747,
                "id": {
                  "type": "Identifier",
                  "start": 742,
                  "end": 743,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 746,
                  "end": 747,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 753,
            "end": 759,
            "expression": {
              "type": "AssignmentExpression",
              "start": 753,
              "end": 758,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "SwitchStatement",
      "start": 773,
      "end": 848,
      "discriminant": {
        "type": "Literal",
        "start": 781,
        "end": 782,
        "value": 0,
        "raw": "0"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 790,
          "end": 846,
          "test": {
            "type": "Literal",
            "start": 795,
            "end": 796,
            "value": 0,
            "raw": "0"
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 806,
              "end": 816,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 810,
                  "end": 815,
                  "id": {
                    "type": "Identifier",
                    "start": 810,
                    "end": 811,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 814,
                    "end": 815,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 825,
              "end": 831,
              "expression": {
                "type": "AssignmentExpression",
                "start": 825,
                "end": 830,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 826,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 830,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 840,
              "end": 846,
              "label": null
            }
          ]
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 860,
      "end": 952,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 866,
          "end": 876,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 870,
              "end": 875,
              "id": {
                "type": "Identifier",
                "start": 870,
                "end": 871,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 874,
                "end": 875,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 881,
          "end": 887,
          "expression": {
            "type": "AssignmentExpression",
            "start": 881,
            "end": 886,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 885,
              "end": 886,
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "directive": null
        },
        {
          "type": "BlockStatement",
          "start": 892,
          "end": 950,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 902,
              "end": 916,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 906,
                  "end": 915,
                  "id": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 907,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 910,
                    "end": 915,
                    "value": false,
                    "raw": "false"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 925,
              "end": 944,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 929,
                  "end": 943,
                  "id": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 939,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 930,
                      "end": 939,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 932,
                        "end": 939
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 942,
                    "end": 943,
                    "decorators": [],
                    "name": "l",
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
      "type": "FunctionDeclaration",
      "start": 967,
      "end": 1009,
      "id": {
        "type": "Identifier",
        "start": 976,
        "end": 977,
        "decorators": [],
        "name": "F",
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
        "start": 980,
        "end": 1009,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 986,
            "end": 996,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 995,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 991,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 994,
                  "end": 995,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1001,
            "end": 1007,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1001,
              "end": 1006,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1001,
                "end": 1002,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1005,
                "end": 1006,
                "decorators": [],
                "name": "l",
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
      "type": "VariableDeclaration",
      "start": 1011,
      "end": 1056,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1015,
          "end": 1055,
          "id": {
            "type": "Identifier",
            "start": 1015,
            "end": 1017,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1020,
            "end": 1055,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1026,
              "end": 1055,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1032,
                  "end": 1042,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1036,
                      "end": 1041,
                      "id": {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1037,
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1040,
                        "end": 1041,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1047,
                  "end": 1053,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1047,
                    "end": 1052,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1048,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1051,
                      "end": 1052,
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1058,
      "end": 1109,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1062,
          "end": 1108,
          "id": {
            "type": "Identifier",
            "start": 1062,
            "end": 1064,
            "decorators": [],
            "name": "F3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1067,
            "end": 1108,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1079,
              "end": 1108,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1085,
                  "end": 1095,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1089,
                      "end": 1094,
                      "id": {
                        "type": "Identifier",
                        "start": 1089,
                        "end": 1090,
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1093,
                        "end": 1094,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1100,
                  "end": 1106,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1100,
                    "end": 1105,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1100,
                      "end": 1101,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1105,
                      "decorators": [],
                      "name": "l",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1122,
      "end": 1247,
      "id": {
        "type": "Identifier",
        "start": 1129,
        "end": 1130,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1131,
        "end": 1247,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1137,
            "end": 1147,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1141,
                "end": 1146,
                "id": {
                  "type": "Identifier",
                  "start": 1141,
                  "end": 1142,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1145,
                  "end": 1146,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1152,
            "end": 1158,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1152,
              "end": 1157,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1152,
                "end": 1153,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1156,
                "end": 1157,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 1164,
            "end": 1221,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1173,
                "end": 1187,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1177,
                    "end": 1186,
                    "id": {
                      "type": "Identifier",
                      "start": 1177,
                      "end": 1178,
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1181,
                      "end": 1186,
                      "value": false,
                      "raw": "false"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "VariableDeclaration",
                "start": 1195,
                "end": 1215,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1199,
                    "end": 1214,
                    "id": {
                      "type": "Identifier",
                      "start": 1199,
                      "end": 1210,
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1201,
                        "end": 1210,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1203,
                          "end": 1210
                        }
                      }
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 1213,
                      "end": 1214,
                      "decorators": [],
                      "name": "l",
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
            "type": "LabeledStatement",
            "start": 1227,
            "end": 1245,
            "label": {
              "type": "Identifier",
              "start": 1227,
              "end": 1232,
              "decorators": [],
              "name": "lable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 1234,
              "end": 1245,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1238,
                  "end": 1244,
                  "id": {
                    "type": "Identifier",
                    "start": 1238,
                    "end": 1240,
                    "decorators": [],
                    "name": "l2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1243,
                    "end": 1244,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1260,
      "end": 1520,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1266,
        "end": 1267,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1268,
        "end": 1520,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1274,
            "end": 1329,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1274,
              "end": 1285,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1285,
              "end": 1329,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1288,
                "end": 1329,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1298,
                    "end": 1308,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1302,
                        "end": 1307,
                        "id": {
                          "type": "Identifier",
                          "start": 1302,
                          "end": 1303,
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1306,
                          "end": 1307,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1317,
                    "end": 1323,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1317,
                      "end": 1322,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1317,
                        "end": 1318,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1322,
                        "decorators": [],
                        "name": "l",
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
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1335,
            "end": 1385,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1335,
              "end": 1341,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1341,
              "end": 1385,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1344,
                "end": 1385,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1354,
                    "end": 1364,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1358,
                        "end": 1363,
                        "id": {
                          "type": "Identifier",
                          "start": 1358,
                          "end": 1359,
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1362,
                          "end": 1363,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1373,
                    "end": 1379,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1373,
                      "end": 1378,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1373,
                        "end": 1374,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1377,
                        "end": 1378,
                        "decorators": [],
                        "name": "l",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1391,
            "end": 1458,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1395,
              "end": 1396,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1396,
              "end": 1458,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1399,
                "end": 1458,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1409,
                    "end": 1419,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1413,
                        "end": 1418,
                        "id": {
                          "type": "Identifier",
                          "start": 1413,
                          "end": 1414,
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1417,
                          "end": 1418,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1428,
                    "end": 1434,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1428,
                      "end": 1433,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1428,
                        "end": 1429,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1432,
                        "end": 1433,
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1443,
                    "end": 1452,
                    "argument": {
                      "type": "Identifier",
                      "start": 1450,
                      "end": 1451,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1464,
            "end": 1518,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1468,
              "end": 1469,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1469,
              "end": 1518,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1470,
                  "end": 1475,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1477,
                "end": 1518,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1487,
                    "end": 1497,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1491,
                        "end": 1496,
                        "id": {
                          "type": "Identifier",
                          "start": 1491,
                          "end": 1492,
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1495,
                          "end": 1496,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1506,
                    "end": 1512,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1506,
                      "end": 1511,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1506,
                        "end": 1507,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1510,
                        "end": 1511,
                        "decorators": [],
                        "name": "l",
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
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1541,
      "end": 1659,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1545,
          "end": 1659,
          "id": {
            "type": "Identifier",
            "start": 1545,
            "end": 1546,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1549,
            "end": 1659,
            "properties": [
              {
                "type": "Property",
                "start": 1555,
                "end": 1600,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1555,
                  "end": 1556,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1556,
                  "end": 1600,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1559,
                    "end": 1600,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1569,
                        "end": 1579,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1573,
                            "end": 1578,
                            "id": {
                              "type": "Identifier",
                              "start": 1573,
                              "end": 1574,
                              "decorators": [],
                              "name": "l",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1577,
                              "end": 1578,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1588,
                        "end": 1594,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1588,
                          "end": 1593,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1588,
                            "end": 1589,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1592,
                            "end": 1593,
                            "decorators": [],
                            "name": "l",
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1606,
                "end": 1657,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1606,
                  "end": 1608,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1610,
                  "end": 1657,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1616,
                    "end": 1657,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1626,
                        "end": 1636,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1630,
                            "end": 1635,
                            "id": {
                              "type": "Identifier",
                              "start": 1630,
                              "end": 1631,
                              "decorators": [],
                              "name": "l",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1634,
                              "end": 1635,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1645,
                        "end": 1651,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1645,
                          "end": 1650,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1645,
                            "end": 1646,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1649,
                            "end": 1650,
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
