__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 410,
  "body": [
    {
      "type": "BlockStatement",
      "start": 57,
      "end": 221,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 61,
          "end": 71,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 65,
              "end": 70,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 70,
                "decorators": [],
                "name": "iNext",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "ForStatement",
          "start": 74,
          "end": 219,
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 219,
            "body": [
              {
                "type": "IfStatement",
                "start": 140,
                "end": 196,
                "alternate": null,
                "consequent": {
                  "type": "BlockStatement",
                  "start": 152,
                  "end": 196,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 160,
                      "end": 174,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 160,
                        "end": 173,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 165,
                          "decorators": [],
                          "name": "iNext",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 168,
                          "end": 173,
                          "raw": "\"bad\"",
                          "value": "bad"
                        }
                      }
                    },
                    {
                      "type": "ContinueStatement",
                      "start": 181,
                      "end": 190,
                      "label": null
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 144,
                  "end": 150,
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 150,
                    "raw": "5",
                    "value": 5
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 201,
                "end": 215,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 201,
                  "end": 214,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 206,
                    "decorators": [],
                    "name": "iNext",
                    "optional": false
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 209,
                    "end": 214,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 213,
                      "end": 214,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              }
            ]
          },
          "init": {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 93,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          "test": {
            "type": "BinaryExpression",
            "start": 99,
            "end": 105,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 103,
              "end": 105,
              "raw": "10",
              "value": 10
            }
          },
          "update": {
            "type": "AssignmentExpression",
            "start": 111,
            "end": 120,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "decorators": [],
              "name": "iNext",
              "optional": false
            }
          }
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 223,
      "end": 409,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 227,
          "end": 259,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 231,
              "end": 258,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 231,
                "end": 253,
                "decorators": [],
                "name": "iNext",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 253,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 238,
                    "end": 253,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 238,
                        "end": 244
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 247,
                        "end": 253
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 256,
                "end": 258,
                "raw": "\"\"",
                "value": ""
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "ForStatement",
          "start": 262,
          "end": 407,
          "body": {
            "type": "BlockStatement",
            "start": 322,
            "end": 407,
            "body": [
              {
                "type": "IfStatement",
                "start": 328,
                "end": 384,
                "alternate": null,
                "consequent": {
                  "type": "BlockStatement",
                  "start": 340,
                  "end": 384,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 348,
                      "end": 362,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 348,
                        "end": 361,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 353,
                          "decorators": [],
                          "name": "iNext",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 356,
                          "end": 361,
                          "raw": "\"bad\"",
                          "value": "bad"
                        }
                      }
                    },
                    {
                      "type": "ContinueStatement",
                      "start": 369,
                      "end": 378,
                      "label": null
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 332,
                  "end": 338,
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 337,
                    "end": 338,
                    "raw": "5",
                    "value": 5
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 389,
                "end": 403,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 389,
                  "end": 402,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 394,
                    "decorators": [],
                    "name": "iNext",
                    "optional": false
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 397,
                    "end": 402,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 398,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 401,
                      "end": 402,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              }
            ]
          },
          "init": {
            "type": "VariableDeclaration",
            "start": 272,
            "end": 281,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 276,
                "end": 281,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 280,
                  "end": 281,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          "test": {
            "type": "BinaryExpression",
            "start": 287,
            "end": 293,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 291,
              "end": 293,
              "raw": "10",
              "value": 10
            }
          },
          "update": {
            "type": "AssignmentExpression",
            "start": 299,
            "end": 308,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 303,
              "end": 308,
              "decorators": [],
              "name": "iNext",
              "optional": false
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
