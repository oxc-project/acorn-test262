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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello world",
                    "raw": "'hello world'",
                    "start": 57,
                    "end": 70
                  },
                  "definite": false,
                  "start": 53,
                  "end": 70
                }
              ],
              "declare": false,
              "start": 49,
              "end": 70
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 42,
            "end": 70
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 93
              },
              "typeParameters": null,
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
                      "start": 104,
                      "end": 115
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 126,
                                "end": 132
                              },
                              "start": 124,
                              "end": 132
                            },
                            "start": 123,
                            "end": 132
                          },
                          "readonly": false,
                          "static": false,
                          "start": 116,
                          "end": 132
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 144,
                                "end": 150
                              },
                              "start": 142,
                              "end": 150
                            },
                            "start": 141,
                            "end": 150
                          },
                          "readonly": false,
                          "static": false,
                          "start": 134,
                          "end": 150
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 152,
                        "end": 155
                      },
                      "expression": false,
                      "start": 115,
                      "end": 155
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 104,
                    "end": 155
                  }
                ],
                "start": 94,
                "end": 161
              },
              "abstract": false,
              "declare": false,
              "start": 82,
              "end": 161
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 75,
            "end": 161
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 211
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 230
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 232,
                                "end": 238
                              },
                              "start": 230,
                              "end": 238
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 226,
                            "end": 239
                          }
                        ],
                        "start": 212,
                        "end": 249
                      },
                      "declare": false,
                      "start": 199,
                      "end": 249
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 192,
                    "end": 249
                  }
                ],
                "start": 182,
                "end": 255
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 173,
              "end": 255
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 166,
            "end": 255
          }
        ],
        "start": 35,
        "end": 257
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 26,
      "end": 257
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 267
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 289
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 293
              },
              "importKind": "value",
              "start": 281,
              "end": 294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 274,
            "end": 294
          }
        ],
        "start": 268,
        "end": 296
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 259,
      "end": 296
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              },
              "start": 303,
              "end": 311
            },
            "start": 302,
            "end": 311
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 315
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 314,
              "end": 317
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            "optional": false,
            "computed": false,
            "start": 314,
            "end": 319
          },
          "definite": false,
          "start": 302,
          "end": 319
        }
      ],
      "declare": false,
      "start": 298,
      "end": 320
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
            "name": "b",
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
                      "start": 330,
                      "end": 331
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 333,
                        "end": 339
                      },
                      "start": 331,
                      "end": 339
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 330,
                    "end": 340
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
                      "start": 341,
                      "end": 342
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 344,
                        "end": 350
                      },
                      "start": 342,
                      "end": 350
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 341,
                    "end": 351
                  }
                ],
                "start": 328,
                "end": 353
              },
              "start": 326,
              "end": 353
            },
            "start": 325,
            "end": 353
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 361
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "optional": false,
                "computed": false,
                "start": 360,
                "end": 363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 369
              },
              "optional": false,
              "computed": false,
              "start": 360,
              "end": 369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 370,
                "end": 371
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 373,
                "end": 374
              }
            ],
            "start": 356,
            "end": 375
          },
          "definite": false,
          "start": 325,
          "end": 375
        }
      ],
      "declare": false,
      "start": 321,
      "end": 376
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 390
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 392,
                        "end": 398
                      },
                      "start": 390,
                      "end": 398
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 386,
                    "end": 398
                  }
                ],
                "start": 384,
                "end": 400
              },
              "start": 382,
              "end": 400
            },
            "start": 381,
            "end": 400
          },
          "init": null,
          "definite": false,
          "start": 381,
          "end": 400
        }
      ],
      "declare": false,
      "start": 377,
      "end": 401
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 412
                      },
                      "start": 409,
                      "end": 412
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 414
                    },
                    "start": 409,
                    "end": 414
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 417
                  },
                  "start": 409,
                  "end": 417
                },
                "typeArguments": null,
                "start": 409,
                "end": 417
              },
              "start": 407,
              "end": 417
            },
            "start": 406,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 406,
          "end": 417
        }
      ],
      "declare": false,
      "start": 402,
      "end": 418
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 428
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 452
              },
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
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 472,
                      "end": 474
                    },
                    "start": 465,
                    "end": 475
                  }
                ],
                "start": 455,
                "end": 481
              },
              "expression": false,
              "start": 442,
              "end": 481
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 435,
            "end": 481
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
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
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 526,
                        "end": 531
                      },
                      "typeParameters": null,
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
                              "start": 546,
                              "end": 557
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
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 568,
                                        "end": 574
                                      },
                                      "start": 566,
                                      "end": 574
                                    },
                                    "start": 565,
                                    "end": 574
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 558,
                                  "end": 574
                                },
                                {
                                  "type": "TSParameterProperty",
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 586,
                                        "end": 592
                                      },
                                      "start": 584,
                                      "end": 592
                                    },
                                    "start": 583,
                                    "end": 592
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 576,
                                  "end": 592
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 594,
                                "end": 597
                              },
                              "expression": false,
                              "start": 557,
                              "end": 597
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 546,
                            "end": 597
                          }
                        ],
                        "start": 532,
                        "end": 607
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 520,
                      "end": 607
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 513,
                    "end": 607
                  }
                ],
                "start": 503,
                "end": 613
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 494,
              "end": 613
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 487,
            "end": 613
          }
        ],
        "start": 429,
        "end": 615
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 420,
      "end": 615
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 624,
        "end": 625
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 688
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 690
                },
                "start": 687,
                "end": 690
              },
              "importKind": "value",
              "start": 676,
              "end": 691
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 669,
            "end": 691
          }
        ],
        "start": 626,
        "end": 693
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 617,
      "end": 693
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 702,
                "end": 708
              },
              "start": 700,
              "end": 708
            },
            "start": 699,
            "end": 708
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 712
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              "optional": false,
              "computed": false,
              "start": 711,
              "end": 714
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 711,
            "end": 716
          },
          "definite": false,
          "start": 699,
          "end": 716
        }
      ],
      "declare": false,
      "start": 695,
      "end": 717
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
            "name": "n",
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
                      "start": 727,
                      "end": 728
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 730,
                        "end": 736
                      },
                      "start": 728,
                      "end": 736
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 727,
                    "end": 737
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
                      "start": 738,
                      "end": 739
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 741,
                        "end": 747
                      },
                      "start": 739,
                      "end": 747
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 738,
                    "end": 748
                  }
                ],
                "start": 725,
                "end": 750
              },
              "start": 723,
              "end": 750
            },
            "start": 722,
            "end": 750
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 758
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "optional": false,
                "computed": false,
                "start": 757,
                "end": 760
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 766
              },
              "optional": false,
              "computed": false,
              "start": 757,
              "end": 766
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 767,
                "end": 768
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 770,
                "end": 771
              }
            ],
            "start": 753,
            "end": 772
          },
          "definite": false,
          "start": 722,
          "end": 772
        }
      ],
      "declare": false,
      "start": 718,
      "end": 773
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 783
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
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 804
              },
              "typeParameters": null,
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
                      "start": 815,
                      "end": 826
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 840,
                                "end": 846
                              },
                              "start": 838,
                              "end": 846
                            },
                            "start": 834,
                            "end": 846
                          },
                          "readonly": false,
                          "static": false,
                          "start": 827,
                          "end": 846
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 848,
                        "end": 851
                      },
                      "expression": false,
                      "start": 826,
                      "end": 851
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 815,
                    "end": 851
                  }
                ],
                "start": 805,
                "end": 857
              },
              "abstract": false,
              "declare": false,
              "start": 797,
              "end": 857
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 790,
            "end": 857
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 878
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "typeAnnotation": null,
                            "start": 900,
                            "end": 901
                          },
                          "init": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 904,
                            "end": 906
                          },
                          "definite": false,
                          "start": 900,
                          "end": 906
                        }
                      ],
                      "declare": false,
                      "start": 896,
                      "end": 907
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 889,
                    "end": 907
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 938
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 954
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 956,
                                "end": 962
                              },
                              "start": 954,
                              "end": 962
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 953,
                            "end": 963
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
                              "start": 976,
                              "end": 977
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 979,
                                "end": 985
                              },
                              "start": 977,
                              "end": 985
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 976,
                            "end": 986
                          }
                        ],
                        "start": 939,
                        "end": 996
                      },
                      "declare": false,
                      "start": 923,
                      "end": 996
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 916,
                    "end": 996
                  }
                ],
                "start": 879,
                "end": 1002
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 870,
              "end": 1002
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 863,
            "end": 1002
          }
        ],
        "start": 784,
        "end": 1004
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 775,
      "end": 1004
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 1013,
        "end": 1014
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1035,
                "end": 1036
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1040
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "start": 1039,
                "end": 1042
              },
              "importKind": "value",
              "start": 1028,
              "end": 1043
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1021,
            "end": 1043
          }
        ],
        "start": 1015,
        "end": 1045
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1006,
      "end": 1045
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
            "name": "o",
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1056,
                      "end": 1060
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1062,
                        "end": 1068
                      },
                      "start": 1060,
                      "end": 1068
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1056,
                    "end": 1068
                  }
                ],
                "start": 1054,
                "end": 1070
              },
              "start": 1052,
              "end": 1070
            },
            "start": 1051,
            "end": 1070
          },
          "init": null,
          "definite": false,
          "start": 1051,
          "end": 1070
        }
      ],
      "declare": false,
      "start": 1047,
      "end": 1071
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1077
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 1084,
                "end": 1085
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1087
              },
              "optional": false,
              "computed": false,
              "start": 1084,
              "end": 1087
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Hello",
                "raw": "'Hello'",
                "start": 1088,
                "end": 1095
              }
            ],
            "start": 1080,
            "end": 1096
          },
          "definite": false,
          "start": 1076,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 1072,
      "end": 1097
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
            "name": "p",
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
                      "start": 1108,
                      "end": 1109
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1111,
                        "end": 1117
                      },
                      "start": 1109,
                      "end": 1117
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1108,
                    "end": 1118
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
                      "start": 1119,
                      "end": 1120
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1122,
                        "end": 1128
                      },
                      "start": 1120,
                      "end": 1128
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1119,
                    "end": 1129
                  }
                ],
                "start": 1106,
                "end": 1131
              },
              "start": 1104,
              "end": 1131
            },
            "start": 1103,
            "end": 1131
          },
          "init": null,
          "definite": false,
          "start": 1103,
          "end": 1131
        }
      ],
      "declare": false,
      "start": 1099,
      "end": 1131
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1139,
                      "end": 1140
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1142
                    },
                    "start": 1139,
                    "end": 1142
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1143,
                    "end": 1148
                  },
                  "start": 1139,
                  "end": 1148
                },
                "typeArguments": null,
                "start": 1139,
                "end": 1148
              },
              "start": 1137,
              "end": 1148
            },
            "start": 1136,
            "end": 1148
          },
          "init": null,
          "definite": false,
          "start": 1136,
          "end": 1148
        }
      ],
      "declare": false,
      "start": 1132,
      "end": 1149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 1149
}
```
