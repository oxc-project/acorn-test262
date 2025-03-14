__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "ooo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 19,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "WithStatement",
      "start": 22,
      "end": 186,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 186,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 95,
            "expression": {
              "type": "AssignmentExpression",
              "start": 83,
              "end": 94,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "bing",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 90,
                "end": 94,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 112,
            "end": 124,
            "expression": {
              "type": "AssignmentExpression",
              "start": 112,
              "end": 123,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 116,
                "decorators": [],
                "name": "bang",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 119,
                "end": 123,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 146,
            "end": 163,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 161,
              "end": 163,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 175,
            "expression": {
              "type": "CallExpression",
              "start": 169,
              "end": 174,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 169,
                "end": 172,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "object": {
        "type": "MemberExpression",
        "start": 28,
        "end": 66,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 28,
          "end": 60,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 28,
            "end": 54,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 28,
              "end": 49,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 28,
                "end": 44,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 28,
                  "end": 38,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 28,
                    "end": 35,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 31,
                      "decorators": [],
                      "name": "ooo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 35,
                      "decorators": [],
                      "name": "eee",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 38,
                    "decorators": [],
                    "name": "oo",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "decorators": [],
                  "name": "ah_ah",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 49,
                "decorators": [],
                "name": "ting",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "tang",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "decorators": [],
            "name": "walla",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 61,
          "end": 66,
          "decorators": [],
          "name": "walla",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
