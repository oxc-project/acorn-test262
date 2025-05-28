__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 65,
      "expression": {
        "type": "BinaryExpression",
        "start": 43,
        "end": 64,
        "left": {
          "type": "TSAsExpression",
          "start": 44,
          "end": 59,
          "expression": {
            "type": "BinaryExpression",
            "start": 44,
            "end": 49,
            "left": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 48,
              "end": 49,
              "value": 1,
              "raw": "1"
            }
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 53,
            "end": 59
          }
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "start": 63,
          "end": 64,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 108,
      "expression": {
        "type": "MemberExpression",
        "start": 95,
        "end": 107,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 101,
            "end": 104
          }
        },
        "property": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 148,
      "expression": {
        "type": "NewExpression",
        "start": 131,
        "end": 147,
        "callee": {
          "type": "TSAsExpression",
          "start": 136,
          "end": 146,
          "expression": {
            "type": "CallExpression",
            "start": 136,
            "end": 139,
            "callee": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 143,
            "end": 146
          }
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
