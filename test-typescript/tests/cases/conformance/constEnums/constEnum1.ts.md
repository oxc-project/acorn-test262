__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 310,
  "end": 440,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 310,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 329,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 333,
            "end": 335,
            "value": 10,
            "raw": "10"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 341,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 352,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 357,
            "end": 360,
            "left": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 359,
              "end": 360,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 367,
          "end": 368,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 368,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 374,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 375,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "UnaryExpression",
            "start": 378,
            "end": 380,
            "operator": "~",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 386,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 390,
            "end": 401,
            "left": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 396,
              "left": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 395,
                "end": 396,
                "value": 2,
                "raw": "2"
              }
            },
            "operator": ">>",
            "right": {
              "type": "Literal",
              "start": 400,
              "end": 401,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 407,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 408,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 411,
            "end": 423,
            "left": {
              "type": "BinaryExpression",
              "start": 411,
              "end": 417,
              "left": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 416,
                "end": 417,
                "value": 2,
                "raw": "2"
              }
            },
            "operator": ">>>",
            "right": {
              "type": "Literal",
              "start": 422,
              "end": 423,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 429,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 433,
            "end": 438,
            "left": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "|",
            "right": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 323,
        "end": 440,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 329,
            "end": 335,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 333,
              "end": 335,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 341,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 352,
            "end": 361,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 357,
              "end": 360,
              "left": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 359,
                "end": 360,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 367,
            "end": 368,
            "id": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 374,
            "end": 380,
            "id": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 378,
              "end": 380,
              "operator": "~",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 386,
            "end": 401,
            "id": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 401,
              "left": {
                "type": "BinaryExpression",
                "start": 390,
                "end": 396,
                "left": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "start": 395,
                  "end": 396,
                  "value": 2,
                  "raw": "2"
                }
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "start": 400,
                "end": 401,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 407,
            "end": 423,
            "id": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 411,
              "end": 423,
              "left": {
                "type": "BinaryExpression",
                "start": 411,
                "end": 417,
                "left": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "start": 416,
                  "end": 417,
                  "value": 2,
                  "raw": "2"
                }
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 429,
            "end": 438,
            "id": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 433,
              "end": 438,
              "left": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
