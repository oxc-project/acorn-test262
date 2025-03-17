__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 847,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 847,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 96,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 847,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 100,
            "end": 436,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 107,
              "end": 436,
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 129,
                "name": "FileSystemObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 130,
                "end": 436,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 134,
                    "end": 166,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 139,
                      "name": "isFSO",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 141,
                        "end": 165,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 141,
                          "end": 145
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 149,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 149,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 165,
                              "name": "FileSystemObject",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 169,
                    "end": 233,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 179,
                      "name": "isFile",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 179,
                      "end": 233,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 196,
                        "end": 233,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 201,
                            "end": 229,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 208,
                              "end": 228,
                              "left": {
                                "type": "ThisExpression",
                                "start": 208,
                                "end": 212
                              },
                              "operator": "instanceof",
                              "right": {
                                "type": "Identifier",
                                "start": 224,
                                "end": 228,
                                "name": "File",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 181,
                        "end": 195,
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "start": 183,
                          "end": 195,
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 183,
                            "end": 187
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 191,
                            "end": 195,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 191,
                              "end": 195,
                              "typeName": {
                                "type": "Identifier",
                                "start": 191,
                                "end": 195,
                                "name": "File",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 236,
                    "end": 270,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 246,
                      "name": "isFile",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 246,
                      "end": 270,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 252,
                          "name": "param",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 254,
                        "end": 270,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 273,
                    "end": 352,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 288,
                      "name": "isDirectory",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 288,
                      "end": 352,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 310,
                        "end": 352,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 315,
                            "end": 348,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 322,
                              "end": 347,
                              "left": {
                                "type": "ThisExpression",
                                "start": 322,
                                "end": 326
                              },
                              "operator": "instanceof",
                              "right": {
                                "type": "Identifier",
                                "start": 338,
                                "end": 347,
                                "name": "Directory",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 290,
                        "end": 309,
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "start": 292,
                          "end": 309,
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 292,
                            "end": 296
                          },
                          "asserts": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 300,
                            "end": 309,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 300,
                              "end": 309,
                              "typeName": {
                                "type": "Identifier",
                                "start": 300,
                                "end": 309,
                                "name": "Directory",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 355,
                    "end": 395,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 366,
                      "name": "isNetworked",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 366,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 368,
                        "end": 394,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 368,
                          "end": 372
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 377,
                          "end": 393,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 377,
                            "end": 393,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 377,
                                "end": 386,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 377,
                                  "end": 386,
                                  "name": "Networked",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSThisType",
                                "start": 389,
                                "end": 393
                              }
                            ]
                          }
                        }
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 398,
                    "end": 433,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 409,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 409,
                      "end": 433,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 410,
                          "end": 429,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 429,
                            "name": "path",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 421,
                              "end": 429,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 423,
                                "end": 429
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 431,
                        "end": 433,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 439,
            "end": 555,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 446,
              "end": 555,
              "id": {
                "type": "Identifier",
                "start": 452,
                "end": 456,
                "name": "File",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 465,
                "end": 481,
                "name": "FileSystemObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 482,
                "end": 555,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 486,
                    "end": 552,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 497,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 497,
                      "end": 552,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 498,
                          "end": 510,
                          "name": "path",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 502,
                            "end": 510,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 504,
                              "end": 510
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 512,
                          "end": 534,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 519,
                            "end": 534,
                            "name": "content",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 526,
                              "end": 534,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 528,
                                "end": 534
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 536,
                        "end": 552,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 538,
                            "end": 550,
                            "expression": {
                              "type": "CallExpression",
                              "start": 538,
                              "end": 549,
                              "callee": {
                                "type": "Super",
                                "start": 538,
                                "end": 543
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 544,
                                  "end": 548,
                                  "name": "path",
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
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 557,
            "end": 641,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 564,
              "end": 641,
              "id": {
                "type": "Identifier",
                "start": 570,
                "end": 579,
                "name": "Directory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 588,
                "end": 604,
                "name": "FileSystemObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 605,
                "end": 641,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 609,
                    "end": 638,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 617,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 617,
                      "end": 637,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 619,
                        "end": 637,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 619,
                          "end": 635,
                          "typeName": {
                            "type": "Identifier",
                            "start": 619,
                            "end": 635,
                            "name": "FileSystemObject",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 643,
            "end": 690,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 650,
              "end": 690,
              "id": {
                "type": "Identifier",
                "start": 660,
                "end": 669,
                "name": "Networked",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 670,
                "end": 690,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 674,
                    "end": 687,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 678,
                      "name": "host",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 678,
                      "end": 686,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "VariableDeclaration",
            "start": 693,
            "end": 753,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 697,
                "end": 752,
                "id": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 719,
                  "name": "file",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 701,
                    "end": 719,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 703,
                      "end": 719,
                      "typeName": {
                        "type": "Identifier",
                        "start": 703,
                        "end": 719,
                        "name": "FileSystemObject",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 722,
                  "end": 752,
                  "callee": {
                    "type": "Identifier",
                    "start": 726,
                    "end": 730,
                    "name": "File",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 731,
                      "end": 744,
                      "value": "foo/bar.txt",
                      "raw": "\"foo/bar.txt\""
                    },
                    {
                      "type": "Literal",
                      "start": 746,
                      "end": 751,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 755,
            "end": 786,
            "expression": {
              "type": "AssignmentExpression",
              "start": 755,
              "end": 785,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 755,
                "end": 771,
                "object": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 759,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 771,
                  "name": "isNetworked",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 774,
                "end": 785,
                "object": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 778,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 785,
                  "name": "isFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 788,
            "end": 818,
            "expression": {
              "type": "AssignmentExpression",
              "start": 788,
              "end": 817,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 788,
                "end": 798,
                "object": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 792,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 798,
                  "name": "isFSO",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 801,
                "end": 817,
                "object": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 805,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 817,
                  "name": "isNetworked",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 820,
            "end": 845,
            "expression": {
              "type": "AssignmentExpression",
              "start": 820,
              "end": 844,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 820,
                "end": 831,
                "object": {
                  "type": "Identifier",
                  "start": 820,
                  "end": 824,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 831,
                  "name": "isFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 834,
                "end": 844,
                "object": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 838,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 844,
                  "name": "isFSO",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
