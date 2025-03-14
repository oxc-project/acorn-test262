__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 50,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 50,
        "alternate": {
          "type": "MemberExpression",
          "start": 44,
          "end": 50,
          "computed": false,
          "object": {
            "type": "ThisExpression",
            "start": 44,
            "end": 48
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "consequent": {
          "type": "LogicalExpression",
          "start": 14,
          "end": 43,
          "operator": "||",
          "left": {
            "type": "MemberExpression",
            "start": 14,
            "end": 18,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 16,
              "end": 18,
              "decorators": [],
              "name": "JW",
              "optional": false
            }
          },
          "right": {
            "type": "SequenceExpression",
            "start": 21,
            "end": 42,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 21,
                "end": 33,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 26,
                    "end": 30
                  },
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 21,
                  "end": 25,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 25,
                    "decorators": [],
                    "name": "e5",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "AssignmentExpression",
                "start": 34,
                "end": 42,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 34,
                  "end": 38,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 38,
                    "decorators": [],
                    "name": "JW",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 39,
                  "end": 42,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "_",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "l",
                    "optional": false
                  }
                }
              }
            ]
          }
        },
        "test": {
          "type": "AssignmentExpression",
          "start": 1,
          "end": 12,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 1,
            "end": 2,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 3,
            "end": 12,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 3,
              "end": 9,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 3,
                "end": 7
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "decorators": [],
                "name": "R",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
