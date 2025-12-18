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
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 108
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 113
              },
              "optional": false,
              "computed": false,
              "start": 102,
              "end": 113
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 117
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 119,
                      "end": 120
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 116,
                    "end": 120
                  }
                ],
                "start": 114,
                "end": 122
              }
            ],
            "optional": false,
            "start": 102,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 128
          },
          "optional": false,
          "computed": false,
          "start": 102,
          "end": 128
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 129,
            "end": 132
          }
        ],
        "optional": false,
        "start": 102,
        "end": 133
      },
      "directive": null,
      "start": 102,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 252
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Object",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 129,
    "end": 132,
    "range": [
      129,
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
  }
]
```
