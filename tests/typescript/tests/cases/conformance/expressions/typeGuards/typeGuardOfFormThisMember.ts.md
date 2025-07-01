__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 96
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 129
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
                      "name": "isFSO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 139
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 141,
                          "end": 145
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FileSystemObject",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 149,
                              "end": 165
                            },
                            "typeArguments": null,
                            "start": 149,
                            "end": 165
                          },
                          "start": 149,
                          "end": 165
                        },
                        "start": 141,
                        "end": 165
                      },
                      "start": 139,
                      "end": 165
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 134,
                    "end": 166
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 179
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 183,
                            "end": 187
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 191,
                                "end": 195
                              },
                              "typeArguments": null,
                              "start": 191,
                              "end": 195
                            },
                            "start": 191,
                            "end": 195
                          },
                          "start": 183,
                          "end": 195
                        },
                        "start": 181,
                        "end": 195
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "ThisExpression",
                                "start": 208,
                                "end": 212
                              },
                              "operator": "instanceof",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 228
                              },
                              "start": 208,
                              "end": 228
                            },
                            "start": 201,
                            "end": 229
                          }
                        ],
                        "start": 196,
                        "end": 233
                      },
                      "expression": false,
                      "start": 179,
                      "end": 233
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 169,
                    "end": 233
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 246
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 252
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 254,
                        "end": 270
                      },
                      "expression": false,
                      "start": 246,
                      "end": 270
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 236,
                    "end": 270
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isDirectory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 288
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 292,
                            "end": 296
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 300,
                                "end": 309
                              },
                              "typeArguments": null,
                              "start": 300,
                              "end": 309
                            },
                            "start": 300,
                            "end": 309
                          },
                          "start": 292,
                          "end": 309
                        },
                        "start": 290,
                        "end": 309
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "ThisExpression",
                                "start": 322,
                                "end": 326
                              },
                              "operator": "instanceof",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 347
                              },
                              "start": 322,
                              "end": 347
                            },
                            "start": 315,
                            "end": 348
                          }
                        ],
                        "start": 310,
                        "end": 352
                      },
                      "expression": false,
                      "start": 288,
                      "end": 352
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 273,
                    "end": 352
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 366
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 368,
                          "end": 372
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Networked",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 377,
                                  "end": 386
                                },
                                "typeArguments": null,
                                "start": 377,
                                "end": 386
                              },
                              {
                                "type": "TSThisType",
                                "start": 389,
                                "end": 393
                              }
                            ],
                            "start": 377,
                            "end": 393
                          },
                          "start": 377,
                          "end": 393
                        },
                        "start": 368,
                        "end": 394
                      },
                      "start": 366,
                      "end": 394
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 355,
                    "end": 395
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 409
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
                            "name": "path",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 423,
                                "end": 429
                              },
                              "start": 421,
                              "end": 429
                            },
                            "start": 417,
                            "end": 429
                          },
                          "readonly": false,
                          "static": false,
                          "start": 410,
                          "end": 429
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 431,
                        "end": 433
                      },
                      "expression": false,
                      "start": 409,
                      "end": 433
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 398,
                    "end": 433
                  }
                ],
                "start": 130,
                "end": 436
              },
              "abstract": false,
              "declare": false,
              "start": 107,
              "end": 436
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 100,
            "end": 436
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "File",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 456
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 481
              },
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
                      "start": 486,
                      "end": 497
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
                          "name": "path",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 504,
                              "end": 510
                            },
                            "start": 502,
                            "end": 510
                          },
                          "start": 498,
                          "end": 510
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 528,
                                "end": 534
                              },
                              "start": 526,
                              "end": 534
                            },
                            "start": 519,
                            "end": 534
                          },
                          "readonly": false,
                          "static": false,
                          "start": 512,
                          "end": 534
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
                                "type": "Super",
                                "start": 538,
                                "end": 543
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 544,
                                  "end": 548
                                }
                              ],
                              "optional": false,
                              "start": 538,
                              "end": 549
                            },
                            "directive": null,
                            "start": 538,
                            "end": 550
                          }
                        ],
                        "start": 536,
                        "end": 552
                      },
                      "expression": false,
                      "start": 497,
                      "end": 552
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 486,
                    "end": 552
                  }
                ],
                "start": 482,
                "end": 555
              },
              "abstract": false,
              "declare": false,
              "start": 446,
              "end": 555
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 439,
            "end": 555
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Directory",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 579
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 604
              },
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
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 609,
                      "end": 617
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
                            "name": "FileSystemObject",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 635
                          },
                          "typeArguments": null,
                          "start": 619,
                          "end": 635
                        },
                        "start": 619,
                        "end": 637
                      },
                      "start": 617,
                      "end": 637
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 609,
                    "end": 638
                  }
                ],
                "start": 605,
                "end": 641
              },
              "abstract": false,
              "declare": false,
              "start": 564,
              "end": 641
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 557,
            "end": 641
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Networked",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 669
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "host",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 678
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      },
                      "start": 678,
                      "end": 686
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 674,
                    "end": 687
                  }
                ],
                "start": 670,
                "end": 690
              },
              "declare": false,
              "start": 650,
              "end": 690
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 643,
            "end": 690
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FileSystemObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 703,
                        "end": 719
                      },
                      "typeArguments": null,
                      "start": 703,
                      "end": 719
                    },
                    "start": 701,
                    "end": 719
                  },
                  "start": 697,
                  "end": 719
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "File",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 730
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "foo/bar.txt",
                      "raw": "\"foo/bar.txt\"",
                      "start": 731,
                      "end": 744
                    },
                    {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 746,
                      "end": 751
                    }
                  ],
                  "start": 722,
                  "end": 752
                },
                "definite": false,
                "start": 697,
                "end": 752
              }
            ],
            "declare": false,
            "start": 693,
            "end": 753
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 759
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 755,
                "end": 771
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 774,
                "end": 779
              },
              "start": 755,
              "end": 779
            },
            "directive": null,
            "start": 755,
            "end": 780
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 786
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 792
                },
                "optional": false,
                "computed": false,
                "start": 782,
                "end": 792
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 795,
                  "end": 799
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 806
                },
                "optional": false,
                "computed": false,
                "start": 795,
                "end": 806
              },
              "start": 782,
              "end": 806
            },
            "directive": null,
            "start": 782,
            "end": 807
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 809,
                  "end": 813
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 820
                },
                "optional": false,
                "computed": false,
                "start": 809,
                "end": 820
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 823,
                "end": 827
              },
              "start": 809,
              "end": 827
            },
            "directive": null,
            "start": 809,
            "end": 828
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 835
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 842
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isFile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 849
                  },
                  "optional": false,
                  "computed": false,
                  "start": 838,
                  "end": 849
                },
                "definite": false,
                "start": 834,
                "end": 849
              }
            ],
            "declare": false,
            "start": 830,
            "end": 850
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "file",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 860
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 861,
                "end": 867
              },
              "optional": false,
              "computed": false,
              "start": 856,
              "end": 867
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 877
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "content",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 885
                    },
                    "optional": false,
                    "computed": false,
                    "start": 873,
                    "end": 885
                  },
                  "directive": null,
                  "start": 873,
                  "end": 886
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 893,
                      "end": 897
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 898,
                      "end": 909
                    },
                    "optional": false,
                    "computed": false,
                    "start": 893,
                    "end": 909
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 916,
                            "end": 920
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 921,
                            "end": 925
                          },
                          "optional": false,
                          "computed": false,
                          "start": 916,
                          "end": 925
                        },
                        "directive": null,
                        "start": 916,
                        "end": 926
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 930,
                            "end": 934
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 942
                          },
                          "optional": false,
                          "computed": false,
                          "start": 930,
                          "end": 942
                        },
                        "directive": null,
                        "start": 930,
                        "end": 943
                      }
                    ],
                    "start": 911,
                    "end": 947
                  },
                  "alternate": null,
                  "start": 889,
                  "end": 947
                }
              ],
              "start": 869,
              "end": 950
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 965
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isDirectory",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 977
                },
                "optional": false,
                "computed": false,
                "start": 961,
                "end": 977
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "file",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 983,
                        "end": 987
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 988,
                        "end": 996
                      },
                      "optional": false,
                      "computed": false,
                      "start": 983,
                      "end": 996
                    },
                    "directive": null,
                    "start": 983,
                    "end": 997
                  }
                ],
                "start": 979,
                "end": 1000
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1011,
                    "end": 1015
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isNetworked",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1016,
                    "end": 1027
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1011,
                  "end": 1027
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "file",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1033,
                          "end": 1037
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "host",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1038,
                          "end": 1042
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1033,
                        "end": 1042
                      },
                      "directive": null,
                      "start": 1033,
                      "end": 1043
                    }
                  ],
                  "start": 1029,
                  "end": 1046
                },
                "alternate": null,
                "start": 1007,
                "end": 1046
              },
              "start": 957,
              "end": 1046
            },
            "start": 852,
            "end": 1046
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericLeadGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1076
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1078
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1077,
                  "end": 1078
                }
              ],
              "start": 1076,
              "end": 1079
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GenericGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1088,
                  "end": 1100
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1101,
                        "end": 1102
                      },
                      "typeArguments": null,
                      "start": 1101,
                      "end": 1102
                    }
                  ],
                  "start": 1100,
                  "end": 1103
                },
                "start": 1088,
                "end": 1103
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lead",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1108,
                    "end": 1112
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1116,
                      "end": 1120
                    },
                    "start": 1114,
                    "end": 1120
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1108,
                  "end": 1121
                }
              ],
              "start": 1104,
              "end": 1124
            },
            "declare": false,
            "start": 1050,
            "end": 1124
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericFollowerGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1158
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1159,
                    "end": 1160
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1159,
                  "end": 1160
                }
              ],
              "start": 1158,
              "end": 1161
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GenericGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1170,
                  "end": 1182
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1183,
                        "end": 1184
                      },
                      "typeArguments": null,
                      "start": 1183,
                      "end": 1184
                    }
                  ],
                  "start": 1182,
                  "end": 1185
                },
                "start": 1170,
                "end": 1185
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1190,
                    "end": 1196
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1200,
                      "end": 1204
                    },
                    "start": 1198,
                    "end": 1204
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1190,
                  "end": 1205
                }
              ],
              "start": 1186,
              "end": 1208
            },
            "declare": false,
            "start": 1128,
            "end": 1208
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1222,
              "end": 1234
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1235,
                    "end": 1236
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1235,
                  "end": 1236
                }
              ],
              "start": 1234,
              "end": 1237
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1242,
                    "end": 1248
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1250,
                        "end": 1251
                      },
                      "typeArguments": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "start": 1248,
                    "end": 1251
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1242,
                  "end": 1252
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isLeader",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1255,
                    "end": 1263
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1265,
                        "end": 1269
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GenericLeadGuard",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1274,
                            "end": 1290
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1291,
                                  "end": 1292
                                },
                                "typeArguments": null,
                                "start": 1291,
                                "end": 1292
                              }
                            ],
                            "start": 1290,
                            "end": 1293
                          },
                          "start": 1274,
                          "end": 1293
                        },
                        "start": 1274,
                        "end": 1293
                      },
                      "start": 1265,
                      "end": 1294
                    },
                    "start": 1263,
                    "end": 1294
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1255,
                  "end": 1295
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isFollower",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1298,
                    "end": 1308
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1310,
                        "end": 1314
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GenericFollowerGuard",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1318,
                            "end": 1338
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1339,
                                  "end": 1340
                                },
                                "typeArguments": null,
                                "start": 1339,
                                "end": 1340
                              }
                            ],
                            "start": 1338,
                            "end": 1341
                          },
                          "start": 1318,
                          "end": 1341
                        },
                        "start": 1318,
                        "end": 1341
                      },
                      "start": 1310,
                      "end": 1341
                    },
                    "start": 1308,
                    "end": 1341
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1298,
                  "end": 1342
                }
              ],
              "start": 1238,
              "end": 1345
            },
            "declare": false,
            "start": 1212,
            "end": 1345
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GenericGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1359,
                        "end": 1371
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "File",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1372,
                              "end": 1376
                            },
                            "typeArguments": null,
                            "start": 1372,
                            "end": 1376
                          }
                        ],
                        "start": 1371,
                        "end": 1377
                      },
                      "start": 1359,
                      "end": 1377
                    },
                    "start": 1357,
                    "end": 1377
                  },
                  "start": 1352,
                  "end": 1377
                },
                "init": null,
                "definite": false,
                "start": 1352,
                "end": 1377
              }
            ],
            "declare": false,
            "start": 1348,
            "end": 1378
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "guard",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1389
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isLeader",
                "optional": false,
                "typeAnnotation": null,
                "start": 1390,
                "end": 1398
              },
              "optional": false,
              "computed": false,
              "start": 1384,
              "end": 1398
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
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1409
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lead",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1414
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1404,
                      "end": 1414
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1404,
                    "end": 1416
                  },
                  "directive": null,
                  "start": 1404,
                  "end": 1417
                }
              ],
              "start": 1400,
              "end": 1420
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1436
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1447
                },
                "optional": false,
                "computed": false,
                "start": 1431,
                "end": 1447
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
                          "name": "guard",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1453,
                          "end": 1458
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "follow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1459,
                          "end": 1465
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1453,
                        "end": 1465
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1453,
                      "end": 1467
                    },
                    "directive": null,
                    "start": 1453,
                    "end": 1468
                  }
                ],
                "start": 1449,
                "end": 1471
              },
              "alternate": null,
              "start": 1427,
              "end": 1471
            },
            "start": 1380,
            "end": 1471
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SpecificGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1497
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isMoreSpecific",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1502,
                    "end": 1516
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1518,
                        "end": 1522
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MoreSpecificGuard",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1526,
                            "end": 1543
                          },
                          "typeArguments": null,
                          "start": 1526,
                          "end": 1543
                        },
                        "start": 1526,
                        "end": 1543
                      },
                      "start": 1518,
                      "end": 1543
                    },
                    "start": 1516,
                    "end": 1543
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1502,
                  "end": 1544
                }
              ],
              "start": 1498,
              "end": 1547
            },
            "declare": false,
            "start": 1474,
            "end": 1547
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MoreSpecificGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1577
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SpecificGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1586,
                  "end": 1599
                },
                "typeArguments": null,
                "start": 1586,
                "end": 1599
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "do",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1604,
                    "end": 1606
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1610,
                      "end": 1614
                    },
                    "start": 1608,
                    "end": 1614
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1604,
                  "end": 1615
                }
              ],
              "start": 1600,
              "end": 1618
            },
            "declare": false,
            "start": 1550,
            "end": 1618
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "general",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SpecificGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1634,
                        "end": 1647
                      },
                      "typeArguments": null,
                      "start": 1634,
                      "end": 1647
                    },
                    "start": 1632,
                    "end": 1647
                  },
                  "start": 1625,
                  "end": 1647
                },
                "init": null,
                "definite": false,
                "start": 1625,
                "end": 1647
              }
            ],
            "declare": false,
            "start": 1621,
            "end": 1648
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "general",
                "optional": false,
                "typeAnnotation": null,
                "start": 1654,
                "end": 1661
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isMoreSpecific",
                "optional": false,
                "typeAnnotation": null,
                "start": 1662,
                "end": 1676
              },
              "optional": false,
              "computed": false,
              "start": 1654,
              "end": 1676
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
                        "name": "general",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1682,
                        "end": 1689
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "do",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1690,
                        "end": 1692
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1682,
                      "end": 1692
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1682,
                    "end": 1694
                  },
                  "directive": null,
                  "start": 1682,
                  "end": 1695
                }
              ],
              "start": 1678,
              "end": 1698
            },
            "alternate": null,
            "start": 1650,
            "end": 1698
          }
        ],
        "start": 97,
        "end": 1700
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 82,
      "end": 1700
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 1700
}
```
