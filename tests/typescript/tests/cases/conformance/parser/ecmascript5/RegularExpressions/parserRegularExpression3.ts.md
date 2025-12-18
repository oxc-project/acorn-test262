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
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 3
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "/(\\\\?|&)adurl=/",
              "regex": {
                "pattern": "(\\\\?|&)adurl=",
                "flags": ""
              },
              "start": 5,
              "end": 20
            },
            "prefix": true,
            "start": 4,
            "end": 20
          }
        ],
        "optional": false,
        "start": 0,
        "end": 21
      },
      "directive": null,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4,
    "range": [
      3,
      4
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/(\\\\?|&)adurl=/",
    "regex": {
      "flags": "",
      "pattern": "(\\\\?|&)adurl="
    },
    "start": 5,
    "end": 20,
    "range": [
      5,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  }
]
```
