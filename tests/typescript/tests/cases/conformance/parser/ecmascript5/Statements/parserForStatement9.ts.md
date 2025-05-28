__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 183,
  "body": [
    {
      "type": "ForStatement",
      "start": 68,
      "end": 125,
      "init": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 97,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 77,
            "end": 97,
            "id": {
              "type": "ArrayPattern",
              "start": 77,
              "end": 92,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 78,
                  "end": 91,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "declare": false
      },
      "test": {
        "type": "UnaryExpression",
        "start": 99,
        "end": 101,
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "UnaryExpression",
          "start": 107,
          "end": 109,
          "operator": "!",
          "argument": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
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
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 135,
            "end": 155,
            "id": {
              "type": "ObjectPattern",
              "start": 135,
              "end": 150,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 136,
                  "end": 149,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 136,
                    "end": 149,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
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
        "declare": false
      },
      "test": {
        "type": "UnaryExpression",
        "start": 157,
        "end": 159,
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "UnaryExpression",
          "start": 165,
          "end": 167,
          "operator": "!",
          "argument": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
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
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
