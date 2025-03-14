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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 11,
        "end": 763,
        "body": {
          "type": "TSModuleBlock",
          "start": 38,
          "end": 763,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 48,
              "end": 73,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 55,
                "end": 73,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 59,
                    "end": 72,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 64,
                      "decorators": [],
                      "name": "debug",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 67,
                      "end": 72,
                      "raw": "false",
                      "value": false
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 82,
              "end": 169,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 89,
                "end": 169,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 117,
                  "end": 169,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 131,
                      "end": 159,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 136,
                        "decorators": [],
                        "name": "Alert",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
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
                      "readonly": false,
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
                      "static": false
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 116,
                  "decorators": [],
                  "name": "IDiagnosticWriter",
                  "optional": false
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 179,
              "end": 233,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 186,
                "end": 233,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 190,
                    "end": 232,
                    "definite": false,
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
                            "optional": false
                          }
                        }
                      }
                    },
                    "init": {
                      "type": "Literal",
                      "start": 228,
                      "end": 232,
                      "raw": "null",
                      "value": null
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 243,
              "end": 279,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 250,
                "end": 279,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 254,
                    "end": 278,
                    "definite": false,
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
                      "raw": "0",
                      "value": 0
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 289,
              "end": 436,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 296,
                "end": 436,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 327,
                  "end": 436,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 341,
                      "end": 426,
                      "alternate": null,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 404,
                                  "end": 410,
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 381,
                                "end": 403,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 381,
                                  "end": 397,
                                  "decorators": [],
                                  "name": "diagnosticWriter",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 398,
                                  "end": 403,
                                  "decorators": [],
                                  "name": "Alert",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 361,
                        "decorators": [],
                        "name": "diagnosticWriter",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 310,
                  "decorators": [],
                  "name": "Alert",
                  "optional": false
                },
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
                ]
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 446,
              "end": 560,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 453,
                "end": 560,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 484,
                  "end": 560,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 498,
                      "end": 550,
                      "alternate": null,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 533,
                                  "end": 534,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 527,
                                "end": 532,
                                "decorators": [],
                                "name": "Alert",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 507,
                        "decorators": [],
                        "name": "debug",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 472,
                  "decorators": [],
                  "name": "debugPrint",
                  "optional": false
                },
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
                ]
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 570,
              "end": 756,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 577,
                "end": 756,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 624,
                  "end": 756,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 638,
                      "end": 746,
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 649,
                        "end": 746,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 667,
                            "end": 732,
                            "alternate": null,
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
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 711,
                                        "end": 712,
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 705,
                                      "end": 710,
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 671,
                              "end": 681,
                              "argument": {
                                "type": "Identifier",
                                "start": 672,
                                "end": 681,
                                "decorators": [],
                                "name": "condition",
                                "optional": false
                              },
                              "operator": "!",
                              "prefix": true
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 647,
                        "decorators": [],
                        "name": "debug",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 592,
                  "decorators": [],
                  "name": "assert",
                  "optional": false
                },
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
                ]
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 37,
          "decorators": [],
          "name": "CompilerDiagnostics",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
