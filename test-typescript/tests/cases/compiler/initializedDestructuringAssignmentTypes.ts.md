initializedDestructuringAssignmentTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 6,
            "end": 16,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 9,
                "end": 15,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 13,
                  "end": 15,
                  "raw": "''",
                  "value": ""
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 19,
            "end": 37,
            "operator": "||",
            "left": {
              "type": "CallExpression",
              "start": 19,
              "end": 31,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 28,
                  "end": 30,
                  "raw": "''",
                  "value": ""
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 19,
                "end": 27,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 19,
                  "end": 21,
                  "raw": "''",
                  "value": ""
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 27,
                  "decorators": [],
                  "name": "match",
                  "optional": false
                }
              },
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 35,
              "end": 37,
              "elements": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 51,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 40,
          "end": 49,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "decorators": [],
            "name": "toFixed",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
