__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 11
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 12,
                  "end": 14
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "./foo.ts",
                  "raw": "\"./foo.ts\"",
                  "start": 17,
                  "end": 27
                },
                "start": 12,
                "end": 27
              }
            ],
            "optional": false,
            "start": 4,
            "end": 28
          },
          "directive": null,
          "start": 4,
          "end": 29
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 39,
                "end": 41
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 44,
                "end": 54
              },
              "start": 39,
              "end": 54
            },
            "options": null,
            "phase": null,
            "start": 32,
            "end": 55
          },
          "directive": null,
          "start": 32,
          "end": 56
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 67,
                "end": 77
              }
            ],
            "optional": false,
            "start": 59,
            "end": 78
          },
          "directive": null,
          "start": 59,
          "end": 79
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 89,
              "end": 99
            },
            "options": null,
            "phase": null,
            "start": 82,
            "end": 100
          },
          "directive": null,
          "start": 82,
          "end": 101
        }
      ],
      "start": 0,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1,
    "range": [
      0,
      1
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4,
    "end": 11,
    "range": [
      4,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 12,
    "end": 14,
    "range": [
      12,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 17,
    "end": 27,
    "range": [
      17,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 44,
    "end": 54,
    "range": [
      44,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 67,
    "end": 77,
    "range": [
      67,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 89,
    "end": 99,
    "range": [
      89,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 11,
                "end": 13
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 16,
                "end": 26
              },
              "start": 11,
              "end": 26
            },
            "options": null,
            "phase": null,
            "start": 4,
            "end": 27
          },
          "directive": null,
          "start": 4,
          "end": 28
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 38,
              "end": 48
            },
            "options": null,
            "phase": null,
            "start": 31,
            "end": 49
          },
          "directive": null,
          "start": 31,
          "end": 50
        }
      ],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1,
    "range": [
      0,
      1
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4,
    "end": 10,
    "range": [
      4,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 11,
    "end": 13,
    "range": [
      11,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 16,
    "end": 26,
    "range": [
      16,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37,
    "range": [
      31,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 38,
    "end": 48,
    "range": [
      38,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  }
]
```
