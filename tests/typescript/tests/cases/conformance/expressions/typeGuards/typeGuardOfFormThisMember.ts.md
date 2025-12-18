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
    "end": 91,
    "range": [
      82,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 92,
    "end": 96,
    "range": [
      92,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112,
    "range": [
      107,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 113,
    "end": 129,
    "range": [
      113,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 134,
    "end": 139,
    "range": [
      134,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 141,
    "end": 145,
    "range": [
      141,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 146,
    "end": 148,
    "range": [
      146,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 149,
    "end": 165,
    "range": [
      149,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 173,
    "end": 179,
    "range": [
      173,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187,
    "range": [
      183,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 188,
    "end": 190,
    "range": [
      188,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 191,
    "end": 195,
    "range": [
      191,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 213,
    "end": 223,
    "range": [
      213,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 224,
    "end": 228,
    "range": [
      224,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 277,
    "end": 288,
    "range": [
      277,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 292,
    "end": 296,
    "range": [
      292,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 300,
    "end": 309,
    "range": [
      300,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 322,
    "end": 326,
    "range": [
      322,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 327,
    "end": 337,
    "range": [
      327,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 338,
    "end": 347,
    "range": [
      338,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 355,
    "end": 366,
    "range": [
      355,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 368,
    "end": 372,
    "range": [
      368,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 373,
    "end": 375,
    "range": [
      373,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "Networked",
    "start": 377,
    "end": 386,
    "range": [
      377,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 389,
    "end": 393,
    "range": [
      389,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 398,
    "end": 409,
    "range": [
      398,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 417,
    "end": 421,
    "range": [
      417,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 423,
    "end": 429,
    "range": [
      423,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 439,
    "end": 445,
    "range": [
      439,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 446,
    "end": 451,
    "range": [
      446,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 452,
    "end": 456,
    "range": [
      452,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 457,
    "end": 464,
    "range": [
      457,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 465,
    "end": 481,
    "range": [
      465,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 486,
    "end": 497,
    "range": [
      486,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 498,
    "end": 502,
    "range": [
      498,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510,
    "range": [
      504,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 512,
    "end": 518,
    "range": [
      512,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 519,
    "end": 526,
    "range": [
      519,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 538,
    "end": 543,
    "range": [
      538,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 564,
    "end": 569,
    "range": [
      564,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "Directory",
    "start": 570,
    "end": 579,
    "range": [
      570,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587,
    "range": [
      580,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 588,
    "end": 604,
    "range": [
      588,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 609,
    "end": 617,
    "range": [
      609,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 619,
    "end": 635,
    "range": [
      619,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 643,
    "end": 649,
    "range": [
      643,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 650,
    "end": 659,
    "range": [
      650,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "Networked",
    "start": 660,
    "end": 669,
    "range": [
      660,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 674,
    "end": 678,
    "range": [
      674,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 680,
    "end": 686,
    "range": [
      680,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 693,
    "end": 696,
    "range": [
      693,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 697,
    "end": 701,
    "range": [
      697,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "FileSystemObject",
    "start": 703,
    "end": 719,
    "range": [
      703,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 722,
    "end": 725,
    "range": [
      722,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 726,
    "end": 730,
    "range": [
      726,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "String",
    "value": "\"foo/bar.txt\"",
    "start": 731,
    "end": 744,
    "range": [
      731,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 746,
    "end": 751,
    "range": [
      746,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 755,
    "end": 759,
    "range": [
      755,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 760,
    "end": 771,
    "range": [
      760,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 782,
    "end": 786,
    "range": [
      782,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "isFSO",
    "start": 787,
    "end": 792,
    "range": [
      787,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 795,
    "end": 799,
    "range": [
      795,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 800,
    "end": 806,
    "range": [
      800,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 809,
    "end": 813,
    "range": [
      809,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 814,
    "end": 820,
    "range": [
      814,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 823,
    "end": 827,
    "range": [
      823,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 830,
    "end": 833,
    "range": [
      830,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 838,
    "end": 842,
    "range": [
      838,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 843,
    "end": 849,
    "range": [
      843,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 852,
    "end": 854,
    "range": [
      852,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 856,
    "end": 860,
    "range": [
      856,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "isFile",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 873,
    "end": 877,
    "range": [
      873,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 878,
    "end": 885,
    "range": [
      878,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 889,
    "end": 891,
    "range": [
      889,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 893,
    "end": 897,
    "range": [
      893,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 898,
    "end": 909,
    "range": [
      898,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 916,
    "end": 920,
    "range": [
      916,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 921,
    "end": 925,
    "range": [
      921,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 930,
    "end": 934,
    "range": [
      930,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 935,
    "end": 942,
    "range": [
      935,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 952,
    "end": 956,
    "range": [
      952,
      956
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 957,
    "end": 959,
    "range": [
      957,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 961,
    "end": 965,
    "range": [
      961,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "isDirectory",
    "start": 966,
    "end": 977,
    "range": [
      966,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 983,
    "end": 987,
    "range": [
      983,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 988,
    "end": 996,
    "range": [
      988,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1002,
    "end": 1006,
    "range": [
      1002,
      1006
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1007,
    "end": 1009,
    "range": [
      1007,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 1011,
    "end": 1015,
    "range": [
      1011,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "isNetworked",
    "start": 1016,
    "end": 1027,
    "range": [
      1016,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 1033,
    "end": 1037,
    "range": [
      1033,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1038,
    "end": 1042,
    "range": [
      1038,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1050,
    "end": 1059,
    "range": [
      1050,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericLeadGuard",
    "start": 1060,
    "end": 1076,
    "range": [
      1060,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1080,
    "end": 1087,
    "range": [
      1080,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1088,
    "end": 1100,
    "range": [
      1088,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 1108,
    "end": 1112,
    "range": [
      1108,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1116,
    "end": 1120,
    "range": [
      1116,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1128,
    "end": 1137,
    "range": [
      1128,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericFollowerGuard",
    "start": 1138,
    "end": 1158,
    "range": [
      1138,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1162,
    "end": 1169,
    "range": [
      1162,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1170,
    "end": 1182,
    "range": [
      1170,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 1190,
    "end": 1196,
    "range": [
      1190,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1200,
    "end": 1204,
    "range": [
      1200,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1212,
    "end": 1221,
    "range": [
      1212,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1222,
    "end": 1234,
    "range": [
      1222,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 1242,
    "end": 1248,
    "range": [
      1242,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1255,
    "end": 1263,
    "range": [
      1255,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1265,
    "end": 1269,
    "range": [
      1265,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1270,
    "end": 1272,
    "range": [
      1270,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericLeadGuard",
    "start": 1274,
    "end": 1290,
    "range": [
      1274,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1298,
    "end": 1308,
    "range": [
      1298,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1310,
    "end": 1314,
    "range": [
      1310,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1315,
    "end": 1317,
    "range": [
      1315,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericFollowerGuard",
    "start": 1318,
    "end": 1338,
    "range": [
      1318,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1348,
    "end": 1351,
    "range": [
      1348,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1352,
    "end": 1357,
    "range": [
      1352,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "GenericGuard",
    "start": 1359,
    "end": 1371,
    "range": [
      1359,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "File",
    "start": 1372,
    "end": 1376,
    "range": [
      1372,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1380,
    "end": 1382,
    "range": [
      1380,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1384,
    "end": 1389,
    "range": [
      1384,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 1390,
    "end": 1398,
    "range": [
      1390,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1404,
    "end": 1409,
    "range": [
      1404,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 1410,
    "end": 1414,
    "range": [
      1410,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1422,
    "end": 1426,
    "range": [
      1422,
      1426
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1427,
    "end": 1429,
    "range": [
      1427,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1431,
    "end": 1436,
    "range": [
      1431,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 1437,
    "end": 1447,
    "range": [
      1437,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 1453,
    "end": 1458,
    "range": [
      1453,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 1459,
    "end": 1465,
    "range": [
      1459,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1474,
    "end": 1483,
    "range": [
      1474,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "SpecificGuard",
    "start": 1484,
    "end": 1497,
    "range": [
      1484,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "isMoreSpecific",
    "start": 1502,
    "end": 1516,
    "range": [
      1502,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1518,
    "end": 1522,
    "range": [
      1518,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1523,
    "end": 1525,
    "range": [
      1523,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "MoreSpecificGuard",
    "start": 1526,
    "end": 1543,
    "range": [
      1526,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1550,
    "end": 1559,
    "range": [
      1550,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "MoreSpecificGuard",
    "start": 1560,
    "end": 1577,
    "range": [
      1560,
      1577
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1578,
    "end": 1585,
    "range": [
      1578,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "SpecificGuard",
    "start": 1586,
    "end": 1599,
    "range": [
      1586,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "do",
    "start": 1604,
    "end": 1606,
    "range": [
      1604,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1610,
    "end": 1614,
    "range": [
      1610,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1621,
    "end": 1624,
    "range": [
      1621,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "general",
    "start": 1625,
    "end": 1632,
    "range": [
      1625,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "SpecificGuard",
    "start": 1634,
    "end": 1647,
    "range": [
      1634,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1650,
    "end": 1652,
    "range": [
      1650,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "general",
    "start": 1654,
    "end": 1661,
    "range": [
      1654,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "isMoreSpecific",
    "start": 1662,
    "end": 1676,
    "range": [
      1662,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Identifier",
    "value": "general",
    "start": 1682,
    "end": 1689,
    "range": [
      1682,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "do",
    "start": 1690,
    "end": 1692,
    "range": [
      1690,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  }
]
```
