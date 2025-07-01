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
          "start": 18,
          "end": 37
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
                      "start": 59,
                      "end": 64
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 67,
                      "end": 72
                    },
                    "definite": false,
                    "start": 59,
                    "end": 72
                  }
                ],
                "declare": false,
                "start": 55,
                "end": 73
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 48,
              "end": 73
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
                  "start": 99,
                  "end": 116
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
                        "start": 131,
                        "end": 136
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
                              "start": 145,
                              "end": 151
                            },
                            "start": 143,
                            "end": 151
                          },
                          "start": 137,
                          "end": 151
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 154,
                          "end": 158
                        },
                        "start": 152,
                        "end": 158
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 131,
                      "end": 159
                    }
                  ],
                  "start": 117,
                  "end": 169
                },
                "declare": false,
                "start": 89,
                "end": 169
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 82,
              "end": 169
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
                            "start": 208,
                            "end": 225
                          },
                          "typeArguments": null,
                          "start": 208,
                          "end": 225
                        },
                        "start": 206,
                        "end": 225
                      },
                      "start": 190,
                      "end": 225
                    },
                    "init": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 228,
                      "end": 232
                    },
                    "definite": false,
                    "start": 190,
                    "end": 232
                  }
                ],
                "declare": false,
                "start": 186,
                "end": 233
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 179,
              "end": 233
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
                          "start": 268,
                          "end": 274
                        },
                        "start": 266,
                        "end": 274
                      },
                      "start": 254,
                      "end": 274
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 277,
                      "end": 278
                    },
                    "definite": false,
                    "start": 254,
                    "end": 278
                  }
                ],
                "declare": false,
                "start": 250,
                "end": 279
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 243,
              "end": 279
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
                  "start": 305,
                  "end": 310
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
                        "start": 319,
                        "end": 325
                      },
                      "start": 317,
                      "end": 325
                    },
                    "start": 311,
                    "end": 325
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
                        "start": 345,
                        "end": 361
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
                                  "start": 381,
                                  "end": 397
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Alert",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 398,
                                  "end": 403
                                },
                                "optional": false,
                                "computed": false,
                                "start": 381,
                                "end": 403
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 404,
                                  "end": 410
                                }
                              ],
                              "optional": false,
                              "start": 381,
                              "end": 411
                            },
                            "directive": null,
                            "start": 381,
                            "end": 412
                          }
                        ],
                        "start": 363,
                        "end": 426
                      },
                      "alternate": null,
                      "start": 341,
                      "end": 426
                    }
                  ],
                  "start": 327,
                  "end": 436
                },
                "expression": false,
                "start": 296,
                "end": 436
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 289,
              "end": 436
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
                  "start": 462,
                  "end": 472
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
                        "start": 476,
                        "end": 482
                      },
                      "start": 474,
                      "end": 482
                    },
                    "start": 473,
                    "end": 482
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
                        "start": 502,
                        "end": 507
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
                                "start": 527,
                                "end": 532
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 533,
                                  "end": 534
                                }
                              ],
                              "optional": false,
                              "start": 527,
                              "end": 535
                            },
                            "directive": null,
                            "start": 527,
                            "end": 536
                          }
                        ],
                        "start": 509,
                        "end": 550
                      },
                      "alternate": null,
                      "start": 498,
                      "end": 550
                    }
                  ],
                  "start": 484,
                  "end": 560
                },
                "expression": false,
                "start": 453,
                "end": 560
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 446,
              "end": 560
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
                  "start": 586,
                  "end": 592
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
                        "start": 604,
                        "end": 611
                      },
                      "start": 602,
                      "end": 611
                    },
                    "start": 593,
                    "end": 611
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
                        "start": 616,
                        "end": 622
                      },
                      "start": 614,
                      "end": 622
                    },
                    "start": 613,
                    "end": 622
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
                        "start": 642,
                        "end": 647
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
                                "start": 672,
                                "end": 681
                              },
                              "prefix": true,
                              "start": 671,
                              "end": 681
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
                                      "start": 705,
                                      "end": 710
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 711,
                                        "end": 712
                                      }
                                    ],
                                    "optional": false,
                                    "start": 705,
                                    "end": 713
                                  },
                                  "directive": null,
                                  "start": 705,
                                  "end": 714
                                }
                              ],
                              "start": 683,
                              "end": 732
                            },
                            "alternate": null,
                            "start": 667,
                            "end": 732
                          }
                        ],
                        "start": 649,
                        "end": 746
                      },
                      "alternate": null,
                      "start": 638,
                      "end": 746
                    }
                  ],
                  "start": 624,
                  "end": 756
                },
                "expression": false,
                "start": 577,
                "end": 756
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 570,
              "end": 756
            }
          ],
          "start": 38,
          "end": 763
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 11,
        "end": 763
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 763
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 763
}
```
