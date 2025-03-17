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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "R",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 16,
              "end": 18,
              "name": "JW",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 25,
                    "name": "e5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
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
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 38,
                    "name": "JW",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 39,
                  "end": 42,
                  "object": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
