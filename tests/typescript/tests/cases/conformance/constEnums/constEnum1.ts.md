__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 286,
  "end": 416,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 286,
      "end": 416,
      "body": {
        "type": "TSEnumBody",
        "start": 299,
        "end": 416,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 305,
            "end": 311,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 309,
              "end": 311,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 317,
            "end": 322,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 328,
            "end": 337,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 333,
              "end": 336,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 333,
                "end": 334,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 335,
                "end": 336,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 343,
            "end": 344,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 350,
            "end": 356,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 354,
              "end": 356,
              "argument": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
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
            "start": 362,
            "end": 377,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 366,
              "end": 377,
              "operator": ">>",
              "left": {
                "type": "BinaryExpression",
                "start": 366,
                "end": 372,
                "operator": "<<",
                "left": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 371,
                  "end": 372,
                  "raw": "2",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "start": 376,
                "end": 377,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 383,
            "end": 399,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 387,
              "end": 399,
              "operator": ">>>",
              "left": {
                "type": "BinaryExpression",
                "start": 387,
                "end": 393,
                "operator": "<<",
                "left": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 392,
                  "end": 393,
                  "raw": "2",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "start": 398,
                "end": 399,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 405,
            "end": 414,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 409,
              "end": 414,
              "operator": "|",
              "left": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
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
        "start": 297,
        "end": 298,
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
