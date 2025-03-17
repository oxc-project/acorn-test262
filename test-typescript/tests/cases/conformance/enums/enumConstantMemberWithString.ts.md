__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 326,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 103,
      "body": {
        "type": "TSEnumBody",
        "start": 8,
        "end": 103,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 21,
            "computed": false,
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
              "raw": "\"1\"",
              "value": "1"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 40,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 31,
                "end": 34,
                "raw": "\"1\"",
                "value": "1"
              },
              "right": {
                "type": "Literal",
                "start": 37,
                "end": 40,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 65,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 50,
                "end": 59,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 50,
                  "end": 53,
                  "raw": "\"1\"",
                  "value": "1"
                },
                "right": {
                  "type": "Literal",
                  "start": 56,
                  "end": 59,
                  "raw": "\"2\"",
                  "value": "2"
                }
              },
              "right": {
                "type": "Literal",
                "start": 62,
                "end": 65,
                "raw": "\"3\"",
                "value": "3"
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 84,
            "computed": false,
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
              "operator": "-",
              "left": {
                "type": "Literal",
                "start": 75,
                "end": 78,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Literal",
                "start": 81,
                "end": 84,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 90,
            "end": 101,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 94,
                "end": 97,
                "raw": "\"a\"",
                "value": "a"
              },
              "right": {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 105,
      "end": 147,
      "body": {
        "type": "TSEnumBody",
        "start": 113,
        "end": 147,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 119,
            "end": 126,
            "computed": false,
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
              "raw": "\"1\"",
              "value": "1"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 132,
            "end": 145,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 136,
                "end": 139,
                "raw": "\"1\"",
                "value": "1"
              },
              "right": {
                "type": "Literal",
                "start": 142,
                "end": 145,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 112,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 149,
      "end": 217,
      "body": {
        "type": "TSEnumBody",
        "start": 157,
        "end": 217,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 163,
            "end": 170,
            "computed": false,
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
              "raw": "\"1\"",
              "value": "1"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 176,
            "end": 189,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 180,
                "end": 183,
                "raw": "\"1\"",
                "value": "1"
              },
              "right": {
                "type": "Literal",
                "start": 186,
                "end": 189,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 195,
            "end": 200,
            "computed": false,
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
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSEnumMember",
            "start": 206,
            "end": 215,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 210,
                "end": 211,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 214,
                "end": 215,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 219,
      "end": 242,
      "body": {
        "type": "TSEnumBody",
        "start": 227,
        "end": 242,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 233,
            "end": 240,
            "computed": false,
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
              "raw": "\"1\"",
              "value": "1"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 244,
      "end": 273,
      "body": {
        "type": "TSEnumBody",
        "start": 252,
        "end": 273,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 258,
            "end": 271,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 262,
                "end": 265,
                "raw": "\"1\"",
                "value": "1"
              },
              "right": {
                "type": "Literal",
                "start": 268,
                "end": 271,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 251,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 275,
      "end": 325,
      "body": {
        "type": "TSEnumBody",
        "start": 291,
        "end": 325,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 297,
            "end": 304,
            "computed": false,
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
              "raw": "\"1\"",
              "value": "1"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 310,
            "end": 323,
            "computed": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 314,
                "end": 317,
                "raw": "\"1\"",
                "value": "1"
              },
              "right": {
                "type": "Literal",
                "start": 320,
                "end": 323,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 290,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
