__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        }
      ],
      "declare": true,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSAsExpression",
          "expression": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 48,
              "end": 49
            },
            "start": 44,
            "end": 49
          },
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 53,
            "end": 59
          },
          "start": 44,
          "end": 59
        },
        "operator": "*",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 63,
          "end": 64
        },
        "start": 43,
        "end": 64
      },
      "directive": null,
      "start": 43,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 101,
            "end": 104
          },
          "start": 96,
          "end": 104
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "optional": false,
        "computed": false,
        "start": 95,
        "end": 107
      },
      "directive": null,
      "start": 95,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "TSAsExpression",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 136,
            "end": 139
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 143,
            "end": 146
          },
          "start": 136,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [],
        "start": 131,
        "end": 147
      },
      "directive": null,
      "start": 131,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
