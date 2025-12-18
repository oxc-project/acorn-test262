__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 15,
                  "end": 21
                },
                "start": 15,
                "end": 23
              },
              "start": 13,
              "end": 23
            },
            "start": 6,
            "end": 23
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": ""
                },
                "start": 29,
                "end": 51
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/u",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": "u"
                },
                "start": 54,
                "end": 77
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/v",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": "v"
                },
                "start": 80,
                "end": 103
              }
            ],
            "start": 26,
            "end": 106
          },
          "definite": false,
          "start": 6,
          "end": 106
        }
      ],
      "declare": false,
      "start": 0,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "regexes",
    "start": 6,
    "end": 13,
    "range": [
      6,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{10000}[\\u{10000}]/",
    "regex": {
      "flags": "",
      "pattern": "\\u{10000}[\\u{10000}]"
    },
    "start": 29,
    "end": 51,
    "range": [
      29,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{10000}[\\u{10000}]/u",
    "regex": {
      "flags": "u",
      "pattern": "\\u{10000}[\\u{10000}]"
    },
    "start": 54,
    "end": 77,
    "range": [
      54,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{10000}[\\u{10000}]/v",
    "regex": {
      "flags": "v",
      "pattern": "\\u{10000}[\\u{10000}]"
    },
    "start": 80,
    "end": 103,
    "range": [
      80,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  }
]
```
