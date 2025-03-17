__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 184,
  "body": [
    {
      "type": "ForStatement",
      "start": 68,
      "end": 125,
      "init": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 97,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 77,
            "end": 97,
            "id": {
              "type": "ArrayPattern",
              "start": 77,
              "end": 92,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 78,
                  "end": 91,
                  "left": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 82,
                    "end": 91,
                    "left": {
                      "type": "Literal",
                      "start": 82,
                      "end": 85,
                      "value": "a",
                      "raw": "'a'"
                    },
                    "operator": "in",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 89,
                      "end": 91,
                      "properties": []
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 95,
              "end": 97,
              "elements": []
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "UnaryExpression",
        "start": 99,
        "end": 101,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 109,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 107,
          "end": 109,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 111,
        "end": 125,
        "expression": {
          "type": "CallExpression",
          "start": 111,
          "end": 125,
          "callee": {
            "type": "MemberExpression",
            "start": 111,
            "end": 122,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      }
    },
    {
      "type": "ForStatement",
      "start": 126,
      "end": 183,
      "init": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 155,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 135,
            "end": 155,
            "id": {
              "type": "ObjectPattern",
              "start": 135,
              "end": 150,
              "properties": [
                {
                  "type": "Property",
                  "start": 136,
                  "end": 149,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 136,
                    "end": 149,
                    "left": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 140,
                      "end": 149,
                      "left": {
                        "type": "Literal",
                        "start": 140,
                        "end": 143,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "start": 147,
                        "end": 149,
                        "properties": []
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 153,
              "end": 155,
              "properties": []
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "UnaryExpression",
        "start": 157,
        "end": 159,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 165,
          "end": 167,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 169,
        "end": 183,
        "expression": {
          "type": "CallExpression",
          "start": 169,
          "end": 183,
          "callee": {
            "type": "MemberExpression",
            "start": 169,
            "end": 180,
            "object": {
              "type": "Identifier",
              "start": 169,
              "end": 176,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
