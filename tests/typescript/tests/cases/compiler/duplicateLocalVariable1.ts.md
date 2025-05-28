__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 14414,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 108,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 107,
            "decorators": [],
            "name": "FileManager",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 107,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 104,
                "end": 107
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
      "start": 109,
      "end": 130,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 129,
            "decorators": [],
            "name": "App",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 129,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 126,
                "end": 129
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
      "start": 132,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 147,
            "decorators": [],
            "name": "TestFileDir",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 150,
            "end": 168,
            "value": ".\\TempTestFiles",
            "raw": "\".\\\\TempTestFiles\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 303,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 178,
        "end": 303,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 184,
          "end": 192,
          "decorators": [],
          "name": "TestCase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 193,
          "end": 303,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 199,
              "end": 301,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 210,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 211,
                "end": 301,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 212,
                    "end": 231,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 231,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 223,
                        "end": 231,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 225,
                          "end": 231
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 233,
                    "end": 257,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 257,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 244,
                        "end": 257,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 246,
                          "end": 257,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 248,
                            "end": 257,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 250,
                              "end": 257
                            }
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 259,
                    "end": 292,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 292,
                      "decorators": [],
                      "name": "errorMessageRegEx",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 284,
                        "end": 292,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 286,
                          "end": 292
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 294,
                  "end": 301,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 304,
      "end": 1784,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 311,
        "end": 1784,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 317,
          "end": 327,
          "decorators": [],
          "name": "TestRunner",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 328,
          "end": 1784,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 335,
              "end": 366,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 343,
                "end": 348,
                "decorators": [],
                "name": "tests",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 348,
                "end": 360,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 350,
                  "end": 360,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 350,
                    "end": 358,
                    "typeName": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 358,
                      "decorators": [],
                      "name": "TestCase",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "value": {
                "type": "ArrayExpression",
                "start": 363,
                "end": 365,
                "elements": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 372,
              "end": 517,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 379,
                "end": 391,
                "decorators": [],
                "name": "arrayCompare",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 391,
                "end": 517,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 392,
                    "end": 403,
                    "decorators": [],
                    "name": "arg1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 396,
                      "end": 403,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 398,
                        "end": 403,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 398,
                          "end": 401
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 405,
                    "end": 416,
                    "decorators": [],
                    "name": "arg2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 409,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 411,
                        "end": 416,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 411,
                          "end": 414
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 417,
                  "end": 426,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 419,
                    "end": 426
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 427,
                  "end": 517,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 437,
                      "end": 511,
                      "argument": {
                        "type": "CallExpression",
                        "start": 445,
                        "end": 509,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 445,
                          "end": 455,
                          "object": {
                            "type": "Identifier",
                            "start": 445,
                            "end": 449,
                            "decorators": [],
                            "name": "arg1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 450,
                            "end": 455,
                            "decorators": [],
                            "name": "every",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "start": 456,
                            "end": 508,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 466,
                                "end": 469,
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 471,
                                "end": 476,
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 478,
                              "end": 508,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 480,
                                  "end": 506,
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "start": 487,
                                    "end": 506,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 487,
                                      "end": 490,
                                      "decorators": [],
                                      "name": "val",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 495,
                                      "end": 506,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 495,
                                        "end": 499,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 500,
                                        "end": 505,
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": true
                                    }
                                  }
                                }
                              ]
                            },
                            "expression": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 523,
              "end": 592,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 530,
                "end": 537,
                "decorators": [],
                "name": "addTest",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 537,
                "end": 592,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 538,
                    "end": 552,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 542,
                      "end": 552,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 544,
                        "end": 552,
                        "typeName": {
                          "type": "Identifier",
                          "start": 544,
                          "end": 552,
                          "decorators": [],
                          "name": "TestCase",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 554,
                  "end": 592,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 564,
                      "end": 586,
                      "expression": {
                        "type": "CallExpression",
                        "start": 564,
                        "end": 585,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 564,
                          "end": 579,
                          "object": {
                            "type": "MemberExpression",
                            "start": 564,
                            "end": 574,
                            "object": {
                              "type": "ThisExpression",
                              "start": 564,
                              "end": 568
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 569,
                              "end": 574,
                              "decorators": [],
                              "name": "tests",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 575,
                            "end": 579,
                            "decorators": [],
                            "name": "push",
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
                            "start": 580,
                            "end": 584,
                            "decorators": [],
                            "name": "test",
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
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 597,
              "end": 1782,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 604,
                "end": 607,
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 607,
                "end": 1782,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 610,
                  "end": 1782,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 620,
                      "end": 639,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 624,
                          "end": 638,
                          "id": {
                            "type": "Identifier",
                            "start": 624,
                            "end": 631,
                            "decorators": [],
                            "name": "success",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 634,
                            "end": 638,
                            "value": true,
                            "raw": "true"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ForInStatement",
                      "start": 648,
                      "end": 1726,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 653,
                        "end": 661,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 657,
                            "end": 661,
                            "id": {
                              "type": "Identifier",
                              "start": 657,
                              "end": 661,
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 665,
                        "end": 675,
                        "object": {
                          "type": "ThisExpression",
                          "start": 665,
                          "end": 669
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 675,
                          "decorators": [],
                          "name": "tests",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 677,
                        "end": 1726,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 691,
                            "end": 713,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 695,
                                "end": 712,
                                "id": {
                                  "type": "Identifier",
                                  "start": 695,
                                  "end": 704,
                                  "decorators": [],
                                  "name": "exception",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 707,
                                  "end": 712,
                                  "value": false,
                                  "raw": "false"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 726,
                            "end": 767,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 730,
                                "end": 767,
                                "id": {
                                  "type": "Identifier",
                                  "start": 730,
                                  "end": 738,
                                  "decorators": [],
                                  "name": "testcase",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "start": 741,
                                  "end": 767,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 742,
                                    "end": 750,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 742,
                                      "end": 750,
                                      "decorators": [],
                                      "name": "TestCase",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 751,
                                    "end": 767,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 751,
                                      "end": 761,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 751,
                                        "end": 755
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 756,
                                        "end": 761,
                                        "decorators": [],
                                        "name": "tests",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 762,
                                      "end": 766,
                                      "decorators": [],
                                      "name": "test",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": true
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 780,
                            "end": 812,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 784,
                                "end": 811,
                                "id": {
                                  "type": "Identifier",
                                  "start": 784,
                                  "end": 803,
                                  "decorators": [],
                                  "name": "testResult",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 794,
                                    "end": 803,
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 796,
                                      "end": 803
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 806,
                                  "end": 811,
                                  "value": false,
                                  "raw": "false"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "TryStatement",
                            "start": 825,
                            "end": 1522,
                            "block": {
                              "type": "BlockStatement",
                              "start": 829,
                              "end": 890,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 847,
                                  "end": 876,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 847,
                                    "end": 875,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 847,
                                      "end": 857,
                                      "decorators": [],
                                      "name": "testResult",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 860,
                                      "end": 875,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 860,
                                        "end": 873,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 860,
                                          "end": 868,
                                          "decorators": [],
                                          "name": "testcase",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 869,
                                          "end": 873,
                                          "decorators": [],
                                          "name": "test",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "handler": {
                              "type": "CatchClause",
                              "start": 903,
                              "end": 1522,
                              "param": {
                                "type": "Identifier",
                                "start": 910,
                                "end": 911,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 913,
                                "end": 1522,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 931,
                                    "end": 948,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 931,
                                      "end": 947,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 931,
                                        "end": 940,
                                        "decorators": [],
                                        "name": "exception",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 943,
                                        "end": 947,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 965,
                                    "end": 984,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 965,
                                      "end": 983,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 965,
                                        "end": 975,
                                        "decorators": [],
                                        "name": "testResult",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 978,
                                        "end": 983,
                                        "value": false,
                                        "raw": "false"
                                      }
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1001,
                                    "end": 1399,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 1005,
                                      "end": 1051,
                                      "left": {
                                        "type": "UnaryExpression",
                                        "start": 1005,
                                        "end": 1038,
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 1012,
                                          "end": 1038,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1012,
                                            "end": 1020,
                                            "decorators": [],
                                            "name": "testcase",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1021,
                                            "end": 1038,
                                            "decorators": [],
                                            "name": "errorMessageRegEx",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "prefix": true
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1043,
                                        "end": 1051,
                                        "value": "string",
                                        "raw": "\"string\""
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1053,
                                      "end": 1399,
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "start": 1075,
                                          "end": 1381,
                                          "test": {
                                            "type": "BinaryExpression",
                                            "start": 1079,
                                            "end": 1112,
                                            "left": {
                                              "type": "MemberExpression",
                                              "start": 1079,
                                              "end": 1105,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 1079,
                                                "end": 1087,
                                                "decorators": [],
                                                "name": "testcase",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1088,
                                                "end": 1105,
                                                "decorators": [],
                                                "name": "errorMessageRegEx",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "start": 1110,
                                              "end": 1112,
                                              "value": "",
                                              "raw": "\"\""
                                            }
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "start": 1114,
                                            "end": 1201,
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 1161,
                                                "end": 1179,
                                                "expression": {
                                                  "type": "AssignmentExpression",
                                                  "start": 1161,
                                                  "end": 1178,
                                                  "operator": "=",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "start": 1161,
                                                    "end": 1171,
                                                    "decorators": [],
                                                    "name": "testResult",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "right": {
                                                    "type": "Literal",
                                                    "start": 1174,
                                                    "end": 1178,
                                                    "value": true,
                                                    "raw": "true"
                                                  }
                                                },
                                                "directive": null
                                              }
                                            ]
                                          },
                                          "alternate": {
                                            "type": "IfStatement",
                                            "start": 1207,
                                            "end": 1381,
                                            "test": {
                                              "type": "MemberExpression",
                                              "start": 1211,
                                              "end": 1220,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 1211,
                                                "end": 1212,
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1213,
                                                "end": 1220,
                                                "decorators": [],
                                                "name": "message",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "start": 1222,
                                              "end": 1381,
                                              "body": [
                                                {
                                                  "type": "VariableDeclaration",
                                                  "start": 1248,
                                                  "end": 1299,
                                                  "kind": "var",
                                                  "declarations": [
                                                    {
                                                      "type": "VariableDeclarator",
                                                      "start": 1252,
                                                      "end": 1298,
                                                      "id": {
                                                        "type": "Identifier",
                                                        "start": 1252,
                                                        "end": 1257,
                                                        "decorators": [],
                                                        "name": "regex",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "init": {
                                                        "type": "NewExpression",
                                                        "start": 1260,
                                                        "end": 1298,
                                                        "callee": {
                                                          "type": "Identifier",
                                                          "start": 1264,
                                                          "end": 1270,
                                                          "decorators": [],
                                                          "name": "RegExp",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [
                                                          {
                                                            "type": "MemberExpression",
                                                            "start": 1271,
                                                            "end": 1297,
                                                            "object": {
                                                              "type": "Identifier",
                                                              "start": 1271,
                                                              "end": 1279,
                                                              "decorators": [],
                                                              "name": "testcase",
                                                              "optional": false,
                                                              "typeAnnotation": null
                                                            },
                                                            "property": {
                                                              "type": "Identifier",
                                                              "start": 1280,
                                                              "end": 1297,
                                                              "decorators": [],
                                                              "name": "errorMessageRegEx",
                                                              "optional": false,
                                                              "typeAnnotation": null
                                                            },
                                                            "optional": false,
                                                            "computed": false
                                                          }
                                                        ]
                                                      },
                                                      "definite": false
                                                    }
                                                  ],
                                                  "declare": false
                                                },
                                                {
                                                  "type": "ExpressionStatement",
                                                  "start": 1324,
                                                  "end": 1359,
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 1324,
                                                    "end": 1358,
                                                    "operator": "=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 1324,
                                                      "end": 1334,
                                                      "decorators": [],
                                                      "name": "testResult",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "right": {
                                                      "type": "CallExpression",
                                                      "start": 1337,
                                                      "end": 1358,
                                                      "callee": {
                                                        "type": "MemberExpression",
                                                        "start": 1337,
                                                        "end": 1347,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "start": 1337,
                                                          "end": 1342,
                                                          "decorators": [],
                                                          "name": "regex",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "start": 1343,
                                                          "end": 1347,
                                                          "decorators": [],
                                                          "name": "test",
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
                                                          "start": 1348,
                                                          "end": 1357,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "start": 1348,
                                                            "end": 1349,
                                                            "decorators": [],
                                                            "name": "e",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "start": 1350,
                                                            "end": 1357,
                                                            "decorators": [],
                                                            "name": "message",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "optional": false,
                                                          "computed": false
                                                        }
                                                      ],
                                                      "optional": false
                                                    }
                                                  },
                                                  "directive": null
                                                }
                                              ]
                                            },
                                            "alternate": null
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "IfStatement",
                                    "start": 1417,
                                    "end": 1508,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 1421,
                                      "end": 1441,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1421,
                                        "end": 1431,
                                        "decorators": [],
                                        "name": "testResult",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Literal",
                                        "start": 1436,
                                        "end": 1441,
                                        "value": false,
                                        "raw": "false"
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 1443,
                                      "end": 1508,
                                      "body": []
                                    },
                                    "alternate": null
                                  }
                                ]
                              }
                            },
                            "finalizer": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1535,
                            "end": 1716,
                            "test": {
                              "type": "LogicalExpression",
                              "start": 1539,
                              "end": 1595,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1540,
                                "end": 1580,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1540,
                                  "end": 1566,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1540,
                                    "end": 1548,
                                    "decorators": [],
                                    "name": "testcase",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1549,
                                    "end": 1566,
                                    "decorators": [],
                                    "name": "errorMessageRegEx",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "!==",
                                "right": {
                                  "type": "Identifier",
                                  "start": 1571,
                                  "end": 1580,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "UnaryExpression",
                                "start": 1585,
                                "end": 1595,
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 1586,
                                  "end": 1595,
                                  "decorators": [],
                                  "name": "exception",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1597,
                              "end": 1645,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1615,
                                  "end": 1631,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1615,
                                    "end": 1630,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1615,
                                      "end": 1622,
                                      "decorators": [],
                                      "name": "success",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 1625,
                                      "end": 1630,
                                      "value": false,
                                      "raw": "false"
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "start": 1651,
                              "end": 1716,
                              "test": {
                                "type": "UnaryExpression",
                                "start": 1655,
                                "end": 1666,
                                "operator": "!",
                                "argument": {
                                  "type": "Identifier",
                                  "start": 1656,
                                  "end": 1666,
                                  "decorators": [],
                                  "name": "testResult",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "prefix": true
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 1668,
                                "end": 1716,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1686,
                                    "end": 1702,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 1686,
                                      "end": 1701,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1686,
                                        "end": 1693,
                                        "decorators": [],
                                        "name": "success",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 1696,
                                        "end": 1701,
                                        "value": false,
                                        "raw": "false"
                                      }
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "IfStatement",
                      "start": 1735,
                      "end": 1776,
                      "test": {
                        "type": "Identifier",
                        "start": 1739,
                        "end": 1746,
                        "decorators": [],
                        "name": "success",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 1748,
                        "end": 1759,
                        "body": []
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 1765,
                        "end": 1776,
                        "body": []
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1786,
      "end": 14414,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1793,
        "end": 14414,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1797,
            "end": 14413,
            "id": {
              "type": "Identifier",
              "start": 1797,
              "end": 1814,
              "decorators": [],
              "name": "tests",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1802,
                "end": 1814,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1804,
                  "end": 1814,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1804,
                    "end": 1814,
                    "decorators": [],
                    "name": "TestRunner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 1817,
              "end": 14413,
              "callee": {
                "type": "FunctionExpression",
                "start": 1818,
                "end": 14410,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1830,
                  "end": 14410,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 1836,
                      "end": 1870,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1840,
                          "end": 1869,
                          "id": {
                            "type": "Identifier",
                            "start": 1840,
                            "end": 1850,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 1853,
                            "end": 1869,
                            "callee": {
                              "type": "Identifier",
                              "start": 1857,
                              "end": 1867,
                              "decorators": [],
                              "name": "TestRunner",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1924,
                      "end": 2001,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1924,
                        "end": 2000,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1924,
                          "end": 1942,
                          "object": {
                            "type": "Identifier",
                            "start": 1924,
                            "end": 1934,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1935,
                            "end": 1942,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 1943,
                            "end": 1999,
                            "callee": {
                              "type": "Identifier",
                              "start": 1947,
                              "end": 1955,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1956,
                                "end": 1968,
                                "value": "Basic test",
                                "raw": "\"Basic test\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 1970,
                                "end": 1998,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 1982,
                                  "end": 1998,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 1984,
                                      "end": 1996,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 1991,
                                        "end": 1995,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 2006,
                      "end": 2115,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2006,
                        "end": 2114,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2006,
                          "end": 2024,
                          "object": {
                            "type": "Identifier",
                            "start": 2006,
                            "end": 2016,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2017,
                            "end": 2024,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 2025,
                            "end": 2113,
                            "callee": {
                              "type": "Identifier",
                              "start": 2029,
                              "end": 2037,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 2038,
                                "end": 2058,
                                "value": "Test for any error",
                                "raw": "\"Test for any error\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 2060,
                                "end": 2108,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2072,
                                  "end": 2108,
                                  "body": [
                                    {
                                      "type": "ThrowStatement",
                                      "start": 2074,
                                      "end": 2092,
                                      "argument": {
                                        "type": "NewExpression",
                                        "start": 2080,
                                        "end": 2091,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 2084,
                                          "end": 2089,
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 2093,
                                      "end": 2106,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 2100,
                                        "end": 2105,
                                        "value": false,
                                        "raw": "false"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 2110,
                                "end": 2112,
                                "value": "",
                                "raw": "\"\""
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
                      "start": 2120,
                      "end": 2278,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2120,
                        "end": 2277,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2120,
                          "end": 2138,
                          "object": {
                            "type": "Identifier",
                            "start": 2120,
                            "end": 2130,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2131,
                            "end": 2138,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 2139,
                            "end": 2276,
                            "callee": {
                              "type": "Identifier",
                              "start": 2143,
                              "end": 2151,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 2152,
                                "end": 2184,
                                "value": "Test RegEx error message match",
                                "raw": "\"Test RegEx error message match\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 2186,
                                "end": 2252,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2198,
                                  "end": 2252,
                                  "body": [
                                    {
                                      "type": "ThrowStatement",
                                      "start": 2200,
                                      "end": 2236,
                                      "argument": {
                                        "type": "NewExpression",
                                        "start": 2206,
                                        "end": 2235,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 2210,
                                          "end": 2215,
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "start": 2216,
                                            "end": 2234,
                                            "value": "Should also pass",
                                            "raw": "\"Should also pass\""
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 2237,
                                      "end": 2250,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 2244,
                                        "end": 2249,
                                        "value": false,
                                        "raw": "false"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 2254,
                                "end": 2275,
                                "value": "Should [also]+ pass",
                                "raw": "\"Should [also]+ pass\""
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
                      "start": 2283,
                      "end": 2414,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2283,
                        "end": 2413,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2283,
                          "end": 2301,
                          "object": {
                            "type": "Identifier",
                            "start": 2283,
                            "end": 2293,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2294,
                            "end": 2301,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 2302,
                            "end": 2412,
                            "callee": {
                              "type": "Identifier",
                              "start": 2306,
                              "end": 2314,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 2315,
                                "end": 2340,
                                "value": "Test array compare true",
                                "raw": "\"Test array compare true\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 2342,
                                "end": 2411,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2354,
                                  "end": 2411,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 2356,
                                      "end": 2409,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 2363,
                                        "end": 2408,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 2363,
                                          "end": 2386,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2363,
                                            "end": 2373,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2374,
                                            "end": 2386,
                                            "decorators": [],
                                            "name": "arrayCompare",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "ArrayExpression",
                                            "start": 2387,
                                            "end": 2396,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 2388,
                                                "end": 2389,
                                                "value": 1,
                                                "raw": "1"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 2391,
                                                "end": 2392,
                                                "value": 2,
                                                "raw": "2"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 2394,
                                                "end": 2395,
                                                "value": 3,
                                                "raw": "3"
                                              }
                                            ]
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "start": 2398,
                                            "end": 2407,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 2399,
                                                "end": 2400,
                                                "value": 1,
                                                "raw": "1"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 2402,
                                                "end": 2403,
                                                "value": 2,
                                                "raw": "2"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 2405,
                                                "end": 2406,
                                                "value": 3,
                                                "raw": "3"
                                              }
                                            ]
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 2419,
                      "end": 2552,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2419,
                        "end": 2551,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2419,
                          "end": 2437,
                          "object": {
                            "type": "Identifier",
                            "start": 2419,
                            "end": 2429,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2430,
                            "end": 2437,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 2438,
                            "end": 2550,
                            "callee": {
                              "type": "Identifier",
                              "start": 2442,
                              "end": 2450,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 2451,
                                "end": 2477,
                                "value": "Test array compare false",
                                "raw": "\"Test array compare false\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 2479,
                                "end": 2549,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2491,
                                  "end": 2549,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 2493,
                                      "end": 2547,
                                      "argument": {
                                        "type": "UnaryExpression",
                                        "start": 2500,
                                        "end": 2546,
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 2501,
                                          "end": 2546,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 2501,
                                            "end": 2524,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 2501,
                                              "end": 2511,
                                              "decorators": [],
                                              "name": "TestRunner",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 2512,
                                              "end": 2524,
                                              "decorators": [],
                                              "name": "arrayCompare",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ArrayExpression",
                                              "start": 2525,
                                              "end": 2534,
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "start": 2526,
                                                  "end": 2527,
                                                  "value": 3,
                                                  "raw": "3"
                                                },
                                                {
                                                  "type": "Literal",
                                                  "start": 2529,
                                                  "end": 2530,
                                                  "value": 2,
                                                  "raw": "2"
                                                },
                                                {
                                                  "type": "Literal",
                                                  "start": 2532,
                                                  "end": 2533,
                                                  "value": 3,
                                                  "raw": "3"
                                                }
                                              ]
                                            },
                                            {
                                              "type": "ArrayExpression",
                                              "start": 2536,
                                              "end": 2545,
                                              "elements": [
                                                {
                                                  "type": "Literal",
                                                  "start": 2537,
                                                  "end": 2538,
                                                  "value": 1,
                                                  "raw": "1"
                                                },
                                                {
                                                  "type": "Literal",
                                                  "start": 2540,
                                                  "end": 2541,
                                                  "value": 2,
                                                  "raw": "2"
                                                },
                                                {
                                                  "type": "Literal",
                                                  "start": 2543,
                                                  "end": 2544,
                                                  "value": 3,
                                                  "raw": "3"
                                                }
                                              ]
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "prefix": true
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 2586,
                      "end": 2761,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2586,
                        "end": 2760,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2586,
                          "end": 2604,
                          "object": {
                            "type": "Identifier",
                            "start": 2586,
                            "end": 2596,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2597,
                            "end": 2604,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 2605,
                            "end": 2759,
                            "callee": {
                              "type": "Identifier",
                              "start": 2609,
                              "end": 2617,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 2618,
                                "end": 2637,
                                "value": "Check file exists",
                                "raw": "\"Check file exists\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 2647,
                                "end": 2758,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2659,
                                  "end": 2758,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 2673,
                                      "end": 2748,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 2680,
                                        "end": 2747,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 2680,
                                          "end": 2719,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 2680,
                                            "end": 2708,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 2680,
                                              "end": 2691,
                                              "decorators": [],
                                              "name": "FileManager",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 2692,
                                              "end": 2708,
                                              "decorators": [],
                                              "name": "DirectoryManager",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2709,
                                            "end": 2719,
                                            "decorators": [],
                                            "name": "fileExists",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "BinaryExpression",
                                            "start": 2720,
                                            "end": 2746,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 2720,
                                              "end": 2731,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 2734,
                                              "end": 2746,
                                              "value": "\\Test.txt",
                                              "raw": "\"\\\\Test.txt\""
                                            }
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 2766,
                      "end": 2950,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2766,
                        "end": 2949,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2766,
                          "end": 2784,
                          "object": {
                            "type": "Identifier",
                            "start": 2766,
                            "end": 2776,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2777,
                            "end": 2784,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 2785,
                            "end": 2948,
                            "callee": {
                              "type": "Identifier",
                              "start": 2789,
                              "end": 2797,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 2798,
                                "end": 2824,
                                "value": "Check file doesn't exist",
                                "raw": "\"Check file doesn't exist\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 2834,
                                "end": 2947,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2846,
                                  "end": 2947,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 2860,
                                      "end": 2937,
                                      "argument": {
                                        "type": "UnaryExpression",
                                        "start": 2867,
                                        "end": 2936,
                                        "operator": "!",
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 2868,
                                          "end": 2936,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 2868,
                                            "end": 2907,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 2868,
                                              "end": 2896,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 2868,
                                                "end": 2879,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 2880,
                                                "end": 2896,
                                                "decorators": [],
                                                "name": "DirectoryManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 2897,
                                              "end": 2907,
                                              "decorators": [],
                                              "name": "fileExists",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "BinaryExpression",
                                              "start": 2908,
                                              "end": 2935,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 2908,
                                                "end": 2919,
                                                "decorators": [],
                                                "name": "TestFileDir",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "start": 2922,
                                                "end": 2935,
                                                "value": "\\Test2.txt",
                                                "raw": "\"\\\\Test2.txt\""
                                              }
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "prefix": true
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 2991,
                      "end": 3324,
                      "expression": {
                        "type": "CallExpression",
                        "start": 2991,
                        "end": 3323,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2991,
                          "end": 3009,
                          "object": {
                            "type": "Identifier",
                            "start": 2991,
                            "end": 3001,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3002,
                            "end": 3009,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 3010,
                            "end": 3322,
                            "callee": {
                              "type": "Identifier",
                              "start": 3014,
                              "end": 3022,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 3023,
                                "end": 3046,
                                "value": "Check text file match",
                                "raw": "\"Check text file match\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 3056,
                                "end": 3321,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 3068,
                                  "end": 3321,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 3082,
                                      "end": 3311,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 3090,
                                        "end": 3310,
                                        "left": {
                                          "type": "LogicalExpression",
                                          "start": 3090,
                                          "end": 3233,
                                          "left": {
                                            "type": "CallExpression",
                                            "start": 3090,
                                            "end": 3150,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 3090,
                                              "end": 3123,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 3090,
                                                "end": 3112,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3090,
                                                  "end": 3101,
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3102,
                                                  "end": 3112,
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3113,
                                                "end": 3123,
                                                "decorators": [],
                                                "name": "isTextFile",
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
                                                "start": 3124,
                                                "end": 3149,
                                                "value": "C:\\somedir\\readme.txt",
                                                "raw": "\"C:\\\\somedir\\\\readme.txt\""
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "CallExpression",
                                            "start": 3170,
                                            "end": 3233,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 3170,
                                              "end": 3203,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 3170,
                                                "end": 3192,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3170,
                                                  "end": 3181,
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3182,
                                                  "end": 3192,
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3193,
                                                "end": 3203,
                                                "decorators": [],
                                                "name": "isTextFile",
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
                                                "start": 3204,
                                                "end": 3232,
                                                "value": "C:\\spaces path\\myapp.str",
                                                "raw": "\"C:\\\\spaces path\\\\myapp.str\""
                                              }
                                            ],
                                            "optional": false
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "CallExpression",
                                          "start": 3253,
                                          "end": 3310,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 3253,
                                            "end": 3286,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 3253,
                                              "end": 3275,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 3253,
                                                "end": 3264,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3265,
                                                "end": 3275,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 3276,
                                              "end": 3286,
                                              "decorators": [],
                                              "name": "isTextFile",
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
                                              "start": 3287,
                                              "end": 3309,
                                              "value": "C:\\somedir\\code.js",
                                              "raw": "\"C:\\\\somedir\\\\code.js\""
                                            }
                                          ],
                                          "optional": false
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 3329,
                      "end": 3499,
                      "expression": {
                        "type": "CallExpression",
                        "start": 3329,
                        "end": 3498,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3329,
                          "end": 3347,
                          "object": {
                            "type": "Identifier",
                            "start": 3329,
                            "end": 3339,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3340,
                            "end": 3347,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 3348,
                            "end": 3497,
                            "callee": {
                              "type": "Identifier",
                              "start": 3352,
                              "end": 3360,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 3361,
                                "end": 3383,
                                "value": "Check makefile match",
                                "raw": "\"Check makefile match\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 3393,
                                "end": 3496,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 3405,
                                  "end": 3496,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 3419,
                                      "end": 3486,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 3426,
                                        "end": 3485,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 3426,
                                          "end": 3459,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 3426,
                                            "end": 3448,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 3426,
                                              "end": 3437,
                                              "decorators": [],
                                              "name": "FileManager",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 3438,
                                              "end": 3448,
                                              "decorators": [],
                                              "name": "FileBuffer",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 3449,
                                            "end": 3459,
                                            "decorators": [],
                                            "name": "isTextFile",
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
                                            "start": 3460,
                                            "end": 3484,
                                            "value": "C:\\some dir\\makefile",
                                            "raw": "\"C:\\\\some dir\\\\makefile\""
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 3504,
                      "end": 3763,
                      "expression": {
                        "type": "CallExpression",
                        "start": 3504,
                        "end": 3762,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3504,
                          "end": 3522,
                          "object": {
                            "type": "Identifier",
                            "start": 3504,
                            "end": 3514,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3515,
                            "end": 3522,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 3523,
                            "end": 3761,
                            "callee": {
                              "type": "Identifier",
                              "start": 3527,
                              "end": 3535,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 3536,
                                "end": 3569,
                                "value": "Check binary file doesn't match",
                                "raw": "\"Check binary file doesn't match\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 3579,
                                "end": 3760,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 3591,
                                  "end": 3760,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 3605,
                                      "end": 3750,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 3613,
                                        "end": 3748,
                                        "left": {
                                          "type": "UnaryExpression",
                                          "start": 3613,
                                          "end": 3671,
                                          "operator": "!",
                                          "argument": {
                                            "type": "CallExpression",
                                            "start": 3614,
                                            "end": 3671,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 3614,
                                              "end": 3647,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 3614,
                                                "end": 3636,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3614,
                                                  "end": 3625,
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3626,
                                                  "end": 3636,
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3637,
                                                "end": 3647,
                                                "decorators": [],
                                                "name": "isTextFile",
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
                                                "start": 3648,
                                                "end": 3670,
                                                "value": "C:\\somedir\\app.exe",
                                                "raw": "\"C:\\\\somedir\\\\app.exe\""
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "prefix": true
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "UnaryExpression",
                                          "start": 3687,
                                          "end": 3748,
                                          "operator": "!",
                                          "argument": {
                                            "type": "CallExpression",
                                            "start": 3688,
                                            "end": 3748,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 3688,
                                              "end": 3721,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 3688,
                                                "end": 3710,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3688,
                                                  "end": 3699,
                                                  "decorators": [],
                                                  "name": "FileManager",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3700,
                                                  "end": 3710,
                                                  "decorators": [],
                                                  "name": "FileBuffer",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3711,
                                                "end": 3721,
                                                "decorators": [],
                                                "name": "isTextFile",
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
                                                "start": 3722,
                                                "end": 3747,
                                                "value": "C:\\somedir\\my lib.dll",
                                                "raw": "\"C:\\\\somedir\\\\my lib.dll\""
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "prefix": true
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 3805,
                      "end": 4278,
                      "expression": {
                        "type": "CallExpression",
                        "start": 3805,
                        "end": 4277,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3805,
                          "end": 3823,
                          "object": {
                            "type": "Identifier",
                            "start": 3805,
                            "end": 3815,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3816,
                            "end": 3823,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 3824,
                            "end": 4276,
                            "callee": {
                              "type": "Identifier",
                              "start": 3828,
                              "end": 3836,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 3837,
                                "end": 3857,
                                "value": "Check App defaults",
                                "raw": "\"Check App defaults\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 3867,
                                "end": 4275,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 3879,
                                  "end": 4275,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 3893,
                                      "end": 3919,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 3897,
                                          "end": 3918,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 3897,
                                            "end": 3900,
                                            "decorators": [],
                                            "name": "app",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 3903,
                                            "end": 3918,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 3907,
                                              "end": 3914,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 3907,
                                                "end": 3910,
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3911,
                                                "end": 3914,
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "ArrayExpression",
                                                "start": 3915,
                                                "end": 3917,
                                                "elements": []
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 3932,
                                      "end": 4265,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 3940,
                                        "end": 4263,
                                        "left": {
                                          "type": "LogicalExpression",
                                          "start": 3940,
                                          "end": 4208,
                                          "left": {
                                            "type": "LogicalExpression",
                                            "start": 3940,
                                            "end": 4157,
                                            "left": {
                                              "type": "LogicalExpression",
                                              "start": 3940,
                                              "end": 4107,
                                              "left": {
                                                "type": "LogicalExpression",
                                                "start": 3940,
                                                "end": 4054,
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "start": 3940,
                                                  "end": 4005,
                                                  "left": {
                                                    "type": "BinaryExpression",
                                                    "start": 3940,
                                                    "end": 3962,
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "start": 3940,
                                                      "end": 3952,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 3940,
                                                        "end": 3943,
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 3944,
                                                        "end": 3952,
                                                        "decorators": [],
                                                        "name": "fixLines",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "optional": false,
                                                      "computed": false
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "start": 3957,
                                                      "end": 3962,
                                                      "value": false,
                                                      "raw": "false"
                                                    }
                                                  },
                                                  "operator": "&&",
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "start": 3985,
                                                    "end": 4005,
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "start": 3985,
                                                      "end": 3996,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 3985,
                                                        "end": 3988,
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 3989,
                                                        "end": 3996,
                                                        "decorators": [],
                                                        "name": "recurse",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "optional": false,
                                                      "computed": false
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "start": 4001,
                                                      "end": 4005,
                                                      "value": true,
                                                      "raw": "true"
                                                    }
                                                  }
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "start": 4028,
                                                  "end": 4054,
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "start": 4028,
                                                    "end": 4043,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 4028,
                                                      "end": 4031,
                                                      "decorators": [],
                                                      "name": "app",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 4032,
                                                      "end": 4043,
                                                      "decorators": [],
                                                      "name": "lineEndings",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "start": 4048,
                                                    "end": 4054,
                                                    "value": "CRLF",
                                                    "raw": "\"CRLF\""
                                                  }
                                                }
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "start": 4077,
                                                "end": 4107,
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "start": 4077,
                                                  "end": 4093,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 4077,
                                                    "end": 4080,
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 4081,
                                                    "end": 4093,
                                                    "decorators": [],
                                                    "name": "matchPattern",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Identifier",
                                                  "start": 4098,
                                                  "end": 4107,
                                                  "decorators": [],
                                                  "name": "undefined",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "start": 4130,
                                              "end": 4157,
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 4130,
                                                "end": 4147,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 4130,
                                                  "end": 4133,
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 4134,
                                                  "end": 4147,
                                                  "decorators": [],
                                                  "name": "rootDirectory",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "start": 4152,
                                                "end": 4157,
                                                "value": ".\\",
                                                "raw": "\".\\\\\""
                                              }
                                            }
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "BinaryExpression",
                                            "start": 4180,
                                            "end": 4208,
                                            "left": {
                                              "type": "MemberExpression",
                                              "start": 4180,
                                              "end": 4196,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 4180,
                                                "end": 4193,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 4180,
                                                  "end": 4183,
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 4184,
                                                  "end": 4193,
                                                  "decorators": [],
                                                  "name": "encodings",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "start": 4194,
                                                "end": 4195,
                                                "value": 0,
                                                "raw": "0"
                                              },
                                              "optional": false,
                                              "computed": true
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "start": 4201,
                                              "end": 4208,
                                              "value": "ascii",
                                              "raw": "\"ascii\""
                                            }
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 4231,
                                          "end": 4263,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 4231,
                                            "end": 4247,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 4231,
                                              "end": 4244,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 4231,
                                                "end": 4234,
                                                "decorators": [],
                                                "name": "app",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 4235,
                                                "end": 4244,
                                                "decorators": [],
                                                "name": "encodings",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "start": 4245,
                                              "end": 4246,
                                              "value": 1,
                                              "raw": "1"
                                            },
                                            "optional": false,
                                            "computed": true
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 4252,
                                            "end": 4263,
                                            "value": "utf8nobom",
                                            "raw": "\"utf8nobom\""
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 4283,
                      "end": 4905,
                      "expression": {
                        "type": "CallExpression",
                        "start": 4283,
                        "end": 4904,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4283,
                          "end": 4301,
                          "object": {
                            "type": "Identifier",
                            "start": 4283,
                            "end": 4293,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4294,
                            "end": 4301,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 4302,
                            "end": 4903,
                            "callee": {
                              "type": "Identifier",
                              "start": 4306,
                              "end": 4314,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 4315,
                                "end": 4333,
                                "value": "Check App params",
                                "raw": "\"Check App params\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 4343,
                                "end": 4902,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 4355,
                                  "end": 4902,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 4369,
                                      "end": 4492,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 4373,
                                          "end": 4491,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 4373,
                                            "end": 4376,
                                            "decorators": [],
                                            "name": "app",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 4379,
                                            "end": 4491,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 4383,
                                              "end": 4390,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 4383,
                                                "end": 4386,
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 4387,
                                                "end": 4390,
                                                "decorators": [],
                                                "name": "App",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "ArrayExpression",
                                                "start": 4391,
                                                "end": 4490,
                                                "elements": [
                                                  {
                                                    "type": "Literal",
                                                    "start": 4392,
                                                    "end": 4411,
                                                    "value": "-dir=C:\\test dir",
                                                    "raw": "\"-dir=C:\\\\test dir\""
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "start": 4413,
                                                    "end": 4430,
                                                    "value": "-lineEndings=LF",
                                                    "raw": "\"-lineEndings=LF\""
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "start": 4432,
                                                    "end": 4458,
                                                    "value": "-encodings=utf16be,ascii",
                                                    "raw": "\"-encodings=utf16be,ascii\""
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "start": 4460,
                                                    "end": 4476,
                                                    "value": "-recurse=false",
                                                    "raw": "\"-recurse=false\""
                                                  },
                                                  {
                                                    "type": "Literal",
                                                    "start": 4478,
                                                    "end": 4489,
                                                    "value": "-fixlines",
                                                    "raw": "\"-fixlines\""
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 4505,
                                      "end": 4892,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 4513,
                                        "end": 4890,
                                        "left": {
                                          "type": "LogicalExpression",
                                          "start": 4513,
                                          "end": 4841,
                                          "left": {
                                            "type": "LogicalExpression",
                                            "start": 4513,
                                            "end": 4790,
                                            "left": {
                                              "type": "LogicalExpression",
                                              "start": 4513,
                                              "end": 4737,
                                              "left": {
                                                "type": "LogicalExpression",
                                                "start": 4513,
                                                "end": 4678,
                                                "left": {
                                                  "type": "LogicalExpression",
                                                  "start": 4513,
                                                  "end": 4625,
                                                  "left": {
                                                    "type": "LogicalExpression",
                                                    "start": 4513,
                                                    "end": 4581,
                                                    "left": {
                                                      "type": "BinaryExpression",
                                                      "start": 4513,
                                                      "end": 4534,
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "start": 4513,
                                                        "end": 4525,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "start": 4513,
                                                          "end": 4516,
                                                          "decorators": [],
                                                          "name": "app",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "start": 4517,
                                                          "end": 4525,
                                                          "decorators": [],
                                                          "name": "fixLines",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "optional": false,
                                                        "computed": false
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "start": 4530,
                                                        "end": 4534,
                                                        "value": true,
                                                        "raw": "true"
                                                      }
                                                    },
                                                    "operator": "&&",
                                                    "right": {
                                                      "type": "BinaryExpression",
                                                      "start": 4557,
                                                      "end": 4581,
                                                      "left": {
                                                        "type": "MemberExpression",
                                                        "start": 4557,
                                                        "end": 4572,
                                                        "object": {
                                                          "type": "Identifier",
                                                          "start": 4557,
                                                          "end": 4560,
                                                          "decorators": [],
                                                          "name": "app",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "property": {
                                                          "type": "Identifier",
                                                          "start": 4561,
                                                          "end": 4572,
                                                          "decorators": [],
                                                          "name": "lineEndings",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        },
                                                        "optional": false,
                                                        "computed": false
                                                      },
                                                      "operator": "===",
                                                      "right": {
                                                        "type": "Literal",
                                                        "start": 4577,
                                                        "end": 4581,
                                                        "value": "LF",
                                                        "raw": "\"LF\""
                                                      }
                                                    }
                                                  },
                                                  "operator": "&&",
                                                  "right": {
                                                    "type": "BinaryExpression",
                                                    "start": 4604,
                                                    "end": 4625,
                                                    "left": {
                                                      "type": "MemberExpression",
                                                      "start": 4604,
                                                      "end": 4615,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 4604,
                                                        "end": 4607,
                                                        "decorators": [],
                                                        "name": "app",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 4608,
                                                        "end": 4615,
                                                        "decorators": [],
                                                        "name": "recurse",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "optional": false,
                                                      "computed": false
                                                    },
                                                    "operator": "===",
                                                    "right": {
                                                      "type": "Literal",
                                                      "start": 4620,
                                                      "end": 4625,
                                                      "value": false,
                                                      "raw": "false"
                                                    }
                                                  }
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "start": 4648,
                                                  "end": 4678,
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "start": 4648,
                                                    "end": 4664,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 4648,
                                                      "end": 4651,
                                                      "decorators": [],
                                                      "name": "app",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 4652,
                                                      "end": 4664,
                                                      "decorators": [],
                                                      "name": "matchPattern",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 4669,
                                                    "end": 4678,
                                                    "decorators": [],
                                                    "name": "undefined",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "start": 4701,
                                                "end": 4737,
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "start": 4701,
                                                  "end": 4718,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 4701,
                                                    "end": 4704,
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 4705,
                                                    "end": 4718,
                                                    "decorators": [],
                                                    "name": "rootDirectory",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 4723,
                                                  "end": 4737,
                                                  "value": "C:\\test dir",
                                                  "raw": "\"C:\\\\test dir\""
                                                }
                                              }
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "start": 4760,
                                              "end": 4790,
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 4760,
                                                "end": 4776,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "start": 4760,
                                                  "end": 4773,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 4760,
                                                    "end": 4763,
                                                    "decorators": [],
                                                    "name": "app",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 4764,
                                                    "end": 4773,
                                                    "decorators": [],
                                                    "name": "encodings",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "start": 4774,
                                                  "end": 4775,
                                                  "value": 0,
                                                  "raw": "0"
                                                },
                                                "optional": false,
                                                "computed": true
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "start": 4781,
                                                "end": 4790,
                                                "value": "utf16be",
                                                "raw": "\"utf16be\""
                                              }
                                            }
                                          },
                                          "operator": "&&",
                                          "right": {
                                            "type": "BinaryExpression",
                                            "start": 4813,
                                            "end": 4841,
                                            "left": {
                                              "type": "MemberExpression",
                                              "start": 4813,
                                              "end": 4829,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 4813,
                                                "end": 4826,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 4813,
                                                  "end": 4816,
                                                  "decorators": [],
                                                  "name": "app",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 4817,
                                                  "end": 4826,
                                                  "decorators": [],
                                                  "name": "encodings",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "start": 4827,
                                                "end": 4828,
                                                "value": 1,
                                                "raw": "1"
                                              },
                                              "optional": false,
                                              "computed": true
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "start": 4834,
                                              "end": 4841,
                                              "value": "ascii",
                                              "raw": "\"ascii\""
                                            }
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 4864,
                                          "end": 4890,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 4864,
                                            "end": 4884,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 4864,
                                              "end": 4877,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 4864,
                                                "end": 4867,
                                                "decorators": [],
                                                "name": "app",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 4868,
                                                "end": 4877,
                                                "decorators": [],
                                                "name": "encodings",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 4878,
                                              "end": 4884,
                                              "decorators": [],
                                              "name": "length",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 4889,
                                            "end": 4890,
                                            "value": 2,
                                            "raw": "2"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 4943,
                      "end": 5186,
                      "expression": {
                        "type": "CallExpression",
                        "start": 4943,
                        "end": 5185,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4943,
                          "end": 4961,
                          "object": {
                            "type": "Identifier",
                            "start": 4943,
                            "end": 4953,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4954,
                            "end": 4961,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 4962,
                            "end": 5184,
                            "callee": {
                              "type": "Identifier",
                              "start": 4966,
                              "end": 4974,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 4975,
                                "end": 5008,
                                "value": "Check encoding detection no BOM",
                                "raw": "\"Check encoding detection no BOM\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 5018,
                                "end": 5183,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5030,
                                  "end": 5183,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 5044,
                                      "end": 5109,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 5048,
                                          "end": 5108,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 5048,
                                            "end": 5050,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 5053,
                                            "end": 5108,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 5057,
                                              "end": 5079,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 5057,
                                                "end": 5068,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 5069,
                                                "end": 5079,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 5080,
                                                "end": 5107,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 5080,
                                                  "end": 5091,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 5094,
                                                  "end": 5107,
                                                  "value": "\\noBOM.txt",
                                                  "raw": "\"\\\\noBOM.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5122,
                                      "end": 5173,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 5129,
                                        "end": 5172,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 5129,
                                          "end": 5146,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5129,
                                            "end": 5135,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5129,
                                              "end": 5131,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5132,
                                              "end": 5135,
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5140,
                                            "end": 5146,
                                            "value": "none",
                                            "raw": "'none'"
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 5150,
                                          "end": 5172,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5150,
                                            "end": 5161,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5150,
                                              "end": 5152,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5153,
                                              "end": 5161,
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5166,
                                            "end": 5172,
                                            "value": "utf8",
                                            "raw": "'utf8'"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 5191,
                      "end": 5438,
                      "expression": {
                        "type": "CallExpression",
                        "start": 5191,
                        "end": 5437,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5191,
                          "end": 5209,
                          "object": {
                            "type": "Identifier",
                            "start": 5191,
                            "end": 5201,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5202,
                            "end": 5209,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 5210,
                            "end": 5436,
                            "callee": {
                              "type": "Identifier",
                              "start": 5214,
                              "end": 5222,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 5223,
                                "end": 5258,
                                "value": "Check encoding detection UTF8 BOM",
                                "raw": "\"Check encoding detection UTF8 BOM\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 5268,
                                "end": 5435,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5280,
                                  "end": 5435,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 5294,
                                      "end": 5361,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 5298,
                                          "end": 5360,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 5298,
                                            "end": 5300,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 5303,
                                            "end": 5360,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 5307,
                                              "end": 5329,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 5307,
                                                "end": 5318,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 5319,
                                                "end": 5329,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 5330,
                                                "end": 5359,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 5330,
                                                  "end": 5341,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 5344,
                                                  "end": 5359,
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5374,
                                      "end": 5425,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 5381,
                                        "end": 5424,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 5381,
                                          "end": 5398,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5381,
                                            "end": 5387,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5381,
                                              "end": 5383,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5384,
                                              "end": 5387,
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5392,
                                            "end": 5398,
                                            "value": "utf8",
                                            "raw": "'utf8'"
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 5402,
                                          "end": 5424,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5402,
                                            "end": 5413,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5402,
                                              "end": 5404,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5405,
                                              "end": 5413,
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5418,
                                            "end": 5424,
                                            "value": "utf8",
                                            "raw": "'utf8'"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 5443,
                      "end": 5699,
                      "expression": {
                        "type": "CallExpression",
                        "start": 5443,
                        "end": 5698,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5443,
                          "end": 5461,
                          "object": {
                            "type": "Identifier",
                            "start": 5443,
                            "end": 5453,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5454,
                            "end": 5461,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 5462,
                            "end": 5697,
                            "callee": {
                              "type": "Identifier",
                              "start": 5466,
                              "end": 5474,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 5475,
                                "end": 5513,
                                "value": "Check encoding detection UTF16be BOM",
                                "raw": "\"Check encoding detection UTF16be BOM\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 5523,
                                "end": 5696,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5535,
                                  "end": 5696,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 5549,
                                      "end": 5616,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 5553,
                                          "end": 5615,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 5553,
                                            "end": 5555,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 5558,
                                            "end": 5615,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 5562,
                                              "end": 5584,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 5562,
                                                "end": 5573,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 5574,
                                                "end": 5584,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 5585,
                                                "end": 5614,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 5585,
                                                  "end": 5596,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 5599,
                                                  "end": 5614,
                                                  "value": "\\UTF16BE.txt",
                                                  "raw": "\"\\\\UTF16BE.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5629,
                                      "end": 5686,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 5636,
                                        "end": 5685,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 5636,
                                          "end": 5656,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5636,
                                            "end": 5642,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5636,
                                              "end": 5638,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5639,
                                              "end": 5642,
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5647,
                                            "end": 5656,
                                            "value": "utf16be",
                                            "raw": "'utf16be'"
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 5660,
                                          "end": 5685,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5660,
                                            "end": 5671,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5660,
                                              "end": 5662,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5663,
                                              "end": 5671,
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5676,
                                            "end": 5685,
                                            "value": "utf16be",
                                            "raw": "'utf16be'"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 5704,
                      "end": 5960,
                      "expression": {
                        "type": "CallExpression",
                        "start": 5704,
                        "end": 5959,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5704,
                          "end": 5722,
                          "object": {
                            "type": "Identifier",
                            "start": 5704,
                            "end": 5714,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5715,
                            "end": 5722,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 5723,
                            "end": 5958,
                            "callee": {
                              "type": "Identifier",
                              "start": 5727,
                              "end": 5735,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 5736,
                                "end": 5774,
                                "value": "Check encoding detection UTF16le BOM",
                                "raw": "\"Check encoding detection UTF16le BOM\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 5784,
                                "end": 5957,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5796,
                                  "end": 5957,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 5810,
                                      "end": 5877,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 5814,
                                          "end": 5876,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 5814,
                                            "end": 5816,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 5819,
                                            "end": 5876,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 5823,
                                              "end": 5845,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 5823,
                                                "end": 5834,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 5835,
                                                "end": 5845,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 5846,
                                                "end": 5875,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 5846,
                                                  "end": 5857,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 5860,
                                                  "end": 5875,
                                                  "value": "\\UTF16LE.txt",
                                                  "raw": "\"\\\\UTF16LE.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5890,
                                      "end": 5947,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 5897,
                                        "end": 5946,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 5897,
                                          "end": 5917,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5897,
                                            "end": 5903,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5897,
                                              "end": 5899,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5900,
                                              "end": 5903,
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5908,
                                            "end": 5917,
                                            "value": "utf16le",
                                            "raw": "'utf16le'"
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 5921,
                                          "end": 5946,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 5921,
                                            "end": 5932,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 5921,
                                              "end": 5923,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 5924,
                                              "end": 5932,
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 5937,
                                            "end": 5946,
                                            "value": "utf16le",
                                            "raw": "'utf16le'"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 5965,
                      "end": 6211,
                      "expression": {
                        "type": "CallExpression",
                        "start": 5965,
                        "end": 6210,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 5965,
                          "end": 5983,
                          "object": {
                            "type": "Identifier",
                            "start": 5965,
                            "end": 5975,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 5976,
                            "end": 5983,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 5984,
                            "end": 6209,
                            "callee": {
                              "type": "Identifier",
                              "start": 5988,
                              "end": 5996,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 5997,
                                "end": 6029,
                                "value": "Check encoding on 1 bytes file",
                                "raw": "\"Check encoding on 1 bytes file\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 6039,
                                "end": 6208,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 6051,
                                  "end": 6208,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 6065,
                                      "end": 6134,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 6069,
                                          "end": 6133,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 6069,
                                            "end": 6071,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 6074,
                                            "end": 6133,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 6078,
                                              "end": 6100,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 6078,
                                                "end": 6089,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 6090,
                                                "end": 6100,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 6101,
                                                "end": 6132,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 6101,
                                                  "end": 6112,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 6115,
                                                  "end": 6132,
                                                  "value": "\\1bytefile.txt",
                                                  "raw": "\"\\\\1bytefile.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 6147,
                                      "end": 6198,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 6154,
                                        "end": 6197,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 6154,
                                          "end": 6171,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 6154,
                                            "end": 6160,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 6154,
                                              "end": 6156,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 6157,
                                              "end": 6160,
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 6165,
                                            "end": 6171,
                                            "value": "none",
                                            "raw": "'none'"
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 6175,
                                          "end": 6197,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 6175,
                                            "end": 6186,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 6175,
                                              "end": 6177,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 6178,
                                              "end": 6186,
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 6191,
                                            "end": 6197,
                                            "value": "utf8",
                                            "raw": "'utf8'"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 6216,
                      "end": 6462,
                      "expression": {
                        "type": "CallExpression",
                        "start": 6216,
                        "end": 6461,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 6216,
                          "end": 6234,
                          "object": {
                            "type": "Identifier",
                            "start": 6216,
                            "end": 6226,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 6227,
                            "end": 6234,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 6235,
                            "end": 6460,
                            "callee": {
                              "type": "Identifier",
                              "start": 6239,
                              "end": 6247,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 6248,
                                "end": 6280,
                                "value": "Check encoding on 0 bytes file",
                                "raw": "\"Check encoding on 0 bytes file\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 6290,
                                "end": 6459,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 6302,
                                  "end": 6459,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 6316,
                                      "end": 6385,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 6320,
                                          "end": 6384,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 6320,
                                            "end": 6322,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 6325,
                                            "end": 6384,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 6329,
                                              "end": 6351,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 6329,
                                                "end": 6340,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 6341,
                                                "end": 6351,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 6352,
                                                "end": 6383,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 6352,
                                                  "end": 6363,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 6366,
                                                  "end": 6383,
                                                  "value": "\\0bytefile.txt",
                                                  "raw": "\"\\\\0bytefile.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 6398,
                                      "end": 6449,
                                      "argument": {
                                        "type": "LogicalExpression",
                                        "start": 6405,
                                        "end": 6448,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 6405,
                                          "end": 6422,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 6405,
                                            "end": 6411,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 6405,
                                              "end": 6407,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 6408,
                                              "end": 6411,
                                              "decorators": [],
                                              "name": "bom",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 6416,
                                            "end": 6422,
                                            "value": "none",
                                            "raw": "'none'"
                                          }
                                        },
                                        "operator": "&&",
                                        "right": {
                                          "type": "BinaryExpression",
                                          "start": 6426,
                                          "end": 6448,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 6426,
                                            "end": 6437,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 6426,
                                              "end": 6428,
                                              "decorators": [],
                                              "name": "fb",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 6429,
                                              "end": 6437,
                                              "decorators": [],
                                              "name": "encoding",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "===",
                                          "right": {
                                            "type": "Literal",
                                            "start": 6442,
                                            "end": 6448,
                                            "value": "utf8",
                                            "raw": "'utf8'"
                                          }
                                        }
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 6495,
                      "end": 6909,
                      "expression": {
                        "type": "CallExpression",
                        "start": 6495,
                        "end": 6908,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 6495,
                          "end": 6513,
                          "object": {
                            "type": "Identifier",
                            "start": 6495,
                            "end": 6505,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 6506,
                            "end": 6513,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 6514,
                            "end": 6907,
                            "callee": {
                              "type": "Identifier",
                              "start": 6518,
                              "end": 6526,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 6527,
                                "end": 6546,
                                "value": "Check byte reader",
                                "raw": "\"Check byte reader\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 6556,
                                "end": 6906,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 6568,
                                  "end": 6906,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 6582,
                                      "end": 6649,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 6586,
                                          "end": 6648,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 6586,
                                            "end": 6588,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 6591,
                                            "end": 6648,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 6595,
                                              "end": 6617,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 6595,
                                                "end": 6606,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 6607,
                                                "end": 6617,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 6618,
                                                "end": 6647,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 6618,
                                                  "end": 6629,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 6632,
                                                  "end": 6647,
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 6662,
                                      "end": 6677,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 6666,
                                          "end": 6676,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 6666,
                                            "end": 6671,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 6674,
                                            "end": 6676,
                                            "elements": []
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForStatement",
                                      "start": 6690,
                                      "end": 6777,
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "start": 6695,
                                        "end": 6704,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 6699,
                                            "end": 6704,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 6699,
                                              "end": 6700,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 6703,
                                              "end": 6704,
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 6706,
                                        "end": 6712,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 6706,
                                          "end": 6707,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "start": 6710,
                                          "end": 6712,
                                          "value": 11,
                                          "raw": "11"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "start": 6714,
                                        "end": 6717,
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 6714,
                                          "end": 6715,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 6719,
                                        "end": 6777,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 6737,
                                            "end": 6763,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 6737,
                                              "end": 6762,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 6737,
                                                "end": 6747,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 6737,
                                                  "end": 6742,
                                                  "decorators": [],
                                                  "name": "chars",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 6743,
                                                  "end": 6747,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 6748,
                                                  "end": 6761,
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "start": 6748,
                                                    "end": 6759,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 6748,
                                                      "end": 6750,
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 6751,
                                                      "end": 6759,
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 6790,
                                      "end": 6896,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 6797,
                                        "end": 6895,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 6797,
                                          "end": 6820,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 6797,
                                            "end": 6807,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 6808,
                                            "end": 6820,
                                            "decorators": [],
                                            "name": "arrayCompare",
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
                                            "start": 6821,
                                            "end": 6826,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "start": 6828,
                                            "end": 6894,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 6829,
                                                "end": 6833,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6835,
                                                "end": 6839,
                                                "value": 195,
                                                "raw": "0xC3"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6841,
                                                "end": 6845,
                                                "value": 168,
                                                "raw": "0xA8"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6847,
                                                "end": 6851,
                                                "value": 225,
                                                "raw": "0xE1"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6853,
                                                "end": 6857,
                                                "value": 180,
                                                "raw": "0xB4"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6859,
                                                "end": 6863,
                                                "value": 163,
                                                "raw": "0xA3"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6865,
                                                "end": 6869,
                                                "value": 226,
                                                "raw": "0xE2"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6871,
                                                "end": 6875,
                                                "value": 128,
                                                "raw": "0x80"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6877,
                                                "end": 6881,
                                                "value": 160,
                                                "raw": "0xA0"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6883,
                                                "end": 6887,
                                                "value": 13,
                                                "raw": "0x0D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 6889,
                                                "end": 6893,
                                                "value": 10,
                                                "raw": "0x0A"
                                              }
                                            ]
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 6916,
                      "end": 7322,
                      "expression": {
                        "type": "CallExpression",
                        "start": 6916,
                        "end": 7321,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 6916,
                          "end": 6934,
                          "object": {
                            "type": "Identifier",
                            "start": 6916,
                            "end": 6926,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 6927,
                            "end": 6934,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 6935,
                            "end": 7320,
                            "callee": {
                              "type": "Identifier",
                              "start": 6939,
                              "end": 6947,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 6948,
                                "end": 6969,
                                "value": "Check UTF8 decoding",
                                "raw": "\"Check UTF8 decoding\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 6979,
                                "end": 7319,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 6991,
                                  "end": 7319,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 7005,
                                      "end": 7072,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 7009,
                                          "end": 7071,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 7009,
                                            "end": 7011,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 7014,
                                            "end": 7071,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 7018,
                                              "end": 7040,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 7018,
                                                "end": 7029,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 7030,
                                                "end": 7040,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 7041,
                                                "end": 7070,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 7041,
                                                  "end": 7052,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 7055,
                                                  "end": 7070,
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 7085,
                                      "end": 7100,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 7089,
                                          "end": 7099,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 7089,
                                            "end": 7094,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 7097,
                                            "end": 7099,
                                            "elements": []
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForStatement",
                                      "start": 7113,
                                      "end": 7208,
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "start": 7118,
                                        "end": 7127,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 7122,
                                            "end": 7127,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 7122,
                                              "end": 7123,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 7126,
                                              "end": 7127,
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 7129,
                                        "end": 7134,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 7129,
                                          "end": 7130,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "start": 7133,
                                          "end": 7134,
                                          "value": 6,
                                          "raw": "6"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "start": 7136,
                                        "end": 7139,
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 7136,
                                          "end": 7137,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 7141,
                                        "end": 7208,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 7159,
                                            "end": 7194,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 7159,
                                              "end": 7193,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 7159,
                                                "end": 7169,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 7159,
                                                  "end": 7164,
                                                  "decorators": [],
                                                  "name": "chars",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 7165,
                                                  "end": 7169,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 7170,
                                                  "end": 7192,
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "start": 7170,
                                                    "end": 7190,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 7170,
                                                      "end": 7172,
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 7173,
                                                      "end": 7190,
                                                      "decorators": [],
                                                      "name": "readUtf8CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 7221,
                                      "end": 7309,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 7228,
                                        "end": 7308,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 7228,
                                          "end": 7251,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 7228,
                                            "end": 7238,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 7239,
                                            "end": 7251,
                                            "decorators": [],
                                            "name": "arrayCompare",
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
                                            "start": 7252,
                                            "end": 7257,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "start": 7259,
                                            "end": 7307,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 7260,
                                                "end": 7266,
                                                "value": 84,
                                                "raw": "0x0054"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7268,
                                                "end": 7274,
                                                "value": 232,
                                                "raw": "0x00E8"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7276,
                                                "end": 7282,
                                                "value": 7459,
                                                "raw": "0x1D23"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7284,
                                                "end": 7290,
                                                "value": 8224,
                                                "raw": "0x2020"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7292,
                                                "end": 7298,
                                                "value": 13,
                                                "raw": "0x000D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7300,
                                                "end": 7306,
                                                "value": 10,
                                                "raw": "0x000A"
                                              }
                                            ]
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 7328,
                      "end": 8001,
                      "expression": {
                        "type": "CallExpression",
                        "start": 7328,
                        "end": 8000,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 7328,
                          "end": 7346,
                          "object": {
                            "type": "Identifier",
                            "start": 7328,
                            "end": 7338,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 7339,
                            "end": 7346,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 7347,
                            "end": 7999,
                            "callee": {
                              "type": "Identifier",
                              "start": 7351,
                              "end": 7359,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 7360,
                                "end": 7381,
                                "value": "Check UTF8 encoding",
                                "raw": "\"Check UTF8 encoding\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 7391,
                                "end": 7998,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 7403,
                                  "end": 7998,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 7417,
                                      "end": 7457,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 7421,
                                          "end": 7456,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 7421,
                                            "end": 7423,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 7426,
                                            "end": 7456,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 7430,
                                              "end": 7452,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 7430,
                                                "end": 7441,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 7442,
                                                "end": 7452,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 7453,
                                                "end": 7455,
                                                "value": 20,
                                                "raw": "20"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 7470,
                                      "end": 7488,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 7470,
                                        "end": 7487,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 7470,
                                          "end": 7485,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 7470,
                                            "end": 7472,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 7473,
                                            "end": 7485,
                                            "decorators": [],
                                            "name": "writeUtf8Bom",
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
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 7501,
                                      "end": 7562,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 7505,
                                          "end": 7561,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 7505,
                                            "end": 7510,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 7513,
                                            "end": 7561,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 7514,
                                                "end": 7520,
                                                "value": 84,
                                                "raw": "0x0054"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7522,
                                                "end": 7528,
                                                "value": 232,
                                                "raw": "0x00E8"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7530,
                                                "end": 7536,
                                                "value": 7459,
                                                "raw": "0x1D23"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7538,
                                                "end": 7544,
                                                "value": 8224,
                                                "raw": "0x2020"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7546,
                                                "end": 7552,
                                                "value": 13,
                                                "raw": "0x000D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7554,
                                                "end": 7560,
                                                "value": 10,
                                                "raw": "0x000A"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForInStatement",
                                      "start": 7575,
                                      "end": 7660,
                                      "left": {
                                        "type": "VariableDeclaration",
                                        "start": 7580,
                                        "end": 7585,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 7584,
                                            "end": 7585,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 7584,
                                              "end": 7585,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": null,
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 7589,
                                        "end": 7594,
                                        "decorators": [],
                                        "name": "chars",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 7596,
                                        "end": 7660,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 7614,
                                            "end": 7646,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 7614,
                                              "end": 7645,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 7614,
                                                "end": 7635,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 7614,
                                                  "end": 7616,
                                                  "decorators": [],
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 7617,
                                                  "end": 7635,
                                                  "decorators": [],
                                                  "name": "writeUtf8CodePoint",
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
                                                  "start": 7636,
                                                  "end": 7644,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 7636,
                                                    "end": 7641,
                                                    "decorators": [],
                                                    "name": "chars",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 7642,
                                                    "end": 7643,
                                                    "decorators": [],
                                                    "name": "i",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": true
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 7673,
                                      "end": 7686,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 7673,
                                        "end": 7685,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 7673,
                                          "end": 7681,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 7673,
                                            "end": 7675,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 7676,
                                            "end": 7681,
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 7684,
                                          "end": 7685,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 7699,
                                      "end": 7714,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 7703,
                                          "end": 7713,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 7703,
                                            "end": 7708,
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 7711,
                                            "end": 7713,
                                            "elements": []
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForStatement",
                                      "start": 7727,
                                      "end": 7814,
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "start": 7732,
                                        "end": 7741,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 7736,
                                            "end": 7741,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 7736,
                                              "end": 7737,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 7740,
                                              "end": 7741,
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 7743,
                                        "end": 7749,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 7743,
                                          "end": 7744,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "start": 7747,
                                          "end": 7749,
                                          "value": 14,
                                          "raw": "14"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "start": 7751,
                                        "end": 7754,
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 7751,
                                          "end": 7752,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 7756,
                                        "end": 7814,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 7774,
                                            "end": 7800,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 7774,
                                              "end": 7799,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 7774,
                                                "end": 7784,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 7774,
                                                  "end": 7779,
                                                  "decorators": [],
                                                  "name": "bytes",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 7780,
                                                  "end": 7784,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 7785,
                                                  "end": 7798,
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "start": 7785,
                                                    "end": 7796,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 7785,
                                                      "end": 7787,
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 7788,
                                                      "end": 7796,
                                                      "decorators": [],
                                                      "name": "readByte",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 7827,
                                      "end": 7927,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 7831,
                                          "end": 7926,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 7831,
                                            "end": 7839,
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 7842,
                                            "end": 7926,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 7843,
                                                "end": 7847,
                                                "value": 239,
                                                "raw": "0xEF"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7849,
                                                "end": 7853,
                                                "value": 187,
                                                "raw": "0xBB"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7855,
                                                "end": 7859,
                                                "value": 191,
                                                "raw": "0xBF"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7861,
                                                "end": 7865,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7867,
                                                "end": 7871,
                                                "value": 195,
                                                "raw": "0xC3"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7873,
                                                "end": 7877,
                                                "value": 168,
                                                "raw": "0xA8"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7879,
                                                "end": 7883,
                                                "value": 225,
                                                "raw": "0xE1"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7885,
                                                "end": 7889,
                                                "value": 180,
                                                "raw": "0xB4"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7891,
                                                "end": 7895,
                                                "value": 163,
                                                "raw": "0xA3"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7897,
                                                "end": 7901,
                                                "value": 226,
                                                "raw": "0xE2"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7903,
                                                "end": 7907,
                                                "value": 128,
                                                "raw": "0x80"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7909,
                                                "end": 7913,
                                                "value": 160,
                                                "raw": "0xA0"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7915,
                                                "end": 7919,
                                                "value": 13,
                                                "raw": "0x0D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 7921,
                                                "end": 7925,
                                                "value": 10,
                                                "raw": "0x0A"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 7940,
                                      "end": 7988,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 7947,
                                        "end": 7987,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 7947,
                                          "end": 7970,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 7947,
                                            "end": 7957,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 7958,
                                            "end": 7970,
                                            "decorators": [],
                                            "name": "arrayCompare",
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
                                            "start": 7971,
                                            "end": 7976,
                                            "decorators": [],
                                            "name": "bytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 7978,
                                            "end": 7986,
                                            "decorators": [],
                                            "name": "expected",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 8045,
                      "end": 9062,
                      "expression": {
                        "type": "CallExpression",
                        "start": 8045,
                        "end": 9061,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 8045,
                          "end": 8063,
                          "object": {
                            "type": "Identifier",
                            "start": 8045,
                            "end": 8055,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 8056,
                            "end": 8063,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 8064,
                            "end": 9060,
                            "callee": {
                              "type": "Identifier",
                              "start": 8068,
                              "end": 8076,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 8077,
                                "end": 8098,
                                "value": "Check saving a file",
                                "raw": "\"Check saving a file\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 8108,
                                "end": 9059,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 8120,
                                  "end": 9059,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 8134,
                                      "end": 8182,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 8138,
                                          "end": 8181,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 8138,
                                            "end": 8146,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 8149,
                                            "end": 8181,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 8149,
                                              "end": 8160,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 8163,
                                              "end": 8181,
                                              "value": "\\tmpUTF16LE.txt",
                                              "raw": "\"\\\\tmpUTF16LE.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 8195,
                                      "end": 8235,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 8199,
                                          "end": 8234,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 8199,
                                            "end": 8201,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 8204,
                                            "end": 8234,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 8208,
                                              "end": 8230,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 8208,
                                                "end": 8219,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 8220,
                                                "end": 8230,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 8231,
                                                "end": 8233,
                                                "value": 14,
                                                "raw": "14"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 8248,
                                      "end": 8269,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 8248,
                                        "end": 8268,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 8248,
                                          "end": 8266,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8248,
                                            "end": 8250,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8251,
                                            "end": 8266,
                                            "decorators": [],
                                            "name": "writeUtf16leBom",
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
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 8282,
                                      "end": 8343,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 8286,
                                          "end": 8342,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 8286,
                                            "end": 8291,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 8294,
                                            "end": 8342,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 8295,
                                                "end": 8301,
                                                "value": 84,
                                                "raw": "0x0054"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8303,
                                                "end": 8309,
                                                "value": 232,
                                                "raw": "0x00E8"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8311,
                                                "end": 8317,
                                                "value": 7459,
                                                "raw": "0x1D23"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8319,
                                                "end": 8325,
                                                "value": 8224,
                                                "raw": "0x2020"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8327,
                                                "end": 8333,
                                                "value": 13,
                                                "raw": "0x000D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8335,
                                                "end": 8341,
                                                "value": 10,
                                                "raw": "0x000A"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 8356,
                                      "end": 8426,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 8356,
                                        "end": 8425,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 8356,
                                          "end": 8369,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8356,
                                            "end": 8361,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8362,
                                            "end": 8369,
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
                                            "type": "FunctionExpression",
                                            "start": 8370,
                                            "end": 8424,
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 8380,
                                                "end": 8383,
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "start": 8385,
                                              "end": 8424,
                                              "body": [
                                                {
                                                  "type": "ExpressionStatement",
                                                  "start": 8387,
                                                  "end": 8422,
                                                  "expression": {
                                                    "type": "CallExpression",
                                                    "start": 8387,
                                                    "end": 8421,
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "start": 8387,
                                                      "end": 8409,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 8387,
                                                        "end": 8389,
                                                        "decorators": [],
                                                        "name": "fb",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 8390,
                                                        "end": 8409,
                                                        "decorators": [],
                                                        "name": "writeUtf16CodePoint",
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
                                                        "start": 8410,
                                                        "end": 8413,
                                                        "decorators": [],
                                                        "name": "val",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      {
                                                        "type": "Literal",
                                                        "start": 8415,
                                                        "end": 8420,
                                                        "value": false,
                                                        "raw": "false"
                                                      }
                                                    ],
                                                    "optional": false
                                                  },
                                                  "directive": null
                                                }
                                              ]
                                            },
                                            "expression": false
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 8439,
                                      "end": 8457,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 8439,
                                        "end": 8456,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 8439,
                                          "end": 8446,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8439,
                                            "end": 8441,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8442,
                                            "end": 8446,
                                            "decorators": [],
                                            "name": "save",
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
                                            "start": 8447,
                                            "end": 8455,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 8471,
                                      "end": 8524,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 8475,
                                          "end": 8523,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 8475,
                                            "end": 8484,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 8487,
                                            "end": 8523,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 8491,
                                              "end": 8513,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 8491,
                                                "end": 8502,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 8503,
                                                "end": 8513,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 8514,
                                                "end": 8522,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "IfStatement",
                                      "start": 8537,
                                      "end": 8641,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 8541,
                                        "end": 8573,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 8541,
                                          "end": 8559,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8541,
                                            "end": 8550,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8551,
                                            "end": 8559,
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "start": 8564,
                                          "end": 8573,
                                          "value": "utf16le",
                                          "raw": "'utf16le'"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 8575,
                                        "end": 8641,
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "start": 8593,
                                            "end": 8627,
                                            "argument": {
                                              "type": "CallExpression",
                                              "start": 8599,
                                              "end": 8626,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 8599,
                                                "end": 8604,
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "start": 8605,
                                                  "end": 8625,
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\""
                                                }
                                              ],
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 8654,
                                      "end": 8758,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 8658,
                                          "end": 8758,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 8658,
                                            "end": 8671,
                                            "decorators": [],
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 8674,
                                            "end": 8758,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 8675,
                                                "end": 8679,
                                                "value": 255,
                                                "raw": "0xFF"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8681,
                                                "end": 8685,
                                                "value": 254,
                                                "raw": "0xFE"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8687,
                                                "end": 8691,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8693,
                                                "end": 8697,
                                                "value": 0,
                                                "raw": "0x00"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8699,
                                                "end": 8703,
                                                "value": 232,
                                                "raw": "0xE8"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8705,
                                                "end": 8709,
                                                "value": 0,
                                                "raw": "0x00"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8711,
                                                "end": 8715,
                                                "value": 35,
                                                "raw": "0x23"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8717,
                                                "end": 8721,
                                                "value": 29,
                                                "raw": "0x1D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8723,
                                                "end": 8727,
                                                "value": 32,
                                                "raw": "0x20"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8729,
                                                "end": 8733,
                                                "value": 32,
                                                "raw": "0x20"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8735,
                                                "end": 8739,
                                                "value": 13,
                                                "raw": "0x0D"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8741,
                                                "end": 8745,
                                                "value": 0,
                                                "raw": "0x00"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8747,
                                                "end": 8751,
                                                "value": 10,
                                                "raw": "0x0A"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 8753,
                                                "end": 8757,
                                                "value": 0,
                                                "raw": "0x00"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 8771,
                                      "end": 8791,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 8771,
                                        "end": 8790,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 8771,
                                          "end": 8786,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8771,
                                            "end": 8780,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8781,
                                            "end": 8786,
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 8789,
                                          "end": 8790,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 8804,
                                      "end": 9024,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 8804,
                                        "end": 9023,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 8804,
                                          "end": 8825,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8804,
                                            "end": 8817,
                                            "decorators": [],
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8818,
                                            "end": 8825,
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
                                            "type": "FunctionExpression",
                                            "start": 8826,
                                            "end": 9022,
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 8836,
                                                "end": 8839,
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "start": 8841,
                                              "end": 9022,
                                              "body": [
                                                {
                                                  "type": "VariableDeclaration",
                                                  "start": 8859,
                                                  "end": 8894,
                                                  "kind": "var",
                                                  "declarations": [
                                                    {
                                                      "type": "VariableDeclarator",
                                                      "start": 8863,
                                                      "end": 8893,
                                                      "id": {
                                                        "type": "Identifier",
                                                        "start": 8863,
                                                        "end": 8870,
                                                        "decorators": [],
                                                        "name": "byteVal",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "init": {
                                                        "type": "CallExpression",
                                                        "start": 8873,
                                                        "end": 8893,
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "start": 8873,
                                                          "end": 8891,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "start": 8873,
                                                            "end": 8882,
                                                            "decorators": [],
                                                            "name": "savedFile",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "start": 8883,
                                                            "end": 8891,
                                                            "decorators": [],
                                                            "name": "readByte",
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
                                                  "type": "IfStatement",
                                                  "start": 8911,
                                                  "end": 9008,
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "start": 8915,
                                                    "end": 8930,
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 8915,
                                                      "end": 8922,
                                                      "decorators": [],
                                                      "name": "byteVal",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "operator": "!==",
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 8927,
                                                      "end": 8930,
                                                      "decorators": [],
                                                      "name": "val",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  "consequent": {
                                                    "type": "BlockStatement",
                                                    "start": 8932,
                                                    "end": 9008,
                                                    "body": [
                                                      {
                                                        "type": "ThrowStatement",
                                                        "start": 8954,
                                                        "end": 8990,
                                                        "argument": {
                                                          "type": "CallExpression",
                                                          "start": 8960,
                                                          "end": 8989,
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "start": 8960,
                                                            "end": 8965,
                                                            "decorators": [],
                                                            "name": "Error",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeArguments": null,
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "start": 8966,
                                                              "end": 8988,
                                                              "value": "Incorrect byte value",
                                                              "raw": "\"Incorrect byte value\""
                                                            }
                                                          ],
                                                          "optional": false
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  "alternate": null
                                                }
                                              ]
                                            },
                                            "expression": false
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 9037,
                                      "end": 9049,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 9044,
                                        "end": 9048,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 9068,
                      "end": 9328,
                      "expression": {
                        "type": "CallExpression",
                        "start": 9068,
                        "end": 9327,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 9068,
                          "end": 9086,
                          "object": {
                            "type": "Identifier",
                            "start": 9068,
                            "end": 9078,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 9079,
                            "end": 9086,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 9087,
                            "end": 9326,
                            "callee": {
                              "type": "Identifier",
                              "start": 9091,
                              "end": 9099,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 9100,
                                "end": 9135,
                                "value": "Check reading past buffer asserts",
                                "raw": "\"Check reading past buffer asserts\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 9141,
                                "end": 9296,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 9153,
                                  "end": 9296,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 9163,
                                      "end": 9230,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 9167,
                                          "end": 9229,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 9167,
                                            "end": 9169,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 9172,
                                            "end": 9229,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 9176,
                                              "end": 9198,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 9176,
                                                "end": 9187,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 9188,
                                                "end": 9198,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 9199,
                                                "end": 9228,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 9199,
                                                  "end": 9210,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 9213,
                                                  "end": 9228,
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 9239,
                                      "end": 9269,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 9243,
                                          "end": 9268,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 9243,
                                            "end": 9249,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "start": 9252,
                                            "end": 9268,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 9252,
                                              "end": 9263,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 9252,
                                                "end": 9254,
                                                "decorators": [],
                                                "name": "fb",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 9255,
                                                "end": 9263,
                                                "decorators": [],
                                                "name": "readByte",
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
                                                "start": 9264,
                                                "end": 9267,
                                                "value": 200,
                                                "raw": "200"
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
                                      "type": "ReturnStatement",
                                      "start": 9278,
                                      "end": 9290,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 9285,
                                        "end": 9289,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 9298,
                                "end": 9325,
                                "value": "read beyond buffer length",
                                "raw": "\"read beyond buffer length\""
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
                      "start": 9333,
                      "end": 9585,
                      "expression": {
                        "type": "CallExpression",
                        "start": 9333,
                        "end": 9584,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 9333,
                          "end": 9351,
                          "object": {
                            "type": "Identifier",
                            "start": 9333,
                            "end": 9343,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 9344,
                            "end": 9351,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 9352,
                            "end": 9583,
                            "callee": {
                              "type": "Identifier",
                              "start": 9356,
                              "end": 9364,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 9365,
                                "end": 9400,
                                "value": "Check writing past buffer asserts",
                                "raw": "\"Check writing past buffer asserts\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 9406,
                                "end": 9552,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 9418,
                                  "end": 9552,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 9428,
                                      "end": 9495,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 9432,
                                          "end": 9494,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 9432,
                                            "end": 9434,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 9437,
                                            "end": 9494,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 9441,
                                              "end": 9463,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 9441,
                                                "end": 9452,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 9453,
                                                "end": 9463,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 9464,
                                                "end": 9493,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 9464,
                                                  "end": 9475,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 9478,
                                                  "end": 9493,
                                                  "value": "\\UTF8BOM.txt",
                                                  "raw": "\"\\\\UTF8BOM.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 9504,
                                      "end": 9525,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 9504,
                                        "end": 9524,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 9504,
                                          "end": 9516,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 9504,
                                            "end": 9506,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 9507,
                                            "end": 9516,
                                            "decorators": [],
                                            "name": "writeByte",
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
                                            "start": 9517,
                                            "end": 9518,
                                            "value": 5,
                                            "raw": "5"
                                          },
                                          {
                                            "type": "Literal",
                                            "start": 9520,
                                            "end": 9523,
                                            "value": 200,
                                            "raw": "200"
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 9534,
                                      "end": 9546,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 9541,
                                        "end": 9545,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 9554,
                                "end": 9582,
                                "value": "write beyond buffer length",
                                "raw": "\"write beyond buffer length\""
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
                      "start": 9625,
                      "end": 10249,
                      "expression": {
                        "type": "CallExpression",
                        "start": 9625,
                        "end": 10248,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 9625,
                          "end": 9643,
                          "object": {
                            "type": "Identifier",
                            "start": 9625,
                            "end": 9635,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 9636,
                            "end": 9643,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 9644,
                            "end": 10247,
                            "callee": {
                              "type": "Identifier",
                              "start": 9648,
                              "end": 9656,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 9657,
                                "end": 9683,
                                "value": "Read non-BMP utf16 chars",
                                "raw": "\"Read non-BMP utf16 chars\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 9693,
                                "end": 10246,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 9705,
                                  "end": 10246,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 9719,
                                      "end": 9799,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 9723,
                                          "end": 9798,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 9723,
                                            "end": 9732,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 9735,
                                            "end": 9798,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 9739,
                                              "end": 9761,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 9739,
                                                "end": 9750,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 9751,
                                                "end": 9761,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 9762,
                                                "end": 9797,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 9762,
                                                  "end": 9773,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 9776,
                                                  "end": 9797,
                                                  "value": "\\utf16leNonBmp.txt",
                                                  "raw": "\"\\\\utf16leNonBmp.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "IfStatement",
                                      "start": 9812,
                                      "end": 9916,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 9816,
                                        "end": 9848,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 9816,
                                          "end": 9834,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 9816,
                                            "end": 9825,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 9826,
                                            "end": 9834,
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "start": 9839,
                                          "end": 9848,
                                          "value": "utf16le",
                                          "raw": "'utf16le'"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 9850,
                                        "end": 9916,
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "start": 9868,
                                            "end": 9902,
                                            "argument": {
                                              "type": "CallExpression",
                                              "start": 9874,
                                              "end": 9901,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 9874,
                                                "end": 9879,
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "start": 9880,
                                                  "end": 9900,
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\""
                                                }
                                              ],
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 9930,
                                      "end": 9950,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 9934,
                                          "end": 9949,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 9934,
                                            "end": 9944,
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 9947,
                                            "end": 9949,
                                            "elements": []
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForStatement",
                                      "start": 9963,
                                      "end": 10076,
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "start": 9968,
                                        "end": 9977,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 9972,
                                            "end": 9977,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 9972,
                                              "end": 9973,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 9976,
                                              "end": 9977,
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 9979,
                                        "end": 9984,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 9979,
                                          "end": 9980,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "start": 9983,
                                          "end": 9984,
                                          "value": 6,
                                          "raw": "6"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "start": 9986,
                                        "end": 9989,
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 9986,
                                          "end": 9987,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 9991,
                                        "end": 10076,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 10009,
                                            "end": 10062,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 10009,
                                              "end": 10061,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 10009,
                                                "end": 10024,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 10009,
                                                  "end": 10019,
                                                  "decorators": [],
                                                  "name": "codePoints",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 10020,
                                                  "end": 10024,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 10025,
                                                  "end": 10060,
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "start": 10025,
                                                    "end": 10053,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 10025,
                                                      "end": 10034,
                                                      "decorators": [],
                                                      "name": "savedFile",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 10035,
                                                      "end": 10053,
                                                      "decorators": [],
                                                      "name": "readUtf16CodePoint",
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
                                                      "start": 10054,
                                                      "end": 10059,
                                                      "value": false,
                                                      "raw": "false"
                                                    }
                                                  ],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 10089,
                                      "end": 10160,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 10093,
                                          "end": 10159,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 10093,
                                            "end": 10111,
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 10114,
                                            "end": 10159,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 10115,
                                                "end": 10122,
                                                "value": 66688,
                                                "raw": "0x10480"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10124,
                                                "end": 10131,
                                                "value": 66689,
                                                "raw": "0x10481"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10133,
                                                "end": 10140,
                                                "value": 66690,
                                                "raw": "0x10482"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10142,
                                                "end": 10146,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10148,
                                                "end": 10152,
                                                "value": 104,
                                                "raw": "0x68"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10154,
                                                "end": 10158,
                                                "value": 105,
                                                "raw": "0x69"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 10173,
                                      "end": 10236,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 10180,
                                        "end": 10235,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 10180,
                                          "end": 10203,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10180,
                                            "end": 10190,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10191,
                                            "end": 10203,
                                            "decorators": [],
                                            "name": "arrayCompare",
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
                                            "start": 10204,
                                            "end": 10214,
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 10216,
                                            "end": 10234,
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 10255,
                      "end": 10866,
                      "expression": {
                        "type": "CallExpression",
                        "start": 10255,
                        "end": 10865,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 10255,
                          "end": 10273,
                          "object": {
                            "type": "Identifier",
                            "start": 10255,
                            "end": 10265,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 10266,
                            "end": 10273,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 10274,
                            "end": 10864,
                            "callee": {
                              "type": "Identifier",
                              "start": 10278,
                              "end": 10286,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 10287,
                                "end": 10312,
                                "value": "Read non-BMP utf8 chars",
                                "raw": "\"Read non-BMP utf8 chars\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 10322,
                                "end": 10863,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 10334,
                                  "end": 10863,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 10348,
                                      "end": 10425,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 10352,
                                          "end": 10424,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 10352,
                                            "end": 10361,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 10364,
                                            "end": 10424,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 10368,
                                              "end": 10390,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 10368,
                                                "end": 10379,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 10380,
                                                "end": 10390,
                                                "decorators": [],
                                                "name": "FileBuffer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "BinaryExpression",
                                                "start": 10391,
                                                "end": 10423,
                                                "left": {
                                                  "type": "Identifier",
                                                  "start": 10391,
                                                  "end": 10402,
                                                  "decorators": [],
                                                  "name": "TestFileDir",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 10405,
                                                  "end": 10423,
                                                  "value": "\\utf8NonBmp.txt",
                                                  "raw": "\"\\\\utf8NonBmp.txt\""
                                                }
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "IfStatement",
                                      "start": 10438,
                                      "end": 10539,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 10442,
                                        "end": 10471,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 10442,
                                          "end": 10460,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10442,
                                            "end": 10451,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10452,
                                            "end": 10460,
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "start": 10465,
                                          "end": 10471,
                                          "value": "utf8",
                                          "raw": "'utf8'"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 10473,
                                        "end": 10539,
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "start": 10491,
                                            "end": 10525,
                                            "argument": {
                                              "type": "CallExpression",
                                              "start": 10497,
                                              "end": 10524,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 10497,
                                                "end": 10502,
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "start": 10503,
                                                  "end": 10523,
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\""
                                                }
                                              ],
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 10553,
                                      "end": 10573,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 10557,
                                          "end": 10572,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 10557,
                                            "end": 10567,
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 10570,
                                            "end": 10572,
                                            "elements": []
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ForStatement",
                                      "start": 10586,
                                      "end": 10693,
                                      "init": {
                                        "type": "VariableDeclaration",
                                        "start": 10591,
                                        "end": 10600,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 10595,
                                            "end": 10600,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 10595,
                                              "end": 10596,
                                              "decorators": [],
                                              "name": "i",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 10599,
                                              "end": 10600,
                                              "value": 0,
                                              "raw": "0"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 10602,
                                        "end": 10607,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 10602,
                                          "end": 10603,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "operator": "<",
                                        "right": {
                                          "type": "Literal",
                                          "start": 10606,
                                          "end": 10607,
                                          "value": 6,
                                          "raw": "6"
                                        }
                                      },
                                      "update": {
                                        "type": "UpdateExpression",
                                        "start": 10609,
                                        "end": 10612,
                                        "operator": "++",
                                        "prefix": false,
                                        "argument": {
                                          "type": "Identifier",
                                          "start": 10609,
                                          "end": 10610,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 10614,
                                        "end": 10693,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 10632,
                                            "end": 10679,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 10632,
                                              "end": 10678,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 10632,
                                                "end": 10647,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 10632,
                                                  "end": 10642,
                                                  "decorators": [],
                                                  "name": "codePoints",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 10643,
                                                  "end": 10647,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 10648,
                                                  "end": 10677,
                                                  "callee": {
                                                    "type": "MemberExpression",
                                                    "start": 10648,
                                                    "end": 10675,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 10648,
                                                      "end": 10657,
                                                      "decorators": [],
                                                      "name": "savedFile",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 10658,
                                                      "end": 10675,
                                                      "decorators": [],
                                                      "name": "readUtf8CodePoint",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [],
                                                  "optional": false
                                                }
                                              ],
                                              "optional": false
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 10706,
                                      "end": 10777,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 10710,
                                          "end": 10776,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 10710,
                                            "end": 10728,
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 10731,
                                            "end": 10776,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 10732,
                                                "end": 10739,
                                                "value": 66688,
                                                "raw": "0x10480"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10741,
                                                "end": 10748,
                                                "value": 66689,
                                                "raw": "0x10481"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10750,
                                                "end": 10757,
                                                "value": 66690,
                                                "raw": "0x10482"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10759,
                                                "end": 10763,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10765,
                                                "end": 10769,
                                                "value": 104,
                                                "raw": "0x68"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 10771,
                                                "end": 10775,
                                                "value": 105,
                                                "raw": "0x69"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 10790,
                                      "end": 10853,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 10797,
                                        "end": 10852,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 10797,
                                          "end": 10820,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 10797,
                                            "end": 10807,
                                            "decorators": [],
                                            "name": "TestRunner",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 10808,
                                            "end": 10820,
                                            "decorators": [],
                                            "name": "arrayCompare",
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
                                            "start": 10821,
                                            "end": 10831,
                                            "decorators": [],
                                            "name": "codePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 10833,
                                            "end": 10851,
                                            "decorators": [],
                                            "name": "expectedCodePoints",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 10872,
                      "end": 11823,
                      "expression": {
                        "type": "CallExpression",
                        "start": 10872,
                        "end": 11822,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 10872,
                          "end": 10890,
                          "object": {
                            "type": "Identifier",
                            "start": 10872,
                            "end": 10882,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 10883,
                            "end": 10890,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 10891,
                            "end": 11821,
                            "callee": {
                              "type": "Identifier",
                              "start": 10895,
                              "end": 10903,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 10904,
                                "end": 10930,
                                "value": "Write non-BMP utf8 chars",
                                "raw": "\"Write non-BMP utf8 chars\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 10940,
                                "end": 11820,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 10952,
                                  "end": 11820,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 10966,
                                      "end": 11017,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 10970,
                                          "end": 11016,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 10970,
                                            "end": 10978,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 10981,
                                            "end": 11016,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 10981,
                                              "end": 10992,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 10995,
                                              "end": 11016,
                                              "value": "\\tmpUTF8nonBmp.txt",
                                              "raw": "\"\\\\tmpUTF8nonBmp.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 11030,
                                      "end": 11070,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 11034,
                                          "end": 11069,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 11034,
                                            "end": 11036,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 11039,
                                            "end": 11069,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 11043,
                                              "end": 11065,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 11043,
                                                "end": 11054,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 11055,
                                                "end": 11065,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 11066,
                                                "end": 11068,
                                                "value": 15,
                                                "raw": "15"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 11083,
                                      "end": 11141,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 11087,
                                          "end": 11140,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 11087,
                                            "end": 11092,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 11095,
                                            "end": 11140,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 11096,
                                                "end": 11103,
                                                "value": 66688,
                                                "raw": "0x10480"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11105,
                                                "end": 11112,
                                                "value": 66689,
                                                "raw": "0x10481"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11114,
                                                "end": 11121,
                                                "value": 66690,
                                                "raw": "0x10482"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11123,
                                                "end": 11127,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11129,
                                                "end": 11133,
                                                "value": 104,
                                                "raw": "0x68"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11135,
                                                "end": 11139,
                                                "value": 105,
                                                "raw": "0x69"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 11154,
                                      "end": 11216,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 11154,
                                        "end": 11215,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 11154,
                                          "end": 11167,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 11154,
                                            "end": 11159,
                                            "decorators": [],
                                            "name": "chars",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 11160,
                                            "end": 11167,
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
                                            "type": "FunctionExpression",
                                            "start": 11168,
                                            "end": 11214,
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 11178,
                                                "end": 11181,
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "start": 11183,
                                              "end": 11214,
                                              "body": [
                                                {
                                                  "type": "ExpressionStatement",
                                                  "start": 11185,
                                                  "end": 11212,
                                                  "expression": {
                                                    "type": "CallExpression",
                                                    "start": 11185,
                                                    "end": 11211,
                                                    "callee": {
                                                      "type": "MemberExpression",
                                                      "start": 11185,
                                                      "end": 11206,
                                                      "object": {
                                                        "type": "Identifier",
                                                        "start": 11185,
                                                        "end": 11187,
                                                        "decorators": [],
                                                        "name": "fb",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "property": {
                                                        "type": "Identifier",
                                                        "start": 11188,
                                                        "end": 11206,
                                                        "decorators": [],
                                                        "name": "writeUtf8CodePoint",
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
                                                        "start": 11207,
                                                        "end": 11210,
                                                        "decorators": [],
                                                        "name": "val",
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
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 11229,
                                      "end": 11247,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 11229,
                                        "end": 11246,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 11229,
                                          "end": 11236,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 11229,
                                            "end": 11231,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 11232,
                                            "end": 11236,
                                            "decorators": [],
                                            "name": "save",
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
                                            "start": 11237,
                                            "end": 11245,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 11261,
                                      "end": 11314,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 11265,
                                          "end": 11313,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 11265,
                                            "end": 11274,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 11277,
                                            "end": 11313,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 11281,
                                              "end": 11303,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 11281,
                                                "end": 11292,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 11293,
                                                "end": 11303,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 11304,
                                                "end": 11312,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "IfStatement",
                                      "start": 11327,
                                      "end": 11428,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 11331,
                                        "end": 11360,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 11331,
                                          "end": 11349,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 11331,
                                            "end": 11340,
                                            "decorators": [],
                                            "name": "savedFile",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 11341,
                                            "end": 11349,
                                            "decorators": [],
                                            "name": "encoding",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "operator": "!==",
                                        "right": {
                                          "type": "Literal",
                                          "start": 11354,
                                          "end": 11360,
                                          "value": "utf8",
                                          "raw": "'utf8'"
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 11362,
                                        "end": 11428,
                                        "body": [
                                          {
                                            "type": "ThrowStatement",
                                            "start": 11380,
                                            "end": 11414,
                                            "argument": {
                                              "type": "CallExpression",
                                              "start": 11386,
                                              "end": 11413,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 11386,
                                                "end": 11391,
                                                "decorators": [],
                                                "name": "Error",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Literal",
                                                  "start": 11392,
                                                  "end": 11412,
                                                  "value": "Incorrect encoding",
                                                  "raw": "\"Incorrect encoding\""
                                                }
                                              ],
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "alternate": null
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 11441,
                                      "end": 11552,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 11445,
                                          "end": 11551,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 11445,
                                            "end": 11458,
                                            "decorators": [],
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "ArrayExpression",
                                            "start": 11461,
                                            "end": 11551,
                                            "elements": [
                                              {
                                                "type": "Literal",
                                                "start": 11462,
                                                "end": 11466,
                                                "value": 240,
                                                "raw": "0xF0"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11468,
                                                "end": 11472,
                                                "value": 144,
                                                "raw": "0x90"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11474,
                                                "end": 11478,
                                                "value": 146,
                                                "raw": "0x92"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11480,
                                                "end": 11484,
                                                "value": 128,
                                                "raw": "0x80"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11486,
                                                "end": 11490,
                                                "value": 240,
                                                "raw": "0xF0"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11492,
                                                "end": 11496,
                                                "value": 144,
                                                "raw": "0x90"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11498,
                                                "end": 11502,
                                                "value": 146,
                                                "raw": "0x92"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11504,
                                                "end": 11508,
                                                "value": 129,
                                                "raw": "0x81"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11510,
                                                "end": 11514,
                                                "value": 240,
                                                "raw": "0xF0"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11516,
                                                "end": 11520,
                                                "value": 144,
                                                "raw": "0x90"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11522,
                                                "end": 11526,
                                                "value": 146,
                                                "raw": "0x92"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11528,
                                                "end": 11532,
                                                "value": 130,
                                                "raw": "0x82"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11534,
                                                "end": 11538,
                                                "value": 84,
                                                "raw": "0x54"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11540,
                                                "end": 11544,
                                                "value": 104,
                                                "raw": "0x68"
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 11546,
                                                "end": 11550,
                                                "value": 105,
                                                "raw": "0x69"
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 11565,
                                      "end": 11785,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 11565,
                                        "end": 11784,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 11565,
                                          "end": 11586,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 11565,
                                            "end": 11578,
                                            "decorators": [],
                                            "name": "expectedBytes",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 11579,
                                            "end": 11586,
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
                                            "type": "FunctionExpression",
                                            "start": 11587,
                                            "end": 11783,
                                            "id": null,
                                            "generator": false,
                                            "async": false,
                                            "declare": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 11597,
                                                "end": 11600,
                                                "decorators": [],
                                                "name": "val",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "start": 11602,
                                              "end": 11783,
                                              "body": [
                                                {
                                                  "type": "VariableDeclaration",
                                                  "start": 11620,
                                                  "end": 11655,
                                                  "kind": "var",
                                                  "declarations": [
                                                    {
                                                      "type": "VariableDeclarator",
                                                      "start": 11624,
                                                      "end": 11654,
                                                      "id": {
                                                        "type": "Identifier",
                                                        "start": 11624,
                                                        "end": 11631,
                                                        "decorators": [],
                                                        "name": "byteVal",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "init": {
                                                        "type": "CallExpression",
                                                        "start": 11634,
                                                        "end": 11654,
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "start": 11634,
                                                          "end": 11652,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "start": 11634,
                                                            "end": 11643,
                                                            "decorators": [],
                                                            "name": "savedFile",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "start": 11644,
                                                            "end": 11652,
                                                            "decorators": [],
                                                            "name": "readByte",
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
                                                  "type": "IfStatement",
                                                  "start": 11672,
                                                  "end": 11769,
                                                  "test": {
                                                    "type": "BinaryExpression",
                                                    "start": 11676,
                                                    "end": 11691,
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 11676,
                                                      "end": 11683,
                                                      "decorators": [],
                                                      "name": "byteVal",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "operator": "!==",
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 11688,
                                                      "end": 11691,
                                                      "decorators": [],
                                                      "name": "val",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  "consequent": {
                                                    "type": "BlockStatement",
                                                    "start": 11693,
                                                    "end": 11769,
                                                    "body": [
                                                      {
                                                        "type": "ThrowStatement",
                                                        "start": 11715,
                                                        "end": 11751,
                                                        "argument": {
                                                          "type": "CallExpression",
                                                          "start": 11721,
                                                          "end": 11750,
                                                          "callee": {
                                                            "type": "Identifier",
                                                            "start": 11721,
                                                            "end": 11726,
                                                            "decorators": [],
                                                            "name": "Error",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeArguments": null,
                                                          "arguments": [
                                                            {
                                                              "type": "Literal",
                                                              "start": 11727,
                                                              "end": 11749,
                                                              "value": "Incorrect byte value",
                                                              "raw": "\"Incorrect byte value\""
                                                            }
                                                          ],
                                                          "optional": false
                                                        }
                                                      }
                                                    ]
                                                  },
                                                  "alternate": null
                                                }
                                              ]
                                            },
                                            "expression": false
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 11798,
                                      "end": 11810,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 11805,
                                        "end": 11809,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 11829,
                      "end": 12118,
                      "expression": {
                        "type": "CallExpression",
                        "start": 11829,
                        "end": 12117,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 11829,
                          "end": 11847,
                          "object": {
                            "type": "Identifier",
                            "start": 11829,
                            "end": 11839,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 11840,
                            "end": 11847,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 11848,
                            "end": 12116,
                            "callee": {
                              "type": "Identifier",
                              "start": 11852,
                              "end": 11860,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 11861,
                                "end": 11890,
                                "value": "Test invalid lead UTF8 byte",
                                "raw": "\"Test invalid lead UTF8 byte\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 11900,
                                "end": 12073,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 11912,
                                  "end": 12073,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 11926,
                                      "end": 11979,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 11930,
                                          "end": 11978,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 11930,
                                            "end": 11938,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 11941,
                                            "end": 11978,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 11941,
                                              "end": 11952,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 11955,
                                              "end": 11978,
                                              "value": "\\utf8BadLeadByte.txt",
                                              "raw": "\"\\\\utf8BadLeadByte.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 11992,
                                      "end": 12038,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 11996,
                                          "end": 12037,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 11996,
                                            "end": 11998,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 12001,
                                            "end": 12037,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 12005,
                                              "end": 12027,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 12005,
                                                "end": 12016,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 12017,
                                                "end": 12027,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 12028,
                                                "end": 12036,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 12051,
                                      "end": 12063,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 12058,
                                        "end": 12062,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 12075,
                                "end": 12115,
                                "value": "Invalid UTF8 byte sequence at index: 4",
                                "raw": "\"Invalid UTF8 byte sequence at index: 4\""
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
                      "start": 12124,
                      "end": 12408,
                      "expression": {
                        "type": "CallExpression",
                        "start": 12124,
                        "end": 12407,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 12124,
                          "end": 12142,
                          "object": {
                            "type": "Identifier",
                            "start": 12124,
                            "end": 12134,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 12135,
                            "end": 12142,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 12143,
                            "end": 12406,
                            "callee": {
                              "type": "Identifier",
                              "start": 12147,
                              "end": 12155,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 12156,
                                "end": 12185,
                                "value": "Test invalid tail UTF8 byte",
                                "raw": "\"Test invalid tail UTF8 byte\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 12195,
                                "end": 12368,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 12207,
                                  "end": 12368,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 12221,
                                      "end": 12274,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 12225,
                                          "end": 12273,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 12225,
                                            "end": 12233,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 12236,
                                            "end": 12273,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 12236,
                                              "end": 12247,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 12250,
                                              "end": 12273,
                                              "value": "\\utf8InvalidTail.txt",
                                              "raw": "\"\\\\utf8InvalidTail.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 12287,
                                      "end": 12333,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 12291,
                                          "end": 12332,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 12291,
                                            "end": 12293,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 12296,
                                            "end": 12332,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 12300,
                                              "end": 12322,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 12300,
                                                "end": 12311,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 12312,
                                                "end": 12322,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 12323,
                                                "end": 12331,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 12346,
                                      "end": 12358,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 12353,
                                        "end": 12357,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 12370,
                                "end": 12405,
                                "value": "Trailing byte invalid at index: 8",
                                "raw": "\"Trailing byte invalid at index: 8\""
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
                      "start": 12414,
                      "end": 12686,
                      "expression": {
                        "type": "CallExpression",
                        "start": 12414,
                        "end": 12685,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 12414,
                          "end": 12432,
                          "object": {
                            "type": "Identifier",
                            "start": 12414,
                            "end": 12424,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 12425,
                            "end": 12432,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 12433,
                            "end": 12684,
                            "callee": {
                              "type": "Identifier",
                              "start": 12437,
                              "end": 12445,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 12446,
                                "end": 12474,
                                "value": "Test ANSI fails validation",
                                "raw": "\"Test ANSI fails validation\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 12484,
                                "end": 12646,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 12496,
                                  "end": 12646,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 12510,
                                      "end": 12552,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 12514,
                                          "end": 12551,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 12514,
                                            "end": 12522,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 12525,
                                            "end": 12551,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 12525,
                                              "end": 12536,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 12539,
                                              "end": 12551,
                                              "value": "\\ansi.txt",
                                              "raw": "\"\\\\ansi.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 12565,
                                      "end": 12611,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 12569,
                                          "end": 12610,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 12569,
                                            "end": 12571,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 12574,
                                            "end": 12610,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 12578,
                                              "end": 12600,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 12578,
                                                "end": 12589,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 12590,
                                                "end": 12600,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 12601,
                                                "end": 12609,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 12624,
                                      "end": 12636,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 12631,
                                        "end": 12635,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 12648,
                                "end": 12683,
                                "value": "Trailing byte invalid at index: 6",
                                "raw": "\"Trailing byte invalid at index: 6\""
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
                      "start": 12692,
                      "end": 13008,
                      "expression": {
                        "type": "CallExpression",
                        "start": 12692,
                        "end": 13007,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 12692,
                          "end": 12710,
                          "object": {
                            "type": "Identifier",
                            "start": 12692,
                            "end": 12702,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 12703,
                            "end": 12710,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 12711,
                            "end": 13006,
                            "callee": {
                              "type": "Identifier",
                              "start": 12715,
                              "end": 12723,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 12724,
                                "end": 12774,
                                "value": "Test UTF-16LE with invalid surrogate trail fails",
                                "raw": "\"Test UTF-16LE with invalid surrogate trail fails\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 12784,
                                "end": 12965,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 12796,
                                  "end": 12965,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 12810,
                                      "end": 12871,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 12814,
                                          "end": 12870,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 12814,
                                            "end": 12822,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 12825,
                                            "end": 12870,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 12825,
                                              "end": 12836,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 12839,
                                              "end": 12870,
                                              "value": "\\utf16leInvalidSurrogate.txt",
                                              "raw": "\"\\\\utf16leInvalidSurrogate.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 12884,
                                      "end": 12930,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 12888,
                                          "end": 12929,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 12888,
                                            "end": 12890,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 12893,
                                            "end": 12929,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 12897,
                                              "end": 12919,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 12897,
                                                "end": 12908,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 12909,
                                                "end": 12919,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 12920,
                                                "end": 12928,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 12943,
                                      "end": 12955,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 12950,
                                        "end": 12954,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 12967,
                                "end": 13005,
                                "value": "Trail surrogate has an invalid value",
                                "raw": "\"Trail surrogate has an invalid value\""
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
                      "start": 13014,
                      "end": 13336,
                      "expression": {
                        "type": "CallExpression",
                        "start": 13014,
                        "end": 13335,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 13014,
                          "end": 13032,
                          "object": {
                            "type": "Identifier",
                            "start": 13014,
                            "end": 13024,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 13025,
                            "end": 13032,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 13033,
                            "end": 13334,
                            "callee": {
                              "type": "Identifier",
                              "start": 13037,
                              "end": 13045,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 13046,
                                "end": 13095,
                                "value": "Test UTF-16BE with invalid surrogate head fails",
                                "raw": "\"Test UTF-16BE with invalid surrogate head fails\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 13105,
                                "end": 13286,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 13117,
                                  "end": 13286,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13131,
                                      "end": 13192,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13135,
                                          "end": 13191,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13135,
                                            "end": 13143,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 13146,
                                            "end": 13191,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 13146,
                                              "end": 13157,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 13160,
                                              "end": 13191,
                                              "value": "\\UTF16BEInvalidSurrogate.txt",
                                              "raw": "\"\\\\UTF16BEInvalidSurrogate.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13205,
                                      "end": 13251,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13209,
                                          "end": 13250,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13209,
                                            "end": 13211,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 13214,
                                            "end": 13250,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 13218,
                                              "end": 13240,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 13218,
                                                "end": 13229,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 13230,
                                                "end": 13240,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 13241,
                                                "end": 13249,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 13264,
                                      "end": 13276,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 13271,
                                        "end": 13275,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 13288,
                                "end": 13333,
                                "value": "Byte sequence starts with a trail surrogate",
                                "raw": "\"Byte sequence starts with a trail surrogate\""
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
                      "start": 13342,
                      "end": 13663,
                      "expression": {
                        "type": "CallExpression",
                        "start": 13342,
                        "end": 13662,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 13342,
                          "end": 13360,
                          "object": {
                            "type": "Identifier",
                            "start": 13342,
                            "end": 13352,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 13353,
                            "end": 13360,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 13361,
                            "end": 13661,
                            "callee": {
                              "type": "Identifier",
                              "start": 13365,
                              "end": 13373,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 13374,
                                "end": 13424,
                                "value": "Test UTF-16LE with missing trail surrogate fails",
                                "raw": "\"Test UTF-16LE with missing trail surrogate fails\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 13434,
                                "end": 13620,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 13446,
                                  "end": 13620,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13460,
                                      "end": 13526,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13464,
                                          "end": 13525,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13464,
                                            "end": 13472,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 13475,
                                            "end": 13525,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 13475,
                                              "end": 13486,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 13489,
                                              "end": 13525,
                                              "value": "\\utf16leMissingTrailSurrogate.txt",
                                              "raw": "\"\\\\utf16leMissingTrailSurrogate.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13539,
                                      "end": 13585,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13543,
                                          "end": 13584,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13543,
                                            "end": 13545,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 13548,
                                            "end": 13584,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 13552,
                                              "end": 13574,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 13552,
                                                "end": 13563,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 13564,
                                                "end": 13574,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 13575,
                                                "end": 13583,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 13598,
                                      "end": 13610,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 13605,
                                        "end": 13609,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 13622,
                                "end": 13660,
                                "value": "Trail surrogate has an invalid value",
                                "raw": "\"Trail surrogate has an invalid value\""
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
                      "start": 13695,
                      "end": 14050,
                      "expression": {
                        "type": "CallExpression",
                        "start": 13695,
                        "end": 14049,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 13695,
                          "end": 13713,
                          "object": {
                            "type": "Identifier",
                            "start": 13695,
                            "end": 13705,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 13706,
                            "end": 13713,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 13714,
                            "end": 14048,
                            "callee": {
                              "type": "Identifier",
                              "start": 13718,
                              "end": 13726,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 13727,
                                "end": 13756,
                                "value": "Count character occurrences",
                                "raw": "\"Count character occurrences\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 13766,
                                "end": 14047,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 13778,
                                  "end": 14047,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13792,
                                      "end": 13844,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13796,
                                          "end": 13843,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13796,
                                            "end": 13804,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 13807,
                                            "end": 13843,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 13807,
                                              "end": 13818,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 13821,
                                              "end": 13843,
                                              "value": "\\charCountASCII.txt",
                                              "raw": "\"\\\\charCountASCII.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13857,
                                      "end": 13903,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13861,
                                          "end": 13902,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13861,
                                            "end": 13863,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 13866,
                                            "end": 13902,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 13870,
                                              "end": 13892,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 13870,
                                                "end": 13881,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 13882,
                                                "end": 13892,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 13893,
                                                "end": 13901,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 13916,
                                      "end": 14010,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 13920,
                                          "end": 14009,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 13920,
                                            "end": 13926,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "LogicalExpression",
                                            "start": 13930,
                                            "end": 14008,
                                            "left": {
                                              "type": "LogicalExpression",
                                              "start": 13930,
                                              "end": 13988,
                                              "left": {
                                                "type": "LogicalExpression",
                                                "start": 13930,
                                                "end": 13966,
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "start": 13930,
                                                  "end": 13946,
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "start": 13930,
                                                    "end": 13940,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 13930,
                                                      "end": 13932,
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 13933,
                                                      "end": 13940,
                                                      "decorators": [],
                                                      "name": "countCR",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "start": 13945,
                                                    "end": 13946,
                                                    "value": 5,
                                                    "raw": "5"
                                                  }
                                                },
                                                "operator": "&&",
                                                "right": {
                                                  "type": "BinaryExpression",
                                                  "start": 13950,
                                                  "end": 13966,
                                                  "left": {
                                                    "type": "MemberExpression",
                                                    "start": 13950,
                                                    "end": 13960,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 13950,
                                                      "end": 13952,
                                                      "decorators": [],
                                                      "name": "fb",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 13953,
                                                      "end": 13960,
                                                      "decorators": [],
                                                      "name": "countLF",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "computed": false
                                                  },
                                                  "operator": "===",
                                                  "right": {
                                                    "type": "Literal",
                                                    "start": 13965,
                                                    "end": 13966,
                                                    "value": 4,
                                                    "raw": "4"
                                                  }
                                                }
                                              },
                                              "operator": "&&",
                                              "right": {
                                                "type": "BinaryExpression",
                                                "start": 13970,
                                                "end": 13988,
                                                "left": {
                                                  "type": "MemberExpression",
                                                  "start": 13970,
                                                  "end": 13982,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 13970,
                                                    "end": 13972,
                                                    "decorators": [],
                                                    "name": "fb",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 13973,
                                                    "end": 13982,
                                                    "decorators": [],
                                                    "name": "countCRLF",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "operator": "===",
                                                "right": {
                                                  "type": "Literal",
                                                  "start": 13987,
                                                  "end": 13988,
                                                  "value": 5,
                                                  "raw": "5"
                                                }
                                              }
                                            },
                                            "operator": "&&",
                                            "right": {
                                              "type": "BinaryExpression",
                                              "start": 13992,
                                              "end": 14008,
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 13992,
                                                "end": 14002,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 13992,
                                                  "end": 13994,
                                                  "decorators": [],
                                                  "name": "fb",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 13995,
                                                  "end": 14002,
                                                  "decorators": [],
                                                  "name": "countHT",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "operator": "===",
                                              "right": {
                                                "type": "Literal",
                                                "start": 14007,
                                                "end": 14008,
                                                "value": 3,
                                                "raw": "3"
                                              }
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 14023,
                                      "end": 14037,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 14030,
                                        "end": 14036,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "expression": false
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
                      "start": 14090,
                      "end": 14384,
                      "expression": {
                        "type": "CallExpression",
                        "start": 14090,
                        "end": 14383,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 14090,
                          "end": 14108,
                          "object": {
                            "type": "Identifier",
                            "start": 14090,
                            "end": 14100,
                            "decorators": [],
                            "name": "testRunner",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 14101,
                            "end": 14108,
                            "decorators": [],
                            "name": "addTest",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 14109,
                            "end": 14382,
                            "callee": {
                              "type": "Identifier",
                              "start": 14113,
                              "end": 14121,
                              "decorators": [],
                              "name": "TestCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 14122,
                                "end": 14156,
                                "value": "Test file with control character",
                                "raw": "\"Test file with control character\""
                              },
                              {
                                "type": "FunctionExpression",
                                "start": 14166,
                                "end": 14335,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 14178,
                                  "end": 14335,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 14192,
                                      "end": 14241,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 14196,
                                          "end": 14240,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 14196,
                                            "end": 14204,
                                            "decorators": [],
                                            "name": "filename",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "BinaryExpression",
                                            "start": 14207,
                                            "end": 14240,
                                            "left": {
                                              "type": "Identifier",
                                              "start": 14207,
                                              "end": 14218,
                                              "decorators": [],
                                              "name": "TestFileDir",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "operator": "+",
                                            "right": {
                                              "type": "Literal",
                                              "start": 14221,
                                              "end": 14240,
                                              "value": "\\controlChar.txt",
                                              "raw": "\"\\\\controlChar.txt\""
                                            }
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 14254,
                                      "end": 14300,
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 14258,
                                          "end": 14299,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 14258,
                                            "end": 14260,
                                            "decorators": [],
                                            "name": "fb",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "init": {
                                            "type": "NewExpression",
                                            "start": 14263,
                                            "end": 14299,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 14267,
                                              "end": 14289,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 14267,
                                                "end": 14278,
                                                "decorators": [],
                                                "name": "FileManager",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 14279,
                                                "end": 14289,
                                                "decorators": [],
                                                "name": "FileBuffer",
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
                                                "start": 14290,
                                                "end": 14298,
                                                "decorators": [],
                                                "name": "filename",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ]
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "declare": false
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 14313,
                                      "end": 14325,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 14320,
                                        "end": 14324,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              {
                                "type": "Literal",
                                "start": 14337,
                                "end": 14381,
                                "value": "Codepoint at index: 3 has control value: 8",
                                "raw": "\"Codepoint at index: 3 has control value: 8\""
                              }
                            ]
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 14390,
                      "end": 14408,
                      "argument": {
                        "type": "Identifier",
                        "start": 14397,
                        "end": 14407,
                        "decorators": [],
                        "name": "testRunner",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false
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
