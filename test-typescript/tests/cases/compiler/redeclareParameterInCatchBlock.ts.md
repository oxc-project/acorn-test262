__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 71,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "e",
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
          "elements": [
            {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 113,
                  "end": 128,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 113,
                    "end": 119,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
              "kind": "const",
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
          "properties": [
            {
              "type": "Property",
              "start": 151,
              "end": 155,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 157,
              "end": 161,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 233,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 221,
                    "end": 227,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 225,
                        "end": 226,
                        "id": {
                          "type": "Identifier",
                          "start": 225,
                          "end": 226,
                          "name": "e",
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
