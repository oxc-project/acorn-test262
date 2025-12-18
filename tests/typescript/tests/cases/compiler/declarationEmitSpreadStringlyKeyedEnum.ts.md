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
        "name": "AgeGroups",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "0-17",
              "raw": "\"0-17\"",
              "start": 17,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 17,
            "end": 23
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "18-22",
              "raw": "\"18-22\"",
              "start": 26,
              "end": 33
            },
            "initializer": null,
            "computed": false,
            "start": 26,
            "end": 33
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "23-27",
              "raw": "\"23-27\"",
              "start": 36,
              "end": 43
            },
            "initializer": null,
            "computed": false,
            "start": 36,
            "end": 43
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "28-34",
              "raw": "\"28-34\"",
              "start": 46,
              "end": 53
            },
            "initializer": null,
            "computed": false,
            "start": 46,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "35-44",
              "raw": "\"35-44\"",
              "start": 56,
              "end": 63
            },
            "initializer": null,
            "computed": false,
            "start": 56,
            "end": 63
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "45-59",
              "raw": "\"45-59\"",
              "start": 66,
              "end": 73
            },
            "initializer": null,
            "computed": false,
            "start": 66,
            "end": 73
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "60-150",
              "raw": "\"60-150\"",
              "start": 76,
              "end": 84
            },
            "initializer": null,
            "computed": false,
            "start": 76,
            "end": 84
          }
        ],
        "start": 15,
        "end": 86
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SpotifyAgeGroupEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 119
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AgeGroups",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 136
                  },
                  "start": 124,
                  "end": 136
                }
              ],
              "start": 122,
              "end": 138
            },
            "definite": false,
            "start": 100,
            "end": 138
          }
        ],
        "declare": false,
        "start": 94,
        "end": 139
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
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
    "value": "AgeGroups",
    "start": 5,
    "end": 14,
    "range": [
      5,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "String",
    "value": "\"0-17\"",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "String",
    "value": "\"18-22\"",
    "start": 26,
    "end": 33,
    "range": [
      26,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "String",
    "value": "\"23-27\"",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "String",
    "value": "\"28-34\"",
    "start": 46,
    "end": 53,
    "range": [
      46,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "\"35-44\"",
    "start": 56,
    "end": 63,
    "range": [
      56,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "String",
    "value": "\"45-59\"",
    "start": 66,
    "end": 73,
    "range": [
      66,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "String",
    "value": "\"60-150\"",
    "start": 76,
    "end": 84,
    "range": [
      76,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "SpotifyAgeGroupEnum",
    "start": 100,
    "end": 119,
    "range": [
      100,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "AgeGroups",
    "start": 127,
    "end": 136,
    "range": [
      127,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  }
]
```
