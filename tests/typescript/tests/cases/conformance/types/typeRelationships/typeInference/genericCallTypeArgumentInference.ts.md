__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "typeArguments": null,
              "start": 83,
              "end": 84
            },
            "start": 81,
            "end": 84
          },
          "start": 80,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "start": 92,
            "end": 101
          }
        ],
        "start": 86,
        "end": 103
      },
      "expression": false,
      "start": 64,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 117,
                "end": 119
              }
            ],
            "optional": false,
            "start": 113,
            "end": 120
          },
          "definite": false,
          "start": 109,
          "end": 120
        }
      ],
      "declare": false,
      "start": 105,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 148
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          }
        ],
        "start": 146,
        "end": 152
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "typeArguments": null,
              "start": 156,
              "end": 157
            },
            "start": 154,
            "end": 157
          },
          "start": 153,
          "end": 157
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 159,
          "end": 163
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "start": 171,
            "end": 180
          }
        ],
        "start": 165,
        "end": 182
      },
      "expression": false,
      "start": 133,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 198
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 199,
            "end": 200
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 202,
            "end": 203
          }
        ],
        "start": 198,
        "end": 204
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              },
              "typeArguments": null,
              "start": 208,
              "end": 209
            },
            "start": 206,
            "end": 209
          },
          "start": 205,
          "end": 209
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 225
                      },
                      "typeArguments": null,
                      "start": 224,
                      "end": 225
                    },
                    "start": 222,
                    "end": 225
                  },
                  "start": 221,
                  "end": 225
                },
                "init": null,
                "definite": false,
                "start": 221,
                "end": 225
              }
            ],
            "declare": false,
            "start": 217,
            "end": 226
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "start": 231,
            "end": 240
          }
        ],
        "start": 211,
        "end": 242
      },
      "expression": false,
      "start": 184,
      "end": 242
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 250
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 258,
                "end": 260
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 262,
                "end": 263
              }
            ],
            "optional": false,
            "start": 253,
            "end": 264
          },
          "definite": false,
          "start": 248,
          "end": 264
        }
      ],
      "declare": false,
      "start": 244,
      "end": 265
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2b",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 291,
                "end": 292
              }
            ],
            "optional": false,
            "start": 285,
            "end": 293
          },
          "definite": false,
          "start": 280,
          "end": 293
        }
      ],
      "declare": false,
      "start": 276,
      "end": 294
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 309
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 311
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 314
          }
        ],
        "start": 309,
        "end": 315
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 333
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 345
                        },
                        "typeArguments": null,
                        "start": 344,
                        "end": 345
                      },
                      "start": 342,
                      "end": 345
                    },
                    "start": 341,
                    "end": 345
                  },
                  "readonly": false,
                  "static": false,
                  "start": 334,
                  "end": 345
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 358
                        },
                        "typeArguments": null,
                        "start": 357,
                        "end": 358
                      },
                      "start": 355,
                      "end": 358
                    },
                    "start": 354,
                    "end": 358
                  },
                  "readonly": false,
                  "static": false,
                  "start": 347,
                  "end": 358
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 360,
                "end": 367
              },
              "expression": false,
              "start": 333,
              "end": 367
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 322,
            "end": 367
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 381
                      },
                      "typeArguments": null,
                      "start": 380,
                      "end": 381
                    },
                    "start": 378,
                    "end": 381
                  },
                  "start": 377,
                  "end": 381
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 387
                      },
                      "typeArguments": null,
                      "start": 386,
                      "end": 387
                    },
                    "start": 384,
                    "end": 387
                  },
                  "start": 383,
                  "end": 387
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 407
                    },
                    "start": 399,
                    "end": 408
                  }
                ],
                "start": 389,
                "end": 414
              },
              "expression": false,
              "start": 376,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 373,
            "end": 414
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 424
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 429
                      },
                      "typeArguments": null,
                      "start": 428,
                      "end": 429
                    },
                    "start": 426,
                    "end": 429
                  },
                  "start": 425,
                  "end": 429
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 434,
                      "end": 435
                    },
                    "start": 432,
                    "end": 435
                  },
                  "start": 431,
                  "end": 435
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "start": 447,
                    "end": 456
                  }
                ],
                "start": 437,
                "end": 462
              },
              "expression": false,
              "start": 424,
              "end": 462
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 420,
            "end": 462
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 472
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 473,
                    "end": 474
                  }
                ],
                "start": 472,
                "end": 475
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 480
                      },
                      "typeArguments": null,
                      "start": 479,
                      "end": 480
                    },
                    "start": 477,
                    "end": 480
                  },
                  "start": 476,
                  "end": 480
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 486
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 486
                    },
                    "start": 483,
                    "end": 486
                  },
                  "start": 482,
                  "end": 486
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 506
                    },
                    "start": 498,
                    "end": 507
                  }
                ],
                "start": 488,
                "end": 513
              },
              "expression": false,
              "start": 472,
              "end": 513
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 468,
            "end": 513
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 523
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 524,
                    "end": 525
                  }
                ],
                "start": 523,
                "end": 526
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 531
                      },
                      "typeArguments": null,
                      "start": 530,
                      "end": 531
                    },
                    "start": 528,
                    "end": 531
                  },
                  "start": 527,
                  "end": 531
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    },
                    "start": 534,
                    "end": 537
                  },
                  "start": 533,
                  "end": 537
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 556,
                      "end": 557
                    },
                    "start": 549,
                    "end": 558
                  }
                ],
                "start": 539,
                "end": 564
              },
              "expression": false,
              "start": 523,
              "end": 564
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 519,
            "end": 564
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 574
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 576
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 575,
                    "end": 576
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 578
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 577,
                    "end": 578
                  }
                ],
                "start": 574,
                "end": 579
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 583,
                        "end": 584
                      },
                      "typeArguments": null,
                      "start": 583,
                      "end": 584
                    },
                    "start": 581,
                    "end": 584
                  },
                  "start": 580,
                  "end": 584
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    "start": 587,
                    "end": 590
                  },
                  "start": 586,
                  "end": 590
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 609,
                      "end": 610
                    },
                    "start": 602,
                    "end": 611
                  }
                ],
                "start": 592,
                "end": 617
              },
              "expression": false,
              "start": 574,
              "end": 617
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 570,
            "end": 617
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 627
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 629
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 628,
                    "end": 629
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 632
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 631,
                    "end": 632
                  }
                ],
                "start": 627,
                "end": 633
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 653,
                                "end": 654
                              },
                              "typeArguments": null,
                              "start": 653,
                              "end": 654
                            },
                            "start": 651,
                            "end": 654
                          },
                          "start": 650,
                          "end": 654
                        },
                        "init": null,
                        "definite": false,
                        "start": 650,
                        "end": 654
                      }
                    ],
                    "declare": false,
                    "start": 646,
                    "end": 655
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "start": 664,
                    "end": 673
                  }
                ],
                "start": 636,
                "end": 679
              },
              "expression": false,
              "start": 627,
              "end": 679
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 623,
            "end": 679
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 689
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 691
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 690,
                    "end": 691
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 694
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 693,
                    "end": 694
                  }
                ],
                "start": 689,
                "end": 695
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 699,
                        "end": 700
                      },
                      "typeArguments": null,
                      "start": 699,
                      "end": 700
                    },
                    "start": 697,
                    "end": 700
                  },
                  "start": 696,
                  "end": 700
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 719,
                                "end": 720
                              },
                              "typeArguments": null,
                              "start": 719,
                              "end": 720
                            },
                            "start": 717,
                            "end": 720
                          },
                          "start": 716,
                          "end": 720
                        },
                        "init": null,
                        "definite": false,
                        "start": 716,
                        "end": 720
                      }
                    ],
                    "declare": false,
                    "start": 712,
                    "end": 721
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 738
                    },
                    "start": 730,
                    "end": 739
                  }
                ],
                "start": 702,
                "end": 745
              },
              "expression": false,
              "start": 689,
              "end": 745
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 685,
            "end": 745
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 755
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 756,
                      "end": 757
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 756,
                    "end": 757
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 760
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 759,
                    "end": 760
                  }
                ],
                "start": 755,
                "end": 761
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 781,
                                "end": 782
                              },
                              "typeArguments": null,
                              "start": 781,
                              "end": 782
                            },
                            "start": 779,
                            "end": 782
                          },
                          "start": 778,
                          "end": 782
                        },
                        "init": null,
                        "definite": false,
                        "start": 778,
                        "end": 782
                      }
                    ],
                    "declare": false,
                    "start": 774,
                    "end": 783
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 799,
                      "end": 800
                    },
                    "start": 792,
                    "end": 801
                  }
                ],
                "start": 764,
                "end": 807
              },
              "expression": false,
              "start": 755,
              "end": 807
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 751,
            "end": 807
          }
        ],
        "start": 316,
        "end": 809
      },
      "abstract": false,
      "declare": false,
      "start": 302,
      "end": 809
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 816
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 824
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 825,
                "end": 827
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 829,
                "end": 830
              }
            ],
            "start": 819,
            "end": 831
          },
          "definite": false,
          "start": 815,
          "end": 831
        }
      ],
      "declare": false,
      "start": 811,
      "end": 832
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 843
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 847
              },
              "optional": false,
              "computed": false,
              "start": 842,
              "end": 847
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 848,
                "end": 850
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 852,
                "end": 853
              }
            ],
            "optional": false,
            "start": 842,
            "end": 854
          },
          "definite": false,
          "start": 837,
          "end": 854
        }
      ],
      "declare": false,
      "start": 833,
      "end": 855
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 870,
            "end": 872
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 876
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 881
              },
              "optional": false,
              "computed": false,
              "start": 875,
              "end": 881
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 882,
                "end": 884
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 886,
                "end": 887
              }
            ],
            "optional": false,
            "start": 875,
            "end": 888
          },
          "definite": false,
          "start": 870,
          "end": 888
        }
      ],
      "declare": false,
      "start": 866,
      "end": 889
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 906
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 910
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 915
              },
              "optional": false,
              "computed": false,
              "start": 909,
              "end": 915
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 916,
                "end": 920
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 922,
                "end": 923
              }
            ],
            "optional": false,
            "start": 909,
            "end": 924
          },
          "definite": false,
          "start": 904,
          "end": 924
        }
      ],
      "declare": false,
      "start": 900,
      "end": 925
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 943
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 952
              },
              "optional": false,
              "computed": false,
              "start": 946,
              "end": 952
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 953,
                "end": 955
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 957,
                "end": 961
              }
            ],
            "optional": false,
            "start": 946,
            "end": 962
          },
          "definite": false,
          "start": 941,
          "end": 962
        }
      ],
      "declare": false,
      "start": 937,
      "end": 963
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 978,
            "end": 980
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 984
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 989
              },
              "optional": false,
              "computed": false,
              "start": 983,
              "end": 989
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 990,
                "end": 994
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 996,
                "end": 997
              }
            ],
            "optional": false,
            "start": 983,
            "end": 998
          },
          "definite": false,
          "start": 978,
          "end": 998
        }
      ],
      "declare": false,
      "start": 974,
      "end": 999
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1015,
            "end": 1017
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1020,
                "end": 1021
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1026
              },
              "optional": false,
              "computed": false,
              "start": 1020,
              "end": 1026
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1020,
            "end": 1028
          },
          "definite": false,
          "start": 1015,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1029
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1052
              },
              "optional": false,
              "computed": false,
              "start": 1046,
              "end": 1052
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1053,
                "end": 1055
              }
            ],
            "optional": false,
            "start": 1046,
            "end": 1056
          },
          "definite": false,
          "start": 1040,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 1036,
      "end": 1057
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1071
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1074,
                "end": 1075
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1080
              },
              "optional": false,
              "computed": false,
              "start": 1074,
              "end": 1080
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1074,
            "end": 1082
          },
          "definite": false,
          "start": 1068,
          "end": 1082
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1101,
        "end": 1102
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1103,
            "end": 1104
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1106,
            "end": 1107
          }
        ],
        "start": 1102,
        "end": 1108
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1123,
                      "end": 1124
                    },
                    "typeArguments": null,
                    "start": 1123,
                    "end": 1124
                  },
                  "start": 1121,
                  "end": 1124
                },
                "start": 1120,
                "end": 1124
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1129,
                      "end": 1130
                    },
                    "typeArguments": null,
                    "start": 1129,
                    "end": 1130
                  },
                  "start": 1127,
                  "end": 1130
                },
                "start": 1126,
                "end": 1130
              }
            ],
            "returnType": null,
            "start": 1115,
            "end": 1132
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1140
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1145
                    },
                    "typeArguments": null,
                    "start": 1144,
                    "end": 1145
                  },
                  "start": 1142,
                  "end": 1145
                },
                "start": 1141,
                "end": 1145
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1150,
                      "end": 1151
                    },
                    "typeArguments": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "start": 1148,
                  "end": 1151
                },
                "start": 1147,
                "end": 1151
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1155
                },
                "typeArguments": null,
                "start": 1154,
                "end": 1155
              },
              "start": 1152,
              "end": 1155
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1137,
            "end": 1156
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1165
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "typeArguments": null,
                    "start": 1169,
                    "end": 1170
                  },
                  "start": 1167,
                  "end": 1170
                },
                "start": 1166,
                "end": 1170
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1176
                    },
                    "typeArguments": null,
                    "start": 1175,
                    "end": 1176
                  },
                  "start": 1173,
                  "end": 1176
                },
                "start": 1172,
                "end": 1176
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1180
                },
                "typeArguments": null,
                "start": 1179,
                "end": 1180
              },
              "start": 1177,
              "end": 1180
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1161,
            "end": 1181
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1190
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1191,
                    "end": 1192
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1191,
                  "end": 1192
                }
              ],
              "start": 1190,
              "end": 1193
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1197,
                      "end": 1198
                    },
                    "typeArguments": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "start": 1195,
                  "end": 1198
                },
                "start": 1194,
                "end": 1198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1203,
                      "end": 1204
                    },
                    "typeArguments": null,
                    "start": 1203,
                    "end": 1204
                  },
                  "start": 1201,
                  "end": 1204
                },
                "start": 1200,
                "end": 1204
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1208
                },
                "typeArguments": null,
                "start": 1207,
                "end": 1208
              },
              "start": 1205,
              "end": 1208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1186,
            "end": 1209
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1218
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1219,
                    "end": 1220
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1219,
                  "end": 1220
                }
              ],
              "start": 1218,
              "end": 1221
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1225,
                      "end": 1226
                    },
                    "typeArguments": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "start": 1223,
                  "end": 1226
                },
                "start": 1222,
                "end": 1226
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1231,
                      "end": 1232
                    },
                    "typeArguments": null,
                    "start": 1231,
                    "end": 1232
                  },
                  "start": 1229,
                  "end": 1232
                },
                "start": 1228,
                "end": 1232
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1235,
                  "end": 1236
                },
                "typeArguments": null,
                "start": 1235,
                "end": 1236
              },
              "start": 1233,
              "end": 1236
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1214,
            "end": 1237
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1242,
              "end": 1246
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1248
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1247,
                  "end": 1248
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1250,
                  "end": 1251
                }
              ],
              "start": 1246,
              "end": 1252
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1256,
                      "end": 1257
                    },
                    "typeArguments": null,
                    "start": 1256,
                    "end": 1257
                  },
                  "start": 1254,
                  "end": 1257
                },
                "start": 1253,
                "end": 1257
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1262,
                      "end": 1263
                    },
                    "typeArguments": null,
                    "start": 1262,
                    "end": 1263
                  },
                  "start": 1260,
                  "end": 1263
                },
                "start": 1259,
                "end": 1263
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1267
                },
                "typeArguments": null,
                "start": 1266,
                "end": 1267
              },
              "start": 1264,
              "end": 1267
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1242,
            "end": 1268
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1277
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1278,
                    "end": 1279
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1278,
                  "end": 1279
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1281,
                    "end": 1282
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1281,
                  "end": 1282
                }
              ],
              "start": 1277,
              "end": 1283
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1288
                },
                "typeArguments": null,
                "start": 1287,
                "end": 1288
              },
              "start": 1285,
              "end": 1288
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1273,
            "end": 1289
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1298
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1300
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1299,
                  "end": 1300
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1302,
                    "end": 1303
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1302,
                  "end": 1303
                }
              ],
              "start": 1298,
              "end": 1304
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1308,
                      "end": 1309
                    },
                    "typeArguments": null,
                    "start": 1308,
                    "end": 1309
                  },
                  "start": 1306,
                  "end": 1309
                },
                "start": 1305,
                "end": 1309
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1313
                },
                "typeArguments": null,
                "start": 1312,
                "end": 1313
              },
              "start": 1310,
              "end": 1313
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1294,
            "end": 1314
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1323
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1324,
                    "end": 1325
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1324,
                  "end": 1325
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1328
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1327,
                  "end": 1328
                }
              ],
              "start": 1323,
              "end": 1329
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1334
                },
                "typeArguments": null,
                "start": 1333,
                "end": 1334
              },
              "start": 1331,
              "end": 1334
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1319,
            "end": 1335
          }
        ],
        "start": 1109,
        "end": 1341
      },
      "declare": false,
      "start": 1091,
      "end": 1341
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1351
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1352,
                      "end": 1358
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1360,
                      "end": 1366
                    }
                  ],
                  "start": 1351,
                  "end": 1367
                },
                "start": 1350,
                "end": 1367
              },
              "start": 1348,
              "end": 1367
            },
            "start": 1347,
            "end": 1367
          },
          "init": null,
          "definite": false,
          "start": 1347,
          "end": 1367
        }
      ],
      "declare": false,
      "start": 1343,
      "end": 1368
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1373,
            "end": 1375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1379
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1383
              },
              "optional": false,
              "computed": false,
              "start": 1378,
              "end": 1383
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1384,
                "end": 1386
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1388,
                "end": 1389
              }
            ],
            "optional": false,
            "start": 1378,
            "end": 1390
          },
          "definite": false,
          "start": 1373,
          "end": 1390
        }
      ],
      "declare": false,
      "start": 1369,
      "end": 1391
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1406,
            "end": 1408
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1413,
                "end": 1417
              },
              "optional": false,
              "computed": false,
              "start": 1411,
              "end": 1417
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1418,
                "end": 1420
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1422,
                "end": 1423
              }
            ],
            "optional": false,
            "start": 1411,
            "end": 1424
          },
          "definite": false,
          "start": 1406,
          "end": 1424
        }
      ],
      "declare": false,
      "start": 1402,
      "end": 1425
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1440,
            "end": 1442
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1451
              },
              "optional": false,
              "computed": false,
              "start": 1445,
              "end": 1451
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1452,
                "end": 1456
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1458,
                "end": 1459
              }
            ],
            "optional": false,
            "start": 1445,
            "end": 1460
          },
          "definite": false,
          "start": 1440,
          "end": 1460
        }
      ],
      "declare": false,
      "start": 1436,
      "end": 1461
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1479
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1482,
                "end": 1483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1488
              },
              "optional": false,
              "computed": false,
              "start": 1482,
              "end": 1488
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1489,
                "end": 1491
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1493,
                "end": 1497
              }
            ],
            "optional": false,
            "start": 1482,
            "end": 1498
          },
          "definite": false,
          "start": 1477,
          "end": 1498
        }
      ],
      "declare": false,
      "start": 1473,
      "end": 1499
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1514,
            "end": 1516
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1520
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1521,
                "end": 1525
              },
              "optional": false,
              "computed": false,
              "start": 1519,
              "end": 1525
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1526,
                "end": 1530
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1532,
                "end": 1533
              }
            ],
            "optional": false,
            "start": 1519,
            "end": 1534
          },
          "definite": false,
          "start": 1514,
          "end": 1534
        }
      ],
      "declare": false,
      "start": 1510,
      "end": 1535
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1551,
            "end": 1553
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1556,
                "end": 1557
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1562
              },
              "optional": false,
              "computed": false,
              "start": 1556,
              "end": 1562
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1556,
            "end": 1564
          },
          "definite": false,
          "start": 1551,
          "end": 1564
        }
      ],
      "declare": false,
      "start": 1547,
      "end": 1565
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1576,
            "end": 1579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1584,
                "end": 1588
              },
              "optional": false,
              "computed": false,
              "start": 1582,
              "end": 1588
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1589,
                "end": 1591
              }
            ],
            "optional": false,
            "start": 1582,
            "end": 1592
          },
          "definite": false,
          "start": 1576,
          "end": 1592
        }
      ],
      "declare": false,
      "start": 1572,
      "end": 1593
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1604,
            "end": 1607
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1610,
                "end": 1611
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1612,
                "end": 1616
              },
              "optional": false,
              "computed": false,
              "start": 1610,
              "end": 1616
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1610,
            "end": 1618
          },
          "definite": false,
          "start": 1604,
          "end": 1618
        }
      ],
      "declare": false,
      "start": 1600,
      "end": 1619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 1625
}
```
