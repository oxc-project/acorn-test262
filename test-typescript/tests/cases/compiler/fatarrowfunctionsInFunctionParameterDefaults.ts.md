fatarrowfunctionsInFunctionParameterDefaults.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 75,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 63,
            "end": 72,
            "argument": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 12,
          "end": 26,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 16,
            "end": 26,
            "async": false,
            "body": {
              "type": "ThisExpression",
              "start": 22,
              "end": 26
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 35,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 32,
            "end": 35,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 87,
        "arguments": [
          {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 84,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 84,
            "decorators": [],
            "name": "call",
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
