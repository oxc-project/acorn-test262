__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 428,
  "body": [
    {
      "type": "TryStatement",
      "start": 0,
      "end": 204,
      "block": {
        "type": "BlockStatement",
        "start": 4,
        "end": 6,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 7,
        "end": 204,
        "param": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 17,
          "end": 204,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 62,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 61,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 37,
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "start": 40,
                    "end": 61,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 40,
                      "end": 48,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 53,
                      "end": 61,
                      "value": "string",
                      "raw": "'string'"
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 67,
              "end": 125,
              "test": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 81,
                "end": 125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 91,
                    "end": 107,
                    "expression": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 106,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 91,
                        "end": 104,
                        "object": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 104,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 131,
              "end": 202,
              "test": {
                "type": "BinaryExpression",
                "start": 135,
                "end": 156,
                "left": {
                  "type": "UnaryExpression",
                  "start": 135,
                  "end": 143,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 148,
                  "end": 156,
                  "value": "string",
                  "raw": "'string'"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 158,
                "end": 202,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 168,
                    "end": 184,
                    "expression": {
                      "type": "CallExpression",
                      "start": 168,
                      "end": 183,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 168,
                        "end": 181,
                        "object": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 181,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        }
      },
      "finalizer": null
    },
    {
      "type": "TryStatement",
      "start": 206,
      "end": 428,
      "block": {
        "type": "BlockStatement",
        "start": 210,
        "end": 212,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 213,
        "end": 428,
        "param": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 223,
          "end": 428,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 229,
              "end": 268,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 235,
                  "end": 267,
                  "id": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 243,
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "start": 246,
                    "end": 267,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 246,
                      "end": 254,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 259,
                      "end": 267,
                      "value": "string",
                      "raw": "'string'"
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 274,
              "end": 280,
              "expression": {
                "type": "AssignmentExpression",
                "start": 274,
                "end": 279,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 278,
                  "end": 279,
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
            },
            {
              "type": "IfStatement",
              "start": 286,
              "end": 349,
              "test": {
                "type": "Identifier",
                "start": 290,
                "end": 298,
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 300,
                "end": 349,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 326,
                    "expression": {
                      "type": "CallExpression",
                      "start": 310,
                      "end": 325,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 310,
                        "end": 323,
                        "object": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 323,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "start": 355,
              "end": 426,
              "test": {
                "type": "BinaryExpression",
                "start": 359,
                "end": 380,
                "left": {
                  "type": "UnaryExpression",
                  "start": 359,
                  "end": 367,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 372,
                  "end": 380,
                  "value": "string",
                  "raw": "'string'"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 382,
                "end": 426,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 392,
                    "end": 408,
                    "expression": {
                      "type": "CallExpression",
                      "start": 392,
                      "end": 407,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 392,
                        "end": 405,
                        "object": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 393,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 405,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
