__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SignatureFlags",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 30
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "None",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 45
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 48,
                "end": 49
              },
              "computed": false,
              "start": 41,
              "end": 49
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsIndexer",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 68
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 71,
                "end": 72
              },
              "computed": false,
              "start": 59,
              "end": 72
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsStringIndexer",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 97
              },
              "initializer": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 100,
                  "end": 101
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 105,
                  "end": 106
                },
                "start": 100,
                "end": 106
              },
              "computed": false,
              "start": 82,
              "end": 106
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsNumberIndexer",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 131
              },
              "initializer": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 134,
                  "end": 135
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 139,
                  "end": 140
                },
                "start": 134,
                "end": 140
              },
              "computed": false,
              "start": 116,
              "end": 140
            }
          ],
          "start": 31,
          "end": 146
        },
        "const": false,
        "declare": false,
        "start": 11,
        "end": 146
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 146
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 4,
    "end": 10,
    "range": [
      4,
      10
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 11,
    "end": 15,
    "range": [
      11,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "SignatureFlags",
    "start": 16,
    "end": 30,
    "range": [
      16,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "None",
    "start": 41,
    "end": 45,
    "range": [
      41,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "IsIndexer",
    "start": 59,
    "end": 68,
    "range": [
      59,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "IsStringIndexer",
    "start": 82,
    "end": 97,
    "range": [
      82,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 102,
    "end": 104,
    "range": [
      102,
      104
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "IsNumberIndexer",
    "start": 116,
    "end": 131,
    "range": [
      116,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  }
]
```
