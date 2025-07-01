__ESTREE_TEST__:PASS:
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
