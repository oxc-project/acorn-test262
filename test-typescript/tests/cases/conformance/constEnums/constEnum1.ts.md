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
      "body": {
        "type": "TSEnumBody",
        "start": 323,
        "end": 440,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 329,
            "end": 335,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 333,
              "end": 335,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 341,
            "end": 346,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 352,
            "end": 361,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 357,
              "end": 360,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 359,
                "end": 360,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 367,
            "end": 368,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 374,
            "end": 380,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 378,
              "end": 380,
              "argument": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 386,
            "end": 401,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 390,
              "end": 401,
              "operator": ">>",
              "left": {
                "type": "BinaryExpression",
                "start": 390,
                "end": 396,
                "operator": "<<",
                "left": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 395,
                  "end": 396,
                  "raw": "2",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "start": 400,
                "end": 401,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 407,
            "end": 423,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 411,
              "end": 423,
              "operator": ">>>",
              "left": {
                "type": "BinaryExpression",
                "start": 411,
                "end": 417,
                "operator": "<<",
                "left": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 416,
                  "end": 417,
                  "raw": "2",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 429,
            "end": 438,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 433,
              "end": 438,
              "operator": "|",
              "left": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
