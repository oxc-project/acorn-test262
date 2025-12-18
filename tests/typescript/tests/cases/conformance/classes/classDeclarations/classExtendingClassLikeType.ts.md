__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 10,
    "end": 14,
    "range": [
      10,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 85,
    "end": 90,
    "range": [
      85,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "D0",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 94,
    "end": 101,
    "range": [
      94,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 102,
    "end": 106,
    "range": [
      102,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113,
    "range": [
      107,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseConstructor",
    "start": 138,
    "end": 153,
    "range": [
      138,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 193,
    "end": 199,
    "range": [
      193,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 214,
    "end": 217,
    "range": [
      214,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 229,
    "end": 233,
    "range": [
      229,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 266,
    "end": 270,
    "range": [
      266,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 282,
    "end": 285,
    "range": [
      282,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 306,
    "end": 310,
    "range": [
      306,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 321,
    "end": 328,
    "range": [
      321,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 329,
    "end": 337,
    "range": [
      329,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "getBase",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseConstructor",
    "start": 349,
    "end": 364,
    "range": [
      349,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 367,
    "end": 372,
    "range": [
      367,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 373,
    "end": 375,
    "range": [
      373,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 376,
    "end": 383,
    "range": [
      376,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "getBase",
    "start": 384,
    "end": 391,
    "range": [
      384,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 400,
    "end": 411,
    "range": [
      400,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 424,
    "end": 429,
    "range": [
      424,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 430,
    "end": 435,
    "range": [
      430,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 437,
    "end": 442,
    "range": [
      437,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 453,
    "end": 457,
    "range": [
      453,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 462,
    "end": 465,
    "range": [
      462,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 475,
    "end": 479,
    "range": [
      475,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 484,
    "end": 487,
    "range": [
      484,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 498,
    "end": 503,
    "range": [
      498,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 504,
    "end": 506,
    "range": [
      504,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 507,
    "end": 514,
    "range": [
      507,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "getBase",
    "start": 515,
    "end": 522,
    "range": [
      515,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 540,
    "end": 551,
    "range": [
      540,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 564,
    "end": 569,
    "range": [
      564,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 583,
    "end": 588,
    "range": [
      583,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 589,
    "end": 591,
    "range": [
      589,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 593,
    "end": 595,
    "range": [
      593,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 606,
    "end": 610,
    "range": [
      606,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 626,
    "end": 630,
    "range": [
      626,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 647,
    "end": 652,
    "range": [
      647,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 656,
    "end": 663,
    "range": [
      656,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "getBase",
    "start": 664,
    "end": 671,
    "range": [
      664,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 675,
    "end": 681,
    "range": [
      675,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 697,
    "end": 708,
    "range": [
      697,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 721,
    "end": 726,
    "range": [
      721,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 727,
    "end": 732,
    "range": [
      727,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 734,
    "end": 736,
    "range": [
      734,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 747,
    "end": 751,
    "range": [
      747,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 756,
    "end": 759,
    "range": [
      756,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 769,
    "end": 773,
    "range": [
      769,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 842,
    "end": 847,
    "range": [
      842,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "D4",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 851,
    "end": 858,
    "range": [
      851,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "getBase",
    "start": 859,
    "end": 866,
    "range": [
      859,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 870,
    "end": 876,
    "range": [
      870,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 878,
    "end": 884,
    "range": [
      878,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 886,
    "end": 892,
    "range": [
      886,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 899,
    "end": 908,
    "range": [
      899,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "BadBaseConstructor",
    "start": 909,
    "end": 927,
    "range": [
      909,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 951,
    "end": 955,
    "range": [
      951,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 956,
    "end": 962,
    "range": [
      956,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 964,
    "end": 970,
    "range": [
      964,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 977,
    "end": 980,
    "range": [
      977,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 985,
    "end": 991,
    "range": [
      985,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 994,
    "end": 998,
    "range": [
      994,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 999,
    "end": 1005,
    "range": [
      999,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1007,
    "end": 1013,
    "range": [
      1007,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1019,
    "end": 1026,
    "range": [
      1019,
      1026
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1027,
    "end": 1035,
    "range": [
      1027,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "getBadBase",
    "start": 1036,
    "end": 1046,
    "range": [
      1036,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "BadBaseConstructor",
    "start": 1050,
    "end": 1068,
    "range": [
      1050,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1113,
    "end": 1118,
    "range": [
      1113,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "D5",
    "start": 1119,
    "end": 1121,
    "range": [
      1119,
      1121
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1122,
    "end": 1129,
    "range": [
      1122,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "getBadBase",
    "start": 1130,
    "end": 1140,
    "range": [
      1130,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  }
]
```
