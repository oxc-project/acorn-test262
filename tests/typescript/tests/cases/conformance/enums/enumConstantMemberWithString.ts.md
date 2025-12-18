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
        "name": "T1",
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 18,
              "end": 21
            },
            "computed": false,
            "start": 14,
            "end": 21
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 31,
                "end": 34
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 37,
                "end": 40
              },
              "start": 31,
              "end": 40
            },
            "computed": false,
            "start": 27,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 50,
                  "end": 53
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 56,
                  "end": 59
                },
                "start": 50,
                "end": 59
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "3",
                "raw": "\"3\"",
                "start": 62,
                "end": 65
              },
              "start": 50,
              "end": 65
            },
            "computed": false,
            "start": 46,
            "end": 65
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 75,
                "end": 78
              },
              "operator": "-",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 81,
                "end": 84
              },
              "start": 75,
              "end": 84
            },
            "computed": false,
            "start": 71,
            "end": 84
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 94,
                "end": 97
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 100,
                "end": 101
              },
              "start": 94,
              "end": 101
            },
            "computed": false,
            "start": 90,
            "end": 101
          }
        ],
        "start": 8,
        "end": 103
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 103
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 112
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 123,
              "end": 126
            },
            "computed": false,
            "start": 119,
            "end": 126
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 136,
                "end": 139
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 142,
                "end": 145
              },
              "start": 136,
              "end": 145
            },
            "computed": false,
            "start": 132,
            "end": 145
          }
        ],
        "start": 113,
        "end": 147
      },
      "const": false,
      "declare": false,
      "start": 105,
      "end": 147
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 167,
              "end": 170
            },
            "computed": false,
            "start": 163,
            "end": 170
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 180,
                "end": 183
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 186,
                "end": 189
              },
              "start": 180,
              "end": 189
            },
            "computed": false,
            "start": 176,
            "end": 189
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 199,
              "end": 200
            },
            "computed": false,
            "start": 195,
            "end": 200
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 210,
                "end": 211
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 214,
                "end": 215
              },
              "start": 210,
              "end": 215
            },
            "computed": false,
            "start": 206,
            "end": 215
          }
        ],
        "start": 157,
        "end": 217
      },
      "const": false,
      "declare": false,
      "start": 149,
      "end": 217
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 226
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 237,
              "end": 240
            },
            "computed": false,
            "start": 233,
            "end": 240
          }
        ],
        "start": 227,
        "end": 242
      },
      "const": false,
      "declare": false,
      "start": 219,
      "end": 242
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 262,
                "end": 265
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 268,
                "end": 271
              },
              "start": 262,
              "end": 271
            },
            "computed": false,
            "start": 258,
            "end": 271
          }
        ],
        "start": 252,
        "end": 273
      },
      "const": false,
      "declare": false,
      "start": 244,
      "end": 273
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 290
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "initializer": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 301,
              "end": 304
            },
            "computed": false,
            "start": 297,
            "end": 304
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 314,
                "end": 317
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 320,
                "end": 323
              },
              "start": 314,
              "end": 323
            },
            "computed": false,
            "start": 310,
            "end": 323
          }
        ],
        "start": 291,
        "end": 325
      },
      "const": false,
      "declare": true,
      "start": 275,
      "end": 325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 325
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
    "value": "T1",
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
    "value": "a",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 37,
    "end": 40,
    "range": [
      37,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 50,
    "end": 53,
    "range": [
      50,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 81,
    "end": 84,
    "range": [
      81,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
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
    "value": "}",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 136,
    "end": 139,
    "range": [
      136,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 142,
    "end": 145,
    "range": [
      142,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 149,
    "end": 153,
    "range": [
      149,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 154,
    "end": 156,
    "range": [
      154,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 167,
    "end": 170,
    "range": [
      167,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 224,
    "end": 226,
    "range": [
      224,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 244,
    "end": 248,
    "range": [
      244,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 249,
    "end": 251,
    "range": [
      249,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 268,
    "end": 271,
    "range": [
      268,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 275,
    "end": 282,
    "range": [
      275,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 283,
    "end": 287,
    "range": [
      283,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 288,
    "end": 290,
    "range": [
      288,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 301,
    "end": 304,
    "range": [
      301,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 314,
    "end": 317,
    "range": [
      314,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  }
]
```
