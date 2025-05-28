__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 445,
  "body": [
    {
      "type": "ForInStatement",
      "start": 0,
      "end": 34,
      "left": {
        "type": "VariableDeclaration",
        "start": 4,
        "end": 9,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8,
            "end": 9,
            "id": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "x",
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
        "start": 13,
        "end": 15,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 34,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 23,
            "end": 32,
            "label": null
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 36,
      "end": 79,
      "label": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForInStatement",
        "start": 41,
        "end": 79,
        "left": {
          "type": "VariableDeclaration",
          "start": 45,
          "end": 50,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 49,
              "end": 50,
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "x",
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
          "start": 54,
          "end": 56,
          "properties": []
        },
        "body": {
          "type": "BlockStatement",
          "start": 58,
          "end": 79,
          "body": [
            {
              "type": "ContinueStatement",
              "start": 64,
              "end": 77,
              "label": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "decorators": [],
                "name": "ONE",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 81,
      "end": 133,
      "label": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "LabeledStatement",
        "start": 86,
        "end": 133,
        "label": {
          "type": "Identifier",
          "start": 86,
          "end": 91,
          "decorators": [],
          "name": "THREE",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "ForInStatement",
          "start": 93,
          "end": 133,
          "left": {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 102,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 102,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "x",
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
            "start": 106,
            "end": 108,
            "properties": []
          },
          "body": {
            "type": "BlockStatement",
            "start": 110,
            "end": 133,
            "body": [
              {
                "type": "ContinueStatement",
                "start": 116,
                "end": 131,
                "label": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 130,
                  "decorators": [],
                  "name": "THREE",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 135,
      "end": 223,
      "label": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "FOUR",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForInStatement",
        "start": 141,
        "end": 223,
        "left": {
          "type": "VariableDeclaration",
          "start": 145,
          "end": 150,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 149,
              "end": 150,
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "x",
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
          "start": 154,
          "end": 156,
          "properties": []
        },
        "body": {
          "type": "BlockStatement",
          "start": 158,
          "end": 223,
          "body": [
            {
              "type": "LabeledStatement",
              "start": 164,
              "end": 221,
              "label": {
                "type": "Identifier",
                "start": 164,
                "end": 168,
                "decorators": [],
                "name": "FIVE",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "ForInStatement",
                "start": 174,
                "end": 221,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 178,
                  "end": 183,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 182,
                      "end": 183,
                      "id": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "x",
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
                  "start": 187,
                  "end": 189,
                  "properties": []
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 191,
                  "end": 221,
                  "body": [
                    {
                      "type": "ContinueStatement",
                      "start": 201,
                      "end": 215,
                      "label": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 214,
                        "decorators": [],
                        "name": "FOUR",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 225,
      "end": 289,
      "left": {
        "type": "VariableDeclaration",
        "start": 229,
        "end": 234,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 233,
            "end": 234,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "x",
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
        "start": 238,
        "end": 240,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 242,
        "end": 289,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 248,
            "end": 287,
            "label": {
              "type": "Identifier",
              "start": 248,
              "end": 251,
              "decorators": [],
              "name": "SIX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "ForInStatement",
              "start": 257,
              "end": 287,
              "left": {
                "type": "VariableDeclaration",
                "start": 261,
                "end": 266,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 265,
                    "end": 266,
                    "id": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "x",
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
                "start": 270,
                "end": 272,
                "properties": []
              },
              "body": {
                "type": "ContinueStatement",
                "start": 274,
                "end": 287,
                "label": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 286,
                  "decorators": [],
                  "name": "SIX",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 291,
      "end": 367,
      "label": {
        "type": "Identifier",
        "start": 291,
        "end": 296,
        "decorators": [],
        "name": "SEVEN",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForInStatement",
        "start": 298,
        "end": 367,
        "left": {
          "type": "VariableDeclaration",
          "start": 303,
          "end": 308,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 307,
              "end": 308,
              "id": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "decorators": [],
                "name": "x",
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
          "start": 312,
          "end": 314,
          "properties": []
        },
        "body": {
          "type": "ForInStatement",
          "start": 316,
          "end": 367,
          "left": {
            "type": "VariableDeclaration",
            "start": 321,
            "end": 326,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 325,
                "end": 326,
                "id": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 326,
                  "decorators": [],
                  "name": "x",
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
            "start": 330,
            "end": 332,
            "properties": []
          },
          "body": {
            "type": "ForInStatement",
            "start": 334,
            "end": 367,
            "left": {
              "type": "VariableDeclaration",
              "start": 339,
              "end": 344,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 343,
                  "end": 344,
                  "id": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "decorators": [],
                    "name": "x",
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
              "start": 348,
              "end": 350,
              "properties": []
            },
            "body": {
              "type": "ContinueStatement",
              "start": 352,
              "end": 367,
              "label": {
                "type": "Identifier",
                "start": 361,
                "end": 366,
                "decorators": [],
                "name": "SEVEN",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 369,
      "end": 445,
      "label": {
        "type": "Identifier",
        "start": 369,
        "end": 374,
        "decorators": [],
        "name": "EIGHT",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForInStatement",
        "start": 376,
        "end": 445,
        "left": {
          "type": "VariableDeclaration",
          "start": 381,
          "end": 386,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 385,
              "end": 386,
              "id": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "decorators": [],
                "name": "x",
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
          "start": 390,
          "end": 392,
          "properties": []
        },
        "body": {
          "type": "BlockStatement",
          "start": 393,
          "end": 445,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 399,
              "end": 423,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 403,
                  "end": 423,
                  "id": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 405,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 408,
                    "end": 423,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 420,
                      "end": 423,
                      "body": []
                    },
                    "expression": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ContinueStatement",
              "start": 428,
              "end": 443,
              "label": {
                "type": "Identifier",
                "start": 437,
                "end": 442,
                "decorators": [],
                "name": "EIGHT",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
