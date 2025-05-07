__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 278,
  "end": 1187,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "decorators": [],
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 302,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 299,
                "end": 302
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 328,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 328,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 325,
                "end": 328
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 349,
            "decorators": [],
            "name": "os",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 349,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 352,
      "end": 386,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 364,
        "end": 385,
        "expression": {
          "type": "Literal",
          "start": 372,
          "end": 384,
          "raw": "\"typescript\"",
          "value": "typescript",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 388,
      "end": 558,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 436,
        "end": 558,
        "body": [
          {
            "type": "IfStatement",
            "start": 442,
            "end": 477,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 454,
              "end": 477,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 464,
                  "end": 471,
                  "argument": null
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 446,
              "end": 452,
              "argument": {
                "type": "Identifier",
                "start": 447,
                "end": 452,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 482,
            "end": 556,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 482,
              "end": 555,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 494,
                  "end": 554,
                  "expressions": [
                    {
                      "type": "LogicalExpression",
                      "start": 497,
                      "end": 530,
                      "operator": "&&",
                      "left": {
                        "type": "MemberExpression",
                        "start": 497,
                        "end": 507,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 497,
                          "end": 502,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 503,
                          "end": 507,
                          "decorators": [],
                          "name": "file",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 511,
                        "end": 530,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 511,
                          "end": 521,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 511,
                            "end": 516,
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 517,
                            "end": 521,
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 522,
                          "end": 530,
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 535,
                      "end": 552,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 540,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 552,
                        "decorators": [],
                        "name": "messageText",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 494,
                      "end": 497,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 530,
                      "end": 535,
                      "tail": false,
                      "value": {
                        "cooked": ": ",
                        "raw": ": "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 552,
                      "end": 554,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 482,
                "end": 493,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 489,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 493,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 407,
        "decorators": [],
        "name": "printError",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 408,
          "end": 428,
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 428,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 415,
                "end": 428,
                "left": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 417,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 428,
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 429,
        "end": 435,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 431,
          "end": 435
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 560,
      "end": 1187,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 567,
        "end": 1187,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 664,
          "end": 1187,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 670,
              "end": 762,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 676,
                  "end": 762,
                  "definite": false,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 676,
                    "end": 693,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 678,
                        "end": 684,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 678,
                          "end": 684,
                          "decorators": [],
                          "name": "config",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 678,
                          "end": 684,
                          "decorators": [],
                          "name": "config",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 686,
                        "end": 691,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 686,
                          "end": 691,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 686,
                          "end": 691,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 696,
                    "end": 762,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 725,
                        "end": 740,
                        "raw": "\"tsconfig.json\"",
                        "value": "tsconfig.json",
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Identifier",
                        "start": 742,
                        "end": 761,
                        "decorators": [],
                        "name": "compilerOptionsJson",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 696,
                      "end": 724,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 698,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 699,
                        "end": 724,
                        "decorators": [],
                        "name": "parseConfigFileTextToJson",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 767,
              "end": 838,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 778,
                "end": 838,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 788,
                    "end": 806,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 788,
                      "end": 805,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 799,
                          "end": 804,
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 798,
                        "decorators": [],
                        "name": "printError",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 815,
                    "end": 832,
                    "argument": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 831,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 771,
                "end": 776,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "VariableDeclaration",
              "start": 843,
              "end": 882,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 849,
                  "end": 881,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 865,
                    "decorators": [],
                    "name": "basePath",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 857,
                      "end": 865,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 859,
                        "end": 865
                      }
                    }
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 868,
                    "end": 881,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 868,
                      "end": 879,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 875,
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 876,
                        "end": 879,
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 887,
              "end": 982,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 893,
                  "end": 981,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 901,
                    "decorators": [],
                    "name": "settings",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 904,
                    "end": 981,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 938,
                        "end": 970,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 938,
                          "end": 951,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 938,
                            "end": 944,
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 945,
                            "end": 951,
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 952,
                          "end": 969,
                          "raw": "\"compilerOptions\"",
                          "value": "compilerOptions",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 972,
                        "end": 980,
                        "decorators": [],
                        "name": "basePath",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 904,
                      "end": 937,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 904,
                        "end": 906,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 907,
                        "end": 937,
                        "decorators": [],
                        "name": "convertCompilerOptionsFromJson",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 987,
              "end": 1127,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1010,
                "end": 1127,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 1020,
                    "end": 1095,
                    "await": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1055,
                      "end": 1095,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1069,
                          "end": 1085,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1069,
                            "end": 1084,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1080,
                                "end": 1083,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1069,
                              "end": 1079,
                              "decorators": [],
                              "name": "printError",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 1025,
                      "end": 1034,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1031,
                          "end": 1034,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 1031,
                            "end": 1034,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 1038,
                      "end": 1053,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1038,
                        "end": 1046,
                        "decorators": [],
                        "name": "settings",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1047,
                        "end": 1053,
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1104,
                    "end": 1121,
                    "argument": {
                      "type": "Identifier",
                      "start": 1111,
                      "end": 1120,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "UnaryExpression",
                "start": 991,
                "end": 1008,
                "argument": {
                  "type": "MemberExpression",
                  "start": 992,
                  "end": 1008,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 1000,
                    "decorators": [],
                    "name": "settings",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1001,
                    "end": 1008,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "!",
                "prefix": true
              }
            },
            {
              "type": "ReturnStatement",
              "start": 1132,
              "end": 1185,
              "argument": {
                "type": "CallExpression",
                "start": 1139,
                "end": 1184,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1156,
                    "end": 1165,
                    "decorators": [],
                    "name": "rootFiles",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "MemberExpression",
                    "start": 1167,
                    "end": 1183,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1167,
                      "end": 1175,
                      "decorators": [],
                      "name": "settings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1176,
                      "end": 1183,
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1139,
                  "end": 1155,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1139,
                    "end": 1141,
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1142,
                    "end": 1155,
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 576,
          "end": 589,
          "decorators": [],
          "name": "createProgram",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 590,
            "end": 609,
            "decorators": [],
            "name": "rootFiles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 599,
              "end": 609,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 601,
                "end": 609,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 601,
                  "end": 607
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 611,
            "end": 638,
            "decorators": [],
            "name": "compilerOptionsJson",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 630,
              "end": 638,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 632,
                "end": 638
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 639,
          "end": 663,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 641,
            "end": 663,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 641,
                "end": 651,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 641,
                  "end": 651,
                  "left": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 643,
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 651,
                    "decorators": [],
                    "name": "Program",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 654,
                "end": 663
              }
            ]
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
