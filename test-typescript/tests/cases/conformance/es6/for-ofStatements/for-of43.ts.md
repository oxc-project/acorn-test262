for-of43.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 28,
            "end": 45,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 29,
                "end": 44,
                "properties": [
                  {
                    "type": "Property",
                    "start": 31,
                    "end": 36,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 34,
                      "end": 36,
                      "raw": "\"\"",
                      "value": ""
                    }
                  },
                  {
                    "type": "Property",
                    "start": 38,
                    "end": 42,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 41,
                      "end": 42,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 46,
      "end": 107,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 107,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 98,
            "expression": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 105,
            "expression": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 79,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 55,
              "end": 79,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 56,
                  "end": 65,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 59,
                    "end": 65,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 63,
                      "end": 65,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 67,
                  "end": 78,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 70,
                    "end": 78,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 74,
                      "end": 78,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              ]
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "decorators": [],
        "name": "array",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
