bigIntWithTargetES2016.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 22,
        "operator": "**",
        "left": {
          "type": "CallExpression",
          "start": 0,
          "end": 9,
          "arguments": [
            {
              "type": "Literal",
              "start": 7,
              "end": 8,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "BigInt",
            "optional": false
          },
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 13,
          "end": 22,
          "arguments": [
            {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 13,
            "end": 19,
            "decorators": [],
            "name": "BigInt",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "num",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 55,
            "end": 64,
            "arguments": [
              {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "BigInt",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 84,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 83,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 74,
          "end": 83,
          "arguments": [
            {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "BigInt",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
