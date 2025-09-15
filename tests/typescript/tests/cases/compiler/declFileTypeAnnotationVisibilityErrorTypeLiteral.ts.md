__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 32
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 33,
              "end": 40
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 40
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 57
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 88
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 89,
                      "end": 100
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 75,
                    "end": 100
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 68,
                  "end": 100
                }
              ],
              "start": 58,
              "end": 106
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 45,
            "end": 106
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                        "type": "TSTypeLiteral",
                        "members": [
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
                              "start": 136,
                              "end": 137
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 147
                                },
                                "typeArguments": null,
                                "start": 139,
                                "end": 147
                              },
                              "start": 137,
                              "end": 147
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 136,
                            "end": 148
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
                              "start": 157,
                              "end": 158
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 160,
                                    "end": 162
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 163,
                                    "end": 170
                                  },
                                  "start": 160,
                                  "end": 170
                                },
                                "typeArguments": null,
                                "start": 160,
                                "end": 170
                              },
                              "start": 158,
                              "end": 170
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 157,
                            "end": 171
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 184,
                                      "end": 186
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "public1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 194
                                    },
                                    "start": 184,
                                    "end": 194
                                  },
                                  "typeArguments": null,
                                  "start": 184,
                                  "end": 194
                                },
                                "start": 184,
                                "end": 196
                              },
                              "start": 182,
                              "end": 196
                            },
                            "start": 180,
                            "end": 197
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 206,
                              "end": 212
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 216,
                                  "end": 224
                                },
                                "typeArguments": null,
                                "start": 216,
                                "end": 224
                              },
                              "start": 214,
                              "end": 224
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 206,
                            "end": 225
                          },
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 238,
                                    "end": 244
                                  },
                                  "start": 236,
                                  "end": 244
                                },
                                "start": 235,
                                "end": 244
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 247,
                                  "end": 255
                                },
                                "typeArguments": null,
                                "start": 247,
                                "end": 255
                              },
                              "start": 245,
                              "end": 255
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 234,
                            "end": 256
                          },
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 269,
                                    "end": 275
                                  },
                                  "start": 267,
                                  "end": 275
                                },
                                "start": 266,
                                "end": 275
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 278,
                                    "end": 280
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 281,
                                    "end": 288
                                  },
                                  "start": 278,
                                  "end": 288
                                },
                                "typeArguments": null,
                                "start": 278,
                                "end": 288
                              },
                              "start": 276,
                              "end": 288
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 265,
                            "end": 289
                          }
                        ],
                        "start": 126,
                        "end": 295
                      },
                      "start": 124,
                      "end": 295
                    },
                    "start": 123,
                    "end": 295
                  },
                  "init": null,
                  "definite": false,
                  "start": 123,
                  "end": 295
                }
              ],
              "declare": false,
              "start": 119,
              "end": 296
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 112,
            "end": 296
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 314
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 334,
                            "end": 342
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 330,
                          "end": 344
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 327,
                        "end": 344
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 354,
                          "end": 355
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 361,
                              "end": 363
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 364,
                              "end": 371
                            },
                            "optional": false,
                            "computed": false,
                            "start": 361,
                            "end": 371
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 357,
                          "end": 373
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 354,
                        "end": 373
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 389
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "private1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 417,
                                    "end": 425
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 413,
                                  "end": 427
                                },
                                "start": 406,
                                "end": 428
                              }
                            ],
                            "start": 392,
                            "end": 438
                          },
                          "expression": false,
                          "start": 389,
                          "end": 438
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 383,
                        "end": 438
                      }
                    ],
                    "start": 317,
                    "end": 444
                  },
                  "definite": false,
                  "start": 312,
                  "end": 444
                }
              ],
              "declare": false,
              "start": 308,
              "end": 445
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 301,
            "end": 445
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 463
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 467
                  },
                  "definite": false,
                  "start": 461,
                  "end": 467
                }
              ],
              "declare": false,
              "start": 457,
              "end": 468
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 450,
            "end": 468
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 513,
                                  "end": 521
                                },
                                "typeArguments": null,
                                "start": 513,
                                "end": 521
                              },
                              "start": 511,
                              "end": 521
                            },
                            "start": 510,
                            "end": 521
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 526,
                                "end": 528
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 529,
                                "end": 536
                              },
                              "start": 526,
                              "end": 536
                            },
                            "typeArguments": null,
                            "start": 526,
                            "end": 536
                          },
                          "start": 523,
                          "end": 536
                        },
                        "start": 509,
                        "end": 536
                      },
                      "start": 507,
                      "end": 536
                    },
                    "start": 506,
                    "end": 536
                  },
                  "init": null,
                  "definite": false,
                  "start": 506,
                  "end": 536
                }
              ],
              "declare": false,
              "start": 502,
              "end": 537
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 495,
            "end": 537
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 555
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 559
                  },
                  "definite": false,
                  "start": 553,
                  "end": 559
                }
              ],
              "declare": false,
              "start": 549,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 542,
            "end": 560
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 612,
                                  "end": 620
                                },
                                "typeArguments": null,
                                "start": 612,
                                "end": 620
                              },
                              "start": 610,
                              "end": 620
                            },
                            "start": 609,
                            "end": 620
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 625,
                                "end": 627
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 628,
                                "end": 635
                              },
                              "start": 625,
                              "end": 635
                            },
                            "typeArguments": null,
                            "start": 625,
                            "end": 635
                          },
                          "start": 622,
                          "end": 635
                        },
                        "start": 604,
                        "end": 635
                      },
                      "start": 602,
                      "end": 635
                    },
                    "start": 601,
                    "end": 635
                  },
                  "init": null,
                  "definite": false,
                  "start": 601,
                  "end": 635
                }
              ],
              "declare": false,
              "start": 597,
              "end": 636
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 590,
            "end": 636
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 654
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 658
                  },
                  "definite": false,
                  "start": 652,
                  "end": 658
                }
              ],
              "declare": false,
              "start": 648,
              "end": 659
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 641,
            "end": 659
          }
        ],
        "start": 12,
        "end": 661
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 661
}
```
