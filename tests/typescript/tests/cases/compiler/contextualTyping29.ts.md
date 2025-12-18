__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              },
              "start": 19,
              "end": 27
            },
            "start": 18,
            "end": 27
          },
          "start": 13,
          "end": 27
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 28,
        "end": 30
      },
      "expression": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 35
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 37,
                "end": 38
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 40,
                "end": 41
              }
            ],
            "start": 36,
            "end": 42
          }
        ],
        "optional": false,
        "start": 32,
        "end": 43
      },
      "directive": null,
      "start": 32,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 13,
    "end": 18,
    "range": [
      13,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27,
    "range": [
      26,
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
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  }
]
```
