__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 82,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 100,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 113,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 146,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 149,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 208,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 213,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 277,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 297,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 300,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 315,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 322,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 327,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 338,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 355,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 368,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Networked",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 410,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 439,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 446,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 452,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 457,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 465,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 486,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 512,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 519,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 528,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 557,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 564,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 570,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 588,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 609,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 619,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 643,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 650,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Networked",
    "start": 660,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 703,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "String",
    "value": "\"foo/bar.txt\"",
    "start": 731,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 760,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 787,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 830,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 843,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 852,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 856,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 861,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 878,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 889,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 893,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 898,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 916,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 921,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 930,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 935,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 952,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 957,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 966,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 988,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 1011,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 1016,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1038,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1050,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "GenericLeadGuard",
    "start": 1060,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1080,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1088,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1128,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "GenericFollowerGuard",
    "start": 1138,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1170,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 1190,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1212,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1222,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 1242,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1255,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "GenericLeadGuard",
    "start": 1274,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1298,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1310,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "GenericFollowerGuard",
    "start": 1318,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1352,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1359,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1380,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1384,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1390,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1404,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1422,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1427,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1431,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1437,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1453,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1474,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "SpecificGuard",
    "start": 1484,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "isMoreSpecific",
    "start": 1502,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1518,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "MoreSpecificGuard",
    "start": 1526,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1550,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "MoreSpecificGuard",
    "start": 1560,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1578,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "SpecificGuard",
    "start": 1586,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "do",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1610,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "general",
    "start": 1625,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "SpecificGuard",
    "start": 1634,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1650,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "general",
    "start": 1654,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "isMoreSpecific",
    "start": 1662,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "general",
    "start": 1682,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "do",
    "start": 1690,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700
  }
]
```
