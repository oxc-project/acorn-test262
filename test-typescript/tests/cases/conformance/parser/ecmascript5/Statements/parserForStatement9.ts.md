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
      "body": {
        "type": "ExpressionStatement",
        "start": 111,
        "end": 125,
        "expression": {
          "type": "CallExpression",
          "start": 111,
          "end": 125,
          "arguments": [
            {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 111,
            "end": 122,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "console",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
              "decorators": [],
              "name": "log",
              "optional": false
            }
          },
          "optional": false
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 97,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 77,
            "end": 97,
            "definite": false,
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
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "BinaryExpression",
                    "start": 82,
                    "end": 91,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 82,
                      "end": 85,
                      "raw": "'a'",
                      "value": "a"
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 89,
                      "end": 91,
                      "properties": []
                    }
                  }
                }
              ],
              "optional": false
            },
            "init": {
              "type": "ArrayExpression",
              "start": 95,
              "end": 97,
              "elements": []
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "UnaryExpression",
        "start": 99,
        "end": 101,
        "argument": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "!",
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
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 107,
          "end": 109,
          "argument": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "!",
          "prefix": true
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 126,
      "end": 183,
      "body": {
        "type": "ExpressionStatement",
        "start": 169,
        "end": 183,
        "expression": {
          "type": "CallExpression",
          "start": 169,
          "end": 183,
          "arguments": [
            {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 169,
            "end": 180,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 169,
              "end": 176,
              "decorators": [],
              "name": "console",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "log",
              "optional": false
            }
          },
          "optional": false
        }
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 155,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 135,
            "end": 155,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 135,
              "end": 150,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 136,
                  "end": 149,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
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
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "BinaryExpression",
                      "start": 140,
                      "end": 149,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 140,
                        "end": 143,
                        "raw": "'a'",
                        "value": "a"
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 147,
                        "end": 149,
                        "properties": []
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "ObjectExpression",
              "start": 153,
              "end": 155,
              "properties": []
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "UnaryExpression",
        "start": 157,
        "end": 159,
        "argument": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "!",
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
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 165,
          "end": 167,
          "argument": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "!",
          "prefix": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
