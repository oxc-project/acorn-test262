__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 545,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 83,
        "decorators": [],
        "name": "TypedArrayConstructor",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Int8ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Uint8ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Uint8ClampedArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Int16ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Uint16ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Int32ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Uint32ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Float32ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Float64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "BigInt64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "BigUint64ArrayConstructor",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "makeTypedArray",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 445,
            "end": 464,
            "decorators": [],
            "name": "buffer",
            "optional": false,
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
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 466,
            "end": 492,
            "decorators": [],
            "name": "ctr",
            "optional": false,
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
                  "decorators": [],
                  "name": "TypedArrayConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                  "decorators": [],
                  "name": "ctr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 508,
                    "end": 514,
                    "decorators": [],
                    "name": "buffer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
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
                  "decorators": [],
                  "name": "ctr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 529,
                    "end": 535,
                    "decorators": [],
                    "name": "buffer",
                    "optional": false,
                    "typeAnnotation": null
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
                ]
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
