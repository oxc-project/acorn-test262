__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypedArrayConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 112
            },
            "typeArguments": null,
            "start": 92,
            "end": 112
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 140
            },
            "typeArguments": null,
            "start": 119,
            "end": 140
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 175
            },
            "typeArguments": null,
            "start": 147,
            "end": 175
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 203
            },
            "typeArguments": null,
            "start": 182,
            "end": 203
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 232
            },
            "typeArguments": null,
            "start": 210,
            "end": 232
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 260
            },
            "typeArguments": null,
            "start": 239,
            "end": 260
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 289
            },
            "typeArguments": null,
            "start": 267,
            "end": 289
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 319
            },
            "typeArguments": null,
            "start": 296,
            "end": 319
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 349
            },
            "typeArguments": null,
            "start": 326,
            "end": 349
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 380
            },
            "typeArguments": null,
            "start": 356,
            "end": 380
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 412
            },
            "typeArguments": null,
            "start": 387,
            "end": 412
          }
        ],
        "start": 90,
        "end": 412
      },
      "declare": false,
      "start": 57,
      "end": 412
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeTypedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 444
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "buffer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 464
                },
                "typeArguments": null,
                "start": 453,
                "end": 464
              },
              "start": 451,
              "end": 464
            },
            "start": 445,
            "end": 464
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ctr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypedArrayConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 492
                },
                "typeArguments": null,
                "start": 471,
                "end": 492
              },
              "start": 469,
              "end": 492
            },
            "start": 466,
            "end": 492
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 507
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buffer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 514
                  }
                ],
                "start": 500,
                "end": 515
              },
              "directive": null,
              "start": 500,
              "end": 516
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 528
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buffer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 535
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 537,
                    "end": 538
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 540,
                    "end": 541
                  }
                ],
                "start": 521,
                "end": 542
              },
              "directive": null,
              "start": 521,
              "end": 543
            }
          ],
          "start": 494,
          "end": 545
        },
        "expression": false,
        "start": 421,
        "end": 545
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 414,
      "end": 545
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 545
}
```
