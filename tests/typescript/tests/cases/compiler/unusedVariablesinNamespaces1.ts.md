__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lettersRegexp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 46
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "pattern": "^[A-Za-z]+$",
                    "flags": ""
                  },
                  "start": 49,
                  "end": 62
                },
                "definite": false,
                "start": 33,
                "end": 62
              }
            ],
            "declare": false,
            "start": 27,
            "end": 63
          }
        ],
        "start": 21,
        "end": 65
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 65
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Validation",
    "start": 10,
    "end": 20,
    "range": [
      10,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "lettersRegexp",
    "start": 33,
    "end": 46,
    "range": [
      33,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/^[A-Za-z]+$/",
    "regex": {
      "flags": "",
      "pattern": "^[A-Za-z]+$"
    },
    "start": 49,
    "end": 62,
    "range": [
      49,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  }
]
```
