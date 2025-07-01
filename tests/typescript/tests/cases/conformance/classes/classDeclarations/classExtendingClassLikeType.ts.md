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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 14,
        "end": 20
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
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
                  "start": 30,
                  "end": 31
                },
                "typeArguments": null,
                "start": 30,
                "end": 31
              },
              "start": 28,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 27,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
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
                  "start": 40,
                  "end": 41
                },
                "typeArguments": null,
                "start": 40,
                "end": 41
              },
              "start": 38,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 42
          }
        ],
        "start": 21,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D0",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 106
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 107,
            "end": 113
          },
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
          }
        ],
        "start": 106,
        "end": 122
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 123,
        "end": 126
      },
      "abstract": false,
      "declare": false,
      "start": 85,
      "end": 126
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 153
      },
      "typeParameters": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "start": 166,
                  "end": 174
                },
                "start": 165,
                "end": 174
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  },
                  "start": 177,
                  "end": 185
                },
                "start": 176,
                "end": 185
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 192
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 193,
                      "end": 199
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 201,
                      "end": 207
                    }
                  ],
                  "start": 192,
                  "end": 208
                },
                "start": 188,
                "end": 208
              },
              "start": 186,
              "end": 208
            },
            "start": 160,
            "end": 209
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 219,
                    "end": 220
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 219,
                  "end": 220
                }
              ],
              "start": 218,
              "end": 221
            },
            "params": [
              {
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
                      "start": 225,
                      "end": 226
                    },
                    "typeArguments": null,
                    "start": 225,
                    "end": 226
                  },
                  "start": 223,
                  "end": 226
                },
                "start": 222,
                "end": 226
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 233
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 235
                      },
                      "typeArguments": null,
                      "start": 234,
                      "end": 235
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 238
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 238
                    }
                  ],
                  "start": 233,
                  "end": 239
                },
                "start": 229,
                "end": 239
              },
              "start": 227,
              "end": 239
            },
            "start": 214,
            "end": 240
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 250,
                    "end": 251
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 250,
                  "end": 251
                }
              ],
              "start": 249,
              "end": 252
            },
            "params": [
              {
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
                      "start": 256,
                      "end": 257
                    },
                    "typeArguments": null,
                    "start": 256,
                    "end": 257
                  },
                  "start": 254,
                  "end": 257
                },
                "start": 253,
                "end": 257
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                      "start": 262,
                      "end": 263
                    },
                    "typeArguments": null,
                    "start": 262,
                    "end": 263
                  },
                  "start": 260,
                  "end": 263
                },
                "start": 259,
                "end": 263
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 270
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 272
                      },
                      "typeArguments": null,
                      "start": 271,
                      "end": 272
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "typeArguments": null,
                      "start": 274,
                      "end": 275
                    }
                  ],
                  "start": 270,
                  "end": 276
                },
                "start": 266,
                "end": 276
              },
              "start": 264,
              "end": 276
            },
            "start": 245,
            "end": 277
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 287,
                    "end": 288
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 287,
                  "end": 288
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 290,
                  "end": 291
                }
              ],
              "start": 286,
              "end": 292
            },
            "params": [
              {
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
                      "start": 296,
                      "end": 297
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 297
                  },
                  "start": 294,
                  "end": 297
                },
                "start": 293,
                "end": 297
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                      "start": 302,
                      "end": 303
                    },
                    "typeArguments": null,
                    "start": 302,
                    "end": 303
                  },
                  "start": 300,
                  "end": 303
                },
                "start": 299,
                "end": 303
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 310
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 311,
                        "end": 312
                      },
                      "typeArguments": null,
                      "start": 311,
                      "end": 312
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "typeArguments": null,
                      "start": 314,
                      "end": 315
                    }
                  ],
                  "start": 310,
                  "end": 316
                },
                "start": 306,
                "end": 316
              },
              "start": 304,
              "end": 316
            },
            "start": 282,
            "end": 317
          }
        ],
        "start": 154,
        "end": 319
      },
      "declare": false,
      "start": 128,
      "end": 319
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 345
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 364
          },
          "typeArguments": null,
          "start": 349,
          "end": 364
        },
        "start": 347,
        "end": 364
      },
      "body": null,
      "expression": false,
      "start": 321,
      "end": 365
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 375
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 391
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 384,
        "end": 393
      },
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
              "start": 400,
              "end": 411
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 424,
                        "end": 429
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "\"abc\"",
                          "start": 430,
                          "end": 435
                        },
                        {
                          "type": "Literal",
                          "value": "def",
                          "raw": "\"def\"",
                          "start": 437,
                          "end": 442
                        }
                      ],
                      "optional": false,
                      "start": 424,
                      "end": 443
                    },
                    "directive": null,
                    "start": 424,
                    "end": 444
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 453,
                          "end": 457
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 458,
                          "end": 459
                        },
                        "optional": false,
                        "computed": false,
                        "start": 453,
                        "end": 459
                      },
                      "right": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 462,
                        "end": 465
                      },
                      "start": 453,
                      "end": 465
                    },
                    "directive": null,
                    "start": 453,
                    "end": 466
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 475,
                          "end": 479
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 480,
                          "end": 481
                        },
                        "optional": false,
                        "computed": false,
                        "start": 475,
                        "end": 481
                      },
                      "right": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 484,
                        "end": 487
                      },
                      "start": 475,
                      "end": 487
                    },
                    "directive": null,
                    "start": 475,
                    "end": 488
                  }
                ],
                "start": 414,
                "end": 494
              },
              "expression": false,
              "start": 411,
              "end": 494
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 400,
            "end": 494
          }
        ],
        "start": 394,
        "end": 496
      },
      "abstract": false,
      "declare": false,
      "start": 367,
      "end": 496
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 506
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 522
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 515,
        "end": 524
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 526,
            "end": 532
          }
        ],
        "start": 525,
        "end": 533
      },
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
              "start": 540,
              "end": 551
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 564,
                        "end": 569
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 570,
                          "end": 572
                        }
                      ],
                      "optional": false,
                      "start": 564,
                      "end": 573
                    },
                    "directive": null,
                    "start": 564,
                    "end": 574
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 583,
                        "end": 588
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 589,
                          "end": 591
                        },
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 593,
                          "end": 595
                        }
                      ],
                      "optional": false,
                      "start": 583,
                      "end": 596
                    },
                    "directive": null,
                    "start": 583,
                    "end": 597
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 606,
                          "end": 610
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 612
                        },
                        "optional": false,
                        "computed": false,
                        "start": 606,
                        "end": 612
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 615,
                        "end": 616
                      },
                      "start": 606,
                      "end": 616
                    },
                    "directive": null,
                    "start": 606,
                    "end": 617
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 626,
                          "end": 630
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 631,
                          "end": 632
                        },
                        "optional": false,
                        "computed": false,
                        "start": 626,
                        "end": 632
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 635,
                        "end": 636
                      },
                      "start": 626,
                      "end": 636
                    },
                    "directive": null,
                    "start": 626,
                    "end": 637
                  }
                ],
                "start": 554,
                "end": 643
              },
              "expression": false,
              "start": 551,
              "end": 643
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 540,
            "end": 643
          }
        ],
        "start": 534,
        "end": 645
      },
      "abstract": false,
      "declare": false,
      "start": 498,
      "end": 645
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 655
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 664,
          "end": 671
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 664,
        "end": 673
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 675,
            "end": 681
          },
          {
            "type": "TSNumberKeyword",
            "start": 683,
            "end": 689
          }
        ],
        "start": 674,
        "end": 690
      },
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
              "start": 697,
              "end": 708
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 721,
                        "end": 726
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "abc",
                          "raw": "\"abc\"",
                          "start": 727,
                          "end": 732
                        },
                        {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 734,
                          "end": 736
                        }
                      ],
                      "optional": false,
                      "start": 721,
                      "end": 737
                    },
                    "directive": null,
                    "start": 721,
                    "end": 738
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 747,
                          "end": 751
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 752,
                          "end": 753
                        },
                        "optional": false,
                        "computed": false,
                        "start": 747,
                        "end": 753
                      },
                      "right": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 756,
                        "end": 759
                      },
                      "start": 747,
                      "end": 759
                    },
                    "directive": null,
                    "start": 747,
                    "end": 760
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 774,
                          "end": 775
                        },
                        "optional": false,
                        "computed": false,
                        "start": 769,
                        "end": 775
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 778,
                        "end": 779
                      },
                      "start": 769,
                      "end": 779
                    },
                    "directive": null,
                    "start": 769,
                    "end": 780
                  }
                ],
                "start": 711,
                "end": 786
              },
              "expression": false,
              "start": 708,
              "end": 786
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 697,
            "end": 786
          }
        ],
        "start": 691,
        "end": 788
      },
      "abstract": false,
      "declare": false,
      "start": 647,
      "end": 788
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 850
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 859,
          "end": 866
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 859,
        "end": 868
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 870,
            "end": 876
          },
          {
            "type": "TSStringKeyword",
            "start": 878,
            "end": 884
          },
          {
            "type": "TSStringKeyword",
            "start": 886,
            "end": 892
          }
        ],
        "start": 869,
        "end": 893
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 894,
        "end": 897
      },
      "abstract": false,
      "declare": false,
      "start": 842,
      "end": 897
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadBaseConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 927
      },
      "typeParameters": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 942,
                    "end": 948
                  },
                  "start": 940,
                  "end": 948
                },
                "start": 939,
                "end": 948
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 955
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 956,
                      "end": 962
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 964,
                      "end": 970
                    }
                  ],
                  "start": 955,
                  "end": 971
                },
                "start": 951,
                "end": 971
              },
              "start": 949,
              "end": 971
            },
            "start": 934,
            "end": 972
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSNumberKeyword",
                    "start": 985,
                    "end": 991
                  },
                  "start": 983,
                  "end": 991
                },
                "start": 982,
                "end": 991
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 998
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 999,
                      "end": 1005
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1007,
                      "end": 1013
                    }
                  ],
                  "start": 998,
                  "end": 1014
                },
                "start": 994,
                "end": 1014
              },
              "start": 992,
              "end": 1014
            },
            "start": 977,
            "end": 1015
          }
        ],
        "start": 928,
        "end": 1017
      },
      "declare": false,
      "start": 899,
      "end": 1017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getBadBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1036,
        "end": 1046
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "BadBaseConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1068
          },
          "typeArguments": null,
          "start": 1050,
          "end": 1068
        },
        "start": 1048,
        "end": 1068
      },
      "body": null,
      "expression": false,
      "start": 1019,
      "end": 1069
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1119,
        "end": 1121
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getBadBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1130,
          "end": 1140
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1130,
        "end": 1142
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1143,
        "end": 1146
      },
      "abstract": false,
      "declare": false,
      "start": 1113,
      "end": 1146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1146
}
```
