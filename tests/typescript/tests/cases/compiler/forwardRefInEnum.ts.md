__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "computed": false,
            "start": 91,
            "end": 96
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X1",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 105
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 110
              },
              "property": {
                "type": "Literal",
                "value": "Y",
                "raw": "\"Y\"",
                "start": 111,
                "end": 114
              },
              "optional": false,
              "computed": true,
              "start": 108,
              "end": 115
            },
            "computed": false,
            "start": 103,
            "end": 115
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "optional": false,
              "computed": false,
              "start": 183,
              "end": 187
            },
            "computed": false,
            "start": 179,
            "end": 187
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 195
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 200
              },
              "property": {
                "type": "Literal",
                "value": "Z",
                "raw": "\"Z\"",
                "start": 201,
                "end": 204
              },
              "optional": false,
              "computed": true,
              "start": 198,
              "end": 205
            },
            "computed": false,
            "start": 193,
            "end": 205
          }
        ],
        "start": 8,
        "end": 207
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 207
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 216
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "initializer": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 227,
              "end": 228
            },
            "computed": false,
            "start": 223,
            "end": 228
          }
        ],
        "start": 217,
        "end": 234
      },
      "const": false,
      "declare": false,
      "start": 209,
      "end": 234
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 234
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 5,
    "end": 7,
    "range": [
      5,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 103,
    "end": 105,
    "range": [
      103,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "String",
    "value": "\"Y\"",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 183,
    "end": 185,
    "range": [
      183,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "Y1",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "String",
    "value": "\"Z\"",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 214,
    "end": 216,
    "range": [
      214,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  }
]
```
