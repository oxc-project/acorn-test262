parserRegularExpression6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 22,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 21,
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 21,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 49,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 45,
          "end": 48,
          "raw": "/=/",
          "regex": {
            "flags": "",
            "pattern": "="
          },
          "value": {}
        }
      }
    }
  ],
  "sourceType": "script"
}
```
