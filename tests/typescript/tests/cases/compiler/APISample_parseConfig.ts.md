__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 299,
                "end": 302
              },
              "start": 297,
              "end": 302
            },
            "start": 290,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 302
        }
      ],
      "declare": true,
      "start": 278,
      "end": 303
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 325,
                "end": 328
              },
              "start": 323,
              "end": 328
            },
            "start": 316,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 328
        }
      ],
      "declare": true,
      "start": 304,
      "end": 329
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
            "name": "os",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "start": 342,
            "end": 349
          },
          "init": null,
          "definite": false,
          "start": 342,
          "end": 349
        }
      ],
      "declare": true,
      "start": 330,
      "end": 350
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 361
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 372,
          "end": 384
        },
        "start": 364,
        "end": 385
      },
      "importKind": "value",
      "start": 352,
      "end": 386
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "printError",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 407
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 417
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Diagnostic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 428
                },
                "start": 415,
                "end": 428
              },
              "typeArguments": null,
              "start": 415,
              "end": 428
            },
            "start": 413,
            "end": 428
          },
          "start": 408,
          "end": 428
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 431,
          "end": 435
        },
        "start": 429,
        "end": 435
      },
      "body": {
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
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 452
              },
              "prefix": true,
              "start": 446,
              "end": 452
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 464,
                  "end": 471
                }
              ],
              "start": 454,
              "end": 477
            },
            "alternate": null,
            "start": 442,
            "end": 477
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 482,
                  "end": 489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 493
                },
                "optional": false,
                "computed": false,
                "start": 482,
                "end": 493
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 494,
                      "end": 497
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ": ",
                        "cooked": ": "
                      },
                      "tail": false,
                      "start": 530,
                      "end": 535
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 552,
                      "end": 554
                    }
                  ],
                  "expressions": [
                    {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 497,
                          "end": 502
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "file",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 503,
                          "end": 507
                        },
                        "optional": false,
                        "computed": false,
                        "start": 497,
                        "end": 507
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 511,
                            "end": 516
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 517,
                            "end": 521
                          },
                          "optional": false,
                          "computed": false,
                          "start": 511,
                          "end": 521
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 522,
                          "end": 530
                        },
                        "optional": false,
                        "computed": false,
                        "start": 511,
                        "end": 530
                      },
                      "start": 497,
                      "end": 530
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 535,
                        "end": 540
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messageText",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 552
                      },
                      "optional": false,
                      "computed": false,
                      "start": 535,
                      "end": 552
                    }
                  ],
                  "start": 494,
                  "end": 554
                }
              ],
              "optional": false,
              "start": 482,
              "end": 555
            },
            "directive": null,
            "start": 482,
            "end": 556
          }
        ],
        "start": 436,
        "end": 558
      },
      "expression": false,
      "start": 388,
      "end": 558
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createProgram",
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 589
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rootFiles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 601,
                  "end": 607
                },
                "start": 601,
                "end": 609
              },
              "start": 599,
              "end": 609
            },
            "start": 590,
            "end": 609
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "compilerOptionsJson",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 632,
                "end": 638
              },
              "start": 630,
              "end": 638
            },
            "start": 611,
            "end": 638
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 643
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 651
                  },
                  "start": 641,
                  "end": 651
                },
                "typeArguments": null,
                "start": 641,
                "end": 651
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 654,
                "end": 663
              }
            ],
            "start": 641,
            "end": 663
          },
          "start": 639,
          "end": 663
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "config",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 678,
                          "end": 684
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "config",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 678,
                          "end": 684
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 678,
                        "end": 684
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 691
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 691
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 686,
                        "end": 691
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 693
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 698
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "parseConfigFileTextToJson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 699,
                        "end": 724
                      },
                      "optional": false,
                      "computed": false,
                      "start": 696,
                      "end": 724
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "tsconfig.json",
                        "raw": "\"tsconfig.json\"",
                        "start": 725,
                        "end": 740
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "compilerOptionsJson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 742,
                        "end": 761
                      }
                    ],
                    "optional": false,
                    "start": 696,
                    "end": 762
                  },
                  "definite": false,
                  "start": 676,
                  "end": 762
                }
              ],
              "declare": false,
              "start": 670,
              "end": 762
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 776
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
                        "name": "printError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 788,
                        "end": 798
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 804
                        }
                      ],
                      "optional": false,
                      "start": 788,
                      "end": 805
                    },
                    "directive": null,
                    "start": 788,
                    "end": 806
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 831
                    },
                    "start": 815,
                    "end": 832
                  }
                ],
                "start": 778,
                "end": 838
              },
              "alternate": null,
              "start": 767,
              "end": 838
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "basePath",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 859,
                        "end": 865
                      },
                      "start": 857,
                      "end": 865
                    },
                    "start": 849,
                    "end": 865
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 875
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 876,
                        "end": 879
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 879
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 868,
                    "end": 881
                  },
                  "definite": false,
                  "start": 849,
                  "end": 881
                }
              ],
              "declare": false,
              "start": 843,
              "end": 882
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "settings",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 901
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 906
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "convertCompilerOptionsFromJson",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 937
                      },
                      "optional": false,
                      "computed": false,
                      "start": 904,
                      "end": 937
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 938,
                            "end": 944
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 945,
                            "end": 951
                          },
                          "optional": false,
                          "computed": false,
                          "start": 938,
                          "end": 951
                        },
                        "property": {
                          "type": "Literal",
                          "value": "compilerOptions",
                          "raw": "\"compilerOptions\"",
                          "start": 952,
                          "end": 969
                        },
                        "optional": false,
                        "computed": true,
                        "start": 938,
                        "end": 970
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "basePath",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 972,
                        "end": 980
                      }
                    ],
                    "optional": false,
                    "start": 904,
                    "end": 981
                  },
                  "definite": false,
                  "start": 893,
                  "end": 981
                }
              ],
              "declare": false,
              "start": 887,
              "end": 982
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "settings",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 1000
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1001,
                    "end": 1008
                  },
                  "optional": false,
                  "computed": false,
                  "start": 992,
                  "end": 1008
                },
                "prefix": true,
                "start": 991,
                "end": 1008
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1031,
                            "end": 1034
                          },
                          "init": null,
                          "definite": false,
                          "start": 1031,
                          "end": 1034
                        }
                      ],
                      "declare": false,
                      "start": 1025,
                      "end": 1034
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "settings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1038,
                        "end": 1046
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "errors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1053
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1038,
                      "end": 1053
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "printError",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1069,
                              "end": 1079
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1080,
                                "end": 1083
                              }
                            ],
                            "optional": false,
                            "start": 1069,
                            "end": 1084
                          },
                          "directive": null,
                          "start": 1069,
                          "end": 1085
                        }
                      ],
                      "start": 1055,
                      "end": 1095
                    },
                    "start": 1020,
                    "end": 1095
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1120
                    },
                    "start": 1104,
                    "end": 1121
                  }
                ],
                "start": 1010,
                "end": 1127
              },
              "alternate": null,
              "start": 987,
              "end": 1127
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1139,
                    "end": 1141
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1142,
                    "end": 1155
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1139,
                  "end": 1155
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rootFiles",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1156,
                    "end": 1165
                  },
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "settings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1167,
                      "end": 1175
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1176,
                      "end": 1183
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1167,
                    "end": 1183
                  }
                ],
                "optional": false,
                "start": 1139,
                "end": 1184
              },
              "start": 1132,
              "end": 1185
            }
          ],
          "start": 664,
          "end": 1187
        },
        "expression": false,
        "start": 567,
        "end": 1187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 560,
      "end": 1187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 278,
  "end": 1187
}
```
