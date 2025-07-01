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
