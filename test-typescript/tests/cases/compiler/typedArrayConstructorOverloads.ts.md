__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 546,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 83,
        "name": "TypedArrayConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 90,
        "end": 412,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 92,
            "end": 112,
            "typeName": {
              "type": "Identifier",
              "start": 92,
              "end": 112,
              "name": "Int8ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 119,
            "end": 140,
            "typeName": {
              "type": "Identifier",
              "start": 119,
              "end": 140,
              "name": "Uint8ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 147,
            "end": 175,
            "typeName": {
              "type": "Identifier",
              "start": 147,
              "end": 175,
              "name": "Uint8ClampedArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 182,
            "end": 203,
            "typeName": {
              "type": "Identifier",
              "start": 182,
              "end": 203,
              "name": "Int16ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 210,
            "end": 232,
            "typeName": {
              "type": "Identifier",
              "start": 210,
              "end": 232,
              "name": "Uint16ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 239,
            "end": 260,
            "typeName": {
              "type": "Identifier",
              "start": 239,
              "end": 260,
              "name": "Int32ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 267,
            "end": 289,
            "typeName": {
              "type": "Identifier",
              "start": 267,
              "end": 289,
              "name": "Uint32ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 296,
            "end": 319,
            "typeName": {
              "type": "Identifier",
              "start": 296,
              "end": 319,
              "name": "Float32ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 326,
            "end": 349,
            "typeName": {
              "type": "Identifier",
              "start": 326,
              "end": 349,
              "name": "Float64ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 356,
            "end": 380,
            "typeName": {
              "type": "Identifier",
              "start": 356,
              "end": 380,
              "name": "BigInt64ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 387,
            "end": 412,
            "typeName": {
              "type": "Identifier",
              "start": 387,
              "end": 412,
              "name": "BigUint64ArrayConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 414,
      "end": 545,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 421,
        "end": 545,
        "id": {
          "type": "Identifier",
          "start": 430,
          "end": 444,
          "name": "makeTypedArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 445,
            "end": 464,
            "name": "buffer",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 464,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 464,
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 464,
                  "name": "ArrayBuffer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 466,
            "end": 492,
            "name": "ctr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 471,
                "end": 492,
                "typeName": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 492,
                  "name": "TypedArrayConstructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 494,
          "end": 545,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 500,
              "end": 516,
              "expression": {
                "type": "NewExpression",
                "start": 500,
                "end": 515,
                "callee": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 507,
                  "name": "ctr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 508,
                    "end": 514,
                    "name": "buffer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "typeArguments": null
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 521,
              "end": 543,
              "expression": {
                "type": "NewExpression",
                "start": 521,
                "end": 542,
                "callee": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 528,
                  "name": "ctr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 529,
                    "end": 535,
                    "name": "buffer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 537,
                    "end": 538,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 540,
                    "end": 541,
                    "value": 0,
                    "raw": "0"
                  }
                ],
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
