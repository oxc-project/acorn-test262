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
            "name": "regExpExecArrayValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExpExecArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 103
                },
                "typeArguments": null,
                "start": 88,
                "end": 103
              },
              "start": 86,
              "end": 103
            },
            "start": 66,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 103
        }
      ],
      "declare": false,
      "start": 62,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "regExpExecArrayValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 125
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "slice",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 105,
        "end": 133
      },
      "directive": null,
      "start": 105,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "regExpExecArrayValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "slice",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 161
          },
          "optional": false,
          "computed": false,
          "start": 135,
          "end": 161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 162,
            "end": 163
          }
        ],
        "optional": false,
        "start": 135,
        "end": 164
      },
      "directive": null,
      "start": 135,
      "end": 165
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "regExpExecArrayValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "slice",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 192
          },
          "optional": false,
          "computed": false,
          "start": 166,
          "end": 192
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 193,
            "end": 194
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 195,
            "end": 196
          }
        ],
        "optional": false,
        "start": 166,
        "end": 197
      },
      "directive": null,
      "start": 166,
      "end": 198
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 198
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "regExpExecArrayValue",
    "start": 66,
    "end": 86,
    "range": [
      66,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExpExecArray",
    "start": 88,
    "end": 103,
    "range": [
      88,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "regExpExecArrayValue",
    "start": 105,
    "end": 125,
    "range": [
      105,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 126,
    "end": 131,
    "range": [
      126,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "regExpExecArrayValue",
    "start": 135,
    "end": 155,
    "range": [
      135,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 156,
    "end": 161,
    "range": [
      156,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "regExpExecArrayValue",
    "start": 166,
    "end": 186,
    "range": [
      166,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  }
]
```
