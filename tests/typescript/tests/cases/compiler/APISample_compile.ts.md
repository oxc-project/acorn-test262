__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 278,
  "end": 1342,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 302,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 329,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 328,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 349,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 364,
        "end": 385,
        "expression": {
          "type": "Literal",
          "start": 372,
          "end": 384,
          "value": "typescript",
          "raw": "\"typescript\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 388,
      "end": 1194,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 395,
        "end": 1194,
        "id": {
          "type": "Identifier",
          "start": 404,
          "end": 411,
          "decorators": [],
          "name": "compile",
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
            "start": 412,
            "end": 431,
            "decorators": [],
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 431,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 423,
                "end": 431,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 423,
                  "end": 429
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 433,
            "end": 460,
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 460,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 442,
                "end": 460,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 442,
                  "end": 460,
                  "left": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 444,
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 460,
                    "decorators": [],
                    "name": "CompilerOptions",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 461,
          "end": 467,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 463,
            "end": 467
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 468,
          "end": 1194,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 474,
              "end": 525,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 478,
                  "end": 524,
                  "id": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 485,
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 488,
                    "end": 524,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 488,
                      "end": 504,
                      "object": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 490,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 504,
                        "decorators": [],
                        "name": "createProgram",
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
                        "start": 505,
                        "end": 514,
                        "decorators": [],
                        "name": "fileNames",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 516,
                        "end": 523,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 530,
              "end": 562,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 534,
                  "end": 561,
                  "id": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 544,
                    "decorators": [],
                    "name": "emitResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 547,
                    "end": 561,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 547,
                      "end": 559,
                      "object": {
                        "type": "Identifier",
                        "start": 547,
                        "end": 554,
                        "decorators": [],
                        "name": "program",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 559,
                        "decorators": [],
                        "name": "emit",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 568,
              "end": 623,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 572,
                  "end": 622,
                  "id": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 586,
                    "decorators": [],
                    "name": "allDiagnostics",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 589,
                    "end": 622,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 589,
                      "end": 613,
                      "object": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 591,
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 613,
                        "decorators": [],
                        "name": "getPreEmitDiagnostics",
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
                        "start": 614,
                        "end": 621,
                        "decorators": [],
                        "name": "program",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 629,
              "end": 1051,
              "expression": {
                "type": "CallExpression",
                "start": 629,
                "end": 1050,
                "callee": {
                  "type": "MemberExpression",
                  "start": 629,
                  "end": 651,
                  "object": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 643,
                    "decorators": [],
                    "name": "allDiagnostics",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 651,
                    "decorators": [],
                    "name": "forEach",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 652,
                    "end": 1049,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 652,
                        "end": 662,
                        "decorators": [],
                        "name": "diagnostic",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 666,
                      "end": 1049,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 676,
                          "end": 752,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 680,
                              "end": 751,
                              "id": {
                                "type": "Identifier",
                                "start": 680,
                                "end": 687,
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 690,
                                "end": 751,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 690,
                                  "end": 721,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 690,
                                    "end": 692,
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 693,
                                    "end": 721,
                                    "decorators": [],
                                    "name": "flattenDiagnosticMessageText",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 722,
                                    "end": 744,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 722,
                                      "end": 732,
                                      "decorators": [],
                                      "name": "diagnostic",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 733,
                                      "end": 744,
                                      "decorators": [],
                                      "name": "messageText",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 746,
                                    "end": 750,
                                    "value": "\n",
                                    "raw": "'\\n'"
                                  }
                                ],
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "IfStatement",
                          "start": 761,
                          "end": 848,
                          "test": {
                            "type": "UnaryExpression",
                            "start": 765,
                            "end": 781,
                            "operator": "!",
                            "argument": {
                              "type": "MemberExpression",
                              "start": 766,
                              "end": 781,
                              "object": {
                                "type": "Identifier",
                                "start": 766,
                                "end": 776,
                                "decorators": [],
                                "name": "diagnostic",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 777,
                                "end": 781,
                                "decorators": [],
                                "name": "file",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "prefix": true
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 783,
                            "end": 848,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 797,
                                "end": 818,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 797,
                                  "end": 817,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 797,
                                    "end": 808,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 797,
                                      "end": 804,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 805,
                                      "end": 808,
                                      "decorators": [],
                                      "name": "log",
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
                                      "start": 809,
                                      "end": 816,
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 831,
                                "end": 838,
                                "argument": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 857,
                          "end": 948,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 861,
                              "end": 947,
                              "id": {
                                "type": "ObjectPattern",
                                "start": 861,
                                "end": 880,
                                "decorators": [],
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 863,
                                    "end": 867,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 863,
                                      "end": 867,
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 863,
                                      "end": 867,
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 869,
                                    "end": 878,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 869,
                                      "end": 878,
                                      "decorators": [],
                                      "name": "character",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 869,
                                      "end": 878,
                                      "decorators": [],
                                      "name": "character",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "CallExpression",
                                "start": 883,
                                "end": 947,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 883,
                                  "end": 928,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 883,
                                    "end": 898,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 883,
                                      "end": 893,
                                      "decorators": [],
                                      "name": "diagnostic",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 894,
                                      "end": 898,
                                      "decorators": [],
                                      "name": "file",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 899,
                                    "end": 928,
                                    "decorators": [],
                                    "name": "getLineAndCharacterOfPosition",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "TSNonNullExpression",
                                    "start": 929,
                                    "end": 946,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 929,
                                      "end": 945,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 929,
                                        "end": 939,
                                        "decorators": [],
                                        "name": "diagnostic",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 940,
                                        "end": 945,
                                        "decorators": [],
                                        "name": "start",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  }
                                ],
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 957,
                          "end": 1043,
                          "expression": {
                            "type": "CallExpression",
                            "start": 957,
                            "end": 1042,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 957,
                              "end": 968,
                              "object": {
                                "type": "Identifier",
                                "start": 957,
                                "end": 964,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 965,
                                "end": 968,
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "TemplateLiteral",
                                "start": 969,
                                "end": 1041,
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "start": 969,
                                    "end": 972,
                                    "value": {
                                      "cooked": "",
                                      "raw": ""
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 996,
                                    "end": 1001,
                                    "value": {
                                      "cooked": " (",
                                      "raw": " ("
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1009,
                                    "end": 1013,
                                    "value": {
                                      "cooked": ",",
                                      "raw": ","
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1026,
                                    "end": 1032,
                                    "value": {
                                      "cooked": "): ",
                                      "raw": "): "
                                    },
                                    "tail": false
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "start": 1039,
                                    "end": 1041,
                                    "value": {
                                      "cooked": "",
                                      "raw": ""
                                    },
                                    "tail": true
                                  }
                                ],
                                "expressions": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 972,
                                    "end": 996,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 972,
                                      "end": 987,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 972,
                                        "end": 982,
                                        "decorators": [],
                                        "name": "diagnostic",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 983,
                                        "end": 987,
                                        "decorators": [],
                                        "name": "file",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 988,
                                      "end": 996,
                                      "decorators": [],
                                      "name": "fileName",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "start": 1001,
                                    "end": 1009,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1001,
                                      "end": 1005,
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "start": 1008,
                                      "end": 1009,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "start": 1013,
                                    "end": 1026,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1013,
                                      "end": 1022,
                                      "decorators": [],
                                      "name": "character",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "start": 1025,
                                      "end": 1026,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 1032,
                                    "end": 1039,
                                    "decorators": [],
                                    "name": "message",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "VariableDeclaration",
              "start": 1057,
              "end": 1103,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1061,
                  "end": 1102,
                  "id": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1069,
                    "decorators": [],
                    "name": "exitCode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 1072,
                    "end": 1102,
                    "test": {
                      "type": "MemberExpression",
                      "start": 1072,
                      "end": 1094,
                      "object": {
                        "type": "Identifier",
                        "start": 1072,
                        "end": 1082,
                        "decorators": [],
                        "name": "emitResult",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1094,
                        "decorators": [],
                        "name": "emitSkipped",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 1097,
                      "end": 1098,
                      "value": 1,
                      "raw": "1"
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 1101,
                      "end": 1102,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 1108,
              "end": 1164,
              "expression": {
                "type": "CallExpression",
                "start": 1108,
                "end": 1163,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1108,
                  "end": 1119,
                  "object": {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1115,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1116,
                    "end": 1119,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "start": 1120,
                    "end": 1162,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1120,
                        "end": 1150,
                        "value": {
                          "cooked": "Process exiting with code '",
                          "raw": "Process exiting with code '"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1158,
                        "end": 1162,
                        "value": {
                          "cooked": "'.",
                          "raw": "'."
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1158,
                        "decorators": [],
                        "name": "exitCode",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 1169,
              "end": 1192,
              "expression": {
                "type": "CallExpression",
                "start": 1169,
                "end": 1191,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1169,
                  "end": 1181,
                  "object": {
                    "type": "Identifier",
                    "start": 1169,
                    "end": 1176,
                    "decorators": [],
                    "name": "process",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1177,
                    "end": 1181,
                    "decorators": [],
                    "name": "exit",
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
                    "start": 1182,
                    "end": 1190,
                    "decorators": [],
                    "name": "exitCode",
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 1196,
      "end": 1342,
      "expression": {
        "type": "CallExpression",
        "start": 1196,
        "end": 1341,
        "callee": {
          "type": "Identifier",
          "start": 1196,
          "end": 1203,
          "decorators": [],
          "name": "compile",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 1204,
            "end": 1225,
            "callee": {
              "type": "MemberExpression",
              "start": 1204,
              "end": 1222,
              "object": {
                "type": "MemberExpression",
                "start": 1204,
                "end": 1216,
                "object": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1211,
                  "decorators": [],
                  "name": "process",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1216,
                  "decorators": [],
                  "name": "argv",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1217,
                "end": 1222,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1223,
                "end": 1224,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 1227,
            "end": 1340,
            "properties": [
              {
                "type": "Property",
                "start": 1233,
                "end": 1252,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1246,
                  "decorators": [],
                  "name": "noEmitOnError",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1248,
                  "end": 1252,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1254,
                "end": 1273,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1267,
                  "decorators": [],
                  "name": "noImplicitAny",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1269,
                  "end": 1273,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1279,
                "end": 1306,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1285,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 1287,
                  "end": 1306,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1287,
                    "end": 1302,
                    "object": {
                      "type": "Identifier",
                      "start": 1287,
                      "end": 1289,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1302,
                      "decorators": [],
                      "name": "ScriptTarget",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1303,
                    "end": 1306,
                    "decorators": [],
                    "name": "ES5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1308,
                "end": 1338,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1314,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 1316,
                  "end": 1338,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1316,
                    "end": 1329,
                    "object": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1318,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1319,
                      "end": 1329,
                      "decorators": [],
                      "name": "ModuleKind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1330,
                    "end": 1338,
                    "decorators": [],
                    "name": "CommonJS",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
