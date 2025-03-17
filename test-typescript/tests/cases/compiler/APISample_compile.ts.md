__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 278,
  "end": 1343,
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
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "name": "process",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 302,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 299,
                "end": 302
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 328,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 328,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 325,
                "end": 328
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 349,
            "name": "os",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 349,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "ts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "compile",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 412,
            "end": 431,
            "name": "fileNames",
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 433,
            "end": 460,
            "name": "options",
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
                    "name": "ts",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 460,
                    "name": "CompilerOptions",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 468,
          "end": 1194,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 474,
              "end": 525,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 478,
                  "end": 524,
                  "id": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 485,
                    "name": "program",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 504,
                        "name": "createProgram",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 505,
                        "end": 514,
                        "name": "fileNames",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 516,
                        "end": 523,
                        "name": "options",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 530,
              "end": 562,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 534,
                  "end": 561,
                  "id": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 544,
                    "name": "emitResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "program",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 559,
                        "name": "emit",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 568,
              "end": 623,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 572,
                  "end": 622,
                  "id": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 586,
                    "name": "allDiagnostics",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "ts",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 613,
                        "name": "getPreEmitDiagnostics",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 614,
                        "end": 621,
                        "name": "program",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
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
                    "name": "allDiagnostics",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 651,
                    "name": "forEach",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 652,
                    "end": 1049,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 652,
                        "end": 662,
                        "name": "diagnostic",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 666,
                      "end": 1049,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 676,
                          "end": 752,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 680,
                              "end": 751,
                              "id": {
                                "type": "Identifier",
                                "start": 680,
                                "end": 687,
                                "name": "message",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                    "name": "ts",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 693,
                                    "end": 721,
                                    "name": "flattenDiagnosticMessageText",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 722,
                                    "end": 744,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 722,
                                      "end": 732,
                                      "name": "diagnostic",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 733,
                                      "end": 744,
                                      "name": "messageText",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 746,
                                    "end": 750,
                                    "value": "\n",
                                    "raw": "'\\n'"
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
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
                            "prefix": true,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 766,
                              "end": 781,
                              "object": {
                                "type": "Identifier",
                                "start": 766,
                                "end": 776,
                                "name": "diagnostic",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 777,
                                "end": 781,
                                "name": "file",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
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
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 805,
                                      "end": 808,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 809,
                                      "end": 816,
                                      "name": "message",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
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
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 861,
                              "end": 947,
                              "id": {
                                "type": "ObjectPattern",
                                "start": 861,
                                "end": 880,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 863,
                                    "end": 867,
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 863,
                                      "end": 867,
                                      "name": "line",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 863,
                                      "end": 867,
                                      "name": "line",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 869,
                                    "end": 878,
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 869,
                                      "end": 878,
                                      "name": "character",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 869,
                                      "end": 878,
                                      "name": "character",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ],
                                "decorators": [],
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
                                      "name": "diagnostic",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 894,
                                      "end": 898,
                                      "name": "file",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 899,
                                    "end": 928,
                                    "name": "getLineAndCharacterOfPosition",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
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
                                        "name": "diagnostic",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 940,
                                        "end": 945,
                                        "name": "start",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
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
                                "name": "console",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 965,
                                "end": 968,
                                "name": "log",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "TemplateLiteral",
                                "start": 969,
                                "end": 1041,
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
                                        "name": "diagnostic",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 983,
                                        "end": 987,
                                        "name": "file",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 988,
                                      "end": 996,
                                      "name": "fileName",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "start": 1001,
                                    "end": 1009,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1001,
                                      "end": 1005,
                                      "name": "line",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "character",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                    "name": "message",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
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
                                ]
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            },
            {
              "type": "VariableDeclaration",
              "start": 1057,
              "end": 1103,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1061,
                  "end": 1102,
                  "id": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1069,
                    "name": "exitCode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "emitResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1094,
                        "name": "emitSkipped",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
              "kind": "var",
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
                    "name": "console",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1116,
                    "end": 1119,
                    "name": "log",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "start": 1120,
                    "end": 1162,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1158,
                        "name": "exitCode",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
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
                    "name": "process",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1177,
                    "end": 1181,
                    "name": "exit",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1182,
                    "end": 1190,
                    "name": "exitCode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 461,
          "end": 467,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 463,
            "end": 467
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "compile",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "name": "process",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1216,
                  "name": "argv",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1217,
                "end": 1222,
                "name": "slice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1223,
                "end": 1224,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
            "typeArguments": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1246,
                  "name": "noEmitOnError",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1248,
                  "end": 1252,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1254,
                "end": 1273,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1267,
                  "name": "noImplicitAny",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1269,
                  "end": 1273,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1279,
                "end": 1306,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1285,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1302,
                      "name": "ScriptTarget",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1303,
                    "end": 1306,
                    "name": "ES5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1308,
                "end": 1338,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1314,
                  "name": "module",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "ts",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1319,
                      "end": 1329,
                      "name": "ModuleKind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1330,
                    "end": 1338,
                    "name": "CommonJS",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
