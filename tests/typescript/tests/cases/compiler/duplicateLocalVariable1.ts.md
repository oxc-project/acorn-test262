__ESTREE_TEST__:AST:
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
            "name": "FileManager",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 104,
                "end": 107
              },
              "start": 102,
              "end": 107
            },
            "start": 91,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 107
        }
      ],
      "declare": true,
      "start": 79,
      "end": 108
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
            "name": "App",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 126,
                "end": 129
              },
              "start": 124,
              "end": 129
            },
            "start": 121,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 129
        }
      ],
      "declare": true,
      "start": 109,
      "end": 130
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
            "name": "TestFileDir",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 147
          },
          "init": {
            "type": "Literal",
            "value": ".\\TempTestFiles",
            "raw": "\".\\\\TempTestFiles\"",
            "start": 150,
            "end": 168
          },
          "definite": false,
          "start": 136,
          "end": 168
        }
      ],
      "declare": false,
      "start": 132,
      "end": 169
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestCase",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 192
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
                "start": 199,
                "end": 210
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
                          "start": 225,
                          "end": 231
                        },
                        "start": 223,
                        "end": 231
                      },
                      "start": 219,
                      "end": 231
                    },
                    "readonly": false,
                    "static": false,
                    "start": 212,
                    "end": 231
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 250,
                              "end": 257
                            },
                            "start": 248,
                            "end": 257
                          },
                          "start": 246,
                          "end": 257
                        },
                        "start": 244,
                        "end": 257
                      },
                      "start": 240,
                      "end": 257
                    },
                    "readonly": false,
                    "static": false,
                    "start": 233,
                    "end": 257
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "errorMessageRegEx",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 286,
                          "end": 292
                        },
                        "start": 284,
                        "end": 292
                      },
                      "start": 266,
                      "end": 292
                    },
                    "readonly": false,
                    "static": false,
                    "start": 259,
                    "end": 292
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 294,
                  "end": 301
                },
                "expression": false,
                "start": 211,
                "end": 301
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 199,
              "end": 301
            }
          ],
          "start": 193,
          "end": 303
        },
        "abstract": false,
        "declare": false,
        "start": 178,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 171,
      "end": 303
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestRunner",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 327
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tests",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 348
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 350,
                    "end": 358
                  },
                  "start": 350,
                  "end": 360
                },
                "start": 348,
                "end": 360
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 363,
                "end": 365
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 335,
              "end": 366
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayCompare",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 391
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 398,
                          "end": 401
                        },
                        "start": 398,
                        "end": 403
                      },
                      "start": 396,
                      "end": 403
                    },
                    "start": 392,
                    "end": 403
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 411,
                          "end": 414
                        },
                        "start": 411,
                        "end": 416
                      },
                      "start": 409,
                      "end": 416
                    },
                    "start": 405,
                    "end": 416
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 419,
                    "end": 426
                  },
                  "start": 417,
                  "end": 426
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 445,
                            "end": 449
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "every",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 455
                          },
                          "optional": false,
                          "computed": false,
                          "start": 445,
                          "end": 455
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 466,
                                "end": 469
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 476
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "val",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 487,
                                      "end": 490
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 495,
                                        "end": 499
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 500,
                                        "end": 505
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 495,
                                      "end": 506
                                    },
                                    "start": 487,
                                    "end": 506
                                  },
                                  "start": 480,
                                  "end": 506
                                }
                              ],
                              "start": 478,
                              "end": 508
                            },
                            "expression": false,
                            "start": 456,
                            "end": 508
                          }
                        ],
                        "optional": false,
                        "start": 445,
                        "end": 509
                      },
                      "start": 437,
                      "end": 511
                    }
                  ],
                  "start": 427,
                  "end": 517
                },
                "expression": false,
                "start": 391,
                "end": 517
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 372,
              "end": 517
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addTest",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 537
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TestCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 544,
                          "end": 552
                        },
                        "typeArguments": null,
                        "start": 544,
                        "end": 552
                      },
                      "start": 542,
                      "end": 552
                    },
                    "start": 538,
                    "end": 552
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 564,
                              "end": 568
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tests",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 569,
                              "end": 574
                            },
                            "optional": false,
                            "computed": false,
                            "start": 564,
                            "end": 574
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "push",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 575,
                            "end": 579
                          },
                          "optional": false,
                          "computed": false,
                          "start": 564,
                          "end": 579
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 580,
                            "end": 584
                          }
                        ],
                        "optional": false,
                        "start": 564,
                        "end": 585
                      },
                      "directive": null,
                      "start": 564,
                      "end": 586
                    }
                  ],
                  "start": 554,
                  "end": 592
                },
                "expression": false,
                "start": 537,
                "end": 592
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 523,
              "end": 592
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 607
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "success",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 631
                          },
                          "init": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 634,
                            "end": 638
                          },
                          "definite": false,
                          "start": 624,
                          "end": 638
                        }
                      ],
                      "declare": false,
                      "start": 620,
                      "end": 639
                    },
                    {
                      "type": "ForInStatement",
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 657,
                              "end": 661
                            },
                            "init": null,
                            "definite": false,
                            "start": 657,
                            "end": 661
                          }
                        ],
                        "declare": false,
                        "start": 653,
                        "end": 661
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 665,
                          "end": 669
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tests",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 670,
                          "end": 675
                        },
                        "optional": false,
                        "computed": false,
                        "start": 665,
                        "end": 675
                      },
                      "body": {
                        "type": "BlockStatement",
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
                                  "name": "exception",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 695,
                                  "end": 704
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 707,
                                  "end": 712
                                },
                                "definite": false,
                                "start": 695,
                                "end": 712
                              }
                            ],
                            "declare": false,
                            "start": 691,
                            "end": 713
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
                                  "name": "testcase",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 730,
                                  "end": 738
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TestCase",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 742,
                                      "end": 750
                                    },
                                    "typeArguments": null,
                                    "start": 742,
                                    "end": 750
                                  },
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 751,
                                        "end": 755
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tests",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 756,
                                        "end": 761
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 751,
                                      "end": 761
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "test",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 762,
                                      "end": 766
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 751,
                                    "end": 767
                                  },
                                  "start": 741,
                                  "end": 767
                                },
                                "definite": false,
                                "start": 730,
                                "end": 767
                              }
                            ],
                            "declare": false,
                            "start": 726,
                            "end": 767
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
                                  "name": "testResult",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 796,
                                      "end": 803
                                    },
                                    "start": 794,
                                    "end": 803
                                  },
                                  "start": 784,
                                  "end": 803
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 806,
                                  "end": 811
                                },
                                "definite": false,
                                "start": 784,
                                "end": 811
                              }
                            ],
                            "declare": false,
                            "start": 780,
                            "end": 812
                          },
                          {
                            "type": "TryStatement",
                            "block": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "testResult",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 847,
                                      "end": 857
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "testcase",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 860,
                                          "end": 868
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "test",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 869,
                                          "end": 873
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 860,
                                        "end": 873
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 860,
                                      "end": 875
                                    },
                                    "start": 847,
                                    "end": 875
                                  },
                                  "directive": null,
                                  "start": 847,
                                  "end": 876
                                }
                              ],
                              "start": 829,
                              "end": 890
                            },
                            "handler": {
                              "type": "CatchClause",
                              "param": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 910,
                                "end": 911
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "exception",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 931,
                                        "end": 940
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 943,
                                        "end": 947
                                      },
                                      "start": 931,
                                      "end": 947
                                    },
                                    "directive": null,
                                    "start": 931,
                                    "end": 948
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "testResult",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 965,
                                        "end": 975
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 978,
                                        "end": 983
                                      },
                                      "start": 965,
                                      "end": 983
                                    },
                                    "directive": null,
                                    "start": 965,
                                    "end": 984
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "testcase",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1012,
                                            "end": 1020
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "errorMessageRegEx",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1021,
                                            "end": 1038
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1012,
                                          "end": 1038
                                        },
                                        "prefix": true,
                                        "start": 1005,
                                        "end": 1038
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Literal",
                                        "value": "string",
                                        "raw": "\"string\"",
                                        "start": 1043,
                                        "end": 1051
                                      },
                                      "start": 1005,
                                      "end": 1051
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "test": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "testcase",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1079,
                                                "end": 1087
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "errorMessageRegEx",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1088,
                                                "end": 1105
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1079,
                                              "end": 1105
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": "",
                                              "raw": "\"\"",
                                              "start": 1110,
                                              "end": 1112
                                            },
                                            "start": 1079,
                                            "end": 1112
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "testResult",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1161,
                                                    "end": 1171
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": true,
                                                    "raw": "true",
                                                    "start": 1174,
                                                    "end": 1178
                                                  },
                                                  "start": 1161,
                                                  "end": 1178
                                                },
                                                "directive": null,
                                                "start": 1161,
                                                "end": 1179
                                              }
                                            ],
                                            "start": 1114,
                                            "end": 1201
                                          },
                                          "alternate": {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1211,
                                                "end": 1212
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "message",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1213,
                                                "end": 1220
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1211,
                                              "end": 1220
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
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
                                                        "name": "regex",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1252,
                                                        "end": 1257
                                                      },
                                                      "init": {
                                                        "type": "NewExpression",
                                                        "callee": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "RegExp",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1264,
                                                          "end": 1270
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [
                                                          {
                                                            "type": "MemberExpression",
                                                            "object": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "testcase",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1271,
                                                              "end": 1279
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "errorMessageRegEx",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 1280,
                                                              "end": 1297
                                                            },
                                                            "optional": false,
                                                            "computed": false,
                                                            "start": 1271,
                                                            "end": 1297
                                                          }
                                                        ],
                                                        "start": 1260,
                                                        "end": 1298
                                                      },
                                                      "definite": false,
                                                      "start": 1252,
                                                      "end": 1298
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 1248,
                                                  "end": 1299
                                                },
                                                {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "testResult",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1324,
                                                      "end": 1334
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "regex",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1337,
                                                          "end": 1342
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "test",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1343,
                                                          "end": 1347
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 1337,
                                                        "end": 1347
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "e",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1348,
                                                            "end": 1349
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "message",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 1350,
                                                            "end": 1357
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 1348,
                                                          "end": 1357
                                                        }
                                                      ],
                                                      "optional": false,
                                                      "start": 1337,
                                                      "end": 1358
                                                    },
                                                    "start": 1324,
                                                    "end": 1358
                                                  },
                                                  "directive": null,
                                                  "start": 1324,
                                                  "end": 1359
                                                }
                                              ],
                                              "start": 1222,
                                              "end": 1381
                                            },
                                            "alternate": null,
                                            "start": 1207,
                                            "end": 1381
                                          },
                                          "start": 1075,
                                          "end": 1381
                                        }
                                      ],
                                      "start": 1053,
                                      "end": 1399
                                    },
                                    "alternate": null,
                                    "start": 1001,
                                    "end": 1399
                                  },
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "testResult",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1421,
                                        "end": 1431
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 1436,
                                        "end": 1441
                                      },
                                      "start": 1421,
                                      "end": 1441
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "start": 1443,
                                      "end": 1508
                                    },
                                    "alternate": null,
                                    "start": 1417,
                                    "end": 1508
                                  }
                                ],
                                "start": 913,
                                "end": 1522
                              },
                              "start": 903,
                              "end": 1522
                            },
                            "finalizer": null,
                            "start": 825,
                            "end": 1522
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "testcase",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1540,
                                    "end": 1548
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "errorMessageRegEx",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1549,
                                    "end": 1566
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1540,
                                  "end": 1566
                                },
                                "operator": "!==",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1571,
                                  "end": 1580
                                },
                                "start": 1540,
                                "end": 1580
                              },
                              "operator": "&&",
                              "right": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "exception",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1586,
                                  "end": 1595
                                },
                                "prefix": true,
                                "start": 1585,
                                "end": 1595
                              },
                              "start": 1539,
                              "end": 1595
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "success",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1615,
                                      "end": 1622
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 1625,
                                      "end": 1630
                                    },
                                    "start": 1615,
                                    "end": 1630
                                  },
                                  "directive": null,
                                  "start": 1615,
                                  "end": 1631
                                }
                              ],
                              "start": 1597,
                              "end": 1645
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "testResult",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1656,
                                  "end": 1666
                                },
                                "prefix": true,
                                "start": 1655,
                                "end": 1666
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "success",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1686,
                                        "end": 1693
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 1696,
                                        "end": 1701
                                      },
                                      "start": 1686,
                                      "end": 1701
                                    },
                                    "directive": null,
                                    "start": 1686,
                                    "end": 1702
                                  }
                                ],
                                "start": 1668,
                                "end": 1716
                              },
                              "alternate": null,
                              "start": 1651,
                              "end": 1716
                            },
                            "start": 1535,
                            "end": 1716
                          }
                        ],
                        "start": 677,
                        "end": 1726
                      },
                      "start": 648,
                      "end": 1726
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "success",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1739,
                        "end": 1746
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1748,
                        "end": 1759
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1765,
                        "end": 1776
                      },
                      "start": 1735,
                      "end": 1776
                    }
                  ],
                  "start": 610,
                  "end": 1782
                },
                "expression": false,
                "start": 607,
                "end": 1782
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 597,
              "end": 1782
            }
          ],
          "start": 328,
          "end": 1784
        },
        "abstract": false,
        "declare": false,
        "start": 311,
        "end": 1784
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 304,
      "end": 1784
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
              "name": "tests",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TestRunner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1804,
                    "end": 1814
                  },
                  "typeArguments": null,
                  "start": 1804,
                  "end": 1814
                },
                "start": 1802,
                "end": 1814
              },
              "start": 1797,
              "end": 1814
            },
            "init": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1840,
                            "end": 1850
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestRunner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1857,
                              "end": 1867
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1853,
                            "end": 1869
                          },
                          "definite": false,
                          "start": 1840,
                          "end": 1869
                        }
                      ],
                      "declare": false,
                      "start": 1836,
                      "end": 1870
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1924,
                            "end": 1934
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1935,
                            "end": 1942
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1924,
                          "end": 1942
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1947,
                              "end": 1955
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Basic test",
                                "raw": "\"Basic test\"",
                                "start": 1956,
                                "end": 1968
                              },
                              {
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
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 1991,
                                        "end": 1995
                                      },
                                      "start": 1984,
                                      "end": 1996
                                    }
                                  ],
                                  "start": 1982,
                                  "end": 1998
                                },
                                "expression": false,
                                "start": 1970,
                                "end": 1998
                              }
                            ],
                            "start": 1943,
                            "end": 1999
                          }
                        ],
                        "optional": false,
                        "start": 1924,
                        "end": 2000
                      },
                      "directive": null,
                      "start": 1924,
                      "end": 2001
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2006,
                            "end": 2016
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2017,
                            "end": 2024
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2006,
                          "end": 2024
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2029,
                              "end": 2037
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test for any error",
                                "raw": "\"Test for any error\"",
                                "start": 2038,
                                "end": 2058
                              },
                              {
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
                                      "type": "ThrowStatement",
                                      "argument": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2084,
                                          "end": 2089
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 2080,
                                        "end": 2091
                                      },
                                      "start": 2074,
                                      "end": 2092
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 2100,
                                        "end": 2105
                                      },
                                      "start": 2093,
                                      "end": 2106
                                    }
                                  ],
                                  "start": 2072,
                                  "end": 2108
                                },
                                "expression": false,
                                "start": 2060,
                                "end": 2108
                              },
                              {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 2110,
                                "end": 2112
                              }
                            ],
                            "start": 2025,
                            "end": 2113
                          }
                        ],
                        "optional": false,
                        "start": 2006,
                        "end": 2114
                      },
                      "directive": null,
                      "start": 2006,
                      "end": 2115
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2120,
                            "end": 2130
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2131,
                            "end": 2138
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2120,
                          "end": 2138
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2143,
                              "end": 2151
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test RegEx error message match",
                                "raw": "\"Test RegEx error message match\"",
                                "start": 2152,
                                "end": 2184
                              },
                              {
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
                                      "type": "ThrowStatement",
                                      "argument": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2210,
                                          "end": 2215
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "Should also pass",
                                            "raw": "\"Should also pass\"",
                                            "start": 2216,
                                            "end": 2234
                                          }
                                        ],
                                        "start": 2206,
                                        "end": 2235
                                      },
                                      "start": 2200,
                                      "end": 2236
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false",
                                        "start": 2244,
                                        "end": 2249
                                      },
                                      "start": 2237,
                                      "end": 2250
                                    }
                                  ],
                                  "start": 2198,
                                  "end": 2252
                                },
                                "expression": false,
                                "start": 2186,
                                "end": 2252
                              },
                              {
                                "type": "Literal",
                                "value": "Should [also]+ pass",
                                "raw": "\"Should [also]+ pass\"",
                                "start": 2254,
                                "end": 2275
                              }
                            ],
                            "start": 2139,
                            "end": 2276
                          }
                        ],
                        "optional": false,
                        "start": 2120,
                        "end": 2277
                      },
                      "directive": null,
                      "start": 2120,
                      "end": 2278
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2283,
                            "end": 2293
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2294,
                            "end": 2301
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2283,
                          "end": 2301
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2306,
                              "end": 2314
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test array compare true",
                                "raw": "\"Test array compare true\"",
                                "start": 2315,
                                "end": 2340
                              },
                              {
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2363,
                                            "end": 2373
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2374,
                                            "end": 2386
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2363,
                                          "end": 2386
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 2388,
                                                "end": 2389
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2",
                                                "start": 2391,
                                                "end": 2392
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3",
                                                "start": 2394,
                                                "end": 2395
                                              }
                                            ],
                                            "start": 2387,
                                            "end": 2396
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 2399,
                                                "end": 2400
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2",
                                                "start": 2402,
                                                "end": 2403
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3",
                                                "start": 2405,
                                                "end": 2406
                                              }
                                            ],
                                            "start": 2398,
                                            "end": 2407
                                          }
                                        ],
                                        "optional": false,
                                        "start": 2363,
                                        "end": 2408
                                      },
                                      "start": 2356,
                                      "end": 2409
                                    }
                                  ],
                                  "start": 2354,
                                  "end": 2411
                                },
                                "expression": false,
                                "start": 2342,
                                "end": 2411
                              }
                            ],
                            "start": 2302,
                            "end": 2412
                          }
                        ],
                        "optional": false,
                        "start": 2283,
                        "end": 2413
                      },
                      "directive": null,
                      "start": 2283,
                      "end": 2414
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2419,
                            "end": 2429
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2430,
                            "end": 2437
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2419,
                          "end": 2437
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2442,
                              "end": 2450
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test array compare false",
                                "raw": "\"Test array compare false\"",
                                "start": 2451,
                                "end": 2477
                              },
                              {
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
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestRunner",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2501,
                                              "end": 2511
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "arrayCompare",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2512,
                                              "end": 2524
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2501,
                                            "end": 2524
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3",
                                                  "start": 2526,
                                                  "end": 2527
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2",
                                                  "start": 2529,
                                                  "end": 2530
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3",
                                                  "start": 2532,
                                                  "end": 2533
                                                }
                                              ],
                                              "start": 2525,
                                              "end": 2534
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "value": 1,
                                                  "raw": "1",
                                                  "start": 2537,
                                                  "end": 2538
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 2,
                                                  "raw": "2",
                                                  "start": 2540,
                                                  "end": 2541
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": 3,
                                                  "raw": "3",
                                                  "start": 2543,
                                                  "end": 2544
                                                }
                                              ],
                                              "start": 2536,
                                              "end": 2545
                                            }
                                          ],
                                          "optional": false,
                                          "start": 2501,
                                          "end": 2546
                                        },
                                        "prefix": true,
                                        "start": 2500,
                                        "end": 2546
                                      },
                                      "start": 2493,
                                      "end": 2547
                                    }
                                  ],
                                  "start": 2491,
                                  "end": 2549
                                },
                                "expression": false,
                                "start": 2479,
                                "end": 2549
                              }
                            ],
                            "start": 2438,
                            "end": 2550
                          }
                        ],
                        "optional": false,
                        "start": 2419,
                        "end": 2551
                      },
                      "directive": null,
                      "start": 2419,
                      "end": 2552
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2586,
                            "end": 2596
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2597,
                            "end": 2604
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2586,
                          "end": 2604
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2609,
                              "end": 2617
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check file exists",
                                "raw": "\"Check file exists\"",
                                "start": 2618,
                                "end": 2637
                              },
                              {
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "FileManager",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2680,
                                              "end": 2691
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "DirectoryManager",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2692,
                                              "end": 2708
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2680,
                                            "end": 2708
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fileExists",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2709,
                                            "end": 2719
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2680,
                                          "end": 2719
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2720,
                                              "end": 2731
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\Test.txt",
                                              "raw": "\"\\\\Test.txt\"",
                                              "start": 2734,
                                              "end": 2746
                                            },
                                            "start": 2720,
                                            "end": 2746
                                          }
                                        ],
                                        "optional": false,
                                        "start": 2680,
                                        "end": 2747
                                      },
                                      "start": 2673,
                                      "end": 2748
                                    }
                                  ],
                                  "start": 2659,
                                  "end": 2758
                                },
                                "expression": false,
                                "start": 2647,
                                "end": 2758
                              }
                            ],
                            "start": 2605,
                            "end": 2759
                          }
                        ],
                        "optional": false,
                        "start": 2586,
                        "end": 2760
                      },
                      "directive": null,
                      "start": 2586,
                      "end": 2761
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2766,
                            "end": 2776
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2777,
                            "end": 2784
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2766,
                          "end": 2784
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2789,
                              "end": 2797
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check file doesn't exist",
                                "raw": "\"Check file doesn't exist\"",
                                "start": 2798,
                                "end": 2824
                              },
                              {
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
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2868,
                                                "end": 2879
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "DirectoryManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2880,
                                                "end": 2896
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 2868,
                                              "end": 2896
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fileExists",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2897,
                                              "end": 2907
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2868,
                                            "end": 2907
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "TestFileDir",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2908,
                                                "end": 2919
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "value": "\\Test2.txt",
                                                "raw": "\"\\\\Test2.txt\"",
                                                "start": 2922,
                                                "end": 2935
                                              },
                                              "start": 2908,
                                              "end": 2935
                                            }
                                          ],
                                          "optional": false,
                                          "start": 2868,
                                          "end": 2936
                                        },
                                        "prefix": true,
                                        "start": 2867,
                                        "end": 2936
                                      },
                                      "start": 2860,
                                      "end": 2937
                                    }
                                  ],
                                  "start": 2846,
                                  "end": 2947
                                },
                                "expression": false,
                                "start": 2834,
                                "end": 2947
                              }
                            ],
                            "start": 2785,
                            "end": 2948
                          }
                        ],
                        "optional": false,
                        "start": 2766,
                        "end": 2949
                      },
                      "directive": null,
                      "start": 2766,
                      "end": 2950
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2991,
                            "end": 3001
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3002,
                            "end": 3009
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2991,
                          "end": 3009
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3014,
                              "end": 3022
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check text file match",
                                "raw": "\"Check text file match\"",
                                "start": 3023,
                                "end": 3046
                              },
                              {
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
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3090,
                                                  "end": 3101
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3102,
                                                  "end": 3112
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3090,
                                                "end": 3112
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3113,
                                                "end": 3123
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3090,
                                              "end": 3123
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\somedir\\readme.txt",
                                                "raw": "\"C:\\\\somedir\\\\readme.txt\"",
                                                "start": 3124,
                                                "end": 3149
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3090,
                                            "end": 3150
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3170,
                                                  "end": 3181
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3182,
                                                  "end": 3192
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3170,
                                                "end": 3192
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3193,
                                                "end": 3203
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3170,
                                              "end": 3203
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\spaces path\\myapp.str",
                                                "raw": "\"C:\\\\spaces path\\\\myapp.str\"",
                                                "start": 3204,
                                                "end": 3232
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3170,
                                            "end": 3233
                                          },
                                          "start": 3090,
                                          "end": 3233
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3253,
                                                "end": 3264
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3265,
                                                "end": 3275
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3253,
                                              "end": 3275
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "isTextFile",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3276,
                                              "end": 3286
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 3253,
                                            "end": 3286
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "C:\\somedir\\code.js",
                                              "raw": "\"C:\\\\somedir\\\\code.js\"",
                                              "start": 3287,
                                              "end": 3309
                                            }
                                          ],
                                          "optional": false,
                                          "start": 3253,
                                          "end": 3310
                                        },
                                        "start": 3090,
                                        "end": 3310
                                      },
                                      "start": 3082,
                                      "end": 3311
                                    }
                                  ],
                                  "start": 3068,
                                  "end": 3321
                                },
                                "expression": false,
                                "start": 3056,
                                "end": 3321
                              }
                            ],
                            "start": 3010,
                            "end": 3322
                          }
                        ],
                        "optional": false,
                        "start": 2991,
                        "end": 3323
                      },
                      "directive": null,
                      "start": 2991,
                      "end": 3324
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3329,
                            "end": 3339
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3340,
                            "end": 3347
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3329,
                          "end": 3347
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3352,
                              "end": 3360
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check makefile match",
                                "raw": "\"Check makefile match\"",
                                "start": 3361,
                                "end": 3383
                              },
                              {
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "FileManager",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3426,
                                              "end": 3437
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "FileBuffer",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3438,
                                              "end": 3448
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 3426,
                                            "end": 3448
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "isTextFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3449,
                                            "end": 3459
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3426,
                                          "end": 3459
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": "C:\\some dir\\makefile",
                                            "raw": "\"C:\\\\some dir\\\\makefile\"",
                                            "start": 3460,
                                            "end": 3484
                                          }
                                        ],
                                        "optional": false,
                                        "start": 3426,
                                        "end": 3485
                                      },
                                      "start": 3419,
                                      "end": 3486
                                    }
                                  ],
                                  "start": 3405,
                                  "end": 3496
                                },
                                "expression": false,
                                "start": 3393,
                                "end": 3496
                              }
                            ],
                            "start": 3348,
                            "end": 3497
                          }
                        ],
                        "optional": false,
                        "start": 3329,
                        "end": 3498
                      },
                      "directive": null,
                      "start": 3329,
                      "end": 3499
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3504,
                            "end": 3514
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3515,
                            "end": 3522
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3504,
                          "end": 3522
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3527,
                              "end": 3535
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check binary file doesn't match",
                                "raw": "\"Check binary file doesn't match\"",
                                "start": 3536,
                                "end": 3569
                              },
                              {
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
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3614,
                                                  "end": 3625
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3626,
                                                  "end": 3636
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3614,
                                                "end": 3636
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3637,
                                                "end": 3647
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3614,
                                              "end": 3647
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\somedir\\app.exe",
                                                "raw": "\"C:\\\\somedir\\\\app.exe\"",
                                                "start": 3648,
                                                "end": 3670
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3614,
                                            "end": 3671
                                          },
                                          "prefix": true,
                                          "start": 3613,
                                          "end": 3671
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3688,
                                                  "end": 3699
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3700,
                                                  "end": 3710
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3688,
                                                "end": 3710
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "isTextFile",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3711,
                                                "end": 3721
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3688,
                                              "end": 3721
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": "C:\\somedir\\my lib.dll",
                                                "raw": "\"C:\\\\somedir\\\\my lib.dll\"",
                                                "start": 3722,
                                                "end": 3747
                                              }
                                            ],
                                            "optional": false,
                                            "start": 3688,
                                            "end": 3748
                                          },
                                          "prefix": true,
                                          "start": 3687,
                                          "end": 3748
                                        },
                                        "start": 3613,
                                        "end": 3748
                                      },
                                      "start": 3605,
                                      "end": 3750
                                    }
                                  ],
                                  "start": 3591,
                                  "end": 3760
                                },
                                "expression": false,
                                "start": 3579,
                                "end": 3760
                              }
                            ],
                            "start": 3523,
                            "end": 3761
                          }
                        ],
                        "optional": false,
                        "start": 3504,
                        "end": 3762
                      },
                      "directive": null,
                      "start": 3504,
                      "end": 3763
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3805,
                            "end": 3815
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3816,
                            "end": 3823
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3805,
                          "end": 3823
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3828,
                              "end": 3836
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check App defaults",
                                "raw": "\"Check App defaults\"",
                                "start": 3837,
                                "end": 3857
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "app",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3897,
                                            "end": 3900
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3907,
                                                "end": 3910
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3911,
                                                "end": 3914
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3907,
                                              "end": 3914
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [],
                                                "start": 3915,
                                                "end": 3917
                                              }
                                            ],
                                            "start": 3903,
                                            "end": 3918
                                          },
                                          "definite": false,
                                          "start": 3897,
                                          "end": 3918
                                        }
                                      ],
                                      "declare": false,
                                      "start": 3893,
                                      "end": 3919
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "left": {
                                                "type": "LogicalExpression",
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3940,
                                                        "end": 3943
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "fixLines",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3944,
                                                        "end": 3952
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 3940,
                                                      "end": 3952
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": false,
                                                      "raw": "false",
                                                      "start": 3957,
                                                      "end": 3962
                                                    },
                                                    "start": 3940,
                                                    "end": 3962
                                                  },
                                                  "operator": "&&",
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3985,
                                                        "end": 3988
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "recurse",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 3989,
                                                        "end": 3996
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 3985,
                                                      "end": 3996
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": true,
                                                      "raw": "true",
                                                      "start": 4001,
                                                      "end": 4005
                                                    },
                                                    "start": 3985,
                                                    "end": 4005
                                                  },
                                                  "start": 3940,
                                                  "end": 4005
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "app",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4028,
                                                      "end": 4031
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "lineEndings",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4032,
                                                      "end": 4043
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 4028,
                                                    "end": 4043
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": "CRLF",
                                                    "raw": "\"CRLF\"",
                                                    "start": 4048,
                                                    "end": 4054
                                                  },
                                                  "start": 4028,
                                                  "end": 4054
                                                },
                                                "start": 3940,
                                                "end": 4054
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4077,
                                                    "end": 4080
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "matchPattern",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4081,
                                                    "end": 4093
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 4077,
                                                  "end": 4093
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "undefined",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4098,
                                                  "end": 4107
                                                },
                                                "start": 4077,
                                                "end": 4107
                                              },
                                              "start": 3940,
                                              "end": 4107
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4130,
                                                  "end": 4133
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "rootDirectory",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4134,
                                                  "end": 4147
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 4130,
                                                "end": 4147
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "value": ".\\",
                                                "raw": "\".\\\\\"",
                                                "start": 4152,
                                                "end": 4157
                                              },
                                              "start": 4130,
                                              "end": 4157
                                            },
                                            "start": 3940,
                                            "end": 4157
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4180,
                                                  "end": 4183
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "encodings",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4184,
                                                  "end": 4193
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 4180,
                                                "end": 4193
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 4194,
                                                "end": 4195
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 4180,
                                              "end": 4196
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": "ascii",
                                              "raw": "\"ascii\"",
                                              "start": 4201,
                                              "end": 4208
                                            },
                                            "start": 4180,
                                            "end": 4208
                                          },
                                          "start": 3940,
                                          "end": 4208
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "app",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4231,
                                                "end": 4234
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "encodings",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4235,
                                                "end": 4244
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4231,
                                              "end": 4244
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 4245,
                                              "end": 4246
                                            },
                                            "optional": false,
                                            "computed": true,
                                            "start": 4231,
                                            "end": 4247
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8nobom",
                                            "raw": "\"utf8nobom\"",
                                            "start": 4252,
                                            "end": 4263
                                          },
                                          "start": 4231,
                                          "end": 4263
                                        },
                                        "start": 3940,
                                        "end": 4263
                                      },
                                      "start": 3932,
                                      "end": 4265
                                    }
                                  ],
                                  "start": 3879,
                                  "end": 4275
                                },
                                "expression": false,
                                "start": 3867,
                                "end": 4275
                              }
                            ],
                            "start": 3824,
                            "end": 4276
                          }
                        ],
                        "optional": false,
                        "start": 3805,
                        "end": 4277
                      },
                      "directive": null,
                      "start": 3805,
                      "end": 4278
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4283,
                            "end": 4293
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4294,
                            "end": 4301
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4283,
                          "end": 4301
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4306,
                              "end": 4314
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check App params",
                                "raw": "\"Check App params\"",
                                "start": 4315,
                                "end": 4333
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "app",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4373,
                                            "end": 4376
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4383,
                                                "end": 4386
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4387,
                                                "end": 4390
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4383,
                                              "end": 4390
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "-dir=C:\\test dir",
                                                    "raw": "\"-dir=C:\\\\test dir\"",
                                                    "start": 4392,
                                                    "end": 4411
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-lineEndings=LF",
                                                    "raw": "\"-lineEndings=LF\"",
                                                    "start": 4413,
                                                    "end": 4430
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-encodings=utf16be,ascii",
                                                    "raw": "\"-encodings=utf16be,ascii\"",
                                                    "start": 4432,
                                                    "end": 4458
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-recurse=false",
                                                    "raw": "\"-recurse=false\"",
                                                    "start": 4460,
                                                    "end": 4476
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "value": "-fixlines",
                                                    "raw": "\"-fixlines\"",
                                                    "start": 4478,
                                                    "end": 4489
                                                  }
                                                ],
                                                "start": 4391,
                                                "end": 4490
                                              }
                                            ],
                                            "start": 4379,
                                            "end": 4491
                                          },
                                          "definite": false,
                                          "start": 4373,
                                          "end": 4491
                                        }
                                      ],
                                      "declare": false,
                                      "start": 4369,
                                      "end": 4492
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "LogicalExpression",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "left": {
                                                "type": "LogicalExpression",
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "left": {
                                                    "type": "LogicalExpression",
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "app",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4513,
                                                          "end": 4516
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "fixLines",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4517,
                                                          "end": 4525
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 4513,
                                                        "end": 4525
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": true,
                                                        "raw": "true",
                                                        "start": 4530,
                                                        "end": 4534
                                                      },
                                                      "start": 4513,
                                                      "end": 4534
                                                    },
                                                    "operator": "&&",
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "object": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "app",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4557,
                                                          "end": 4560
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "lineEndings",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 4561,
                                                          "end": 4572
                                                        },
                                                        "optional": false,
                                                        "computed": false,
                                                        "start": 4557,
                                                        "end": 4572
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "value": "LF",
                                                        "raw": "\"LF\"",
                                                        "start": 4577,
                                                        "end": 4581
                                                      },
                                                      "start": 4557,
                                                      "end": 4581
                                                    },
                                                    "start": 4513,
                                                    "end": 4581
                                                  },
                                                  "operator": "&&",
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "object": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 4604,
                                                        "end": 4607
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "recurse",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 4608,
                                                        "end": 4615
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 4604,
                                                      "end": 4615
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": false,
                                                      "raw": "false",
                                                      "start": 4620,
                                                      "end": 4625
                                                    },
                                                    "start": 4604,
                                                    "end": 4625
                                                  },
                                                  "start": 4513,
                                                  "end": 4625
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "app",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4648,
                                                      "end": 4651
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "matchPattern",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 4652,
                                                      "end": 4664
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 4648,
                                                    "end": 4664
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "undefined",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4669,
                                                    "end": 4678
                                                  },
                                                  "start": 4648,
                                                  "end": 4678
                                                },
                                                "start": 4513,
                                                "end": 4678
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4701,
                                                    "end": 4704
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "rootDirectory",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4705,
                                                    "end": 4718
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 4701,
                                                  "end": 4718
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "C:\\test dir",
                                                  "raw": "\"C:\\\\test dir\"",
                                                  "start": 4723,
                                                  "end": 4737
                                                },
                                                "start": 4701,
                                                "end": 4737
                                              },
                                              "start": 4513,
                                              "end": 4737
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4760,
                                                    "end": 4763
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "encodings",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 4764,
                                                    "end": 4773
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 4760,
                                                  "end": 4773
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0",
                                                  "start": 4774,
                                                  "end": 4775
                                                },
                                                "optional": false,
                                                "computed": true,
                                                "start": 4760,
                                                "end": 4776
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "value": "utf16be",
                                                "raw": "\"utf16be\"",
                                                "start": 4781,
                                                "end": 4790
                                              },
                                              "start": 4760,
                                              "end": 4790
                                            },
                                            "start": 4513,
                                            "end": 4790
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4813,
                                                  "end": 4816
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "encodings",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 4817,
                                                  "end": 4826
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 4813,
                                                "end": 4826
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 4827,
                                                "end": 4828
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 4813,
                                              "end": 4829
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": "ascii",
                                              "raw": "\"ascii\"",
                                              "start": 4834,
                                              "end": 4841
                                            },
                                            "start": 4813,
                                            "end": 4841
                                          },
                                          "start": 4513,
                                          "end": 4841
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "app",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4864,
                                                "end": 4867
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "encodings",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4868,
                                                "end": 4877
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4864,
                                              "end": 4877
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "length",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 4878,
                                              "end": 4884
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 4864,
                                            "end": 4884
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2",
                                            "start": 4889,
                                            "end": 4890
                                          },
                                          "start": 4864,
                                          "end": 4890
                                        },
                                        "start": 4513,
                                        "end": 4890
                                      },
                                      "start": 4505,
                                      "end": 4892
                                    }
                                  ],
                                  "start": 4355,
                                  "end": 4902
                                },
                                "expression": false,
                                "start": 4343,
                                "end": 4902
                              }
                            ],
                            "start": 4302,
                            "end": 4903
                          }
                        ],
                        "optional": false,
                        "start": 4283,
                        "end": 4904
                      },
                      "directive": null,
                      "start": 4283,
                      "end": 4905
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4943,
                            "end": 4953
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4954,
                            "end": 4961
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4943,
                          "end": 4961
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4966,
                              "end": 4974
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection no BOM",
                                "raw": "\"Check encoding detection no BOM\"",
                                "start": 4975,
                                "end": 5008
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5048,
                                            "end": 5050
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5057,
                                                "end": 5068
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5069,
                                                "end": 5079
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5057,
                                              "end": 5079
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5080,
                                                  "end": 5091
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\noBOM.txt",
                                                  "raw": "\"\\\\noBOM.txt\"",
                                                  "start": 5094,
                                                  "end": 5107
                                                },
                                                "start": 5080,
                                                "end": 5107
                                              }
                                            ],
                                            "start": 5053,
                                            "end": 5108
                                          },
                                          "definite": false,
                                          "start": 5048,
                                          "end": 5108
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5044,
                                      "end": 5109
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5129,
                                              "end": 5131
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5132,
                                              "end": 5135
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5129,
                                            "end": 5135
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "'none'",
                                            "start": 5140,
                                            "end": 5146
                                          },
                                          "start": 5129,
                                          "end": 5146
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5150,
                                              "end": 5152
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5153,
                                              "end": 5161
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5150,
                                            "end": 5161
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 5166,
                                            "end": 5172
                                          },
                                          "start": 5150,
                                          "end": 5172
                                        },
                                        "start": 5129,
                                        "end": 5172
                                      },
                                      "start": 5122,
                                      "end": 5173
                                    }
                                  ],
                                  "start": 5030,
                                  "end": 5183
                                },
                                "expression": false,
                                "start": 5018,
                                "end": 5183
                              }
                            ],
                            "start": 4962,
                            "end": 5184
                          }
                        ],
                        "optional": false,
                        "start": 4943,
                        "end": 5185
                      },
                      "directive": null,
                      "start": 4943,
                      "end": 5186
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5191,
                            "end": 5201
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5202,
                            "end": 5209
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5191,
                          "end": 5209
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5214,
                              "end": 5222
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection UTF8 BOM",
                                "raw": "\"Check encoding detection UTF8 BOM\"",
                                "start": 5223,
                                "end": 5258
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5298,
                                            "end": 5300
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5307,
                                                "end": 5318
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5319,
                                                "end": 5329
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5307,
                                              "end": 5329
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5330,
                                                  "end": 5341
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 5344,
                                                  "end": 5359
                                                },
                                                "start": 5330,
                                                "end": 5359
                                              }
                                            ],
                                            "start": 5303,
                                            "end": 5360
                                          },
                                          "definite": false,
                                          "start": 5298,
                                          "end": 5360
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5294,
                                      "end": 5361
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5381,
                                              "end": 5383
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5384,
                                              "end": 5387
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5381,
                                            "end": 5387
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 5392,
                                            "end": 5398
                                          },
                                          "start": 5381,
                                          "end": 5398
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5402,
                                              "end": 5404
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5405,
                                              "end": 5413
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5402,
                                            "end": 5413
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 5418,
                                            "end": 5424
                                          },
                                          "start": 5402,
                                          "end": 5424
                                        },
                                        "start": 5381,
                                        "end": 5424
                                      },
                                      "start": 5374,
                                      "end": 5425
                                    }
                                  ],
                                  "start": 5280,
                                  "end": 5435
                                },
                                "expression": false,
                                "start": 5268,
                                "end": 5435
                              }
                            ],
                            "start": 5210,
                            "end": 5436
                          }
                        ],
                        "optional": false,
                        "start": 5191,
                        "end": 5437
                      },
                      "directive": null,
                      "start": 5191,
                      "end": 5438
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5443,
                            "end": 5453
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5454,
                            "end": 5461
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5443,
                          "end": 5461
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5466,
                              "end": 5474
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection UTF16be BOM",
                                "raw": "\"Check encoding detection UTF16be BOM\"",
                                "start": 5475,
                                "end": 5513
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5553,
                                            "end": 5555
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5562,
                                                "end": 5573
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5574,
                                                "end": 5584
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5562,
                                              "end": 5584
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5585,
                                                  "end": 5596
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF16BE.txt",
                                                  "raw": "\"\\\\UTF16BE.txt\"",
                                                  "start": 5599,
                                                  "end": 5614
                                                },
                                                "start": 5585,
                                                "end": 5614
                                              }
                                            ],
                                            "start": 5558,
                                            "end": 5615
                                          },
                                          "definite": false,
                                          "start": 5553,
                                          "end": 5615
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5549,
                                      "end": 5616
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5636,
                                              "end": 5638
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5639,
                                              "end": 5642
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5636,
                                            "end": 5642
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16be",
                                            "raw": "'utf16be'",
                                            "start": 5647,
                                            "end": 5656
                                          },
                                          "start": 5636,
                                          "end": 5656
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5660,
                                              "end": 5662
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5663,
                                              "end": 5671
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5660,
                                            "end": 5671
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16be",
                                            "raw": "'utf16be'",
                                            "start": 5676,
                                            "end": 5685
                                          },
                                          "start": 5660,
                                          "end": 5685
                                        },
                                        "start": 5636,
                                        "end": 5685
                                      },
                                      "start": 5629,
                                      "end": 5686
                                    }
                                  ],
                                  "start": 5535,
                                  "end": 5696
                                },
                                "expression": false,
                                "start": 5523,
                                "end": 5696
                              }
                            ],
                            "start": 5462,
                            "end": 5697
                          }
                        ],
                        "optional": false,
                        "start": 5443,
                        "end": 5698
                      },
                      "directive": null,
                      "start": 5443,
                      "end": 5699
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5704,
                            "end": 5714
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5715,
                            "end": 5722
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5704,
                          "end": 5722
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5727,
                              "end": 5735
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding detection UTF16le BOM",
                                "raw": "\"Check encoding detection UTF16le BOM\"",
                                "start": 5736,
                                "end": 5774
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5814,
                                            "end": 5816
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5823,
                                                "end": 5834
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5835,
                                                "end": 5845
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 5823,
                                              "end": 5845
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 5846,
                                                  "end": 5857
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF16LE.txt",
                                                  "raw": "\"\\\\UTF16LE.txt\"",
                                                  "start": 5860,
                                                  "end": 5875
                                                },
                                                "start": 5846,
                                                "end": 5875
                                              }
                                            ],
                                            "start": 5819,
                                            "end": 5876
                                          },
                                          "definite": false,
                                          "start": 5814,
                                          "end": 5876
                                        }
                                      ],
                                      "declare": false,
                                      "start": 5810,
                                      "end": 5877
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5897,
                                              "end": 5899
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5900,
                                              "end": 5903
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5897,
                                            "end": 5903
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16le",
                                            "raw": "'utf16le'",
                                            "start": 5908,
                                            "end": 5917
                                          },
                                          "start": 5897,
                                          "end": 5917
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5921,
                                              "end": 5923
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 5924,
                                              "end": 5932
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 5921,
                                            "end": 5932
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf16le",
                                            "raw": "'utf16le'",
                                            "start": 5937,
                                            "end": 5946
                                          },
                                          "start": 5921,
                                          "end": 5946
                                        },
                                        "start": 5897,
                                        "end": 5946
                                      },
                                      "start": 5890,
                                      "end": 5947
                                    }
                                  ],
                                  "start": 5796,
                                  "end": 5957
                                },
                                "expression": false,
                                "start": 5784,
                                "end": 5957
                              }
                            ],
                            "start": 5723,
                            "end": 5958
                          }
                        ],
                        "optional": false,
                        "start": 5704,
                        "end": 5959
                      },
                      "directive": null,
                      "start": 5704,
                      "end": 5960
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5965,
                            "end": 5975
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5976,
                            "end": 5983
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5965,
                          "end": 5983
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5988,
                              "end": 5996
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding on 1 bytes file",
                                "raw": "\"Check encoding on 1 bytes file\"",
                                "start": 5997,
                                "end": 6029
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6069,
                                            "end": 6071
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6078,
                                                "end": 6089
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6090,
                                                "end": 6100
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 6078,
                                              "end": 6100
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6101,
                                                  "end": 6112
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\1bytefile.txt",
                                                  "raw": "\"\\\\1bytefile.txt\"",
                                                  "start": 6115,
                                                  "end": 6132
                                                },
                                                "start": 6101,
                                                "end": 6132
                                              }
                                            ],
                                            "start": 6074,
                                            "end": 6133
                                          },
                                          "definite": false,
                                          "start": 6069,
                                          "end": 6133
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6065,
                                      "end": 6134
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6154,
                                              "end": 6156
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6157,
                                              "end": 6160
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6154,
                                            "end": 6160
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "'none'",
                                            "start": 6165,
                                            "end": 6171
                                          },
                                          "start": 6154,
                                          "end": 6171
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6175,
                                              "end": 6177
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6178,
                                              "end": 6186
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6175,
                                            "end": 6186
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 6191,
                                            "end": 6197
                                          },
                                          "start": 6175,
                                          "end": 6197
                                        },
                                        "start": 6154,
                                        "end": 6197
                                      },
                                      "start": 6147,
                                      "end": 6198
                                    }
                                  ],
                                  "start": 6051,
                                  "end": 6208
                                },
                                "expression": false,
                                "start": 6039,
                                "end": 6208
                              }
                            ],
                            "start": 5984,
                            "end": 6209
                          }
                        ],
                        "optional": false,
                        "start": 5965,
                        "end": 6210
                      },
                      "directive": null,
                      "start": 5965,
                      "end": 6211
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6216,
                            "end": 6226
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6227,
                            "end": 6234
                          },
                          "optional": false,
                          "computed": false,
                          "start": 6216,
                          "end": 6234
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6239,
                              "end": 6247
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check encoding on 0 bytes file",
                                "raw": "\"Check encoding on 0 bytes file\"",
                                "start": 6248,
                                "end": 6280
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6320,
                                            "end": 6322
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6329,
                                                "end": 6340
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6341,
                                                "end": 6351
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 6329,
                                              "end": 6351
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6352,
                                                  "end": 6363
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\0bytefile.txt",
                                                  "raw": "\"\\\\0bytefile.txt\"",
                                                  "start": 6366,
                                                  "end": 6383
                                                },
                                                "start": 6352,
                                                "end": 6383
                                              }
                                            ],
                                            "start": 6325,
                                            "end": 6384
                                          },
                                          "definite": false,
                                          "start": 6320,
                                          "end": 6384
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6316,
                                      "end": 6385
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6405,
                                              "end": 6407
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6408,
                                              "end": 6411
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6405,
                                            "end": 6411
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "none",
                                            "raw": "'none'",
                                            "start": 6416,
                                            "end": 6422
                                          },
                                          "start": 6405,
                                          "end": 6422
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6426,
                                              "end": 6428
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6429,
                                              "end": 6437
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 6426,
                                            "end": 6437
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "value": "utf8",
                                            "raw": "'utf8'",
                                            "start": 6442,
                                            "end": 6448
                                          },
                                          "start": 6426,
                                          "end": 6448
                                        },
                                        "start": 6405,
                                        "end": 6448
                                      },
                                      "start": 6398,
                                      "end": 6449
                                    }
                                  ],
                                  "start": 6302,
                                  "end": 6459
                                },
                                "expression": false,
                                "start": 6290,
                                "end": 6459
                              }
                            ],
                            "start": 6235,
                            "end": 6460
                          }
                        ],
                        "optional": false,
                        "start": 6216,
                        "end": 6461
                      },
                      "directive": null,
                      "start": 6216,
                      "end": 6462
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6495,
                            "end": 6505
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6506,
                            "end": 6513
                          },
                          "optional": false,
                          "computed": false,
                          "start": 6495,
                          "end": 6513
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6518,
                              "end": 6526
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check byte reader",
                                "raw": "\"Check byte reader\"",
                                "start": 6527,
                                "end": 6546
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6586,
                                            "end": 6588
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6595,
                                                "end": 6606
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 6607,
                                                "end": 6617
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 6595,
                                              "end": 6617
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6618,
                                                  "end": 6629
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 6632,
                                                  "end": 6647
                                                },
                                                "start": 6618,
                                                "end": 6647
                                              }
                                            ],
                                            "start": 6591,
                                            "end": 6648
                                          },
                                          "definite": false,
                                          "start": 6586,
                                          "end": 6648
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6582,
                                      "end": 6649
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6666,
                                            "end": 6671
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 6674,
                                            "end": 6676
                                          },
                                          "definite": false,
                                          "start": 6666,
                                          "end": 6676
                                        }
                                      ],
                                      "declare": false,
                                      "start": 6662,
                                      "end": 6677
                                    },
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 6699,
                                              "end": 6700
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 6703,
                                              "end": 6704
                                            },
                                            "definite": false,
                                            "start": 6699,
                                            "end": 6704
                                          }
                                        ],
                                        "declare": false,
                                        "start": 6695,
                                        "end": 6704
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 6706,
                                          "end": 6707
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 11,
                                          "raw": "11",
                                          "start": 6710,
                                          "end": 6712
                                        },
                                        "start": 6706,
                                        "end": 6712
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 6714,
                                          "end": 6715
                                        },
                                        "start": 6714,
                                        "end": 6717
                                      },
                                      "body": {
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
                                                  "name": "chars",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6737,
                                                  "end": 6742
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 6743,
                                                  "end": 6747
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 6737,
                                                "end": 6747
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 6748,
                                                      "end": 6750
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 6751,
                                                      "end": 6759
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 6748,
                                                    "end": 6759
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 6748,
                                                  "end": 6761
                                                }
                                              ],
                                              "optional": false,
                                              "start": 6737,
                                              "end": 6762
                                            },
                                            "directive": null,
                                            "start": 6737,
                                            "end": 6763
                                          }
                                        ],
                                        "start": 6719,
                                        "end": 6777
                                      },
                                      "start": 6690,
                                      "end": 6777
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
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6797,
                                            "end": 6807
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6808,
                                            "end": 6820
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 6797,
                                          "end": 6820
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6821,
                                            "end": 6826
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 6829,
                                                "end": 6833
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 195,
                                                "raw": "0xC3",
                                                "start": 6835,
                                                "end": 6839
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 168,
                                                "raw": "0xA8",
                                                "start": 6841,
                                                "end": 6845
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 225,
                                                "raw": "0xE1",
                                                "start": 6847,
                                                "end": 6851
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 180,
                                                "raw": "0xB4",
                                                "start": 6853,
                                                "end": 6857
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 163,
                                                "raw": "0xA3",
                                                "start": 6859,
                                                "end": 6863
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 226,
                                                "raw": "0xE2",
                                                "start": 6865,
                                                "end": 6869
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 128,
                                                "raw": "0x80",
                                                "start": 6871,
                                                "end": 6875
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 160,
                                                "raw": "0xA0",
                                                "start": 6877,
                                                "end": 6881
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x0D",
                                                "start": 6883,
                                                "end": 6887
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x0A",
                                                "start": 6889,
                                                "end": 6893
                                              }
                                            ],
                                            "start": 6828,
                                            "end": 6894
                                          }
                                        ],
                                        "optional": false,
                                        "start": 6797,
                                        "end": 6895
                                      },
                                      "start": 6790,
                                      "end": 6896
                                    }
                                  ],
                                  "start": 6568,
                                  "end": 6906
                                },
                                "expression": false,
                                "start": 6556,
                                "end": 6906
                              }
                            ],
                            "start": 6514,
                            "end": 6907
                          }
                        ],
                        "optional": false,
                        "start": 6495,
                        "end": 6908
                      },
                      "directive": null,
                      "start": 6495,
                      "end": 6909
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6916,
                            "end": 6926
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6927,
                            "end": 6934
                          },
                          "optional": false,
                          "computed": false,
                          "start": 6916,
                          "end": 6934
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6939,
                              "end": 6947
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check UTF8 decoding",
                                "raw": "\"Check UTF8 decoding\"",
                                "start": 6948,
                                "end": 6969
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7009,
                                            "end": 7011
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7018,
                                                "end": 7029
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7030,
                                                "end": 7040
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 7018,
                                              "end": 7040
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7041,
                                                  "end": 7052
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 7055,
                                                  "end": 7070
                                                },
                                                "start": 7041,
                                                "end": 7070
                                              }
                                            ],
                                            "start": 7014,
                                            "end": 7071
                                          },
                                          "definite": false,
                                          "start": 7009,
                                          "end": 7071
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7005,
                                      "end": 7072
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7089,
                                            "end": 7094
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 7097,
                                            "end": 7099
                                          },
                                          "definite": false,
                                          "start": 7089,
                                          "end": 7099
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7085,
                                      "end": 7100
                                    },
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 7122,
                                              "end": 7123
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 7126,
                                              "end": 7127
                                            },
                                            "definite": false,
                                            "start": 7122,
                                            "end": 7127
                                          }
                                        ],
                                        "declare": false,
                                        "start": 7118,
                                        "end": 7127
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7129,
                                          "end": 7130
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 6,
                                          "raw": "6",
                                          "start": 7133,
                                          "end": 7134
                                        },
                                        "start": 7129,
                                        "end": 7134
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7136,
                                          "end": 7137
                                        },
                                        "start": 7136,
                                        "end": 7139
                                      },
                                      "body": {
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
                                                  "name": "chars",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7159,
                                                  "end": 7164
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7165,
                                                  "end": 7169
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 7159,
                                                "end": 7169
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7170,
                                                      "end": 7172
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readUtf8CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7173,
                                                      "end": 7190
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 7170,
                                                    "end": 7190
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 7170,
                                                  "end": 7192
                                                }
                                              ],
                                              "optional": false,
                                              "start": 7159,
                                              "end": 7193
                                            },
                                            "directive": null,
                                            "start": 7159,
                                            "end": 7194
                                          }
                                        ],
                                        "start": 7141,
                                        "end": 7208
                                      },
                                      "start": 7113,
                                      "end": 7208
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
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7228,
                                            "end": 7238
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7239,
                                            "end": 7251
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7228,
                                          "end": 7251
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7252,
                                            "end": 7257
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 7260,
                                                "end": 7266
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0x00E8",
                                                "start": 7268,
                                                "end": 7274
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 7459,
                                                "raw": "0x1D23",
                                                "start": 7276,
                                                "end": 7282
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 8224,
                                                "raw": "0x2020",
                                                "start": 7284,
                                                "end": 7290
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x000D",
                                                "start": 7292,
                                                "end": 7298
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x000A",
                                                "start": 7300,
                                                "end": 7306
                                              }
                                            ],
                                            "start": 7259,
                                            "end": 7307
                                          }
                                        ],
                                        "optional": false,
                                        "start": 7228,
                                        "end": 7308
                                      },
                                      "start": 7221,
                                      "end": 7309
                                    }
                                  ],
                                  "start": 6991,
                                  "end": 7319
                                },
                                "expression": false,
                                "start": 6979,
                                "end": 7319
                              }
                            ],
                            "start": 6935,
                            "end": 7320
                          }
                        ],
                        "optional": false,
                        "start": 6916,
                        "end": 7321
                      },
                      "directive": null,
                      "start": 6916,
                      "end": 7322
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7328,
                            "end": 7338
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7339,
                            "end": 7346
                          },
                          "optional": false,
                          "computed": false,
                          "start": 7328,
                          "end": 7346
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7351,
                              "end": 7359
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check UTF8 encoding",
                                "raw": "\"Check UTF8 encoding\"",
                                "start": 7360,
                                "end": 7381
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7421,
                                            "end": 7423
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7430,
                                                "end": 7441
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 7442,
                                                "end": 7452
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 7430,
                                              "end": 7452
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 20,
                                                "raw": "20",
                                                "start": 7453,
                                                "end": 7455
                                              }
                                            ],
                                            "start": 7426,
                                            "end": 7456
                                          },
                                          "definite": false,
                                          "start": 7421,
                                          "end": 7456
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7417,
                                      "end": 7457
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7470,
                                            "end": 7472
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeUtf8Bom",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7473,
                                            "end": 7485
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7470,
                                          "end": 7485
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 7470,
                                        "end": 7487
                                      },
                                      "directive": null,
                                      "start": 7470,
                                      "end": 7488
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7505,
                                            "end": 7510
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 7514,
                                                "end": 7520
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0x00E8",
                                                "start": 7522,
                                                "end": 7528
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 7459,
                                                "raw": "0x1D23",
                                                "start": 7530,
                                                "end": 7536
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 8224,
                                                "raw": "0x2020",
                                                "start": 7538,
                                                "end": 7544
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x000D",
                                                "start": 7546,
                                                "end": 7552
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x000A",
                                                "start": 7554,
                                                "end": 7560
                                              }
                                            ],
                                            "start": 7513,
                                            "end": 7561
                                          },
                                          "definite": false,
                                          "start": 7505,
                                          "end": 7561
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7501,
                                      "end": 7562
                                    },
                                    {
                                      "type": "ForInStatement",
                                      "left": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 7584,
                                              "end": 7585
                                            },
                                            "init": null,
                                            "definite": false,
                                            "start": 7584,
                                            "end": 7585
                                          }
                                        ],
                                        "declare": false,
                                        "start": 7580,
                                        "end": 7585
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "chars",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7589,
                                        "end": 7594
                                      },
                                      "body": {
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
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7614,
                                                  "end": 7616
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "writeUtf8CodePoint",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7617,
                                                  "end": 7635
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 7614,
                                                "end": 7635
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "chars",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 7636,
                                                    "end": 7641
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "i",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 7642,
                                                    "end": 7643
                                                  },
                                                  "optional": false,
                                                  "computed": true,
                                                  "start": 7636,
                                                  "end": 7644
                                                }
                                              ],
                                              "optional": false,
                                              "start": 7614,
                                              "end": 7645
                                            },
                                            "directive": null,
                                            "start": 7614,
                                            "end": 7646
                                          }
                                        ],
                                        "start": 7596,
                                        "end": 7660
                                      },
                                      "start": 7575,
                                      "end": 7660
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7673,
                                            "end": 7675
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7676,
                                            "end": 7681
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7673,
                                          "end": 7681
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 7684,
                                          "end": 7685
                                        },
                                        "start": 7673,
                                        "end": 7685
                                      },
                                      "directive": null,
                                      "start": 7673,
                                      "end": 7686
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
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7703,
                                            "end": 7708
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 7711,
                                            "end": 7713
                                          },
                                          "definite": false,
                                          "start": 7703,
                                          "end": 7713
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7699,
                                      "end": 7714
                                    },
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 7736,
                                              "end": 7737
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 7740,
                                              "end": 7741
                                            },
                                            "definite": false,
                                            "start": 7736,
                                            "end": 7741
                                          }
                                        ],
                                        "declare": false,
                                        "start": 7732,
                                        "end": 7741
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7743,
                                          "end": 7744
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 14,
                                          "raw": "14",
                                          "start": 7747,
                                          "end": 7749
                                        },
                                        "start": 7743,
                                        "end": 7749
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 7751,
                                          "end": 7752
                                        },
                                        "start": 7751,
                                        "end": 7754
                                      },
                                      "body": {
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
                                                  "name": "bytes",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7774,
                                                  "end": 7779
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 7780,
                                                  "end": 7784
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 7774,
                                                "end": 7784
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7785,
                                                      "end": 7787
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 7788,
                                                      "end": 7796
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 7785,
                                                    "end": 7796
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 7785,
                                                  "end": 7798
                                                }
                                              ],
                                              "optional": false,
                                              "start": 7774,
                                              "end": 7799
                                            },
                                            "directive": null,
                                            "start": 7774,
                                            "end": 7800
                                          }
                                        ],
                                        "start": 7756,
                                        "end": 7814
                                      },
                                      "start": 7727,
                                      "end": 7814
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
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7831,
                                            "end": 7839
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 239,
                                                "raw": "0xEF",
                                                "start": 7843,
                                                "end": 7847
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 187,
                                                "raw": "0xBB",
                                                "start": 7849,
                                                "end": 7853
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 191,
                                                "raw": "0xBF",
                                                "start": 7855,
                                                "end": 7859
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 7861,
                                                "end": 7865
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 195,
                                                "raw": "0xC3",
                                                "start": 7867,
                                                "end": 7871
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 168,
                                                "raw": "0xA8",
                                                "start": 7873,
                                                "end": 7877
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 225,
                                                "raw": "0xE1",
                                                "start": 7879,
                                                "end": 7883
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 180,
                                                "raw": "0xB4",
                                                "start": 7885,
                                                "end": 7889
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 163,
                                                "raw": "0xA3",
                                                "start": 7891,
                                                "end": 7895
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 226,
                                                "raw": "0xE2",
                                                "start": 7897,
                                                "end": 7901
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 128,
                                                "raw": "0x80",
                                                "start": 7903,
                                                "end": 7907
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 160,
                                                "raw": "0xA0",
                                                "start": 7909,
                                                "end": 7913
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x0D",
                                                "start": 7915,
                                                "end": 7919
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x0A",
                                                "start": 7921,
                                                "end": 7925
                                              }
                                            ],
                                            "start": 7842,
                                            "end": 7926
                                          },
                                          "definite": false,
                                          "start": 7831,
                                          "end": 7926
                                        }
                                      ],
                                      "declare": false,
                                      "start": 7827,
                                      "end": 7927
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
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7947,
                                            "end": 7957
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7958,
                                            "end": 7970
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 7947,
                                          "end": 7970
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7971,
                                            "end": 7976
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 7978,
                                            "end": 7986
                                          }
                                        ],
                                        "optional": false,
                                        "start": 7947,
                                        "end": 7987
                                      },
                                      "start": 7940,
                                      "end": 7988
                                    }
                                  ],
                                  "start": 7403,
                                  "end": 7998
                                },
                                "expression": false,
                                "start": 7391,
                                "end": 7998
                              }
                            ],
                            "start": 7347,
                            "end": 7999
                          }
                        ],
                        "optional": false,
                        "start": 7328,
                        "end": 8000
                      },
                      "directive": null,
                      "start": 7328,
                      "end": 8001
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8045,
                            "end": 8055
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8056,
                            "end": 8063
                          },
                          "optional": false,
                          "computed": false,
                          "start": 8045,
                          "end": 8063
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8068,
                              "end": 8076
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check saving a file",
                                "raw": "\"Check saving a file\"",
                                "start": 8077,
                                "end": 8098
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8138,
                                            "end": 8146
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 8149,
                                              "end": 8160
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\tmpUTF16LE.txt",
                                              "raw": "\"\\\\tmpUTF16LE.txt\"",
                                              "start": 8163,
                                              "end": 8181
                                            },
                                            "start": 8149,
                                            "end": 8181
                                          },
                                          "definite": false,
                                          "start": 8138,
                                          "end": 8181
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8134,
                                      "end": 8182
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8199,
                                            "end": 8201
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8208,
                                                "end": 8219
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8220,
                                                "end": 8230
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8208,
                                              "end": 8230
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 14,
                                                "raw": "14",
                                                "start": 8231,
                                                "end": 8233
                                              }
                                            ],
                                            "start": 8204,
                                            "end": 8234
                                          },
                                          "definite": false,
                                          "start": 8199,
                                          "end": 8234
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8195,
                                      "end": 8235
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8248,
                                            "end": 8250
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeUtf16leBom",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8251,
                                            "end": 8266
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8248,
                                          "end": 8266
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 8248,
                                        "end": 8268
                                      },
                                      "directive": null,
                                      "start": 8248,
                                      "end": 8269
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8286,
                                            "end": 8291
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x0054",
                                                "start": 8295,
                                                "end": 8301
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0x00E8",
                                                "start": 8303,
                                                "end": 8309
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 7459,
                                                "raw": "0x1D23",
                                                "start": 8311,
                                                "end": 8317
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 8224,
                                                "raw": "0x2020",
                                                "start": 8319,
                                                "end": 8325
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x000D",
                                                "start": 8327,
                                                "end": 8333
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x000A",
                                                "start": 8335,
                                                "end": 8341
                                              }
                                            ],
                                            "start": 8294,
                                            "end": 8342
                                          },
                                          "definite": false,
                                          "start": 8286,
                                          "end": 8342
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8282,
                                      "end": 8343
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8356,
                                            "end": 8361
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8362,
                                            "end": 8369
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8356,
                                          "end": 8369
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8380,
                                                "end": 8383
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
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
                                                        "name": "fb",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8387,
                                                        "end": 8389
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "writeUtf16CodePoint",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8390,
                                                        "end": 8409
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 8387,
                                                      "end": 8409
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "val",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8410,
                                                        "end": 8413
                                                      },
                                                      {
                                                        "type": "Literal",
                                                        "value": false,
                                                        "raw": "false",
                                                        "start": 8415,
                                                        "end": 8420
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 8387,
                                                    "end": 8421
                                                  },
                                                  "directive": null,
                                                  "start": 8387,
                                                  "end": 8422
                                                }
                                              ],
                                              "start": 8385,
                                              "end": 8424
                                            },
                                            "expression": false,
                                            "start": 8370,
                                            "end": 8424
                                          }
                                        ],
                                        "optional": false,
                                        "start": 8356,
                                        "end": 8425
                                      },
                                      "directive": null,
                                      "start": 8356,
                                      "end": 8426
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8439,
                                            "end": 8441
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "save",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8442,
                                            "end": 8446
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8439,
                                          "end": 8446
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8447,
                                            "end": 8455
                                          }
                                        ],
                                        "optional": false,
                                        "start": 8439,
                                        "end": 8456
                                      },
                                      "directive": null,
                                      "start": 8439,
                                      "end": 8457
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
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8475,
                                            "end": 8484
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8491,
                                                "end": 8502
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8503,
                                                "end": 8513
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 8491,
                                              "end": 8513
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8514,
                                                "end": 8522
                                              }
                                            ],
                                            "start": 8487,
                                            "end": 8523
                                          },
                                          "definite": false,
                                          "start": 8475,
                                          "end": 8523
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8471,
                                      "end": 8524
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8541,
                                            "end": 8550
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8551,
                                            "end": 8559
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8541,
                                          "end": 8559
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf16le",
                                          "raw": "'utf16le'",
                                          "start": 8564,
                                          "end": 8573
                                        },
                                        "start": 8541,
                                        "end": 8573
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8599,
                                                "end": 8604
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 8605,
                                                  "end": 8625
                                                }
                                              ],
                                              "optional": false,
                                              "start": 8599,
                                              "end": 8626
                                            },
                                            "start": 8593,
                                            "end": 8627
                                          }
                                        ],
                                        "start": 8575,
                                        "end": 8641
                                      },
                                      "alternate": null,
                                      "start": 8537,
                                      "end": 8641
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
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8658,
                                            "end": 8671
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 255,
                                                "raw": "0xFF",
                                                "start": 8675,
                                                "end": 8679
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 254,
                                                "raw": "0xFE",
                                                "start": 8681,
                                                "end": 8685
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 8687,
                                                "end": 8691
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8693,
                                                "end": 8697
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 232,
                                                "raw": "0xE8",
                                                "start": 8699,
                                                "end": 8703
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8705,
                                                "end": 8709
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 35,
                                                "raw": "0x23",
                                                "start": 8711,
                                                "end": 8715
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 29,
                                                "raw": "0x1D",
                                                "start": 8717,
                                                "end": 8721
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 32,
                                                "raw": "0x20",
                                                "start": 8723,
                                                "end": 8727
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 32,
                                                "raw": "0x20",
                                                "start": 8729,
                                                "end": 8733
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 13,
                                                "raw": "0x0D",
                                                "start": 8735,
                                                "end": 8739
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8741,
                                                "end": 8745
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 10,
                                                "raw": "0x0A",
                                                "start": 8747,
                                                "end": 8751
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0x00",
                                                "start": 8753,
                                                "end": 8757
                                              }
                                            ],
                                            "start": 8674,
                                            "end": 8758
                                          },
                                          "definite": false,
                                          "start": 8658,
                                          "end": 8758
                                        }
                                      ],
                                      "declare": false,
                                      "start": 8654,
                                      "end": 8758
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8771,
                                            "end": 8780
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8781,
                                            "end": 8786
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8771,
                                          "end": 8786
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 8789,
                                          "end": 8790
                                        },
                                        "start": 8771,
                                        "end": 8790
                                      },
                                      "directive": null,
                                      "start": 8771,
                                      "end": 8791
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
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8804,
                                            "end": 8817
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8818,
                                            "end": 8825
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 8804,
                                          "end": 8825
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8836,
                                                "end": 8839
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
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
                                                        "name": "byteVal",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 8863,
                                                        "end": 8870
                                                      },
                                                      "init": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "savedFile",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 8873,
                                                            "end": 8882
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "readByte",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 8883,
                                                            "end": 8891
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 8873,
                                                          "end": 8891
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [],
                                                        "optional": false,
                                                        "start": 8873,
                                                        "end": 8893
                                                      },
                                                      "definite": false,
                                                      "start": 8863,
                                                      "end": 8893
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 8859,
                                                  "end": 8894
                                                },
                                                {
                                                  "type": "IfStatement",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "byteVal",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 8915,
                                                      "end": 8922
                                                    },
                                                    "operator": "!==",
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "val",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 8927,
                                                      "end": 8930
                                                    },
                                                    "start": 8915,
                                                    "end": 8930
                                                  },
                                                  "consequent": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                      {
                                                        "type": "ThrowStatement",
                                                        "argument": {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "Error",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 8960,
                                                            "end": 8965
                                                          },
                                                          "typeArguments": null,
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "Incorrect byte value",
                                                              "raw": "\"Incorrect byte value\"",
                                                              "start": 8966,
                                                              "end": 8988
                                                            }
                                                          ],
                                                          "optional": false,
                                                          "start": 8960,
                                                          "end": 8989
                                                        },
                                                        "start": 8954,
                                                        "end": 8990
                                                      }
                                                    ],
                                                    "start": 8932,
                                                    "end": 9008
                                                  },
                                                  "alternate": null,
                                                  "start": 8911,
                                                  "end": 9008
                                                }
                                              ],
                                              "start": 8841,
                                              "end": 9022
                                            },
                                            "expression": false,
                                            "start": 8826,
                                            "end": 9022
                                          }
                                        ],
                                        "optional": false,
                                        "start": 8804,
                                        "end": 9023
                                      },
                                      "directive": null,
                                      "start": 8804,
                                      "end": 9024
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 9044,
                                        "end": 9048
                                      },
                                      "start": 9037,
                                      "end": 9049
                                    }
                                  ],
                                  "start": 8120,
                                  "end": 9059
                                },
                                "expression": false,
                                "start": 8108,
                                "end": 9059
                              }
                            ],
                            "start": 8064,
                            "end": 9060
                          }
                        ],
                        "optional": false,
                        "start": 8045,
                        "end": 9061
                      },
                      "directive": null,
                      "start": 8045,
                      "end": 9062
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9068,
                            "end": 9078
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9079,
                            "end": 9086
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9068,
                          "end": 9086
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9091,
                              "end": 9099
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check reading past buffer asserts",
                                "raw": "\"Check reading past buffer asserts\"",
                                "start": 9100,
                                "end": 9135
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9167,
                                            "end": 9169
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9176,
                                                "end": 9187
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9188,
                                                "end": 9198
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9176,
                                              "end": 9198
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 9199,
                                                  "end": 9210
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 9213,
                                                  "end": 9228
                                                },
                                                "start": 9199,
                                                "end": 9228
                                              }
                                            ],
                                            "start": 9172,
                                            "end": 9229
                                          },
                                          "definite": false,
                                          "start": 9167,
                                          "end": 9229
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9163,
                                      "end": 9230
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
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9243,
                                            "end": 9249
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "fb",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9252,
                                                "end": 9254
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "readByte",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9255,
                                                "end": 9263
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9252,
                                              "end": 9263
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 200,
                                                "raw": "200",
                                                "start": 9264,
                                                "end": 9267
                                              }
                                            ],
                                            "optional": false,
                                            "start": 9252,
                                            "end": 9268
                                          },
                                          "definite": false,
                                          "start": 9243,
                                          "end": 9268
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9239,
                                      "end": 9269
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 9285,
                                        "end": 9289
                                      },
                                      "start": 9278,
                                      "end": 9290
                                    }
                                  ],
                                  "start": 9153,
                                  "end": 9296
                                },
                                "expression": false,
                                "start": 9141,
                                "end": 9296
                              },
                              {
                                "type": "Literal",
                                "value": "read beyond buffer length",
                                "raw": "\"read beyond buffer length\"",
                                "start": 9298,
                                "end": 9325
                              }
                            ],
                            "start": 9087,
                            "end": 9326
                          }
                        ],
                        "optional": false,
                        "start": 9068,
                        "end": 9327
                      },
                      "directive": null,
                      "start": 9068,
                      "end": 9328
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9333,
                            "end": 9343
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9344,
                            "end": 9351
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9333,
                          "end": 9351
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9356,
                              "end": 9364
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Check writing past buffer asserts",
                                "raw": "\"Check writing past buffer asserts\"",
                                "start": 9365,
                                "end": 9400
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9432,
                                            "end": 9434
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9441,
                                                "end": 9452
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9453,
                                                "end": 9463
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9441,
                                              "end": 9463
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 9464,
                                                  "end": 9475
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\"",
                                                  "start": 9478,
                                                  "end": 9493
                                                },
                                                "start": 9464,
                                                "end": 9493
                                              }
                                            ],
                                            "start": 9437,
                                            "end": 9494
                                          },
                                          "definite": false,
                                          "start": 9432,
                                          "end": 9494
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9428,
                                      "end": 9495
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9504,
                                            "end": 9506
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "writeByte",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9507,
                                            "end": 9516
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 9504,
                                          "end": 9516
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": 5,
                                            "raw": "5",
                                            "start": 9517,
                                            "end": 9518
                                          },
                                          {
                                            "type": "Literal",
                                            "value": 200,
                                            "raw": "200",
                                            "start": 9520,
                                            "end": 9523
                                          }
                                        ],
                                        "optional": false,
                                        "start": 9504,
                                        "end": 9524
                                      },
                                      "directive": null,
                                      "start": 9504,
                                      "end": 9525
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 9541,
                                        "end": 9545
                                      },
                                      "start": 9534,
                                      "end": 9546
                                    }
                                  ],
                                  "start": 9418,
                                  "end": 9552
                                },
                                "expression": false,
                                "start": 9406,
                                "end": 9552
                              },
                              {
                                "type": "Literal",
                                "value": "write beyond buffer length",
                                "raw": "\"write beyond buffer length\"",
                                "start": 9554,
                                "end": 9582
                              }
                            ],
                            "start": 9352,
                            "end": 9583
                          }
                        ],
                        "optional": false,
                        "start": 9333,
                        "end": 9584
                      },
                      "directive": null,
                      "start": 9333,
                      "end": 9585
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9625,
                            "end": 9635
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9636,
                            "end": 9643
                          },
                          "optional": false,
                          "computed": false,
                          "start": 9625,
                          "end": 9643
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 9648,
                              "end": 9656
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Read non-BMP utf16 chars",
                                "raw": "\"Read non-BMP utf16 chars\"",
                                "start": 9657,
                                "end": 9683
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9723,
                                            "end": 9732
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9739,
                                                "end": 9750
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9751,
                                                "end": 9761
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 9739,
                                              "end": 9761
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 9762,
                                                  "end": 9773
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\utf16leNonBmp.txt",
                                                  "raw": "\"\\\\utf16leNonBmp.txt\"",
                                                  "start": 9776,
                                                  "end": 9797
                                                },
                                                "start": 9762,
                                                "end": 9797
                                              }
                                            ],
                                            "start": 9735,
                                            "end": 9798
                                          },
                                          "definite": false,
                                          "start": 9723,
                                          "end": 9798
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9719,
                                      "end": 9799
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9816,
                                            "end": 9825
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9826,
                                            "end": 9834
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 9816,
                                          "end": 9834
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf16le",
                                          "raw": "'utf16le'",
                                          "start": 9839,
                                          "end": 9848
                                        },
                                        "start": 9816,
                                        "end": 9848
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 9874,
                                                "end": 9879
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 9880,
                                                  "end": 9900
                                                }
                                              ],
                                              "optional": false,
                                              "start": 9874,
                                              "end": 9901
                                            },
                                            "start": 9868,
                                            "end": 9902
                                          }
                                        ],
                                        "start": 9850,
                                        "end": 9916
                                      },
                                      "alternate": null,
                                      "start": 9812,
                                      "end": 9916
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
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 9934,
                                            "end": 9944
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 9947,
                                            "end": 9949
                                          },
                                          "definite": false,
                                          "start": 9934,
                                          "end": 9949
                                        }
                                      ],
                                      "declare": false,
                                      "start": 9930,
                                      "end": 9950
                                    },
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 9972,
                                              "end": 9973
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 9976,
                                              "end": 9977
                                            },
                                            "definite": false,
                                            "start": 9972,
                                            "end": 9977
                                          }
                                        ],
                                        "declare": false,
                                        "start": 9968,
                                        "end": 9977
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9979,
                                          "end": 9980
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 6,
                                          "raw": "6",
                                          "start": 9983,
                                          "end": 9984
                                        },
                                        "start": 9979,
                                        "end": 9984
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 9986,
                                          "end": 9987
                                        },
                                        "start": 9986,
                                        "end": 9989
                                      },
                                      "body": {
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
                                                  "name": "codePoints",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10009,
                                                  "end": 10019
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10020,
                                                  "end": 10024
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 10009,
                                                "end": 10024
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "savedFile",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10025,
                                                      "end": 10034
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readUtf16CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10035,
                                                      "end": 10053
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 10025,
                                                    "end": 10053
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Literal",
                                                      "value": false,
                                                      "raw": "false",
                                                      "start": 10054,
                                                      "end": 10059
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 10025,
                                                  "end": 10060
                                                }
                                              ],
                                              "optional": false,
                                              "start": 10009,
                                              "end": 10061
                                            },
                                            "directive": null,
                                            "start": 10009,
                                            "end": 10062
                                          }
                                        ],
                                        "start": 9991,
                                        "end": 10076
                                      },
                                      "start": 9963,
                                      "end": 10076
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
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10093,
                                            "end": 10111
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 66688,
                                                "raw": "0x10480",
                                                "start": 10115,
                                                "end": 10122
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66689,
                                                "raw": "0x10481",
                                                "start": 10124,
                                                "end": 10131
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66690,
                                                "raw": "0x10482",
                                                "start": 10133,
                                                "end": 10140
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 10142,
                                                "end": 10146
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 10148,
                                                "end": 10152
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 10154,
                                                "end": 10158
                                              }
                                            ],
                                            "start": 10114,
                                            "end": 10159
                                          },
                                          "definite": false,
                                          "start": 10093,
                                          "end": 10159
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10089,
                                      "end": 10160
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
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10180,
                                            "end": 10190
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10191,
                                            "end": 10203
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10180,
                                          "end": 10203
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10204,
                                            "end": 10214
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10216,
                                            "end": 10234
                                          }
                                        ],
                                        "optional": false,
                                        "start": 10180,
                                        "end": 10235
                                      },
                                      "start": 10173,
                                      "end": 10236
                                    }
                                  ],
                                  "start": 9705,
                                  "end": 10246
                                },
                                "expression": false,
                                "start": 9693,
                                "end": 10246
                              }
                            ],
                            "start": 9644,
                            "end": 10247
                          }
                        ],
                        "optional": false,
                        "start": 9625,
                        "end": 10248
                      },
                      "directive": null,
                      "start": 9625,
                      "end": 10249
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10255,
                            "end": 10265
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10266,
                            "end": 10273
                          },
                          "optional": false,
                          "computed": false,
                          "start": 10255,
                          "end": 10273
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10278,
                              "end": 10286
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Read non-BMP utf8 chars",
                                "raw": "\"Read non-BMP utf8 chars\"",
                                "start": 10287,
                                "end": 10312
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10352,
                                            "end": 10361
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10368,
                                                "end": 10379
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10380,
                                                "end": 10390
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 10368,
                                              "end": 10390
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10391,
                                                  "end": 10402
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": "\\utf8NonBmp.txt",
                                                  "raw": "\"\\\\utf8NonBmp.txt\"",
                                                  "start": 10405,
                                                  "end": 10423
                                                },
                                                "start": 10391,
                                                "end": 10423
                                              }
                                            ],
                                            "start": 10364,
                                            "end": 10424
                                          },
                                          "definite": false,
                                          "start": 10352,
                                          "end": 10424
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10348,
                                      "end": 10425
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10442,
                                            "end": 10451
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10452,
                                            "end": 10460
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10442,
                                          "end": 10460
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf8",
                                          "raw": "'utf8'",
                                          "start": 10465,
                                          "end": 10471
                                        },
                                        "start": 10442,
                                        "end": 10471
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 10497,
                                                "end": 10502
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 10503,
                                                  "end": 10523
                                                }
                                              ],
                                              "optional": false,
                                              "start": 10497,
                                              "end": 10524
                                            },
                                            "start": 10491,
                                            "end": 10525
                                          }
                                        ],
                                        "start": 10473,
                                        "end": 10539
                                      },
                                      "alternate": null,
                                      "start": 10438,
                                      "end": 10539
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
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10557,
                                            "end": 10567
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [],
                                            "start": 10570,
                                            "end": 10572
                                          },
                                          "definite": false,
                                          "start": 10557,
                                          "end": 10572
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10553,
                                      "end": 10573
                                    },
                                    {
                                      "type": "ForStatement",
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10595,
                                              "end": 10596
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0",
                                              "start": 10599,
                                              "end": 10600
                                            },
                                            "definite": false,
                                            "start": 10595,
                                            "end": 10600
                                          }
                                        ],
                                        "declare": false,
                                        "start": 10591,
                                        "end": 10600
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10602,
                                          "end": 10603
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "value": 6,
                                          "raw": "6",
                                          "start": 10606,
                                          "end": 10607
                                        },
                                        "start": 10602,
                                        "end": 10607
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 10609,
                                          "end": 10610
                                        },
                                        "start": 10609,
                                        "end": 10612
                                      },
                                      "body": {
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
                                                  "name": "codePoints",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10632,
                                                  "end": 10642
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 10643,
                                                  "end": 10647
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 10632,
                                                "end": 10647
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "savedFile",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10648,
                                                      "end": 10657
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "readUtf8CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 10658,
                                                      "end": 10675
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 10648,
                                                    "end": 10675
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false,
                                                  "start": 10648,
                                                  "end": 10677
                                                }
                                              ],
                                              "optional": false,
                                              "start": 10632,
                                              "end": 10678
                                            },
                                            "directive": null,
                                            "start": 10632,
                                            "end": 10679
                                          }
                                        ],
                                        "start": 10614,
                                        "end": 10693
                                      },
                                      "start": 10586,
                                      "end": 10693
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
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10710,
                                            "end": 10728
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 66688,
                                                "raw": "0x10480",
                                                "start": 10732,
                                                "end": 10739
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66689,
                                                "raw": "0x10481",
                                                "start": 10741,
                                                "end": 10748
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66690,
                                                "raw": "0x10482",
                                                "start": 10750,
                                                "end": 10757
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 10759,
                                                "end": 10763
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 10765,
                                                "end": 10769
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 10771,
                                                "end": 10775
                                              }
                                            ],
                                            "start": 10731,
                                            "end": 10776
                                          },
                                          "definite": false,
                                          "start": 10710,
                                          "end": 10776
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10706,
                                      "end": 10777
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
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10797,
                                            "end": 10807
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10808,
                                            "end": 10820
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 10797,
                                          "end": 10820
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10821,
                                            "end": 10831
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10833,
                                            "end": 10851
                                          }
                                        ],
                                        "optional": false,
                                        "start": 10797,
                                        "end": 10852
                                      },
                                      "start": 10790,
                                      "end": 10853
                                    }
                                  ],
                                  "start": 10334,
                                  "end": 10863
                                },
                                "expression": false,
                                "start": 10322,
                                "end": 10863
                              }
                            ],
                            "start": 10274,
                            "end": 10864
                          }
                        ],
                        "optional": false,
                        "start": 10255,
                        "end": 10865
                      },
                      "directive": null,
                      "start": 10255,
                      "end": 10866
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10872,
                            "end": 10882
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10883,
                            "end": 10890
                          },
                          "optional": false,
                          "computed": false,
                          "start": 10872,
                          "end": 10890
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10895,
                              "end": 10903
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Write non-BMP utf8 chars",
                                "raw": "\"Write non-BMP utf8 chars\"",
                                "start": 10904,
                                "end": 10930
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 10970,
                                            "end": 10978
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 10981,
                                              "end": 10992
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\tmpUTF8nonBmp.txt",
                                              "raw": "\"\\\\tmpUTF8nonBmp.txt\"",
                                              "start": 10995,
                                              "end": 11016
                                            },
                                            "start": 10981,
                                            "end": 11016
                                          },
                                          "definite": false,
                                          "start": 10970,
                                          "end": 11016
                                        }
                                      ],
                                      "declare": false,
                                      "start": 10966,
                                      "end": 11017
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11034,
                                            "end": 11036
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11043,
                                                "end": 11054
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11055,
                                                "end": 11065
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 11043,
                                              "end": 11065
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "value": 15,
                                                "raw": "15",
                                                "start": 11066,
                                                "end": 11068
                                              }
                                            ],
                                            "start": 11039,
                                            "end": 11069
                                          },
                                          "definite": false,
                                          "start": 11034,
                                          "end": 11069
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11030,
                                      "end": 11070
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11087,
                                            "end": 11092
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 66688,
                                                "raw": "0x10480",
                                                "start": 11096,
                                                "end": 11103
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66689,
                                                "raw": "0x10481",
                                                "start": 11105,
                                                "end": 11112
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 66690,
                                                "raw": "0x10482",
                                                "start": 11114,
                                                "end": 11121
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 11123,
                                                "end": 11127
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 11129,
                                                "end": 11133
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 11135,
                                                "end": 11139
                                              }
                                            ],
                                            "start": 11095,
                                            "end": 11140
                                          },
                                          "definite": false,
                                          "start": 11087,
                                          "end": 11140
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11083,
                                      "end": 11141
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
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11154,
                                            "end": 11159
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11160,
                                            "end": 11167
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11154,
                                          "end": 11167
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11178,
                                                "end": 11181
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
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
                                                        "name": "fb",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11185,
                                                        "end": 11187
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "writeUtf8CodePoint",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11188,
                                                        "end": 11206
                                                      },
                                                      "optional": false,
                                                      "computed": false,
                                                      "start": 11185,
                                                      "end": 11206
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "val",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11207,
                                                        "end": 11210
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 11185,
                                                    "end": 11211
                                                  },
                                                  "directive": null,
                                                  "start": 11185,
                                                  "end": 11212
                                                }
                                              ],
                                              "start": 11183,
                                              "end": 11214
                                            },
                                            "expression": false,
                                            "start": 11168,
                                            "end": 11214
                                          }
                                        ],
                                        "optional": false,
                                        "start": 11154,
                                        "end": 11215
                                      },
                                      "directive": null,
                                      "start": 11154,
                                      "end": 11216
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11229,
                                            "end": 11231
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "save",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11232,
                                            "end": 11236
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11229,
                                          "end": 11236
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11237,
                                            "end": 11245
                                          }
                                        ],
                                        "optional": false,
                                        "start": 11229,
                                        "end": 11246
                                      },
                                      "directive": null,
                                      "start": 11229,
                                      "end": 11247
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
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11265,
                                            "end": 11274
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11281,
                                                "end": 11292
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11293,
                                                "end": 11303
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 11281,
                                              "end": 11303
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11304,
                                                "end": 11312
                                              }
                                            ],
                                            "start": 11277,
                                            "end": 11313
                                          },
                                          "definite": false,
                                          "start": 11265,
                                          "end": 11313
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11261,
                                      "end": 11314
                                    },
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11331,
                                            "end": 11340
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11341,
                                            "end": 11349
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11331,
                                          "end": 11349
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "value": "utf8",
                                          "raw": "'utf8'",
                                          "start": 11354,
                                          "end": 11360
                                        },
                                        "start": 11331,
                                        "end": 11360
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11386,
                                                "end": 11391
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\"",
                                                  "start": 11392,
                                                  "end": 11412
                                                }
                                              ],
                                              "optional": false,
                                              "start": 11386,
                                              "end": 11413
                                            },
                                            "start": 11380,
                                            "end": 11414
                                          }
                                        ],
                                        "start": 11362,
                                        "end": 11428
                                      },
                                      "alternate": null,
                                      "start": 11327,
                                      "end": 11428
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
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11445,
                                            "end": 11458
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "value": 240,
                                                "raw": "0xF0",
                                                "start": 11462,
                                                "end": 11466
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 144,
                                                "raw": "0x90",
                                                "start": 11468,
                                                "end": 11472
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 146,
                                                "raw": "0x92",
                                                "start": 11474,
                                                "end": 11478
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 128,
                                                "raw": "0x80",
                                                "start": 11480,
                                                "end": 11484
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 240,
                                                "raw": "0xF0",
                                                "start": 11486,
                                                "end": 11490
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 144,
                                                "raw": "0x90",
                                                "start": 11492,
                                                "end": 11496
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 146,
                                                "raw": "0x92",
                                                "start": 11498,
                                                "end": 11502
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 129,
                                                "raw": "0x81",
                                                "start": 11504,
                                                "end": 11508
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 240,
                                                "raw": "0xF0",
                                                "start": 11510,
                                                "end": 11514
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 144,
                                                "raw": "0x90",
                                                "start": 11516,
                                                "end": 11520
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 146,
                                                "raw": "0x92",
                                                "start": 11522,
                                                "end": 11526
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 130,
                                                "raw": "0x82",
                                                "start": 11528,
                                                "end": 11532
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 84,
                                                "raw": "0x54",
                                                "start": 11534,
                                                "end": 11538
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 104,
                                                "raw": "0x68",
                                                "start": 11540,
                                                "end": 11544
                                              },
                                              {
                                                "type": "Literal",
                                                "value": 105,
                                                "raw": "0x69",
                                                "start": 11546,
                                                "end": 11550
                                              }
                                            ],
                                            "start": 11461,
                                            "end": 11551
                                          },
                                          "definite": false,
                                          "start": 11445,
                                          "end": 11551
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11441,
                                      "end": 11552
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
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11565,
                                            "end": 11578
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "forEach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11579,
                                            "end": 11586
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 11565,
                                          "end": 11586
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 11597,
                                                "end": 11600
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
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
                                                        "name": "byteVal",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 11624,
                                                        "end": 11631
                                                      },
                                                      "init": {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "savedFile",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 11634,
                                                            "end": 11643
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "readByte",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 11644,
                                                            "end": 11652
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 11634,
                                                          "end": 11652
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [],
                                                        "optional": false,
                                                        "start": 11634,
                                                        "end": 11654
                                                      },
                                                      "definite": false,
                                                      "start": 11624,
                                                      "end": 11654
                                                    }
                                                  ],
                                                  "declare": false,
                                                  "start": 11620,
                                                  "end": 11655
                                                },
                                                {
                                                  "type": "IfStatement",
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "byteVal",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 11676,
                                                      "end": 11683
                                                    },
                                                    "operator": "!==",
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "val",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 11688,
                                                      "end": 11691
                                                    },
                                                    "start": 11676,
                                                    "end": 11691
                                                  },
                                                  "consequent": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                      {
                                                        "type": "ThrowStatement",
                                                        "argument": {
                                                          "type": "CallExpression",
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "Error",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 11721,
                                                            "end": 11726
                                                          },
                                                          "typeArguments": null,
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "value": "Incorrect byte value",
                                                              "raw": "\"Incorrect byte value\"",
                                                              "start": 11727,
                                                              "end": 11749
                                                            }
                                                          ],
                                                          "optional": false,
                                                          "start": 11721,
                                                          "end": 11750
                                                        },
                                                        "start": 11715,
                                                        "end": 11751
                                                      }
                                                    ],
                                                    "start": 11693,
                                                    "end": 11769
                                                  },
                                                  "alternate": null,
                                                  "start": 11672,
                                                  "end": 11769
                                                }
                                              ],
                                              "start": 11602,
                                              "end": 11783
                                            },
                                            "expression": false,
                                            "start": 11587,
                                            "end": 11783
                                          }
                                        ],
                                        "optional": false,
                                        "start": 11565,
                                        "end": 11784
                                      },
                                      "directive": null,
                                      "start": 11565,
                                      "end": 11785
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 11805,
                                        "end": 11809
                                      },
                                      "start": 11798,
                                      "end": 11810
                                    }
                                  ],
                                  "start": 10952,
                                  "end": 11820
                                },
                                "expression": false,
                                "start": 10940,
                                "end": 11820
                              }
                            ],
                            "start": 10891,
                            "end": 11821
                          }
                        ],
                        "optional": false,
                        "start": 10872,
                        "end": 11822
                      },
                      "directive": null,
                      "start": 10872,
                      "end": 11823
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11829,
                            "end": 11839
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11840,
                            "end": 11847
                          },
                          "optional": false,
                          "computed": false,
                          "start": 11829,
                          "end": 11847
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11852,
                              "end": 11860
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test invalid lead UTF8 byte",
                                "raw": "\"Test invalid lead UTF8 byte\"",
                                "start": 11861,
                                "end": 11890
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11930,
                                            "end": 11938
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 11941,
                                              "end": 11952
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf8BadLeadByte.txt",
                                              "raw": "\"\\\\utf8BadLeadByte.txt\"",
                                              "start": 11955,
                                              "end": 11978
                                            },
                                            "start": 11941,
                                            "end": 11978
                                          },
                                          "definite": false,
                                          "start": 11930,
                                          "end": 11978
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11926,
                                      "end": 11979
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 11996,
                                            "end": 11998
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12005,
                                                "end": 12016
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12017,
                                                "end": 12027
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12005,
                                              "end": 12027
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12028,
                                                "end": 12036
                                              }
                                            ],
                                            "start": 12001,
                                            "end": 12037
                                          },
                                          "definite": false,
                                          "start": 11996,
                                          "end": 12037
                                        }
                                      ],
                                      "declare": false,
                                      "start": 11992,
                                      "end": 12038
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12058,
                                        "end": 12062
                                      },
                                      "start": 12051,
                                      "end": 12063
                                    }
                                  ],
                                  "start": 11912,
                                  "end": 12073
                                },
                                "expression": false,
                                "start": 11900,
                                "end": 12073
                              },
                              {
                                "type": "Literal",
                                "value": "Invalid UTF8 byte sequence at index: 4",
                                "raw": "\"Invalid UTF8 byte sequence at index: 4\"",
                                "start": 12075,
                                "end": 12115
                              }
                            ],
                            "start": 11848,
                            "end": 12116
                          }
                        ],
                        "optional": false,
                        "start": 11829,
                        "end": 12117
                      },
                      "directive": null,
                      "start": 11829,
                      "end": 12118
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12124,
                            "end": 12134
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12135,
                            "end": 12142
                          },
                          "optional": false,
                          "computed": false,
                          "start": 12124,
                          "end": 12142
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12147,
                              "end": 12155
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test invalid tail UTF8 byte",
                                "raw": "\"Test invalid tail UTF8 byte\"",
                                "start": 12156,
                                "end": 12185
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12225,
                                            "end": 12233
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12236,
                                              "end": 12247
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf8InvalidTail.txt",
                                              "raw": "\"\\\\utf8InvalidTail.txt\"",
                                              "start": 12250,
                                              "end": 12273
                                            },
                                            "start": 12236,
                                            "end": 12273
                                          },
                                          "definite": false,
                                          "start": 12225,
                                          "end": 12273
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12221,
                                      "end": 12274
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12291,
                                            "end": 12293
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12300,
                                                "end": 12311
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12312,
                                                "end": 12322
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12300,
                                              "end": 12322
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12323,
                                                "end": 12331
                                              }
                                            ],
                                            "start": 12296,
                                            "end": 12332
                                          },
                                          "definite": false,
                                          "start": 12291,
                                          "end": 12332
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12287,
                                      "end": 12333
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12353,
                                        "end": 12357
                                      },
                                      "start": 12346,
                                      "end": 12358
                                    }
                                  ],
                                  "start": 12207,
                                  "end": 12368
                                },
                                "expression": false,
                                "start": 12195,
                                "end": 12368
                              },
                              {
                                "type": "Literal",
                                "value": "Trailing byte invalid at index: 8",
                                "raw": "\"Trailing byte invalid at index: 8\"",
                                "start": 12370,
                                "end": 12405
                              }
                            ],
                            "start": 12143,
                            "end": 12406
                          }
                        ],
                        "optional": false,
                        "start": 12124,
                        "end": 12407
                      },
                      "directive": null,
                      "start": 12124,
                      "end": 12408
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12414,
                            "end": 12424
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12425,
                            "end": 12432
                          },
                          "optional": false,
                          "computed": false,
                          "start": 12414,
                          "end": 12432
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12437,
                              "end": 12445
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test ANSI fails validation",
                                "raw": "\"Test ANSI fails validation\"",
                                "start": 12446,
                                "end": 12474
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12514,
                                            "end": 12522
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12525,
                                              "end": 12536
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\ansi.txt",
                                              "raw": "\"\\\\ansi.txt\"",
                                              "start": 12539,
                                              "end": 12551
                                            },
                                            "start": 12525,
                                            "end": 12551
                                          },
                                          "definite": false,
                                          "start": 12514,
                                          "end": 12551
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12510,
                                      "end": 12552
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12569,
                                            "end": 12571
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12578,
                                                "end": 12589
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12590,
                                                "end": 12600
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12578,
                                              "end": 12600
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12601,
                                                "end": 12609
                                              }
                                            ],
                                            "start": 12574,
                                            "end": 12610
                                          },
                                          "definite": false,
                                          "start": 12569,
                                          "end": 12610
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12565,
                                      "end": 12611
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12631,
                                        "end": 12635
                                      },
                                      "start": 12624,
                                      "end": 12636
                                    }
                                  ],
                                  "start": 12496,
                                  "end": 12646
                                },
                                "expression": false,
                                "start": 12484,
                                "end": 12646
                              },
                              {
                                "type": "Literal",
                                "value": "Trailing byte invalid at index: 6",
                                "raw": "\"Trailing byte invalid at index: 6\"",
                                "start": 12648,
                                "end": 12683
                              }
                            ],
                            "start": 12433,
                            "end": 12684
                          }
                        ],
                        "optional": false,
                        "start": 12414,
                        "end": 12685
                      },
                      "directive": null,
                      "start": 12414,
                      "end": 12686
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12692,
                            "end": 12702
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12703,
                            "end": 12710
                          },
                          "optional": false,
                          "computed": false,
                          "start": 12692,
                          "end": 12710
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12715,
                              "end": 12723
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test UTF-16LE with invalid surrogate trail fails",
                                "raw": "\"Test UTF-16LE with invalid surrogate trail fails\"",
                                "start": 12724,
                                "end": 12774
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12814,
                                            "end": 12822
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 12825,
                                              "end": 12836
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf16leInvalidSurrogate.txt",
                                              "raw": "\"\\\\utf16leInvalidSurrogate.txt\"",
                                              "start": 12839,
                                              "end": 12870
                                            },
                                            "start": 12825,
                                            "end": 12870
                                          },
                                          "definite": false,
                                          "start": 12814,
                                          "end": 12870
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12810,
                                      "end": 12871
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 12888,
                                            "end": 12890
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12897,
                                                "end": 12908
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12909,
                                                "end": 12919
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 12897,
                                              "end": 12919
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 12920,
                                                "end": 12928
                                              }
                                            ],
                                            "start": 12893,
                                            "end": 12929
                                          },
                                          "definite": false,
                                          "start": 12888,
                                          "end": 12929
                                        }
                                      ],
                                      "declare": false,
                                      "start": 12884,
                                      "end": 12930
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 12950,
                                        "end": 12954
                                      },
                                      "start": 12943,
                                      "end": 12955
                                    }
                                  ],
                                  "start": 12796,
                                  "end": 12965
                                },
                                "expression": false,
                                "start": 12784,
                                "end": 12965
                              },
                              {
                                "type": "Literal",
                                "value": "Trail surrogate has an invalid value",
                                "raw": "\"Trail surrogate has an invalid value\"",
                                "start": 12967,
                                "end": 13005
                              }
                            ],
                            "start": 12711,
                            "end": 13006
                          }
                        ],
                        "optional": false,
                        "start": 12692,
                        "end": 13007
                      },
                      "directive": null,
                      "start": 12692,
                      "end": 13008
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13014,
                            "end": 13024
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13025,
                            "end": 13032
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13014,
                          "end": 13032
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13037,
                              "end": 13045
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test UTF-16BE with invalid surrogate head fails",
                                "raw": "\"Test UTF-16BE with invalid surrogate head fails\"",
                                "start": 13046,
                                "end": 13095
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13135,
                                            "end": 13143
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 13146,
                                              "end": 13157
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\UTF16BEInvalidSurrogate.txt",
                                              "raw": "\"\\\\UTF16BEInvalidSurrogate.txt\"",
                                              "start": 13160,
                                              "end": 13191
                                            },
                                            "start": 13146,
                                            "end": 13191
                                          },
                                          "definite": false,
                                          "start": 13135,
                                          "end": 13191
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13131,
                                      "end": 13192
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13209,
                                            "end": 13211
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13218,
                                                "end": 13229
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13230,
                                                "end": 13240
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 13218,
                                              "end": 13240
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13241,
                                                "end": 13249
                                              }
                                            ],
                                            "start": 13214,
                                            "end": 13250
                                          },
                                          "definite": false,
                                          "start": 13209,
                                          "end": 13250
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13205,
                                      "end": 13251
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 13271,
                                        "end": 13275
                                      },
                                      "start": 13264,
                                      "end": 13276
                                    }
                                  ],
                                  "start": 13117,
                                  "end": 13286
                                },
                                "expression": false,
                                "start": 13105,
                                "end": 13286
                              },
                              {
                                "type": "Literal",
                                "value": "Byte sequence starts with a trail surrogate",
                                "raw": "\"Byte sequence starts with a trail surrogate\"",
                                "start": 13288,
                                "end": 13333
                              }
                            ],
                            "start": 13033,
                            "end": 13334
                          }
                        ],
                        "optional": false,
                        "start": 13014,
                        "end": 13335
                      },
                      "directive": null,
                      "start": 13014,
                      "end": 13336
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13342,
                            "end": 13352
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13353,
                            "end": 13360
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13342,
                          "end": 13360
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13365,
                              "end": 13373
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test UTF-16LE with missing trail surrogate fails",
                                "raw": "\"Test UTF-16LE with missing trail surrogate fails\"",
                                "start": 13374,
                                "end": 13424
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13464,
                                            "end": 13472
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 13475,
                                              "end": 13486
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\utf16leMissingTrailSurrogate.txt",
                                              "raw": "\"\\\\utf16leMissingTrailSurrogate.txt\"",
                                              "start": 13489,
                                              "end": 13525
                                            },
                                            "start": 13475,
                                            "end": 13525
                                          },
                                          "definite": false,
                                          "start": 13464,
                                          "end": 13525
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13460,
                                      "end": 13526
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13543,
                                            "end": 13545
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13552,
                                                "end": 13563
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13564,
                                                "end": 13574
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 13552,
                                              "end": 13574
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13575,
                                                "end": 13583
                                              }
                                            ],
                                            "start": 13548,
                                            "end": 13584
                                          },
                                          "definite": false,
                                          "start": 13543,
                                          "end": 13584
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13539,
                                      "end": 13585
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 13605,
                                        "end": 13609
                                      },
                                      "start": 13598,
                                      "end": 13610
                                    }
                                  ],
                                  "start": 13446,
                                  "end": 13620
                                },
                                "expression": false,
                                "start": 13434,
                                "end": 13620
                              },
                              {
                                "type": "Literal",
                                "value": "Trail surrogate has an invalid value",
                                "raw": "\"Trail surrogate has an invalid value\"",
                                "start": 13622,
                                "end": 13660
                              }
                            ],
                            "start": 13361,
                            "end": 13661
                          }
                        ],
                        "optional": false,
                        "start": 13342,
                        "end": 13662
                      },
                      "directive": null,
                      "start": 13342,
                      "end": 13663
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13695,
                            "end": 13705
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13706,
                            "end": 13713
                          },
                          "optional": false,
                          "computed": false,
                          "start": 13695,
                          "end": 13713
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13718,
                              "end": 13726
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Count character occurrences",
                                "raw": "\"Count character occurrences\"",
                                "start": 13727,
                                "end": 13756
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13796,
                                            "end": 13804
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 13807,
                                              "end": 13818
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\charCountASCII.txt",
                                              "raw": "\"\\\\charCountASCII.txt\"",
                                              "start": 13821,
                                              "end": 13843
                                            },
                                            "start": 13807,
                                            "end": 13843
                                          },
                                          "definite": false,
                                          "start": 13796,
                                          "end": 13843
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13792,
                                      "end": 13844
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13861,
                                            "end": 13863
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13870,
                                                "end": 13881
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13882,
                                                "end": 13892
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 13870,
                                              "end": 13892
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 13893,
                                                "end": 13901
                                              }
                                            ],
                                            "start": 13866,
                                            "end": 13902
                                          },
                                          "definite": false,
                                          "start": 13861,
                                          "end": 13902
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13857,
                                      "end": 13903
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
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 13920,
                                            "end": 13926
                                          },
                                          "init": {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "LogicalExpression",
                                              "left": {
                                                "type": "LogicalExpression",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13930,
                                                      "end": 13932
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "countCR",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13933,
                                                      "end": 13940
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 13930,
                                                    "end": 13940
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 5,
                                                    "raw": "5",
                                                    "start": 13945,
                                                    "end": 13946
                                                  },
                                                  "start": 13930,
                                                  "end": 13946
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13950,
                                                      "end": 13952
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "countLF",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 13953,
                                                      "end": 13960
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 13950,
                                                    "end": 13960
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "value": 4,
                                                    "raw": "4",
                                                    "start": 13965,
                                                    "end": 13966
                                                  },
                                                  "start": 13950,
                                                  "end": 13966
                                                },
                                                "start": 13930,
                                                "end": 13966
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "fb",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 13970,
                                                    "end": 13972
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "countCRLF",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 13973,
                                                    "end": 13982
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 13970,
                                                  "end": 13982
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Literal",
                                                  "value": 5,
                                                  "raw": "5",
                                                  "start": 13987,
                                                  "end": 13988
                                                },
                                                "start": 13970,
                                                "end": 13988
                                              },
                                              "start": 13930,
                                              "end": 13988
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 13992,
                                                  "end": 13994
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "countHT",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 13995,
                                                  "end": 14002
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 13992,
                                                "end": 14002
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "value": 3,
                                                "raw": "3",
                                                "start": 14007,
                                                "end": 14008
                                              },
                                              "start": 13992,
                                              "end": 14008
                                            },
                                            "start": 13930,
                                            "end": 14008
                                          },
                                          "definite": false,
                                          "start": 13920,
                                          "end": 14009
                                        }
                                      ],
                                      "declare": false,
                                      "start": 13916,
                                      "end": 14010
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 14030,
                                        "end": 14036
                                      },
                                      "start": 14023,
                                      "end": 14037
                                    }
                                  ],
                                  "start": 13778,
                                  "end": 14047
                                },
                                "expression": false,
                                "start": 13766,
                                "end": 14047
                              }
                            ],
                            "start": 13714,
                            "end": 14048
                          }
                        ],
                        "optional": false,
                        "start": 13695,
                        "end": 14049
                      },
                      "directive": null,
                      "start": 13695,
                      "end": 14050
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
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14090,
                            "end": 14100
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 14101,
                            "end": 14108
                          },
                          "optional": false,
                          "computed": false,
                          "start": 14090,
                          "end": 14108
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14113,
                              "end": 14121
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Test file with control character",
                                "raw": "\"Test file with control character\"",
                                "start": 14122,
                                "end": 14156
                              },
                              {
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
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 14196,
                                            "end": 14204
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 14207,
                                              "end": 14218
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "value": "\\controlChar.txt",
                                              "raw": "\"\\\\controlChar.txt\"",
                                              "start": 14221,
                                              "end": 14240
                                            },
                                            "start": 14207,
                                            "end": 14240
                                          },
                                          "definite": false,
                                          "start": 14196,
                                          "end": 14240
                                        }
                                      ],
                                      "declare": false,
                                      "start": 14192,
                                      "end": 14241
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
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 14258,
                                            "end": 14260
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 14267,
                                                "end": 14278
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 14279,
                                                "end": 14289
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 14267,
                                              "end": 14289
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 14290,
                                                "end": 14298
                                              }
                                            ],
                                            "start": 14263,
                                            "end": 14299
                                          },
                                          "definite": false,
                                          "start": 14258,
                                          "end": 14299
                                        }
                                      ],
                                      "declare": false,
                                      "start": 14254,
                                      "end": 14300
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true",
                                        "start": 14320,
                                        "end": 14324
                                      },
                                      "start": 14313,
                                      "end": 14325
                                    }
                                  ],
                                  "start": 14178,
                                  "end": 14335
                                },
                                "expression": false,
                                "start": 14166,
                                "end": 14335
                              },
                              {
                                "type": "Literal",
                                "value": "Codepoint at index: 3 has control value: 8",
                                "raw": "\"Codepoint at index: 3 has control value: 8\"",
                                "start": 14337,
                                "end": 14381
                              }
                            ],
                            "start": 14109,
                            "end": 14382
                          }
                        ],
                        "optional": false,
                        "start": 14090,
                        "end": 14383
                      },
                      "directive": null,
                      "start": 14090,
                      "end": 14384
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testRunner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 14397,
                        "end": 14407
                      },
                      "start": 14390,
                      "end": 14408
                    }
                  ],
                  "start": 1830,
                  "end": 14410
                },
                "expression": false,
                "start": 1818,
                "end": 14410
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1817,
              "end": 14413
            },
            "definite": false,
            "start": 1797,
            "end": 14413
          }
        ],
        "declare": false,
        "start": 1793,
        "end": 14414
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1786,
      "end": 14414
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 79,
  "end": 14414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 91,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 109,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 136,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\".\\\\TempTestFiles\"",
    "start": 150,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 199,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 233,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 266,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 304,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 317,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 335,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 350,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 372,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 379,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 480,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 530,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 544,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 575,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 597,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 624,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 657,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 662,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 670,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "exception",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 707,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 726,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 742,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 762,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 780,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 784,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 806,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 847,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 860,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 869,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "exception",
    "start": 931,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 965,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 978,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1012,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1021,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1043,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1079,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1088,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1110,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1161,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1174,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1202,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1213,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "regex",
    "start": 1252,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1271,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1280,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1324,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "regex",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1350,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1417,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1421,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1436,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1535,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "testcase",
    "start": 1540,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "errorMessageRegEx",
    "start": 1549,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1571,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "exception",
    "start": 1586,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1615,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1625,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1646,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "testResult",
    "start": 1656,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1686,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1696,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1735,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1739,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1760,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1786,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "tests",
    "start": 1797,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 1804,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1836,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 1840,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1853,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 1857,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 1924,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 1935,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 1947,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "String",
    "value": "\"Basic test\"",
    "start": 1956,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1970,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1984,
    "end": 1990
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1991,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2006,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2017,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2025,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2029,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "String",
    "value": "\"Test for any error\"",
    "start": 2038,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2060,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2074,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2080,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2084,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2093,
    "end": 2099
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2100,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2110,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2120,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2131,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2139,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2143,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "String",
    "value": "\"Test RegEx error message match\"",
    "start": 2152,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2186,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2200,
    "end": 2205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2206,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2210,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "String",
    "value": "\"Should also pass\"",
    "start": 2216,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2237,
    "end": 2243
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2244,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "String",
    "value": "\"Should [also]+ pass\"",
    "start": 2254,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2283,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2294,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2302,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2306,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "String",
    "value": "\"Test array compare true\"",
    "start": 2315,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2342,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2356,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 2363,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 2374,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2419,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2430,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2438,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2442,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "String",
    "value": "\"Test array compare false\"",
    "start": 2451,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2479,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2493,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 2501,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 2512,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2586,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2605,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2609,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "String",
    "value": "\"Check file exists\"",
    "start": 2618,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2647,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2673,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 2680,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "DirectoryManager",
    "start": 2692,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 2709,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 2720,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "String",
    "value": "\"\\\\Test.txt\"",
    "start": 2734,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2766,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 2777,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2785,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 2789,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "String",
    "value": "\"Check file doesn't exist\"",
    "start": 2798,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2834,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2860,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 2868,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "DirectoryManager",
    "start": 2880,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 2897,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 2908,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "String",
    "value": "\"\\\\Test2.txt\"",
    "start": 2922,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 2991,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3002,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3010,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3014,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "String",
    "value": "\"Check text file match\"",
    "start": 3023,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3056,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3082,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3090,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3102,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3113,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\readme.txt\"",
    "start": 3124,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3151,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3170,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3182,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3193,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "String",
    "value": "\"C:\\\\spaces path\\\\myapp.str\"",
    "start": 3204,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3234,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3253,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3265,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3276,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\code.js\"",
    "start": 3287,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 3329,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3340,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3348,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3352,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "String",
    "value": "\"Check makefile match\"",
    "start": 3361,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3393,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3419,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3426,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3438,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3449,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "String",
    "value": "\"C:\\\\some dir\\\\makefile\"",
    "start": 3460,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 3504,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3515,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3523,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3527,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "String",
    "value": "\"Check binary file doesn't match\"",
    "start": 3536,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3579,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3605,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3614,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3626,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3637,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\app.exe\"",
    "start": 3648,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3672,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 3688,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 3700,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "isTextFile",
    "start": 3711,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "String",
    "value": "\"C:\\\\somedir\\\\my lib.dll\"",
    "start": 3722,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 3805,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 3816,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3824,
    "end": 3827
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 3828,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "String",
    "value": "\"Check App defaults\"",
    "start": 3837,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3867,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3893,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 3897,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3903,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 3907,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 3911,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3932,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 3940,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "fixLines",
    "start": 3944,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3953,
    "end": 3956
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3957,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3963,
    "end": 3965
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 3985,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 3989,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3997,
    "end": 4000
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4001,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4006,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4028,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "lineEndings",
    "start": 4032,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4044,
    "end": 4047
  },
  {
    "type": "String",
    "value": "\"CRLF\"",
    "start": 4048,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4055,
    "end": 4057
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4077,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "matchPattern",
    "start": 4081,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4094,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4098,
    "end": 4107
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4108,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4130,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "rootDirectory",
    "start": 4134,
    "end": 4147
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4148,
    "end": 4151
  },
  {
    "type": "String",
    "value": "\".\\\\\"",
    "start": 4152,
    "end": 4157
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4158,
    "end": 4160
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4180,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4184,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4197,
    "end": 4200
  },
  {
    "type": "String",
    "value": "\"ascii\"",
    "start": 4201,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4209,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4231,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4235,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4248,
    "end": 4251
  },
  {
    "type": "String",
    "value": "\"utf8nobom\"",
    "start": 4252,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 4283,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 4294,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4302,
    "end": 4305
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 4306,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "String",
    "value": "\"Check App params\"",
    "start": 4315,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4343,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4369,
    "end": 4372
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4373,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4379,
    "end": 4382
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 4383,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 4387,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "String",
    "value": "\"-dir=C:\\\\test dir\"",
    "start": 4392,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "String",
    "value": "\"-lineEndings=LF\"",
    "start": 4413,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "String",
    "value": "\"-encodings=utf16be,ascii\"",
    "start": 4432,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "String",
    "value": "\"-recurse=false\"",
    "start": 4460,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "String",
    "value": "\"-fixlines\"",
    "start": 4478,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4491,
    "end": 4492
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4505,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4513,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4516,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "fixLines",
    "start": 4517,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4526,
    "end": 4529
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4530,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4535,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4557,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Identifier",
    "value": "lineEndings",
    "start": 4561,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4573,
    "end": 4576
  },
  {
    "type": "String",
    "value": "\"LF\"",
    "start": 4577,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4582,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4604,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "recurse",
    "start": 4608,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4616,
    "end": 4619
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4620,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4626,
    "end": 4628
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4648,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "matchPattern",
    "start": 4652,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4665,
    "end": 4668
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4669,
    "end": 4678
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4679,
    "end": 4681
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4701,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Identifier",
    "value": "rootDirectory",
    "start": 4705,
    "end": 4718
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4719,
    "end": 4722
  },
  {
    "type": "String",
    "value": "\"C:\\\\test dir\"",
    "start": 4723,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4738,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4760,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4764,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4773,
    "end": 4774
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4777,
    "end": 4780
  },
  {
    "type": "String",
    "value": "\"utf16be\"",
    "start": 4781,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4791,
    "end": 4793
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4813,
    "end": 4816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4816,
    "end": 4817
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4817,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4830,
    "end": 4833
  },
  {
    "type": "String",
    "value": "\"ascii\"",
    "start": 4834,
    "end": 4841
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4842,
    "end": 4844
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 4864,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "encodings",
    "start": 4868,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4878,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4885,
    "end": 4888
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4890,
    "end": 4891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4901,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 4943,
    "end": 4953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4953,
    "end": 4954
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 4954,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4962,
    "end": 4965
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 4966,
    "end": 4974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "String",
    "value": "\"Check encoding detection no BOM\"",
    "start": 4975,
    "end": 5008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5008,
    "end": 5009
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5018,
    "end": 5026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5027,
    "end": 5028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5028,
    "end": 5029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5044,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5048,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5053,
    "end": 5056
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5057,
    "end": 5068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5069,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5080,
    "end": 5091
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "String",
    "value": "\"\\\\noBOM.txt\"",
    "start": 5094,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5122,
    "end": 5128
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5129,
    "end": 5131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5132,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5136,
    "end": 5139
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 5140,
    "end": 5146
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5147,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5150,
    "end": 5152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5152,
    "end": 5153
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5153,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5162,
    "end": 5165
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 5166,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5182,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5191,
    "end": 5201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5201,
    "end": 5202
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5202,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5209,
    "end": 5210
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5210,
    "end": 5213
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5214,
    "end": 5222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5222,
    "end": 5223
  },
  {
    "type": "String",
    "value": "\"Check encoding detection UTF8 BOM\"",
    "start": 5223,
    "end": 5258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5258,
    "end": 5259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5268,
    "end": 5276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5294,
    "end": 5297
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5298,
    "end": 5300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5301,
    "end": 5302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5303,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5307,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5319,
    "end": 5329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5330,
    "end": 5341
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5342,
    "end": 5343
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 5344,
    "end": 5359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5359,
    "end": 5360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5374,
    "end": 5380
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5381,
    "end": 5383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5383,
    "end": 5384
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5384,
    "end": 5387
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5388,
    "end": 5391
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 5392,
    "end": 5398
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5399,
    "end": 5401
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5402,
    "end": 5404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5404,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5405,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5414,
    "end": 5417
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 5418,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5437,
    "end": 5438
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5443,
    "end": 5453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5453,
    "end": 5454
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5454,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5461,
    "end": 5462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5462,
    "end": 5465
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5466,
    "end": 5474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5474,
    "end": 5475
  },
  {
    "type": "String",
    "value": "\"Check encoding detection UTF16be BOM\"",
    "start": 5475,
    "end": 5513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5513,
    "end": 5514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5523,
    "end": 5531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5532,
    "end": 5533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5549,
    "end": 5552
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5553,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5556,
    "end": 5557
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5558,
    "end": 5561
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5562,
    "end": 5573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5574,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5585,
    "end": 5596
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "String",
    "value": "\"\\\\UTF16BE.txt\"",
    "start": 5599,
    "end": 5614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5614,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5615,
    "end": 5616
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5629,
    "end": 5635
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5636,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5639,
    "end": 5642
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5643,
    "end": 5646
  },
  {
    "type": "String",
    "value": "'utf16be'",
    "start": 5647,
    "end": 5656
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5657,
    "end": 5659
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5660,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5662,
    "end": 5663
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5663,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5672,
    "end": 5675
  },
  {
    "type": "String",
    "value": "'utf16be'",
    "start": 5676,
    "end": 5685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5685,
    "end": 5686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5695,
    "end": 5696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5704,
    "end": 5714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5715,
    "end": 5722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5723,
    "end": 5726
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5727,
    "end": 5735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5735,
    "end": 5736
  },
  {
    "type": "String",
    "value": "\"Check encoding detection UTF16le BOM\"",
    "start": 5736,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5784,
    "end": 5792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5793,
    "end": 5794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5794,
    "end": 5795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5796,
    "end": 5797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5810,
    "end": 5813
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5814,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5817,
    "end": 5818
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5819,
    "end": 5822
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 5823,
    "end": 5834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5834,
    "end": 5835
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 5835,
    "end": 5845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5845,
    "end": 5846
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 5846,
    "end": 5857
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5858,
    "end": 5859
  },
  {
    "type": "String",
    "value": "\"\\\\UTF16LE.txt\"",
    "start": 5860,
    "end": 5875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5875,
    "end": 5876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5876,
    "end": 5877
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5890,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5897,
    "end": 5899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5899,
    "end": 5900
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 5900,
    "end": 5903
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5904,
    "end": 5907
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 5908,
    "end": 5917
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5918,
    "end": 5920
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 5921,
    "end": 5923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5923,
    "end": 5924
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 5924,
    "end": 5932
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5933,
    "end": 5936
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 5937,
    "end": 5946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5956,
    "end": 5957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5957,
    "end": 5958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5958,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 5965,
    "end": 5975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5975,
    "end": 5976
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 5976,
    "end": 5983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5983,
    "end": 5984
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5984,
    "end": 5987
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 5988,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "String",
    "value": "\"Check encoding on 1 bytes file\"",
    "start": 5997,
    "end": 6029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6029,
    "end": 6030
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6039,
    "end": 6047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6048,
    "end": 6049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6049,
    "end": 6050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6051,
    "end": 6052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6065,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6069,
    "end": 6071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6072,
    "end": 6073
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6074,
    "end": 6077
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 6078,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 6090,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 6101,
    "end": 6112
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6113,
    "end": 6114
  },
  {
    "type": "String",
    "value": "\"\\\\1bytefile.txt\"",
    "start": 6115,
    "end": 6132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6132,
    "end": 6133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6133,
    "end": 6134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6147,
    "end": 6153
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6154,
    "end": 6156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6156,
    "end": 6157
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 6157,
    "end": 6160
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6161,
    "end": 6164
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 6165,
    "end": 6171
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 6172,
    "end": 6174
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6175,
    "end": 6177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6177,
    "end": 6178
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 6178,
    "end": 6186
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6187,
    "end": 6190
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 6191,
    "end": 6197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6197,
    "end": 6198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6207,
    "end": 6208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6208,
    "end": 6209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6209,
    "end": 6210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6210,
    "end": 6211
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 6216,
    "end": 6226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6226,
    "end": 6227
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 6227,
    "end": 6234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6234,
    "end": 6235
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6235,
    "end": 6238
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 6239,
    "end": 6247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6247,
    "end": 6248
  },
  {
    "type": "String",
    "value": "\"Check encoding on 0 bytes file\"",
    "start": 6248,
    "end": 6280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6280,
    "end": 6281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6290,
    "end": 6298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6299,
    "end": 6300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6300,
    "end": 6301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6302,
    "end": 6303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6316,
    "end": 6319
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6320,
    "end": 6322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6325,
    "end": 6328
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 6329,
    "end": 6340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6340,
    "end": 6341
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 6341,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 6352,
    "end": 6363
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6364,
    "end": 6365
  },
  {
    "type": "String",
    "value": "\"\\\\0bytefile.txt\"",
    "start": 6366,
    "end": 6383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6384,
    "end": 6385
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6398,
    "end": 6404
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6405,
    "end": 6407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6407,
    "end": 6408
  },
  {
    "type": "Identifier",
    "value": "bom",
    "start": 6408,
    "end": 6411
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6412,
    "end": 6415
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 6416,
    "end": 6422
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 6423,
    "end": 6425
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6426,
    "end": 6428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6428,
    "end": 6429
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 6429,
    "end": 6437
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6438,
    "end": 6441
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 6442,
    "end": 6448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6448,
    "end": 6449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6458,
    "end": 6459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6459,
    "end": 6460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6460,
    "end": 6461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6461,
    "end": 6462
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 6495,
    "end": 6505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6505,
    "end": 6506
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 6506,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6513,
    "end": 6514
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6514,
    "end": 6517
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 6518,
    "end": 6526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6526,
    "end": 6527
  },
  {
    "type": "String",
    "value": "\"Check byte reader\"",
    "start": 6527,
    "end": 6546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6546,
    "end": 6547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6556,
    "end": 6564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6566,
    "end": 6567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6568,
    "end": 6569
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6582,
    "end": 6585
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6586,
    "end": 6588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6589,
    "end": 6590
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6591,
    "end": 6594
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 6595,
    "end": 6606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6606,
    "end": 6607
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 6607,
    "end": 6617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6617,
    "end": 6618
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 6618,
    "end": 6629
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6630,
    "end": 6631
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 6632,
    "end": 6647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6647,
    "end": 6648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6648,
    "end": 6649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6662,
    "end": 6665
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 6666,
    "end": 6671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6672,
    "end": 6673
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6674,
    "end": 6675
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6676,
    "end": 6677
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 6690,
    "end": 6693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6694,
    "end": 6695
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6695,
    "end": 6698
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6699,
    "end": 6700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6701,
    "end": 6702
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6703,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6706,
    "end": 6707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6708,
    "end": 6709
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 6710,
    "end": 6712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6712,
    "end": 6713
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6714,
    "end": 6715
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 6715,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 6737,
    "end": 6742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6742,
    "end": 6743
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 6743,
    "end": 6747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 6748,
    "end": 6750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6750,
    "end": 6751
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 6751,
    "end": 6759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6759,
    "end": 6760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6760,
    "end": 6761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6761,
    "end": 6762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6762,
    "end": 6763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6776,
    "end": 6777
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6790,
    "end": 6796
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 6797,
    "end": 6807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6807,
    "end": 6808
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 6808,
    "end": 6820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6820,
    "end": 6821
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 6821,
    "end": 6826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6826,
    "end": 6827
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6828,
    "end": 6829
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 6829,
    "end": 6833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6833,
    "end": 6834
  },
  {
    "type": "Numeric",
    "value": "0xC3",
    "start": 6835,
    "end": 6839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6839,
    "end": 6840
  },
  {
    "type": "Numeric",
    "value": "0xA8",
    "start": 6841,
    "end": 6845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6845,
    "end": 6846
  },
  {
    "type": "Numeric",
    "value": "0xE1",
    "start": 6847,
    "end": 6851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6851,
    "end": 6852
  },
  {
    "type": "Numeric",
    "value": "0xB4",
    "start": 6853,
    "end": 6857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6857,
    "end": 6858
  },
  {
    "type": "Numeric",
    "value": "0xA3",
    "start": 6859,
    "end": 6863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6863,
    "end": 6864
  },
  {
    "type": "Numeric",
    "value": "0xE2",
    "start": 6865,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Numeric",
    "value": "0x80",
    "start": 6871,
    "end": 6875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6875,
    "end": 6876
  },
  {
    "type": "Numeric",
    "value": "0xA0",
    "start": 6877,
    "end": 6881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6881,
    "end": 6882
  },
  {
    "type": "Numeric",
    "value": "0x0D",
    "start": 6883,
    "end": 6887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6887,
    "end": 6888
  },
  {
    "type": "Numeric",
    "value": "0x0A",
    "start": 6889,
    "end": 6893
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6893,
    "end": 6894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6894,
    "end": 6895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6895,
    "end": 6896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6906,
    "end": 6907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6907,
    "end": 6908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6908,
    "end": 6909
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 6916,
    "end": 6926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6926,
    "end": 6927
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 6927,
    "end": 6934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6934,
    "end": 6935
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6935,
    "end": 6938
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 6939,
    "end": 6947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6947,
    "end": 6948
  },
  {
    "type": "String",
    "value": "\"Check UTF8 decoding\"",
    "start": 6948,
    "end": 6969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6969,
    "end": 6970
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6979,
    "end": 6987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6988,
    "end": 6989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6989,
    "end": 6990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6991,
    "end": 6992
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7005,
    "end": 7008
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7009,
    "end": 7011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7012,
    "end": 7013
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7014,
    "end": 7017
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 7018,
    "end": 7029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7029,
    "end": 7030
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 7030,
    "end": 7040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7040,
    "end": 7041
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 7041,
    "end": 7052
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 7053,
    "end": 7054
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 7055,
    "end": 7070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7070,
    "end": 7071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7071,
    "end": 7072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7085,
    "end": 7088
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7089,
    "end": 7094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7095,
    "end": 7096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7097,
    "end": 7098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7098,
    "end": 7099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7099,
    "end": 7100
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7113,
    "end": 7116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7117,
    "end": 7118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7118,
    "end": 7121
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7124,
    "end": 7125
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7126,
    "end": 7127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7127,
    "end": 7128
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7131,
    "end": 7132
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 7133,
    "end": 7134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7134,
    "end": 7135
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 7137,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7141,
    "end": 7142
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7159,
    "end": 7164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7164,
    "end": 7165
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 7165,
    "end": 7169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7169,
    "end": 7170
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7170,
    "end": 7172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7172,
    "end": 7173
  },
  {
    "type": "Identifier",
    "value": "readUtf8CodePoint",
    "start": 7173,
    "end": 7190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7190,
    "end": 7191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7191,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7192,
    "end": 7193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7193,
    "end": 7194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7207,
    "end": 7208
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7221,
    "end": 7227
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 7228,
    "end": 7238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7238,
    "end": 7239
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 7239,
    "end": 7251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7251,
    "end": 7252
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7252,
    "end": 7257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7257,
    "end": 7258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7259,
    "end": 7260
  },
  {
    "type": "Numeric",
    "value": "0x0054",
    "start": 7260,
    "end": 7266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7266,
    "end": 7267
  },
  {
    "type": "Numeric",
    "value": "0x00E8",
    "start": 7268,
    "end": 7274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7274,
    "end": 7275
  },
  {
    "type": "Numeric",
    "value": "0x1D23",
    "start": 7276,
    "end": 7282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7282,
    "end": 7283
  },
  {
    "type": "Numeric",
    "value": "0x2020",
    "start": 7284,
    "end": 7290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7290,
    "end": 7291
  },
  {
    "type": "Numeric",
    "value": "0x000D",
    "start": 7292,
    "end": 7298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7298,
    "end": 7299
  },
  {
    "type": "Numeric",
    "value": "0x000A",
    "start": 7300,
    "end": 7306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7306,
    "end": 7307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7307,
    "end": 7308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7308,
    "end": 7309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7318,
    "end": 7319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7319,
    "end": 7320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7320,
    "end": 7321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7321,
    "end": 7322
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 7328,
    "end": 7338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7338,
    "end": 7339
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 7339,
    "end": 7346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7346,
    "end": 7347
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7347,
    "end": 7350
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 7351,
    "end": 7359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7359,
    "end": 7360
  },
  {
    "type": "String",
    "value": "\"Check UTF8 encoding\"",
    "start": 7360,
    "end": 7381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7391,
    "end": 7399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7400,
    "end": 7401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7401,
    "end": 7402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7403,
    "end": 7404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7417,
    "end": 7420
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7421,
    "end": 7423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7424,
    "end": 7425
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7426,
    "end": 7429
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 7430,
    "end": 7441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7441,
    "end": 7442
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 7442,
    "end": 7452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7452,
    "end": 7453
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 7453,
    "end": 7455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7455,
    "end": 7456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7456,
    "end": 7457
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7470,
    "end": 7472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7472,
    "end": 7473
  },
  {
    "type": "Identifier",
    "value": "writeUtf8Bom",
    "start": 7473,
    "end": 7485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7485,
    "end": 7486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7486,
    "end": 7487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7487,
    "end": 7488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7501,
    "end": 7504
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7505,
    "end": 7510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7511,
    "end": 7512
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7513,
    "end": 7514
  },
  {
    "type": "Numeric",
    "value": "0x0054",
    "start": 7514,
    "end": 7520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7520,
    "end": 7521
  },
  {
    "type": "Numeric",
    "value": "0x00E8",
    "start": 7522,
    "end": 7528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7528,
    "end": 7529
  },
  {
    "type": "Numeric",
    "value": "0x1D23",
    "start": 7530,
    "end": 7536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7536,
    "end": 7537
  },
  {
    "type": "Numeric",
    "value": "0x2020",
    "start": 7538,
    "end": 7544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7544,
    "end": 7545
  },
  {
    "type": "Numeric",
    "value": "0x000D",
    "start": 7546,
    "end": 7552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7552,
    "end": 7553
  },
  {
    "type": "Numeric",
    "value": "0x000A",
    "start": 7554,
    "end": 7560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7560,
    "end": 7561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7561,
    "end": 7562
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7575,
    "end": 7578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7579,
    "end": 7580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7580,
    "end": 7583
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7584,
    "end": 7585
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 7586,
    "end": 7588
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7589,
    "end": 7594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7594,
    "end": 7595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7596,
    "end": 7597
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7614,
    "end": 7616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Identifier",
    "value": "writeUtf8CodePoint",
    "start": 7617,
    "end": 7635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7635,
    "end": 7636
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 7636,
    "end": 7641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7641,
    "end": 7642
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7642,
    "end": 7643
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7643,
    "end": 7644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7644,
    "end": 7645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7645,
    "end": 7646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7659,
    "end": 7660
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7673,
    "end": 7675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7675,
    "end": 7676
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7676,
    "end": 7681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7682,
    "end": 7683
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7684,
    "end": 7685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7685,
    "end": 7686
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7699,
    "end": 7702
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 7703,
    "end": 7708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7709,
    "end": 7710
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7711,
    "end": 7712
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7712,
    "end": 7713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7713,
    "end": 7714
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7727,
    "end": 7730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7732,
    "end": 7735
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7736,
    "end": 7737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7738,
    "end": 7739
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7740,
    "end": 7741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7741,
    "end": 7742
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7743,
    "end": 7744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7745,
    "end": 7746
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 7747,
    "end": 7749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7749,
    "end": 7750
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 7751,
    "end": 7752
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 7752,
    "end": 7754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7756,
    "end": 7757
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 7774,
    "end": 7779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7779,
    "end": 7780
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 7780,
    "end": 7784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7784,
    "end": 7785
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 7785,
    "end": 7787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7787,
    "end": 7788
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 7788,
    "end": 7796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7796,
    "end": 7797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7797,
    "end": 7798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7798,
    "end": 7799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7799,
    "end": 7800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7813,
    "end": 7814
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7827,
    "end": 7830
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 7831,
    "end": 7839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7840,
    "end": 7841
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7842,
    "end": 7843
  },
  {
    "type": "Numeric",
    "value": "0xEF",
    "start": 7843,
    "end": 7847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7847,
    "end": 7848
  },
  {
    "type": "Numeric",
    "value": "0xBB",
    "start": 7849,
    "end": 7853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7853,
    "end": 7854
  },
  {
    "type": "Numeric",
    "value": "0xBF",
    "start": 7855,
    "end": 7859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7859,
    "end": 7860
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 7861,
    "end": 7865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7865,
    "end": 7866
  },
  {
    "type": "Numeric",
    "value": "0xC3",
    "start": 7867,
    "end": 7871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7871,
    "end": 7872
  },
  {
    "type": "Numeric",
    "value": "0xA8",
    "start": 7873,
    "end": 7877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7877,
    "end": 7878
  },
  {
    "type": "Numeric",
    "value": "0xE1",
    "start": 7879,
    "end": 7883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7883,
    "end": 7884
  },
  {
    "type": "Numeric",
    "value": "0xB4",
    "start": 7885,
    "end": 7889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7889,
    "end": 7890
  },
  {
    "type": "Numeric",
    "value": "0xA3",
    "start": 7891,
    "end": 7895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7895,
    "end": 7896
  },
  {
    "type": "Numeric",
    "value": "0xE2",
    "start": 7897,
    "end": 7901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7901,
    "end": 7902
  },
  {
    "type": "Numeric",
    "value": "0x80",
    "start": 7903,
    "end": 7907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7907,
    "end": 7908
  },
  {
    "type": "Numeric",
    "value": "0xA0",
    "start": 7909,
    "end": 7913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7913,
    "end": 7914
  },
  {
    "type": "Numeric",
    "value": "0x0D",
    "start": 7915,
    "end": 7919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7919,
    "end": 7920
  },
  {
    "type": "Numeric",
    "value": "0x0A",
    "start": 7921,
    "end": 7925
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7925,
    "end": 7926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7926,
    "end": 7927
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7940,
    "end": 7946
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 7947,
    "end": 7957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7957,
    "end": 7958
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 7958,
    "end": 7970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7970,
    "end": 7971
  },
  {
    "type": "Identifier",
    "value": "bytes",
    "start": 7971,
    "end": 7976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7976,
    "end": 7977
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 7978,
    "end": 7986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7986,
    "end": 7987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7987,
    "end": 7988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7997,
    "end": 7998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7998,
    "end": 7999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7999,
    "end": 8000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8000,
    "end": 8001
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 8045,
    "end": 8055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8055,
    "end": 8056
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 8056,
    "end": 8063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8063,
    "end": 8064
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8064,
    "end": 8067
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 8068,
    "end": 8076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8076,
    "end": 8077
  },
  {
    "type": "String",
    "value": "\"Check saving a file\"",
    "start": 8077,
    "end": 8098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8098,
    "end": 8099
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8108,
    "end": 8116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8117,
    "end": 8118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8118,
    "end": 8119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8120,
    "end": 8121
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8134,
    "end": 8137
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 8138,
    "end": 8146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8147,
    "end": 8148
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 8149,
    "end": 8160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 8161,
    "end": 8162
  },
  {
    "type": "String",
    "value": "\"\\\\tmpUTF16LE.txt\"",
    "start": 8163,
    "end": 8181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8181,
    "end": 8182
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8195,
    "end": 8198
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8199,
    "end": 8201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8202,
    "end": 8203
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8204,
    "end": 8207
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 8208,
    "end": 8219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8219,
    "end": 8220
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 8220,
    "end": 8230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8230,
    "end": 8231
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 8231,
    "end": 8233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8233,
    "end": 8234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8234,
    "end": 8235
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8248,
    "end": 8250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8250,
    "end": 8251
  },
  {
    "type": "Identifier",
    "value": "writeUtf16leBom",
    "start": 8251,
    "end": 8266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8266,
    "end": 8267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8267,
    "end": 8268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8268,
    "end": 8269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8282,
    "end": 8285
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 8286,
    "end": 8291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8292,
    "end": 8293
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8294,
    "end": 8295
  },
  {
    "type": "Numeric",
    "value": "0x0054",
    "start": 8295,
    "end": 8301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8301,
    "end": 8302
  },
  {
    "type": "Numeric",
    "value": "0x00E8",
    "start": 8303,
    "end": 8309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8309,
    "end": 8310
  },
  {
    "type": "Numeric",
    "value": "0x1D23",
    "start": 8311,
    "end": 8317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8317,
    "end": 8318
  },
  {
    "type": "Numeric",
    "value": "0x2020",
    "start": 8319,
    "end": 8325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8325,
    "end": 8326
  },
  {
    "type": "Numeric",
    "value": "0x000D",
    "start": 8327,
    "end": 8333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8333,
    "end": 8334
  },
  {
    "type": "Numeric",
    "value": "0x000A",
    "start": 8335,
    "end": 8341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8341,
    "end": 8342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8342,
    "end": 8343
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 8356,
    "end": 8361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8361,
    "end": 8362
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 8362,
    "end": 8369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8369,
    "end": 8370
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8370,
    "end": 8378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8379,
    "end": 8380
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8380,
    "end": 8383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8383,
    "end": 8384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8385,
    "end": 8386
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8387,
    "end": 8389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8389,
    "end": 8390
  },
  {
    "type": "Identifier",
    "value": "writeUtf16CodePoint",
    "start": 8390,
    "end": 8409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8409,
    "end": 8410
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8410,
    "end": 8413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8413,
    "end": 8414
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 8415,
    "end": 8420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8420,
    "end": 8421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8421,
    "end": 8422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8423,
    "end": 8424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8424,
    "end": 8425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8425,
    "end": 8426
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 8439,
    "end": 8441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8441,
    "end": 8442
  },
  {
    "type": "Identifier",
    "value": "save",
    "start": 8442,
    "end": 8446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8446,
    "end": 8447
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 8447,
    "end": 8455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8455,
    "end": 8456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8456,
    "end": 8457
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8471,
    "end": 8474
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8475,
    "end": 8484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8485,
    "end": 8486
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8487,
    "end": 8490
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 8491,
    "end": 8502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8502,
    "end": 8503
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 8503,
    "end": 8513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8513,
    "end": 8514
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 8514,
    "end": 8522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8523,
    "end": 8524
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8537,
    "end": 8539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8540,
    "end": 8541
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8541,
    "end": 8550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8550,
    "end": 8551
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 8551,
    "end": 8559
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 8560,
    "end": 8563
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 8564,
    "end": 8573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8573,
    "end": 8574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8575,
    "end": 8576
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 8593,
    "end": 8598
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 8599,
    "end": 8604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8604,
    "end": 8605
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 8605,
    "end": 8625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8625,
    "end": 8626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8626,
    "end": 8627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8640,
    "end": 8641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8654,
    "end": 8657
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 8658,
    "end": 8671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8672,
    "end": 8673
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8674,
    "end": 8675
  },
  {
    "type": "Numeric",
    "value": "0xFF",
    "start": 8675,
    "end": 8679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8679,
    "end": 8680
  },
  {
    "type": "Numeric",
    "value": "0xFE",
    "start": 8681,
    "end": 8685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8685,
    "end": 8686
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 8687,
    "end": 8691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8691,
    "end": 8692
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8693,
    "end": 8697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8697,
    "end": 8698
  },
  {
    "type": "Numeric",
    "value": "0xE8",
    "start": 8699,
    "end": 8703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8703,
    "end": 8704
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8705,
    "end": 8709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8709,
    "end": 8710
  },
  {
    "type": "Numeric",
    "value": "0x23",
    "start": 8711,
    "end": 8715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8715,
    "end": 8716
  },
  {
    "type": "Numeric",
    "value": "0x1D",
    "start": 8717,
    "end": 8721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8721,
    "end": 8722
  },
  {
    "type": "Numeric",
    "value": "0x20",
    "start": 8723,
    "end": 8727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8727,
    "end": 8728
  },
  {
    "type": "Numeric",
    "value": "0x20",
    "start": 8729,
    "end": 8733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8733,
    "end": 8734
  },
  {
    "type": "Numeric",
    "value": "0x0D",
    "start": 8735,
    "end": 8739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8739,
    "end": 8740
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8741,
    "end": 8745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8745,
    "end": 8746
  },
  {
    "type": "Numeric",
    "value": "0x0A",
    "start": 8747,
    "end": 8751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8751,
    "end": 8752
  },
  {
    "type": "Numeric",
    "value": "0x00",
    "start": 8753,
    "end": 8757
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8757,
    "end": 8758
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8771,
    "end": 8780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8780,
    "end": 8781
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 8781,
    "end": 8786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8787,
    "end": 8788
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8789,
    "end": 8790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8790,
    "end": 8791
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 8804,
    "end": 8817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8817,
    "end": 8818
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 8818,
    "end": 8825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8825,
    "end": 8826
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8826,
    "end": 8834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8835,
    "end": 8836
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8836,
    "end": 8839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8839,
    "end": 8840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8841,
    "end": 8842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8859,
    "end": 8862
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 8863,
    "end": 8870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8871,
    "end": 8872
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 8873,
    "end": 8882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8882,
    "end": 8883
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 8883,
    "end": 8891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8891,
    "end": 8892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8892,
    "end": 8893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8893,
    "end": 8894
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8911,
    "end": 8913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8914,
    "end": 8915
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 8915,
    "end": 8922
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 8923,
    "end": 8926
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 8927,
    "end": 8930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8930,
    "end": 8931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8932,
    "end": 8933
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 8954,
    "end": 8959
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 8960,
    "end": 8965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8965,
    "end": 8966
  },
  {
    "type": "String",
    "value": "\"Incorrect byte value\"",
    "start": 8966,
    "end": 8988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8988,
    "end": 8989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8989,
    "end": 8990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9007,
    "end": 9008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9021,
    "end": 9022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9022,
    "end": 9023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9023,
    "end": 9024
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9037,
    "end": 9043
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9044,
    "end": 9048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9048,
    "end": 9049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9058,
    "end": 9059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9059,
    "end": 9060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9060,
    "end": 9061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9061,
    "end": 9062
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 9068,
    "end": 9078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9078,
    "end": 9079
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 9079,
    "end": 9086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9086,
    "end": 9087
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9087,
    "end": 9090
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 9091,
    "end": 9099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9099,
    "end": 9100
  },
  {
    "type": "String",
    "value": "\"Check reading past buffer asserts\"",
    "start": 9100,
    "end": 9135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9135,
    "end": 9136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9141,
    "end": 9149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9150,
    "end": 9151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9151,
    "end": 9152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9153,
    "end": 9154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9163,
    "end": 9166
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9167,
    "end": 9169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9170,
    "end": 9171
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9172,
    "end": 9175
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 9176,
    "end": 9187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9187,
    "end": 9188
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 9188,
    "end": 9198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9198,
    "end": 9199
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 9199,
    "end": 9210
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9211,
    "end": 9212
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 9213,
    "end": 9228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9228,
    "end": 9229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9229,
    "end": 9230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9239,
    "end": 9242
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 9243,
    "end": 9249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9250,
    "end": 9251
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9252,
    "end": 9254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9254,
    "end": 9255
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 9255,
    "end": 9263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9263,
    "end": 9264
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 9264,
    "end": 9267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9267,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9268,
    "end": 9269
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9278,
    "end": 9284
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9285,
    "end": 9289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9289,
    "end": 9290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9295,
    "end": 9296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9296,
    "end": 9297
  },
  {
    "type": "String",
    "value": "\"read beyond buffer length\"",
    "start": 9298,
    "end": 9325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9325,
    "end": 9326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9326,
    "end": 9327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9327,
    "end": 9328
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 9333,
    "end": 9343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9343,
    "end": 9344
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 9344,
    "end": 9351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9351,
    "end": 9352
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9352,
    "end": 9355
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 9356,
    "end": 9364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9364,
    "end": 9365
  },
  {
    "type": "String",
    "value": "\"Check writing past buffer asserts\"",
    "start": 9365,
    "end": 9400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9400,
    "end": 9401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9406,
    "end": 9414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9415,
    "end": 9416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9416,
    "end": 9417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9418,
    "end": 9419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9428,
    "end": 9431
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9432,
    "end": 9434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9435,
    "end": 9436
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9437,
    "end": 9440
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 9441,
    "end": 9452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9452,
    "end": 9453
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 9453,
    "end": 9463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9463,
    "end": 9464
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 9464,
    "end": 9475
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9476,
    "end": 9477
  },
  {
    "type": "String",
    "value": "\"\\\\UTF8BOM.txt\"",
    "start": 9478,
    "end": 9493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9493,
    "end": 9494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9494,
    "end": 9495
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 9504,
    "end": 9506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9506,
    "end": 9507
  },
  {
    "type": "Identifier",
    "value": "writeByte",
    "start": 9507,
    "end": 9516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9516,
    "end": 9517
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 9517,
    "end": 9518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9518,
    "end": 9519
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 9520,
    "end": 9523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9523,
    "end": 9524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9524,
    "end": 9525
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9534,
    "end": 9540
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 9541,
    "end": 9545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9545,
    "end": 9546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9551,
    "end": 9552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9552,
    "end": 9553
  },
  {
    "type": "String",
    "value": "\"write beyond buffer length\"",
    "start": 9554,
    "end": 9582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9582,
    "end": 9583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9583,
    "end": 9584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9584,
    "end": 9585
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 9625,
    "end": 9635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9635,
    "end": 9636
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 9636,
    "end": 9643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9643,
    "end": 9644
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9644,
    "end": 9647
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 9648,
    "end": 9656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9656,
    "end": 9657
  },
  {
    "type": "String",
    "value": "\"Read non-BMP utf16 chars\"",
    "start": 9657,
    "end": 9683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9683,
    "end": 9684
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9693,
    "end": 9701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9702,
    "end": 9703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9703,
    "end": 9704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9705,
    "end": 9706
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9719,
    "end": 9722
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 9723,
    "end": 9732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9733,
    "end": 9734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9735,
    "end": 9738
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 9739,
    "end": 9750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9750,
    "end": 9751
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 9751,
    "end": 9761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9761,
    "end": 9762
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 9762,
    "end": 9773
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9774,
    "end": 9775
  },
  {
    "type": "String",
    "value": "\"\\\\utf16leNonBmp.txt\"",
    "start": 9776,
    "end": 9797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9797,
    "end": 9798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9798,
    "end": 9799
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9812,
    "end": 9814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9815,
    "end": 9816
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 9816,
    "end": 9825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9825,
    "end": 9826
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 9826,
    "end": 9834
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 9835,
    "end": 9838
  },
  {
    "type": "String",
    "value": "'utf16le'",
    "start": 9839,
    "end": 9848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9848,
    "end": 9849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9850,
    "end": 9851
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 9868,
    "end": 9873
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 9874,
    "end": 9879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9879,
    "end": 9880
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 9880,
    "end": 9900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9900,
    "end": 9901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9901,
    "end": 9902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9915,
    "end": 9916
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9930,
    "end": 9933
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 9934,
    "end": 9944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9945,
    "end": 9946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9947,
    "end": 9948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9948,
    "end": 9949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9949,
    "end": 9950
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 9963,
    "end": 9966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9967,
    "end": 9968
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9968,
    "end": 9971
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9972,
    "end": 9973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9974,
    "end": 9975
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 9976,
    "end": 9977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9977,
    "end": 9978
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9979,
    "end": 9980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9981,
    "end": 9982
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 9983,
    "end": 9984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9984,
    "end": 9985
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 9986,
    "end": 9987
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 9987,
    "end": 9989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9989,
    "end": 9990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9991,
    "end": 9992
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10009,
    "end": 10019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10019,
    "end": 10020
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 10020,
    "end": 10024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10024,
    "end": 10025
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10025,
    "end": 10034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10034,
    "end": 10035
  },
  {
    "type": "Identifier",
    "value": "readUtf16CodePoint",
    "start": 10035,
    "end": 10053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10053,
    "end": 10054
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 10054,
    "end": 10059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10059,
    "end": 10060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10060,
    "end": 10061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10061,
    "end": 10062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10075,
    "end": 10076
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10089,
    "end": 10092
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10093,
    "end": 10111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10112,
    "end": 10113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10114,
    "end": 10115
  },
  {
    "type": "Numeric",
    "value": "0x10480",
    "start": 10115,
    "end": 10122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10122,
    "end": 10123
  },
  {
    "type": "Numeric",
    "value": "0x10481",
    "start": 10124,
    "end": 10131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10131,
    "end": 10132
  },
  {
    "type": "Numeric",
    "value": "0x10482",
    "start": 10133,
    "end": 10140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10140,
    "end": 10141
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 10142,
    "end": 10146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10146,
    "end": 10147
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 10148,
    "end": 10152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10152,
    "end": 10153
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 10154,
    "end": 10158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10158,
    "end": 10159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10159,
    "end": 10160
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10173,
    "end": 10179
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 10180,
    "end": 10190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10190,
    "end": 10191
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 10191,
    "end": 10203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10203,
    "end": 10204
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10204,
    "end": 10214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10214,
    "end": 10215
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10216,
    "end": 10234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10234,
    "end": 10235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10235,
    "end": 10236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10245,
    "end": 10246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10246,
    "end": 10247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10247,
    "end": 10248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10248,
    "end": 10249
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 10255,
    "end": 10265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10265,
    "end": 10266
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 10266,
    "end": 10273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10273,
    "end": 10274
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10274,
    "end": 10277
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 10278,
    "end": 10286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10286,
    "end": 10287
  },
  {
    "type": "String",
    "value": "\"Read non-BMP utf8 chars\"",
    "start": 10287,
    "end": 10312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10312,
    "end": 10313
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10322,
    "end": 10330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10331,
    "end": 10332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10332,
    "end": 10333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10334,
    "end": 10335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10348,
    "end": 10351
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10352,
    "end": 10361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10362,
    "end": 10363
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10364,
    "end": 10367
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 10368,
    "end": 10379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10379,
    "end": 10380
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 10380,
    "end": 10390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10390,
    "end": 10391
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 10391,
    "end": 10402
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 10403,
    "end": 10404
  },
  {
    "type": "String",
    "value": "\"\\\\utf8NonBmp.txt\"",
    "start": 10405,
    "end": 10423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10423,
    "end": 10424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10424,
    "end": 10425
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 10438,
    "end": 10440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10441,
    "end": 10442
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10442,
    "end": 10451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10451,
    "end": 10452
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 10452,
    "end": 10460
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 10461,
    "end": 10464
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 10465,
    "end": 10471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10471,
    "end": 10472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10473,
    "end": 10474
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 10491,
    "end": 10496
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 10497,
    "end": 10502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10502,
    "end": 10503
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 10503,
    "end": 10523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10523,
    "end": 10524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10524,
    "end": 10525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10538,
    "end": 10539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10553,
    "end": 10556
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10557,
    "end": 10567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10568,
    "end": 10569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10570,
    "end": 10571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10571,
    "end": 10572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10572,
    "end": 10573
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 10586,
    "end": 10589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10590,
    "end": 10591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10591,
    "end": 10594
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10595,
    "end": 10596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10597,
    "end": 10598
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10599,
    "end": 10600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10600,
    "end": 10601
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10602,
    "end": 10603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10604,
    "end": 10605
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 10606,
    "end": 10607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10607,
    "end": 10608
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 10609,
    "end": 10610
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 10610,
    "end": 10612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10612,
    "end": 10613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10614,
    "end": 10615
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10632,
    "end": 10642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10642,
    "end": 10643
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 10643,
    "end": 10647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10647,
    "end": 10648
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 10648,
    "end": 10657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10657,
    "end": 10658
  },
  {
    "type": "Identifier",
    "value": "readUtf8CodePoint",
    "start": 10658,
    "end": 10675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10675,
    "end": 10676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10676,
    "end": 10677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10677,
    "end": 10678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10678,
    "end": 10679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10692,
    "end": 10693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10706,
    "end": 10709
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10710,
    "end": 10728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10729,
    "end": 10730
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10731,
    "end": 10732
  },
  {
    "type": "Numeric",
    "value": "0x10480",
    "start": 10732,
    "end": 10739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10739,
    "end": 10740
  },
  {
    "type": "Numeric",
    "value": "0x10481",
    "start": 10741,
    "end": 10748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10748,
    "end": 10749
  },
  {
    "type": "Numeric",
    "value": "0x10482",
    "start": 10750,
    "end": 10757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10757,
    "end": 10758
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 10759,
    "end": 10763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10763,
    "end": 10764
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 10765,
    "end": 10769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10769,
    "end": 10770
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 10771,
    "end": 10775
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10775,
    "end": 10776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10776,
    "end": 10777
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10790,
    "end": 10796
  },
  {
    "type": "Identifier",
    "value": "TestRunner",
    "start": 10797,
    "end": 10807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10807,
    "end": 10808
  },
  {
    "type": "Identifier",
    "value": "arrayCompare",
    "start": 10808,
    "end": 10820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10820,
    "end": 10821
  },
  {
    "type": "Identifier",
    "value": "codePoints",
    "start": 10821,
    "end": 10831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10831,
    "end": 10832
  },
  {
    "type": "Identifier",
    "value": "expectedCodePoints",
    "start": 10833,
    "end": 10851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10851,
    "end": 10852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10852,
    "end": 10853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10862,
    "end": 10863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10863,
    "end": 10864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10864,
    "end": 10865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10865,
    "end": 10866
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 10872,
    "end": 10882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10882,
    "end": 10883
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 10883,
    "end": 10890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10890,
    "end": 10891
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10891,
    "end": 10894
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 10895,
    "end": 10903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10903,
    "end": 10904
  },
  {
    "type": "String",
    "value": "\"Write non-BMP utf8 chars\"",
    "start": 10904,
    "end": 10930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10930,
    "end": 10931
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10940,
    "end": 10948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10949,
    "end": 10950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10950,
    "end": 10951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10952,
    "end": 10953
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10966,
    "end": 10969
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 10970,
    "end": 10978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10979,
    "end": 10980
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 10981,
    "end": 10992
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 10993,
    "end": 10994
  },
  {
    "type": "String",
    "value": "\"\\\\tmpUTF8nonBmp.txt\"",
    "start": 10995,
    "end": 11016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11016,
    "end": 11017
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11030,
    "end": 11033
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11034,
    "end": 11036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11037,
    "end": 11038
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11039,
    "end": 11042
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 11043,
    "end": 11054
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11054,
    "end": 11055
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 11055,
    "end": 11065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11065,
    "end": 11066
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 11066,
    "end": 11068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11068,
    "end": 11069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11069,
    "end": 11070
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11083,
    "end": 11086
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 11087,
    "end": 11092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11093,
    "end": 11094
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11095,
    "end": 11096
  },
  {
    "type": "Numeric",
    "value": "0x10480",
    "start": 11096,
    "end": 11103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11103,
    "end": 11104
  },
  {
    "type": "Numeric",
    "value": "0x10481",
    "start": 11105,
    "end": 11112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11112,
    "end": 11113
  },
  {
    "type": "Numeric",
    "value": "0x10482",
    "start": 11114,
    "end": 11121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11121,
    "end": 11122
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 11123,
    "end": 11127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11127,
    "end": 11128
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 11129,
    "end": 11133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11133,
    "end": 11134
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 11135,
    "end": 11139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11139,
    "end": 11140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11140,
    "end": 11141
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 11154,
    "end": 11159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11159,
    "end": 11160
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 11160,
    "end": 11167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11167,
    "end": 11168
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11168,
    "end": 11176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11177,
    "end": 11178
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11178,
    "end": 11181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11181,
    "end": 11182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11183,
    "end": 11184
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11185,
    "end": 11187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11187,
    "end": 11188
  },
  {
    "type": "Identifier",
    "value": "writeUtf8CodePoint",
    "start": 11188,
    "end": 11206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11206,
    "end": 11207
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11207,
    "end": 11210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11210,
    "end": 11211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11211,
    "end": 11212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11213,
    "end": 11214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11214,
    "end": 11215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11215,
    "end": 11216
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11229,
    "end": 11231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11231,
    "end": 11232
  },
  {
    "type": "Identifier",
    "value": "save",
    "start": 11232,
    "end": 11236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11236,
    "end": 11237
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 11237,
    "end": 11245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11245,
    "end": 11246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11246,
    "end": 11247
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11261,
    "end": 11264
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 11265,
    "end": 11274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11275,
    "end": 11276
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11277,
    "end": 11280
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 11281,
    "end": 11292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11292,
    "end": 11293
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 11293,
    "end": 11303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11303,
    "end": 11304
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 11304,
    "end": 11312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11312,
    "end": 11313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11313,
    "end": 11314
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 11327,
    "end": 11329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11330,
    "end": 11331
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 11331,
    "end": 11340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11340,
    "end": 11341
  },
  {
    "type": "Identifier",
    "value": "encoding",
    "start": 11341,
    "end": 11349
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 11350,
    "end": 11353
  },
  {
    "type": "String",
    "value": "'utf8'",
    "start": 11354,
    "end": 11360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11360,
    "end": 11361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11362,
    "end": 11363
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 11380,
    "end": 11385
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 11386,
    "end": 11391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11391,
    "end": 11392
  },
  {
    "type": "String",
    "value": "\"Incorrect encoding\"",
    "start": 11392,
    "end": 11412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11412,
    "end": 11413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11413,
    "end": 11414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11427,
    "end": 11428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11441,
    "end": 11444
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 11445,
    "end": 11458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11459,
    "end": 11460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11461,
    "end": 11462
  },
  {
    "type": "Numeric",
    "value": "0xF0",
    "start": 11462,
    "end": 11466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11466,
    "end": 11467
  },
  {
    "type": "Numeric",
    "value": "0x90",
    "start": 11468,
    "end": 11472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11472,
    "end": 11473
  },
  {
    "type": "Numeric",
    "value": "0x92",
    "start": 11474,
    "end": 11478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11478,
    "end": 11479
  },
  {
    "type": "Numeric",
    "value": "0x80",
    "start": 11480,
    "end": 11484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11484,
    "end": 11485
  },
  {
    "type": "Numeric",
    "value": "0xF0",
    "start": 11486,
    "end": 11490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11490,
    "end": 11491
  },
  {
    "type": "Numeric",
    "value": "0x90",
    "start": 11492,
    "end": 11496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11496,
    "end": 11497
  },
  {
    "type": "Numeric",
    "value": "0x92",
    "start": 11498,
    "end": 11502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11502,
    "end": 11503
  },
  {
    "type": "Numeric",
    "value": "0x81",
    "start": 11504,
    "end": 11508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11508,
    "end": 11509
  },
  {
    "type": "Numeric",
    "value": "0xF0",
    "start": 11510,
    "end": 11514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11514,
    "end": 11515
  },
  {
    "type": "Numeric",
    "value": "0x90",
    "start": 11516,
    "end": 11520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11520,
    "end": 11521
  },
  {
    "type": "Numeric",
    "value": "0x92",
    "start": 11522,
    "end": 11526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11526,
    "end": 11527
  },
  {
    "type": "Numeric",
    "value": "0x82",
    "start": 11528,
    "end": 11532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11532,
    "end": 11533
  },
  {
    "type": "Numeric",
    "value": "0x54",
    "start": 11534,
    "end": 11538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11538,
    "end": 11539
  },
  {
    "type": "Numeric",
    "value": "0x68",
    "start": 11540,
    "end": 11544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11544,
    "end": 11545
  },
  {
    "type": "Numeric",
    "value": "0x69",
    "start": 11546,
    "end": 11550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11550,
    "end": 11551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11551,
    "end": 11552
  },
  {
    "type": "Identifier",
    "value": "expectedBytes",
    "start": 11565,
    "end": 11578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11578,
    "end": 11579
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 11579,
    "end": 11586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11586,
    "end": 11587
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11587,
    "end": 11595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11596,
    "end": 11597
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11597,
    "end": 11600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11600,
    "end": 11601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11602,
    "end": 11603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11620,
    "end": 11623
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 11624,
    "end": 11631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11632,
    "end": 11633
  },
  {
    "type": "Identifier",
    "value": "savedFile",
    "start": 11634,
    "end": 11643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11643,
    "end": 11644
  },
  {
    "type": "Identifier",
    "value": "readByte",
    "start": 11644,
    "end": 11652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11652,
    "end": 11653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11653,
    "end": 11654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11654,
    "end": 11655
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 11672,
    "end": 11674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11675,
    "end": 11676
  },
  {
    "type": "Identifier",
    "value": "byteVal",
    "start": 11676,
    "end": 11683
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 11684,
    "end": 11687
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 11688,
    "end": 11691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11691,
    "end": 11692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11693,
    "end": 11694
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 11715,
    "end": 11720
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 11721,
    "end": 11726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11726,
    "end": 11727
  },
  {
    "type": "String",
    "value": "\"Incorrect byte value\"",
    "start": 11727,
    "end": 11749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11749,
    "end": 11750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11750,
    "end": 11751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11768,
    "end": 11769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11782,
    "end": 11783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11783,
    "end": 11784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11784,
    "end": 11785
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 11798,
    "end": 11804
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 11805,
    "end": 11809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11809,
    "end": 11810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11819,
    "end": 11820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11820,
    "end": 11821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11821,
    "end": 11822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11822,
    "end": 11823
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 11829,
    "end": 11839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11839,
    "end": 11840
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 11840,
    "end": 11847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11847,
    "end": 11848
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11848,
    "end": 11851
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 11852,
    "end": 11860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11860,
    "end": 11861
  },
  {
    "type": "String",
    "value": "\"Test invalid lead UTF8 byte\"",
    "start": 11861,
    "end": 11890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11890,
    "end": 11891
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 11900,
    "end": 11908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11909,
    "end": 11910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11910,
    "end": 11911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11912,
    "end": 11913
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11926,
    "end": 11929
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 11930,
    "end": 11938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11939,
    "end": 11940
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 11941,
    "end": 11952
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 11953,
    "end": 11954
  },
  {
    "type": "String",
    "value": "\"\\\\utf8BadLeadByte.txt\"",
    "start": 11955,
    "end": 11978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11978,
    "end": 11979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11992,
    "end": 11995
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 11996,
    "end": 11998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11999,
    "end": 12000
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12001,
    "end": 12004
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12005,
    "end": 12016
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12016,
    "end": 12017
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12017,
    "end": 12027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12027,
    "end": 12028
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12028,
    "end": 12036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12036,
    "end": 12037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12037,
    "end": 12038
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12051,
    "end": 12057
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12058,
    "end": 12062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12062,
    "end": 12063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12072,
    "end": 12073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12073,
    "end": 12074
  },
  {
    "type": "String",
    "value": "\"Invalid UTF8 byte sequence at index: 4\"",
    "start": 12075,
    "end": 12115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12115,
    "end": 12116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12116,
    "end": 12117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12117,
    "end": 12118
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 12124,
    "end": 12134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12134,
    "end": 12135
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 12135,
    "end": 12142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12142,
    "end": 12143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12143,
    "end": 12146
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 12147,
    "end": 12155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12155,
    "end": 12156
  },
  {
    "type": "String",
    "value": "\"Test invalid tail UTF8 byte\"",
    "start": 12156,
    "end": 12185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12185,
    "end": 12186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12195,
    "end": 12203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12204,
    "end": 12205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12205,
    "end": 12206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12207,
    "end": 12208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12221,
    "end": 12224
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12225,
    "end": 12233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12234,
    "end": 12235
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 12236,
    "end": 12247
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 12248,
    "end": 12249
  },
  {
    "type": "String",
    "value": "\"\\\\utf8InvalidTail.txt\"",
    "start": 12250,
    "end": 12273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12273,
    "end": 12274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12287,
    "end": 12290
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12291,
    "end": 12293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12294,
    "end": 12295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12296,
    "end": 12299
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12300,
    "end": 12311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12311,
    "end": 12312
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12312,
    "end": 12322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12322,
    "end": 12323
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12323,
    "end": 12331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12331,
    "end": 12332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12332,
    "end": 12333
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12346,
    "end": 12352
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12353,
    "end": 12357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12357,
    "end": 12358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12367,
    "end": 12368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12368,
    "end": 12369
  },
  {
    "type": "String",
    "value": "\"Trailing byte invalid at index: 8\"",
    "start": 12370,
    "end": 12405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12405,
    "end": 12406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12406,
    "end": 12407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12407,
    "end": 12408
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 12414,
    "end": 12424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12424,
    "end": 12425
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 12425,
    "end": 12432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12432,
    "end": 12433
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12433,
    "end": 12436
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 12437,
    "end": 12445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12445,
    "end": 12446
  },
  {
    "type": "String",
    "value": "\"Test ANSI fails validation\"",
    "start": 12446,
    "end": 12474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12474,
    "end": 12475
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12484,
    "end": 12492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12493,
    "end": 12494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12494,
    "end": 12495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12496,
    "end": 12497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12510,
    "end": 12513
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12514,
    "end": 12522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12523,
    "end": 12524
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 12525,
    "end": 12536
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 12537,
    "end": 12538
  },
  {
    "type": "String",
    "value": "\"\\\\ansi.txt\"",
    "start": 12539,
    "end": 12551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12551,
    "end": 12552
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12565,
    "end": 12568
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12569,
    "end": 12571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12572,
    "end": 12573
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12574,
    "end": 12577
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12578,
    "end": 12589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12589,
    "end": 12590
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12590,
    "end": 12600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12600,
    "end": 12601
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12601,
    "end": 12609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12609,
    "end": 12610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12610,
    "end": 12611
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12624,
    "end": 12630
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12631,
    "end": 12635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12635,
    "end": 12636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12645,
    "end": 12646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12646,
    "end": 12647
  },
  {
    "type": "String",
    "value": "\"Trailing byte invalid at index: 6\"",
    "start": 12648,
    "end": 12683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12683,
    "end": 12684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12684,
    "end": 12685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12685,
    "end": 12686
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 12692,
    "end": 12702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12702,
    "end": 12703
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 12703,
    "end": 12710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12710,
    "end": 12711
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12711,
    "end": 12714
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 12715,
    "end": 12723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12723,
    "end": 12724
  },
  {
    "type": "String",
    "value": "\"Test UTF-16LE with invalid surrogate trail fails\"",
    "start": 12724,
    "end": 12774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12774,
    "end": 12775
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12784,
    "end": 12792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12793,
    "end": 12794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12794,
    "end": 12795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12796,
    "end": 12797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12810,
    "end": 12813
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12814,
    "end": 12822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12823,
    "end": 12824
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 12825,
    "end": 12836
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 12837,
    "end": 12838
  },
  {
    "type": "String",
    "value": "\"\\\\utf16leInvalidSurrogate.txt\"",
    "start": 12839,
    "end": 12870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12870,
    "end": 12871
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12884,
    "end": 12887
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 12888,
    "end": 12890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12891,
    "end": 12892
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12893,
    "end": 12896
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 12897,
    "end": 12908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12908,
    "end": 12909
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 12909,
    "end": 12919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12919,
    "end": 12920
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 12920,
    "end": 12928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12928,
    "end": 12929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12929,
    "end": 12930
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 12943,
    "end": 12949
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 12950,
    "end": 12954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12954,
    "end": 12955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12964,
    "end": 12965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 12965,
    "end": 12966
  },
  {
    "type": "String",
    "value": "\"Trail surrogate has an invalid value\"",
    "start": 12967,
    "end": 13005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13005,
    "end": 13006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13006,
    "end": 13007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13007,
    "end": 13008
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 13014,
    "end": 13024
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13024,
    "end": 13025
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 13025,
    "end": 13032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13032,
    "end": 13033
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13033,
    "end": 13036
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 13037,
    "end": 13045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13045,
    "end": 13046
  },
  {
    "type": "String",
    "value": "\"Test UTF-16BE with invalid surrogate head fails\"",
    "start": 13046,
    "end": 13095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13095,
    "end": 13096
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13105,
    "end": 13113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13114,
    "end": 13115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13115,
    "end": 13116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13117,
    "end": 13118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13131,
    "end": 13134
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13135,
    "end": 13143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13144,
    "end": 13145
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 13146,
    "end": 13157
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13158,
    "end": 13159
  },
  {
    "type": "String",
    "value": "\"\\\\UTF16BEInvalidSurrogate.txt\"",
    "start": 13160,
    "end": 13191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13191,
    "end": 13192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13205,
    "end": 13208
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13209,
    "end": 13211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13212,
    "end": 13213
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13214,
    "end": 13217
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 13218,
    "end": 13229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13229,
    "end": 13230
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 13230,
    "end": 13240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13240,
    "end": 13241
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13241,
    "end": 13249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13249,
    "end": 13250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13250,
    "end": 13251
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 13264,
    "end": 13270
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 13271,
    "end": 13275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13275,
    "end": 13276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13285,
    "end": 13286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13286,
    "end": 13287
  },
  {
    "type": "String",
    "value": "\"Byte sequence starts with a trail surrogate\"",
    "start": 13288,
    "end": 13333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13333,
    "end": 13334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13334,
    "end": 13335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13335,
    "end": 13336
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 13342,
    "end": 13352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13352,
    "end": 13353
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 13353,
    "end": 13360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13360,
    "end": 13361
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13361,
    "end": 13364
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 13365,
    "end": 13373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13373,
    "end": 13374
  },
  {
    "type": "String",
    "value": "\"Test UTF-16LE with missing trail surrogate fails\"",
    "start": 13374,
    "end": 13424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13424,
    "end": 13425
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13434,
    "end": 13442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13443,
    "end": 13444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13444,
    "end": 13445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13446,
    "end": 13447
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13460,
    "end": 13463
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13464,
    "end": 13472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13473,
    "end": 13474
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 13475,
    "end": 13486
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13487,
    "end": 13488
  },
  {
    "type": "String",
    "value": "\"\\\\utf16leMissingTrailSurrogate.txt\"",
    "start": 13489,
    "end": 13525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13525,
    "end": 13526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13539,
    "end": 13542
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13543,
    "end": 13545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13546,
    "end": 13547
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13548,
    "end": 13551
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 13552,
    "end": 13563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13563,
    "end": 13564
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 13564,
    "end": 13574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13574,
    "end": 13575
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13575,
    "end": 13583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13583,
    "end": 13584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13584,
    "end": 13585
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 13598,
    "end": 13604
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 13605,
    "end": 13609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13609,
    "end": 13610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13619,
    "end": 13620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13620,
    "end": 13621
  },
  {
    "type": "String",
    "value": "\"Trail surrogate has an invalid value\"",
    "start": 13622,
    "end": 13660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13660,
    "end": 13661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13661,
    "end": 13662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13662,
    "end": 13663
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 13695,
    "end": 13705
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13705,
    "end": 13706
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 13706,
    "end": 13713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13713,
    "end": 13714
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13714,
    "end": 13717
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 13718,
    "end": 13726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13726,
    "end": 13727
  },
  {
    "type": "String",
    "value": "\"Count character occurrences\"",
    "start": 13727,
    "end": 13756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13756,
    "end": 13757
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13766,
    "end": 13774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13775,
    "end": 13776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13776,
    "end": 13777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13778,
    "end": 13779
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13792,
    "end": 13795
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13796,
    "end": 13804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13805,
    "end": 13806
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 13807,
    "end": 13818
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13819,
    "end": 13820
  },
  {
    "type": "String",
    "value": "\"\\\\charCountASCII.txt\"",
    "start": 13821,
    "end": 13843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13843,
    "end": 13844
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13857,
    "end": 13860
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13861,
    "end": 13863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13864,
    "end": 13865
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13866,
    "end": 13869
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 13870,
    "end": 13881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13881,
    "end": 13882
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 13882,
    "end": 13892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13892,
    "end": 13893
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 13893,
    "end": 13901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13901,
    "end": 13902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13902,
    "end": 13903
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13916,
    "end": 13919
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 13920,
    "end": 13926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13927,
    "end": 13928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13929,
    "end": 13930
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13930,
    "end": 13932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13932,
    "end": 13933
  },
  {
    "type": "Identifier",
    "value": "countCR",
    "start": 13933,
    "end": 13940
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 13941,
    "end": 13944
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 13945,
    "end": 13946
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 13947,
    "end": 13949
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13950,
    "end": 13952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13952,
    "end": 13953
  },
  {
    "type": "Identifier",
    "value": "countLF",
    "start": 13953,
    "end": 13960
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 13961,
    "end": 13964
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 13965,
    "end": 13966
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 13967,
    "end": 13969
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13970,
    "end": 13972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13972,
    "end": 13973
  },
  {
    "type": "Identifier",
    "value": "countCRLF",
    "start": 13973,
    "end": 13982
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 13983,
    "end": 13986
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 13987,
    "end": 13988
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 13989,
    "end": 13991
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 13992,
    "end": 13994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13994,
    "end": 13995
  },
  {
    "type": "Identifier",
    "value": "countHT",
    "start": 13995,
    "end": 14002
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 14003,
    "end": 14006
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 14007,
    "end": 14008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14008,
    "end": 14009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14009,
    "end": 14010
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 14023,
    "end": 14029
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 14030,
    "end": 14036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14036,
    "end": 14037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14046,
    "end": 14047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14047,
    "end": 14048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14048,
    "end": 14049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14049,
    "end": 14050
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 14090,
    "end": 14100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14100,
    "end": 14101
  },
  {
    "type": "Identifier",
    "value": "addTest",
    "start": 14101,
    "end": 14108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14108,
    "end": 14109
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 14109,
    "end": 14112
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 14113,
    "end": 14121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14121,
    "end": 14122
  },
  {
    "type": "String",
    "value": "\"Test file with control character\"",
    "start": 14122,
    "end": 14156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14156,
    "end": 14157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 14166,
    "end": 14174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14175,
    "end": 14176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14176,
    "end": 14177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14178,
    "end": 14179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14192,
    "end": 14195
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 14196,
    "end": 14204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14205,
    "end": 14206
  },
  {
    "type": "Identifier",
    "value": "TestFileDir",
    "start": 14207,
    "end": 14218
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 14219,
    "end": 14220
  },
  {
    "type": "String",
    "value": "\"\\\\controlChar.txt\"",
    "start": 14221,
    "end": 14240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14240,
    "end": 14241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14254,
    "end": 14257
  },
  {
    "type": "Identifier",
    "value": "fb",
    "start": 14258,
    "end": 14260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14261,
    "end": 14262
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 14263,
    "end": 14266
  },
  {
    "type": "Identifier",
    "value": "FileManager",
    "start": 14267,
    "end": 14278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14278,
    "end": 14279
  },
  {
    "type": "Identifier",
    "value": "FileBuffer",
    "start": 14279,
    "end": 14289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14289,
    "end": 14290
  },
  {
    "type": "Identifier",
    "value": "filename",
    "start": 14290,
    "end": 14298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14298,
    "end": 14299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14299,
    "end": 14300
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 14313,
    "end": 14319
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 14320,
    "end": 14324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14324,
    "end": 14325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14334,
    "end": 14335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14335,
    "end": 14336
  },
  {
    "type": "String",
    "value": "\"Codepoint at index: 3 has control value: 8\"",
    "start": 14337,
    "end": 14381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14381,
    "end": 14382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14382,
    "end": 14383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14383,
    "end": 14384
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 14390,
    "end": 14396
  },
  {
    "type": "Identifier",
    "value": "testRunner",
    "start": 14397,
    "end": 14407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14407,
    "end": 14408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14409,
    "end": 14410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14410,
    "end": 14411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14411,
    "end": 14412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14412,
    "end": 14413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14413,
    "end": 14414
  }
]
```
