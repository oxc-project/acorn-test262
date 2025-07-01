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
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 298
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
              "start": 305,
              "end": 306
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 309,
              "end": 311
            },
            "computed": false,
            "start": 305,
            "end": 311
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "computed": false,
            "start": 317,
            "end": 322
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 334
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 335,
                "end": 336
              },
              "start": 333,
              "end": 336
            },
            "computed": false,
            "start": 328,
            "end": 337
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "initializer": null,
            "computed": false,
            "start": 343,
            "end": 344
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "prefix": true,
              "start": 354,
              "end": 356
            },
            "computed": false,
            "start": 350,
            "end": 356
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 371,
                  "end": 372
                },
                "start": 366,
                "end": 372
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 376,
                "end": 377
              },
              "start": 366,
              "end": 377
            },
            "computed": false,
            "start": 362,
            "end": 377
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "operator": "<<",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 392,
                  "end": 393
                },
                "start": 387,
                "end": 393
              },
              "operator": ">>>",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 398,
                "end": 399
              },
              "start": 387,
              "end": 399
            },
            "computed": false,
            "start": 383,
            "end": 399
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              "start": 409,
              "end": 414
            },
            "computed": false,
            "start": 405,
            "end": 414
          }
        ],
        "start": 299,
        "end": 416
      },
      "const": true,
      "declare": false,
      "start": 286,
      "end": 416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 286,
  "end": 416
}
```
