__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fizz",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fizz",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 50
          }
        ],
        "start": 15,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Buzz",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "buzz",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 104
          }
        ],
        "start": 69,
        "end": 106
      },
      "declare": false,
      "start": 54,
      "end": 106
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 109,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 119
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 119
                  },
                  "start": 115,
                  "end": 121
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 128
                    },
                    "typeArguments": null,
                    "start": 124,
                    "end": 128
                  },
                  "start": 124,
                  "end": 130
                }
              ],
              "start": 115,
              "end": 130
            },
            "start": 109,
            "end": 130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 138
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 143
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 151
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 154
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 154
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 157,
                "end": 158
              },
              "start": 147,
              "end": 158
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 158
          }
        ],
        "optional": false,
        "start": 108,
        "end": 159
      },
      "directive": null,
      "start": 108,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 162,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 168,
                    "end": 172
                  },
                  "start": 168,
                  "end": 174
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Buzz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 186,
                      "end": 190
                    },
                    "start": 186,
                    "end": 192
                  },
                  "start": 177,
                  "end": 192
                }
              ],
              "start": 168,
              "end": 192
            },
            "start": 162,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 200
          },
          "optional": false,
          "computed": false,
          "start": 161,
          "end": 200
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 205
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 216
                },
                "optional": false,
                "computed": false,
                "start": 209,
                "end": 216
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 219,
                "end": 220
              },
              "start": 209,
              "end": 220
            },
            "id": null,
            "generator": false,
            "start": 201,
            "end": 220
          }
        ],
        "optional": false,
        "start": 161,
        "end": 221
      },
      "directive": null,
      "start": 161,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 226,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 236
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 236
                  },
                  "start": 232,
                  "end": 238
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 241,
                    "end": 245
                  },
                  "start": 241,
                  "end": 247
                }
              ],
              "start": 232,
              "end": 247
            },
            "start": 226,
            "end": 247
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 253
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 253
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 258
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 266
            },
            "id": null,
            "generator": false,
            "start": 254,
            "end": 266
          }
        ],
        "optional": false,
        "start": 225,
        "end": 267
      },
      "directive": null,
      "start": 225,
      "end": 268
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFizz",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 292
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 296,
              "end": 303
            },
            "start": 294,
            "end": 303
          },
          "start": 293,
          "end": 303
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fizz",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 315
              },
              "typeArguments": null,
              "start": 311,
              "end": 315
            },
            "start": 311,
            "end": 315
          },
          "start": 306,
          "end": 315
        },
        "start": 304,
        "end": 315
      },
      "body": null,
      "expression": false,
      "start": 269,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 318,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 324,
                    "end": 328
                  },
                  "start": 324,
                  "end": 330
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 333,
                    "end": 337
                  },
                  "start": 333,
                  "end": 339
                }
              ],
              "start": 324,
              "end": 339
            },
            "start": 318,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 345
          },
          "optional": false,
          "computed": false,
          "start": 317,
          "end": 345
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isFizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 352
          }
        ],
        "optional": false,
        "start": 317,
        "end": 353
      },
      "directive": null,
      "start": 317,
      "end": 354
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBuzz",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 378
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 382,
              "end": 389
            },
            "start": 380,
            "end": 389
          },
          "start": 379,
          "end": 389
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 393
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Buzz",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 401
              },
              "typeArguments": null,
              "start": 397,
              "end": 401
            },
            "start": 397,
            "end": 401
          },
          "start": 392,
          "end": 401
        },
        "start": 390,
        "end": 401
      },
      "body": null,
      "expression": false,
      "start": 355,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 404,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 414
                    },
                    "typeArguments": null,
                    "start": 410,
                    "end": 414
                  },
                  "start": 410,
                  "end": 416
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 423
                    },
                    "typeArguments": null,
                    "start": 419,
                    "end": 423
                  },
                  "start": 419,
                  "end": 425
                }
              ],
              "start": 410,
              "end": 425
            },
            "start": 404,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 431
          },
          "optional": false,
          "computed": false,
          "start": 403,
          "end": 431
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isBuzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 438
          }
        ],
        "optional": false,
        "start": 403,
        "end": 439
      },
      "directive": null,
      "start": 403,
      "end": 440
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 443,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 453
                    },
                    "typeArguments": null,
                    "start": 449,
                    "end": 453
                  },
                  "start": 449,
                  "end": 455
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 462
                    },
                    "typeArguments": null,
                    "start": 458,
                    "end": 462
                  },
                  "start": 458,
                  "end": 464
                }
              ],
              "start": 449,
              "end": 464
            },
            "start": 443,
            "end": 464
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 471
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 471
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 476
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 484
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 487
                },
                "optional": false,
                "computed": false,
                "start": 480,
                "end": 487
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 490,
                "end": 491
              },
              "start": 480,
              "end": 491
            },
            "id": null,
            "generator": false,
            "start": 472,
            "end": 491
          }
        ],
        "optional": false,
        "start": 442,
        "end": 492
      },
      "directive": null,
      "start": 442,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 496,
              "end": 498
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 506
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 506
                  },
                  "start": 502,
                  "end": 508
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 511,
                      "end": 515
                    },
                    "typeArguments": null,
                    "start": 511,
                    "end": 515
                  },
                  "start": 511,
                  "end": 517
                }
              ],
              "start": 502,
              "end": 517
            },
            "start": 496,
            "end": 517
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 525
          },
          "optional": false,
          "computed": false,
          "start": 495,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 530
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 538
            },
            "id": null,
            "generator": false,
            "start": 526,
            "end": 538
          }
        ],
        "optional": false,
        "start": 495,
        "end": 539
      },
      "directive": null,
      "start": 495,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 544,
              "end": 546
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Fizz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 555
                      },
                      "typeArguments": null,
                      "start": 551,
                      "end": 555
                    }
                  ],
                  "start": 550,
                  "end": 556
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSOptionalType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Buzz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 569,
                            "end": 573
                          },
                          "typeArguments": null,
                          "start": 569,
                          "end": 573
                        },
                        "start": 569,
                        "end": 574
                      }
                    ],
                    "start": 568,
                    "end": 575
                  },
                  "start": 559,
                  "end": 575
                }
              ],
              "start": 550,
              "end": 575
            },
            "start": 544,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 583
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 583
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 596
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 600
                  },
                  "optional": true,
                  "computed": false,
                  "start": 592,
                  "end": 600
                },
                "start": 592,
                "end": 600
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 603,
                "end": 604
              },
              "start": 592,
              "end": 604
            },
            "id": null,
            "generator": false,
            "start": 584,
            "end": 604
          }
        ],
        "optional": false,
        "start": 543,
        "end": 605
      },
      "directive": null,
      "start": 543,
      "end": 606
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 606
}
```
