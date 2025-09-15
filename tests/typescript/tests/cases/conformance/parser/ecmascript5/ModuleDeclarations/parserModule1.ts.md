__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CompilerDiagnostics",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 40
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
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 67
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 70,
                      "end": 75
                    },
                    "definite": false,
                    "start": 62,
                    "end": 75
                  }
                ],
                "declare": false,
                "start": 58,
                "end": 76
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 51,
              "end": 76
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDiagnosticWriter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 119
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 139
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 148,
                              "end": 154
                            },
                            "start": 146,
                            "end": 154
                          },
                          "start": 140,
                          "end": 154
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 157,
                          "end": 161
                        },
                        "start": 155,
                        "end": 161
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 134,
                      "end": 162
                    }
                  ],
                  "start": 120,
                  "end": 172
                },
                "declare": false,
                "start": 92,
                "end": 172
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 85,
              "end": 172
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
                      "name": "diagnosticWriter",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IDiagnosticWriter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 228
                        },
                        "start": 209,
                        "end": 228
                      },
                      "start": 193,
                      "end": 228
                    },
                    "init": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 231,
                      "end": 235
                    },
                    "definite": false,
                    "start": 193,
                    "end": 235
                  }
                ],
                "declare": false,
                "start": 189,
                "end": 236
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 182,
              "end": 236
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
                      "name": "analysisPass",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 271,
                          "end": 277
                        },
                        "start": 269,
                        "end": 277
                      },
                      "start": 257,
                      "end": 277
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 280,
                      "end": 281
                    },
                    "definite": false,
                    "start": 257,
                    "end": 281
                  }
                ],
                "declare": false,
                "start": 253,
                "end": 282
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 246,
              "end": 282
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Alert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "output",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 322,
                        "end": 328
                      },
                      "start": 320,
                      "end": 328
                    },
                    "start": 314,
                    "end": 328
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "diagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 364
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "diagnosticWriter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 384,
                                  "end": 400
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Alert",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 401,
                                  "end": 406
                                },
                                "optional": false,
                                "computed": false,
                                "start": 384,
                                "end": 406
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 407,
                                  "end": 413
                                }
                              ],
                              "optional": false,
                              "start": 384,
                              "end": 414
                            },
                            "directive": null,
                            "start": 384,
                            "end": 415
                          }
                        ],
                        "start": 366,
                        "end": 429
                      },
                      "alternate": null,
                      "start": 344,
                      "end": 429
                    }
                  ],
                  "start": 330,
                  "end": 439
                },
                "expression": false,
                "start": 299,
                "end": 439
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 292,
              "end": 439
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "debugPrint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 475
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 479,
                        "end": 485
                      },
                      "start": 477,
                      "end": 485
                    },
                    "start": 476,
                    "end": 485
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 510
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Alert",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 530,
                                "end": 535
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 536,
                                  "end": 537
                                }
                              ],
                              "optional": false,
                              "start": 530,
                              "end": 538
                            },
                            "directive": null,
                            "start": 530,
                            "end": 539
                          }
                        ],
                        "start": 512,
                        "end": 553
                      },
                      "alternate": null,
                      "start": 501,
                      "end": 553
                    }
                  ],
                  "start": 487,
                  "end": 563
                },
                "expression": false,
                "start": 456,
                "end": 563
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 449,
              "end": 563
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 595
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 607,
                        "end": 614
                      },
                      "start": 605,
                      "end": 614
                    },
                    "start": 596,
                    "end": 614
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 619,
                        "end": 625
                      },
                      "start": 617,
                      "end": 625
                    },
                    "start": 616,
                    "end": 625
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 645,
                        "end": 650
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "condition",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 675,
                                "end": 684
                              },
                              "prefix": true,
                              "start": 674,
                              "end": 684
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 708,
                                      "end": 713
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 714,
                                        "end": 715
                                      }
                                    ],
                                    "optional": false,
                                    "start": 708,
                                    "end": 716
                                  },
                                  "directive": null,
                                  "start": 708,
                                  "end": 717
                                }
                              ],
                              "start": 686,
                              "end": 735
                            },
                            "alternate": null,
                            "start": 670,
                            "end": 735
                          }
                        ],
                        "start": 652,
                        "end": 749
                      },
                      "alternate": null,
                      "start": 641,
                      "end": 749
                    }
                  ],
                  "start": 627,
                  "end": 759
                },
                "expression": false,
                "start": 580,
                "end": 759
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 573,
              "end": 759
            }
          ],
          "start": 41,
          "end": 766
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 11,
        "end": 766
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 766
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 766
}
```
