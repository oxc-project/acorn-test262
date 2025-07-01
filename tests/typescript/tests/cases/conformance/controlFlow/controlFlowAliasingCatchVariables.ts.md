__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 6
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 37
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 47,
                        "end": 48
                      },
                      "prefix": true,
                      "start": 40,
                      "end": 48
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 53,
                      "end": 61
                    },
                    "start": 40,
                    "end": 61
                  },
                  "definite": false,
                  "start": 29,
                  "end": 61
                }
              ],
              "declare": false,
              "start": 23,
              "end": 62
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 79
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 104
                        },
                        "optional": false,
                        "computed": false,
                        "start": 91,
                        "end": 104
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 91,
                      "end": 106
                    },
                    "directive": null,
                    "start": 91,
                    "end": 107
                  }
                ],
                "start": 81,
                "end": 125
              },
              "alternate": null,
              "start": 67,
              "end": 125
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "prefix": true,
                  "start": 135,
                  "end": 143
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 148,
                  "end": 156
                },
                "start": 135,
                "end": 156
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 169
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 181
                        },
                        "optional": false,
                        "computed": false,
                        "start": 168,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 168,
                      "end": 183
                    },
                    "directive": null,
                    "start": 168,
                    "end": 184
                  }
                ],
                "start": 158,
                "end": 202
              },
              "alternate": null,
              "start": 131,
              "end": 202
            }
          ],
          "start": 17,
          "end": 204
        },
        "start": 7,
        "end": 204
      },
      "finalizer": null,
      "start": 0,
      "end": 204
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 210,
        "end": 212
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 221
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 243
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 254
                      },
                      "prefix": true,
                      "start": 246,
                      "end": 254
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 259,
                      "end": 267
                    },
                    "start": 246,
                    "end": 267
                  },
                  "definite": false,
                  "start": 235,
                  "end": 267
                }
              ],
              "declare": false,
              "start": 229,
              "end": 268
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 278,
                  "end": 279
                },
                "start": 274,
                "end": 279
              },
              "directive": null,
              "start": 274,
              "end": 280
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 298
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 323
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 323
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 310,
                      "end": 325
                    },
                    "directive": null,
                    "start": 310,
                    "end": 326
                  }
                ],
                "start": 300,
                "end": 349
              },
              "alternate": null,
              "start": 286,
              "end": 349
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "prefix": true,
                  "start": 359,
                  "end": 367
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 372,
                  "end": 380
                },
                "start": 359,
                "end": 380
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 393
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 405
                        },
                        "optional": false,
                        "computed": false,
                        "start": 392,
                        "end": 405
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 392,
                      "end": 407
                    },
                    "directive": null,
                    "start": 392,
                    "end": 408
                  }
                ],
                "start": 382,
                "end": 426
              },
              "alternate": null,
              "start": 355,
              "end": 426
            }
          ],
          "start": 223,
          "end": 428
        },
        "start": 213,
        "end": 428
      },
      "finalizer": null,
      "start": 206,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 428
}
```
