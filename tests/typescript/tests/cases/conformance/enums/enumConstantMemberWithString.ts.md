__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 325,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 8,
        "end": 103,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 31,
              "end": 40,
              "left": {
                "type": "Literal",
                "start": 31,
                "end": 34,
                "value": "1",
                "raw": "\"1\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 37,
                "end": 40,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 50,
              "end": 65,
              "left": {
                "type": "BinaryExpression",
                "start": 50,
                "end": 59,
                "left": {
                  "type": "Literal",
                  "start": 50,
                  "end": 53,
                  "value": "1",
                  "raw": "\"1\""
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 56,
                  "end": 59,
                  "value": "2",
                  "raw": "\"2\""
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 62,
                "end": 65,
                "value": "3",
                "raw": "\"3\""
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 75,
              "end": 84,
              "left": {
                "type": "Literal",
                "start": 75,
                "end": 78,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "-",
              "right": {
                "type": "Literal",
                "start": 81,
                "end": 84,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 90,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 94,
              "end": 101,
              "left": {
                "type": "Literal",
                "start": 94,
                "end": 97,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 105,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 112,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 113,
        "end": 147,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 119,
            "end": 126,
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 123,
              "end": 126,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 132,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 136,
              "end": 145,
              "left": {
                "type": "Literal",
                "start": 136,
                "end": 139,
                "value": "1",
                "raw": "\"1\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 142,
                "end": 145,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 149,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 157,
        "end": 217,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 163,
            "end": 170,
            "id": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 167,
              "end": 170,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 176,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 180,
              "end": 189,
              "left": {
                "type": "Literal",
                "start": 180,
                "end": 183,
                "value": "1",
                "raw": "\"1\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 186,
                "end": 189,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 195,
            "end": 200,
            "id": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 199,
              "end": 200,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 206,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 210,
              "end": 215,
              "left": {
                "type": "Literal",
                "start": 210,
                "end": 211,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 214,
                "end": 215,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 219,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 227,
        "end": 242,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 233,
            "end": 240,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 237,
              "end": 240,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 244,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 252,
        "end": 273,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 258,
            "end": 271,
            "id": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 262,
              "end": 271,
              "left": {
                "type": "Literal",
                "start": 262,
                "end": 265,
                "value": "1",
                "raw": "\"1\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 268,
                "end": 271,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 275,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 290,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 291,
        "end": 325,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 297,
            "end": 304,
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 301,
              "end": 304,
              "value": "1",
              "raw": "\"1\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 310,
            "end": 323,
            "id": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 314,
              "end": 323,
              "left": {
                "type": "Literal",
                "start": 314,
                "end": 317,
                "value": "1",
                "raw": "\"1\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 320,
                "end": 323,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
