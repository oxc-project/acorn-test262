__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 50,
    "end": 52,
    "range": [
      50,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 98,
    "end": 100,
    "range": [
      98,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 101,
    "end": 104,
    "range": [
      101,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  }
]
```
