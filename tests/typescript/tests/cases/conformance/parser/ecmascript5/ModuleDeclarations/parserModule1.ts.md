__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 763,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 4,
      "end": 763,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 11,
        "end": 763,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 37,
          "decorators": [],
          "name": "CompilerDiagnostics",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 38,
          "end": 763,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 48,
              "end": 73,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 55,
                "end": 73,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 59,
                    "end": 72,
                    "id": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 64,
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 67,
                      "end": 72,
                      "value": false,
                      "raw": "false"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 82,
              "end": 169,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 89,
                "end": 169,
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 116,
                  "decorators": [],
                  "name": "IDiagnosticWriter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 117,
                  "end": 169,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 131,
                      "end": 159,
                      "key": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 136,
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 137,
                          "end": 151,
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 143,
                            "end": 151,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 145,
                              "end": 151
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 152,
                        "end": 158,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 154,
                          "end": 158
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 179,
              "end": 233,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 186,
                "end": 233,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 190,
                    "end": 232,
                    "id": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 225,
                      "decorators": [],
                      "name": "diagnosticWriter",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 206,
                        "end": 225,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 208,
                          "end": 225,
                          "typeName": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 225,
                            "decorators": [],
                            "name": "IDiagnosticWriter",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "start": 228,
                      "end": 232,
                      "value": null,
                      "raw": "null"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 243,
              "end": 279,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 250,
                "end": 279,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 254,
                    "end": 278,
                    "id": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 274,
                      "decorators": [],
                      "name": "analysisPass",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 266,
                        "end": 274,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 268,
                          "end": 274
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "start": 277,
                      "end": 278,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 289,
              "end": 436,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 296,
                "end": 436,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 310,
                  "decorators": [],
                  "name": "Alert",
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
                    "start": 311,
                    "end": 325,
                    "decorators": [],
                    "name": "output",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 317,
                      "end": 325,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 319,
                        "end": 325
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 327,
                  "end": 436,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 341,
                      "end": 426,
                      "test": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 361,
                        "decorators": [],
                        "name": "diagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 363,
                        "end": 426,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 381,
                            "end": 412,
                            "expression": {
                              "type": "CallExpression",
                              "start": 381,
                              "end": 411,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 381,
                                "end": 403,
                                "object": {
                                  "type": "Identifier",
                                  "start": 381,
                                  "end": 397,
                                  "decorators": [],
                                  "name": "diagnosticWriter",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 398,
                                  "end": 403,
                                  "decorators": [],
                                  "name": "Alert",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 404,
                                  "end": 410,
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 446,
              "end": 560,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 453,
                "end": 560,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 472,
                  "decorators": [],
                  "name": "debugPrint",
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
                    "start": 473,
                    "end": 482,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 474,
                      "end": 482,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 476,
                        "end": 482
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 484,
                  "end": 560,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 498,
                      "end": 550,
                      "test": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 507,
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 509,
                        "end": 550,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 527,
                            "end": 536,
                            "expression": {
                              "type": "CallExpression",
                              "start": 527,
                              "end": 535,
                              "callee": {
                                "type": "Identifier",
                                "start": 527,
                                "end": 532,
                                "decorators": [],
                                "name": "Alert",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 533,
                                  "end": 534,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 570,
              "end": 756,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 577,
                "end": 756,
                "id": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 592,
                  "decorators": [],
                  "name": "assert",
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
                    "start": 593,
                    "end": 611,
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 602,
                      "end": 611,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 604,
                        "end": 611
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 613,
                    "end": 622,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 614,
                      "end": 622,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 616,
                        "end": 622
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 624,
                  "end": 756,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 638,
                      "end": 746,
                      "test": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 647,
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 649,
                        "end": 746,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 667,
                            "end": 732,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 671,
                              "end": 681,
                              "operator": "!",
                              "argument": {
                                "type": "Identifier",
                                "start": 672,
                                "end": 681,
                                "decorators": [],
                                "name": "condition",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "prefix": true
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 683,
                              "end": 732,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 705,
                                  "end": 714,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 705,
                                    "end": 713,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 705,
                                      "end": 710,
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 711,
                                        "end": 712,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "alternate": null
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
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
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
