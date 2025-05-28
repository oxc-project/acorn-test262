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
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 298,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 299,
        "end": 416,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 305,
            "end": 311,
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
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 317,
            "end": 322,
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
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 328,
            "end": 337,
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
              "left": {
                "type": "Identifier",
                "start": 333,
                "end": 334,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 335,
                "end": 336,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 343,
            "end": 344,
            "id": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 350,
            "end": 356,
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
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 362,
            "end": 377,
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
              "left": {
                "type": "BinaryExpression",
                "start": 366,
                "end": 372,
                "left": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "start": 371,
                  "end": 372,
                  "value": 2,
                  "raw": "2"
                }
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "start": 376,
                "end": 377,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 383,
            "end": 399,
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
              "left": {
                "type": "BinaryExpression",
                "start": 387,
                "end": 393,
                "left": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "start": 392,
                  "end": 393,
                  "value": 2,
                  "raw": "2"
                }
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "start": 398,
                "end": 399,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 405,
            "end": 414,
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
              "left": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
