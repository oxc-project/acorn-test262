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
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 70,
                "name": "iNext",
                "typeAnnotation": null,
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
          "type": "ForStatement",
          "start": 74,
          "end": 219,
          "init": {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          "test": {
            "type": "BinaryExpression",
            "start": 99,
            "end": 105,
            "left": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "start": 103,
              "end": 105,
              "value": 10,
              "raw": "10"
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
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "name": "iNext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 219,
            "body": [
              {
                "type": "IfStatement",
                "start": 140,
                "end": 196,
                "test": {
                  "type": "BinaryExpression",
                  "start": 144,
                  "end": 150,
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 150,
                    "value": 5,
                    "raw": "5"
                  }
                },
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
                          "name": "iNext",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 168,
                          "end": 173,
                          "value": "bad",
                          "raw": "\"bad\""
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ContinueStatement",
                      "start": 181,
                      "end": 190,
                      "label": null
                    }
                  ]
                },
                "alternate": null
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
                    "name": "iNext",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 209,
                    "end": 214,
                    "left": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 213,
                      "end": 214,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "directive": null
              }
            ]
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
              "id": {
                "type": "Identifier",
                "start": 231,
                "end": 253,
                "name": "iNext",
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
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 256,
                "end": 258,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ForStatement",
          "start": 262,
          "end": 407,
          "init": {
            "type": "VariableDeclaration",
            "start": 272,
            "end": 281,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 276,
                "end": 281,
                "id": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 280,
                  "end": 281,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          "test": {
            "type": "BinaryExpression",
            "start": 287,
            "end": 293,
            "left": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "start": 291,
              "end": 293,
              "value": 10,
              "raw": "10"
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
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 303,
              "end": 308,
              "name": "iNext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "body": {
            "type": "BlockStatement",
            "start": 322,
            "end": 407,
            "body": [
              {
                "type": "IfStatement",
                "start": 328,
                "end": 384,
                "test": {
                  "type": "BinaryExpression",
                  "start": 332,
                  "end": 338,
                  "left": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 337,
                    "end": 338,
                    "value": 5,
                    "raw": "5"
                  }
                },
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
                          "name": "iNext",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 356,
                          "end": 361,
                          "value": "bad",
                          "raw": "\"bad\""
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ContinueStatement",
                      "start": 369,
                      "end": 378,
                      "label": null
                    }
                  ]
                },
                "alternate": null
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
                    "name": "iNext",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 397,
                    "end": 402,
                    "left": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 398,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 401,
                      "end": 402,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "directive": null
              }
            ]
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
