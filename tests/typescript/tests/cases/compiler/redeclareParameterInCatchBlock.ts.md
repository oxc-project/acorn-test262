__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "TryStatement",
      "start": 0,
      "end": 41,
      "block": {
        "type": "BlockStatement",
        "start": 4,
        "end": 8,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 9,
        "end": 41,
        "param": {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 18,
          "end": 41,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 39,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 38,
                    "value": null,
                    "raw": "null"
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
      "type": "TryStatement",
      "start": 43,
      "end": 75,
      "block": {
        "type": "BlockStatement",
        "start": 47,
        "end": 51,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 52,
        "end": 75,
        "param": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 61,
          "end": 75,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 67,
              "end": 73,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 71,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
      "type": "TryStatement",
      "start": 77,
      "end": 131,
      "block": {
        "type": "BlockStatement",
        "start": 81,
        "end": 85,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 86,
        "end": 131,
        "param": {
          "type": "ArrayPattern",
          "start": 93,
          "end": 99,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 101,
          "end": 131,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 107,
              "end": 129,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 113,
                  "end": 128,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 113,
                    "end": 119,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 122,
                    "end": 128,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 123,
                        "end": 124,
                        "value": 0,
                        "raw": "0"
                      },
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 127,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
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
      "type": "TryStatement",
      "start": 133,
      "end": 169,
      "block": {
        "type": "BlockStatement",
        "start": 137,
        "end": 141,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 142,
        "end": 169,
        "param": {
          "type": "ObjectPattern",
          "start": 149,
          "end": 163,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 151,
              "end": 155,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 157,
              "end": 161,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 165,
          "end": 169,
          "body": []
        }
      },
      "finalizer": null
    },
    {
      "type": "TryStatement",
      "start": 171,
      "end": 235,
      "block": {
        "type": "BlockStatement",
        "start": 175,
        "end": 179,
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "start": 180,
        "end": 235,
        "param": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 189,
          "end": 235,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 195,
              "end": 233,
              "id": {
                "type": "Identifier",
                "start": 204,
                "end": 208,
                "decorators": [],
                "name": "test",
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
                "start": 211,
                "end": 233,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 221,
                    "end": 227,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 225,
                        "end": 226,
                        "id": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 226,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
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
