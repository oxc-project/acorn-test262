__ESTREE_TEST__:AST:
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
              "name": "Float16ArrayConstructor",
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
              "name": "Float32ArrayConstructor",
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
              "name": "Float64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 379
            },
            "typeArguments": null,
            "start": 356,
            "end": 379
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 410
            },
            "typeArguments": null,
            "start": 386,
            "end": 410
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 442
            },
            "typeArguments": null,
            "start": 417,
            "end": 442
          }
        ],
        "start": 90,
        "end": 442
      },
      "declare": false,
      "start": 57,
      "end": 442
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
          "start": 460,
          "end": 474
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
                  "start": 483,
                  "end": 494
                },
                "typeArguments": null,
                "start": 483,
                "end": 494
              },
              "start": 481,
              "end": 494
            },
            "start": 475,
            "end": 494
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
                  "start": 501,
                  "end": 522
                },
                "typeArguments": null,
                "start": 501,
                "end": 522
              },
              "start": 499,
              "end": 522
            },
            "start": 496,
            "end": 522
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
                  "start": 534,
                  "end": 537
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buffer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 538,
                    "end": 544
                  }
                ],
                "start": 530,
                "end": 545
              },
              "directive": null,
              "start": 530,
              "end": 546
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
                  "start": 555,
                  "end": 558
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buffer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 565
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 567,
                    "end": 568
                  },
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 570,
                    "end": 571
                  }
                ],
                "start": 551,
                "end": 572
              },
              "directive": null,
              "start": 551,
              "end": 573
            }
          ],
          "start": 524,
          "end": 575
        },
        "expression": false,
        "start": 451,
        "end": 575
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 444,
      "end": 575
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 575
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "TypedArrayConstructor",
    "start": 62,
    "end": 83,
    "range": [
      62,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "Int8ArrayConstructor",
    "start": 92,
    "end": 112,
    "range": [
      92,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint8ArrayConstructor",
    "start": 119,
    "end": 140,
    "range": [
      119,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArrayConstructor",
    "start": 147,
    "end": 175,
    "range": [
      147,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "Int16ArrayConstructor",
    "start": 182,
    "end": 203,
    "range": [
      182,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint16ArrayConstructor",
    "start": 210,
    "end": 232,
    "range": [
      210,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "Int32ArrayConstructor",
    "start": 239,
    "end": 260,
    "range": [
      239,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "Uint32ArrayConstructor",
    "start": 267,
    "end": 289,
    "range": [
      267,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "Float16ArrayConstructor",
    "start": 296,
    "end": 319,
    "range": [
      296,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "Float32ArrayConstructor",
    "start": 326,
    "end": 349,
    "range": [
      326,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "Float64ArrayConstructor",
    "start": 356,
    "end": 379,
    "range": [
      356,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "BigInt64ArrayConstructor",
    "start": 386,
    "end": 410,
    "range": [
      386,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "BigUint64ArrayConstructor",
    "start": 417,
    "end": 442,
    "range": [
      417,
      442
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 451,
    "end": 459,
    "range": [
      451,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "makeTypedArray",
    "start": 460,
    "end": 474,
    "range": [
      460,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 475,
    "end": 481,
    "range": [
      475,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 483,
    "end": 494,
    "range": [
      483,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "ctr",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "TypedArrayConstructor",
    "start": 501,
    "end": 522,
    "range": [
      501,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 530,
    "end": 533,
    "range": [
      530,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "ctr",
    "start": 534,
    "end": 537,
    "range": [
      534,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 538,
    "end": 544,
    "range": [
      538,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 551,
    "end": 554,
    "range": [
      551,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "ctr",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "buffer",
    "start": 559,
    "end": 565,
    "range": [
      559,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  }
]
```
