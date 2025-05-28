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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 40,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 24,
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
              "value": 0,
              "raw": "0"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 37,
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
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 74,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 73,
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
            "test": {
              "type": "MemberExpression",
              "start": 52,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 52,
                "end": 56,
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "Literal",
              "start": 64,
              "end": 67,
              "value": "a",
              "raw": "\"a\""
            },
            "alternate": {
              "type": "Literal",
              "start": 70,
              "end": 73,
              "value": "b",
              "raw": "\"b\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 105,
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
            "test": {
              "type": "MemberExpression",
              "start": 85,
              "end": 93,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 89,
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 90,
                "end": 93,
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "Literal",
              "start": 96,
              "end": 99,
              "value": "a",
              "raw": "\"a\""
            },
            "alternate": {
              "type": "Literal",
              "start": 102,
              "end": 105,
              "value": "b",
              "raw": "\"b\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 108,
      "end": 155,
      "test": {
        "type": "MemberExpression",
        "start": 112,
        "end": 121,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 116,
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 117,
          "end": 121,
          "decorators": [],
          "name": "Zero",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
            "expression": {
              "type": "Identifier",
              "start": 129,
              "end": 133,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 142,
        "end": 155,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 148,
            "end": 153,
            "expression": {
              "type": "Identifier",
              "start": 148,
              "end": 152,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 158,
      "end": 204,
      "test": {
        "type": "MemberExpression",
        "start": 162,
        "end": 170,
        "object": {
          "type": "Identifier",
          "start": 162,
          "end": 166,
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 167,
          "end": 170,
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
            "expression": {
              "type": "Identifier",
              "start": 178,
              "end": 182,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 191,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 197,
            "end": 202,
            "expression": {
              "type": "Identifier",
              "start": 197,
              "end": 201,
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 207,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 216,
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 217,
        "end": 249,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 223,
            "end": 233,
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
              "value": "",
              "raw": "\"\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 239,
            "end": 246,
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
              "value": "A",
              "raw": "\"A\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 284,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 283,
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
            "test": {
              "type": "MemberExpression",
              "start": 261,
              "end": 271,
              "object": {
                "type": "Identifier",
                "start": 261,
                "end": 265,
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 266,
                "end": 271,
                "decorators": [],
                "name": "Empty",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "Literal",
              "start": 274,
              "end": 277,
              "value": "a",
              "raw": "\"a\""
            },
            "alternate": {
              "type": "Literal",
              "start": 280,
              "end": 283,
              "value": "b",
              "raw": "\"b\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 314,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 313,
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
            "test": {
              "type": "MemberExpression",
              "start": 295,
              "end": 301,
              "object": {
                "type": "Identifier",
                "start": 295,
                "end": 299,
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "Literal",
              "start": 304,
              "end": 307,
              "value": "a",
              "raw": "\"a\""
            },
            "alternate": {
              "type": "Literal",
              "start": 310,
              "end": 313,
              "value": "b",
              "raw": "\"b\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 316,
      "end": 364,
      "test": {
        "type": "MemberExpression",
        "start": 320,
        "end": 330,
        "object": {
          "type": "Identifier",
          "start": 320,
          "end": 324,
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 325,
          "end": 330,
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 342,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 351,
        "end": 364,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 357,
            "end": 362,
            "expression": {
              "type": "Identifier",
              "start": 357,
              "end": 361,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 367,
      "end": 411,
      "test": {
        "type": "MemberExpression",
        "start": 371,
        "end": 377,
        "object": {
          "type": "Identifier",
          "start": 371,
          "end": 375,
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
            "expression": {
              "type": "Identifier",
              "start": 385,
              "end": 389,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 398,
        "end": 411,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 404,
            "end": 409,
            "expression": {
              "type": "Identifier",
              "start": 404,
              "end": 408,
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
