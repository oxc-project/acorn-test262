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
        "name": "MorphTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 19,
            "end": 25
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "|>",
              "raw": "\"|>\"",
              "start": 27,
              "end": 31
            },
            "start": 27,
            "end": 31
          },
          {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          }
        ],
        "start": 18,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateMorph",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 57
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MorphTuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 80
              },
              "typeArguments": null,
              "start": 70,
              "end": 80
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 58,
            "end": 80
          }
        ],
        "start": 57,
        "end": 81
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 87
            },
            "typeArguments": null,
            "start": 84,
            "end": 87
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 88,
              "end": 89
            },
            "start": 88,
            "end": 89
          },
          "start": 84,
          "end": 90
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "|>",
            "raw": "\"|>\"",
            "start": 99,
            "end": 103
          },
          "start": 99,
          "end": 103
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 129
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 133
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 133
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 134,
                        "end": 135
                      },
                      "start": 134,
                      "end": 135
                    },
                    "start": 130,
                    "end": 136
                  }
                ],
                "start": 129,
                "end": 137
              },
              "start": 111,
              "end": 137
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "|>",
                "raw": "\"|>\"",
                "start": 139,
                "end": 143
              },
              "start": 139,
              "end": 143
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "In",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "def",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 153
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 153
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 154,
                          "end": 155
                        },
                        "start": 154,
                        "end": 155
                      },
                      "start": 150,
                      "end": 156
                    },
                    "start": 148,
                    "end": 156
                  },
                  "start": 146,
                  "end": 156
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 161,
                  "end": 168
                },
                "start": 158,
                "end": 168
              },
              "start": 145,
              "end": 168
            }
          ],
          "start": 110,
          "end": 169
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 179
          },
          "typeArguments": null,
          "start": 176,
          "end": 179
        },
        "start": 84,
        "end": 179
      },
      "declare": false,
      "start": 39,
      "end": 179
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateDefinition",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 204
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 205,
            "end": 208
          }
        ],
        "start": 204,
        "end": 209
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "typeArguments": null,
          "start": 212,
          "end": 215
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MorphTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 234
          },
          "typeArguments": null,
          "start": 224,
          "end": 234
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "validateMorph",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 254
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 258
                },
                "typeArguments": null,
                "start": 255,
                "end": 258
              }
            ],
            "start": 254,
            "end": 259
          },
          "start": 241,
          "end": 259
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 280
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 293
              },
              "typeArguments": null,
              "start": 290,
              "end": 293
            },
            "start": 284,
            "end": 293
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "validateDefinition",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 314
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 318
                    },
                    "typeArguments": null,
                    "start": 315,
                    "end": 318
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 320
                    },
                    "typeArguments": null,
                    "start": 319,
                    "end": 320
                  },
                  "start": 315,
                  "end": 321
                }
              ],
              "start": 314,
              "end": 322
            },
            "start": 296,
            "end": 322
          },
          "optional": false,
          "readonly": null,
          "start": 266,
          "end": 330
        },
        "start": 212,
        "end": 330
      },
      "declare": false,
      "start": 181,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 354,
            "end": 357
          }
        ],
        "start": 353,
        "end": 358
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 382
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 386
                    },
                    "typeArguments": null,
                    "start": 383,
                    "end": 386
                  }
                ],
                "start": 382,
                "end": 387
              },
              "start": 364,
              "end": 387
            },
            "start": 362,
            "end": 387
          },
          "start": 359,
          "end": 387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 393
          },
          "typeArguments": null,
          "start": 390,
          "end": 393
        },
        "start": 388,
        "end": 393
      },
      "body": null,
      "expression": false,
      "start": 332,
      "end": 393
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shallow",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 408
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 415
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "ark",
                    "raw": "\"ark\"",
                    "start": 417,
                    "end": 422
                  },
                  {
                    "type": "Literal",
                    "value": "|>",
                    "raw": "\"|>\"",
                    "start": 424,
                    "end": 428
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 431,
                        "end": 432
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 445
                      },
                      "optional": false,
                      "computed": false,
                      "start": 437,
                      "end": 445
                    },
                    "id": null,
                    "generator": false,
                    "start": 430,
                    "end": 445
                  }
                ],
                "start": 416,
                "end": 446
              }
            ],
            "optional": false,
            "start": 411,
            "end": 447
          },
          "definite": false,
          "start": 401,
          "end": 447
        }
      ],
      "declare": false,
      "start": 395,
      "end": 447
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objectLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 467
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 474
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 478
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "ark",
                          "raw": "\"ark\"",
                          "start": 481,
                          "end": 486
                        },
                        {
                          "type": "Literal",
                          "value": "|>",
                          "raw": "\"|>\"",
                          "start": 488,
                          "end": 492
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 495,
                              "end": 496
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 501,
                              "end": 502
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 503,
                              "end": 509
                            },
                            "optional": false,
                            "computed": false,
                            "start": 501,
                            "end": 509
                          },
                          "id": null,
                          "generator": false,
                          "start": 494,
                          "end": 509
                        }
                      ],
                      "start": 480,
                      "end": 510
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 477,
                    "end": 510
                  }
                ],
                "start": 475,
                "end": 512
              }
            ],
            "optional": false,
            "start": 470,
            "end": 513
          },
          "definite": false,
          "start": 454,
          "end": 513
        }
      ],
      "declare": false,
      "start": 448,
      "end": 513
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 531
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 538
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "ark",
                        "raw": "\"ark\"",
                        "start": 541,
                        "end": 546
                      },
                      {
                        "type": "Literal",
                        "value": "|>",
                        "raw": "\"|>\"",
                        "start": 548,
                        "end": 552
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 556
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 561,
                            "end": 562
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 563,
                            "end": 569
                          },
                          "optional": false,
                          "computed": false,
                          "start": 561,
                          "end": 569
                        },
                        "id": null,
                        "generator": false,
                        "start": 554,
                        "end": 569
                      }
                    ],
                    "start": 540,
                    "end": 570
                  }
                ],
                "start": 539,
                "end": 571
              }
            ],
            "optional": false,
            "start": 534,
            "end": 572
          },
          "definite": false,
          "start": 520,
          "end": 572
        }
      ],
      "declare": false,
      "start": 514,
      "end": 572
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 572
}
```
