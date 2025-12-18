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
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "whatsthis",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 57
            },
            "prefix": true,
            "start": 41,
            "end": 57
          },
          "definite": false,
          "start": 37,
          "end": 57
        }
      ],
      "declare": false,
      "start": 33,
      "end": 57
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 57
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36,
    "range": [
      33,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "whatsthis",
    "start": 48,
    "end": 57,
    "range": [
      48,
      57
    ]
  }
]
```
