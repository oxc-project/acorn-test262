asOpEmitParens.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
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
            "name": "x",
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
      "start": 43,
      "end": 65,
      "expression": {
        "type": "BinaryExpression",
        "start": 43,
        "end": 64,
        "operator": "*",
        "left": {
          "type": "TSAsExpression",
          "start": 44,
          "end": 59,
          "expression": {
            "type": "BinaryExpression",
            "start": 44,
            "end": 49,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 48,
              "end": 49,
              "raw": "1",
              "value": 1
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 53,
            "end": 59
          }
        },
        "right": {
          "type": "Literal",
          "start": 63,
          "end": 64,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 108,
      "expression": {
        "type": "MemberExpression",
        "start": 95,
        "end": 107,
        "computed": false,
        "object": {
          "type": "TSAsExpression",
          "start": 96,
          "end": 104,
          "expression": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 101,
            "end": 104
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 148,
      "expression": {
        "type": "NewExpression",
        "start": 131,
        "end": 147,
        "arguments": [],
        "callee": {
          "type": "TSAsExpression",
          "start": 136,
          "end": 146,
          "expression": {
            "type": "CallExpression",
            "start": 136,
            "end": 139,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 143,
            "end": 146
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
