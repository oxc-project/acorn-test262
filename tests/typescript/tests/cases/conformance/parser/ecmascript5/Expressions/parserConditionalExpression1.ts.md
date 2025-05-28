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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "MemberExpression",
            "start": 3,
            "end": 12,
            "object": {
              "type": "MemberExpression",
              "start": 3,
              "end": 9,
              "object": {
                "type": "ThisExpression",
                "start": 3,
                "end": 7
              },
              "property": {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          }
        },
        "consequent": {
          "type": "LogicalExpression",
          "start": 14,
          "end": 43,
          "left": {
            "type": "MemberExpression",
            "start": 14,
            "end": 18,
            "object": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 16,
              "end": 18,
              "decorators": [],
              "name": "JW",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "SequenceExpression",
            "start": 21,
            "end": 42,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 21,
                "end": 33,
                "callee": {
                  "type": "MemberExpression",
                  "start": 21,
                  "end": 25,
                  "object": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 25,
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
                  "object": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 38,
                    "decorators": [],
                    "name": "JW",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 39,
                  "end": 42,
                  "object": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              }
            ]
          }
        },
        "alternate": {
          "type": "MemberExpression",
          "start": 44,
          "end": 50,
          "object": {
            "type": "ThisExpression",
            "start": 44,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
