__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    null,
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16,
                      "end": 18
                    },
                    null,
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 22
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 24
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 25
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 37
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              },
              "start": 28,
              "end": 44
            },
            "definite": false,
            "start": 11,
            "end": 44
          }
        ],
        "declare": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 28,
    "end": 37,
    "range": [
      28,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 38,
    "end": 40,
    "range": [
      38,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 41,
    "end": 44,
    "range": [
      41,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  }
]
```
