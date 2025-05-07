__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 411,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 40,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 24,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "decorators": [],
              "name": "Zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 37,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 52,
            "end": 73,
            "alternate": {
              "type": "Literal",
              "start": 70,
              "end": 73,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 64,
              "end": 67,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "MemberExpression",
              "start": 52,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 52,
                "end": 56,
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 85,
            "end": 105,
            "alternate": {
              "type": "Literal",
              "start": 102,
              "end": 105,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 96,
              "end": 99,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "MemberExpression",
              "start": 85,
              "end": 93,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 89,
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 90,
                "end": 93,
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 108,
      "end": 155,
      "alternate": {
        "type": "BlockStatement",
        "start": 142,
        "end": 155,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 153,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 123,
        "end": 136,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 134,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 129,
              "end": 133,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 112,
        "end": 121,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 116,
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 117,
          "end": 121,
          "decorators": [],
          "name": "Zero",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 158,
      "end": 204,
      "alternate": {
        "type": "BlockStatement",
        "start": 191,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 197,
            "end": 202,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 197,
              "end": 201,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 172,
        "end": 185,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 178,
            "end": 183,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 178,
              "end": 182,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 162,
        "end": 170,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 162,
          "end": 166,
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 167,
          "end": 170,
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 207,
      "end": 249,
      "body": {
        "type": "TSEnumBody",
        "start": 217,
        "end": 249,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 223,
            "end": 233,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 228,
              "decorators": [],
              "name": "Empty",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 231,
              "end": 233,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 239,
            "end": 246,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 243,
              "end": 246,
              "raw": "\"A\"",
              "value": "A",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 216,
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 261,
            "end": 283,
            "alternate": {
              "type": "Literal",
              "start": 280,
              "end": 283,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 274,
              "end": 277,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "MemberExpression",
              "start": 261,
              "end": 271,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 261,
                "end": 265,
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 266,
                "end": 271,
                "decorators": [],
                "name": "Empty",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 295,
            "end": 313,
            "alternate": {
              "type": "Literal",
              "start": 310,
              "end": 313,
              "raw": "\"b\"",
              "value": "b",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 304,
              "end": 307,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "MemberExpression",
              "start": 295,
              "end": 301,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 295,
                "end": 299,
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 316,
      "end": 364,
      "alternate": {
        "type": "BlockStatement",
        "start": 351,
        "end": 364,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 357,
            "end": 362,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 357,
              "end": 361,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 332,
        "end": 345,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 338,
            "end": 343,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 342,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 320,
        "end": 330,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 320,
          "end": 324,
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 325,
          "end": 330,
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 367,
      "end": 411,
      "alternate": {
        "type": "BlockStatement",
        "start": 398,
        "end": 411,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 404,
            "end": 409,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 404,
              "end": 408,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 379,
        "end": 392,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 385,
            "end": 390,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 385,
              "end": 389,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 371,
        "end": 377,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 371,
          "end": 375,
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
