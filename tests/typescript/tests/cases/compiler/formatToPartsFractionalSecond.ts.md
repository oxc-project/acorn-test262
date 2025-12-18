__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4,
                    "end": 8
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9,
                    "end": 23
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4,
                  "end": 23
                },
                "typeArguments": null,
                "arguments": [],
                "start": 0,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 39
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 0,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 46
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 59
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "optional": false,
                "computed": false,
                "start": 56,
                "end": 64
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "fractionalSecond",
                "raw": "'fractionalSecond'",
                "start": 69,
                "end": 87
              },
              "start": 56,
              "end": 87
            },
            "id": null,
            "generator": false,
            "start": 47,
            "end": 87
          }
        ],
        "optional": false,
        "start": 0,
        "end": 88
      },
      "directive": null,
      "start": 0,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 4,
    "end": 8,
    "range": [
      4,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 9,
    "end": 23,
    "range": [
      9,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "formatToParts",
    "start": 26,
    "end": 39,
    "range": [
      26,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 53,
    "end": 55,
    "range": [
      53,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "String",
    "value": "'fractionalSecond'",
    "start": 69,
    "end": 87,
    "range": [
      69,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  }
]
```
