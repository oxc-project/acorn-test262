__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 1701,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 82,
      "end": 1700,
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 1700,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 100,
            "end": 436,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 107,
              "end": 436,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 130,
                "end": 436,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 134,
                    "end": 166,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 139,
                      "decorators": [],
                      "name": "isFSO",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 141,
                        "end": 165,
                        "asserts": false,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 141,
                          "end": 145
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 149,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 149,
                            "end": 165,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 165,
                              "decorators": [],
                              "name": "FileSystemObject",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 169,
                    "end": 233,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 179,
                      "decorators": [],
                      "name": "isFile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 179,
                      "end": 233,
                      "async": false,
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
                              "operator": "instanceof",
                              "left": {
                                "type": "ThisExpression",
                                "start": 208,
                                "end": 212
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 224,
                                "end": 228,
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 181,
                        "end": 195,
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "start": 183,
                          "end": 195,
                          "asserts": false,
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 183,
                            "end": 187
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 191,
                            "end": 195,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 191,
                              "end": 195,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 191,
                                "end": 195,
                                "decorators": [],
                                "name": "File",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 236,
                    "end": 270,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 246,
                      "decorators": [],
                      "name": "isFile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 246,
                      "end": 270,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 254,
                        "end": 270,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 247,
                          "end": 252,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 273,
                    "end": 352,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 288,
                      "decorators": [],
                      "name": "isDirectory",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 288,
                      "end": 352,
                      "async": false,
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
                              "operator": "instanceof",
                              "left": {
                                "type": "ThisExpression",
                                "start": 322,
                                "end": 326
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 338,
                                "end": 347,
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 290,
                        "end": 309,
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "start": 292,
                          "end": 309,
                          "asserts": false,
                          "parameterName": {
                            "type": "TSThisType",
                            "start": 292,
                            "end": 296
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 300,
                            "end": 309,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 300,
                              "end": 309,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 300,
                                "end": 309,
                                "decorators": [],
                                "name": "Directory",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 355,
                    "end": 395,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 366,
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 366,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 368,
                        "end": 394,
                        "asserts": false,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 368,
                          "end": 372
                        },
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
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 377,
                                  "end": 386,
                                  "decorators": [],
                                  "name": "Networked",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 398,
                    "end": 433,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 409,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 409,
                      "end": 433,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 431,
                        "end": 433,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                            "decorators": [],
                            "name": "path",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 421,
                              "end": 429,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 423,
                                "end": 429
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 129,
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 439,
            "end": 555,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 446,
              "end": 555,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 482,
                "end": 555,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 486,
                    "end": 552,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 497,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 497,
                      "end": 552,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 536,
                        "end": 552,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 538,
                            "end": 550,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 538,
                              "end": 549,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 544,
                                  "end": 548,
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 538,
                                "end": 543
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 498,
                          "end": 510,
                          "decorators": [],
                          "name": "path",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 502,
                            "end": 510,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 504,
                              "end": 510
                            }
                          }
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
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 526,
                              "end": 534,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 528,
                                "end": 534
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 452,
                "end": 456,
                "decorators": [],
                "name": "File",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 465,
                "end": 481,
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 557,
            "end": 641,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 564,
              "end": 641,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 605,
                "end": 641,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 609,
                    "end": 638,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 617,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 619,
                            "end": 635,
                            "decorators": [],
                            "name": "FileSystemObject",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 570,
                "end": 579,
                "decorators": [],
                "name": "Directory",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 588,
                "end": 604,
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 643,
            "end": 690,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 650,
              "end": 690,
              "body": {
                "type": "TSInterfaceBody",
                "start": 670,
                "end": 690,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 674,
                    "end": 687,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 678,
                      "decorators": [],
                      "name": "host",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 678,
                      "end": 686,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 680,
                        "end": 686
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 660,
                "end": 669,
                "decorators": [],
                "name": "Networked",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 719,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 701,
                    "end": 719,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 703,
                      "end": 719,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 703,
                        "end": 719,
                        "decorators": [],
                        "name": "FileSystemObject",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 722,
                  "end": 752,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 731,
                      "end": 744,
                      "raw": "\"foo/bar.txt\"",
                      "value": "foo/bar.txt"
                    },
                    {
                      "type": "Literal",
                      "start": 746,
                      "end": 751,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 726,
                    "end": 730,
                    "decorators": [],
                    "name": "File",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 755,
            "end": 780,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 755,
              "end": 779,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 755,
                "end": 771,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 759,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 771,
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 774,
                "end": 779,
                "raw": "false",
                "value": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 782,
            "end": 807,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 782,
              "end": 806,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 782,
                "end": 792,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 786,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 792,
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 795,
                "end": 806,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 799,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 806,
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 809,
            "end": 828,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 809,
              "end": 827,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 809,
                "end": 820,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 813,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 820,
                  "decorators": [],
                  "name": "isFile",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 823,
                "end": 827,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 830,
            "end": 850,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 834,
                "end": 849,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 838,
                  "end": 849,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 842,
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 849,
                    "decorators": [],
                    "name": "isFile",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 852,
            "end": 1046,
            "alternate": {
              "type": "IfStatement",
              "start": 957,
              "end": 1046,
              "alternate": {
                "type": "IfStatement",
                "start": 1007,
                "end": 1046,
                "alternate": null,
                "consequent": {
                  "type": "BlockStatement",
                  "start": 1029,
                  "end": 1046,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1033,
                      "end": 1043,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 1033,
                        "end": 1042,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1033,
                          "end": 1037,
                          "decorators": [],
                          "name": "file",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1038,
                          "end": 1042,
                          "decorators": [],
                          "name": "host",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "test": {
                  "type": "MemberExpression",
                  "start": 1011,
                  "end": 1027,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1011,
                    "end": 1015,
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1027,
                    "decorators": [],
                    "name": "isNetworked",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 979,
                "end": 1000,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 983,
                    "end": 997,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 983,
                      "end": 996,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 987,
                        "decorators": [],
                        "name": "file",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 988,
                        "end": 996,
                        "decorators": [],
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "MemberExpression",
                "start": 961,
                "end": 977,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 965,
                  "decorators": [],
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 966,
                  "end": 977,
                  "decorators": [],
                  "name": "isDirectory",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 869,
              "end": 950,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 873,
                  "end": 886,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 873,
                    "end": 885,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 877,
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 885,
                      "decorators": [],
                      "name": "content",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 889,
                  "end": 947,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 911,
                    "end": 947,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 916,
                        "end": 926,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 916,
                          "end": 925,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 916,
                            "end": 920,
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 921,
                            "end": 925,
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 930,
                        "end": 943,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 930,
                          "end": 942,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 930,
                            "end": 934,
                            "decorators": [],
                            "name": "file",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 942,
                            "decorators": [],
                            "name": "content",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "MemberExpression",
                    "start": 893,
                    "end": 909,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 893,
                      "end": 897,
                      "decorators": [],
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 898,
                      "end": 909,
                      "decorators": [],
                      "name": "isNetworked",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 856,
              "end": 867,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 856,
                "end": 860,
                "decorators": [],
                "name": "file",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
                "decorators": [],
                "name": "isFile",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1050,
            "end": 1124,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1104,
              "end": 1124,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1108,
                  "end": 1121,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1112,
                    "decorators": [],
                    "name": "lead",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1114,
                    "end": 1120,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1116,
                      "end": 1120
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1088,
                "end": 1103,
                "expression": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1100,
                  "decorators": [],
                  "name": "GenericGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1100,
                  "end": 1103,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1101,
                      "end": 1102,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1102,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1060,
              "end": 1076,
              "decorators": [],
              "name": "GenericLeadGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1076,
              "end": 1079,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1077,
                  "end": 1078,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1078,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1128,
            "end": 1208,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1186,
              "end": 1208,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1190,
                  "end": 1205,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1190,
                    "end": 1196,
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1198,
                    "end": 1204,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1200,
                      "end": 1204
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1170,
                "end": 1185,
                "expression": {
                  "type": "Identifier",
                  "start": 1170,
                  "end": 1182,
                  "decorators": [],
                  "name": "GenericGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1182,
                  "end": 1185,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1183,
                      "end": 1184,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1183,
                        "end": 1184,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1138,
              "end": 1158,
              "decorators": [],
              "name": "GenericFollowerGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1158,
              "end": 1161,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1159,
                  "end": 1160,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1160,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1212,
            "end": 1345,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1238,
              "end": 1345,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1242,
                  "end": 1252,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1242,
                    "end": 1248,
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1248,
                    "end": 1251,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1250,
                      "end": 1251,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1250,
                        "end": 1251,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1255,
                  "end": 1295,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1255,
                    "end": 1263,
                    "decorators": [],
                    "name": "isLeader",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1263,
                    "end": 1294,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 1265,
                      "end": 1294,
                      "asserts": false,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1265,
                        "end": 1269
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1274,
                        "end": 1293,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1274,
                          "end": 1293,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1290,
                            "end": 1293,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1291,
                                "end": 1292,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1291,
                                  "end": 1292,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1274,
                            "end": 1290,
                            "decorators": [],
                            "name": "GenericLeadGuard",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1298,
                  "end": 1342,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1298,
                    "end": 1308,
                    "decorators": [],
                    "name": "isFollower",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1308,
                    "end": 1341,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 1310,
                      "end": 1341,
                      "asserts": false,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1310,
                        "end": 1314
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1318,
                        "end": 1341,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1318,
                          "end": 1341,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1338,
                            "end": 1341,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1339,
                                "end": 1340,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1339,
                                  "end": 1340,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1338,
                            "decorators": [],
                            "name": "GenericFollowerGuard",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1222,
              "end": 1234,
              "decorators": [],
              "name": "GenericGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1234,
              "end": 1237,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1235,
                  "end": 1236,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1235,
                    "end": 1236,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1348,
            "end": 1378,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1352,
                "end": 1377,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1377,
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1357,
                    "end": 1377,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1359,
                      "end": 1377,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1371,
                        "end": 1377,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1372,
                            "end": 1376,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1372,
                              "end": 1376,
                              "decorators": [],
                              "name": "File",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1359,
                        "end": 1371,
                        "decorators": [],
                        "name": "GenericGuard",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 1380,
            "end": 1471,
            "alternate": {
              "type": "IfStatement",
              "start": 1427,
              "end": 1471,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1449,
                "end": 1471,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1453,
                    "end": 1468,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1453,
                      "end": 1467,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1453,
                        "end": 1465,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1453,
                          "end": 1458,
                          "decorators": [],
                          "name": "guard",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1459,
                          "end": 1465,
                          "decorators": [],
                          "name": "follow",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "MemberExpression",
                "start": 1431,
                "end": 1447,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1436,
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1447,
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1400,
              "end": 1420,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1404,
                  "end": 1417,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1404,
                    "end": 1416,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1404,
                      "end": 1414,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1409,
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1414,
                        "decorators": [],
                        "name": "lead",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 1384,
              "end": 1398,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1384,
                "end": 1389,
                "decorators": [],
                "name": "guard",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1390,
                "end": 1398,
                "decorators": [],
                "name": "isLeader",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1474,
            "end": 1547,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1498,
              "end": 1547,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1502,
                  "end": 1544,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1502,
                    "end": 1516,
                    "decorators": [],
                    "name": "isMoreSpecific",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1516,
                    "end": 1543,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 1518,
                      "end": 1543,
                      "asserts": false,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1518,
                        "end": 1522
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1526,
                        "end": 1543,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1526,
                          "end": 1543,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1526,
                            "end": 1543,
                            "decorators": [],
                            "name": "MoreSpecificGuard",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1484,
              "end": 1497,
              "decorators": [],
              "name": "SpecificGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1550,
            "end": 1618,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1600,
              "end": 1618,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1604,
                  "end": 1615,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1604,
                    "end": 1606,
                    "decorators": [],
                    "name": "do",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1608,
                    "end": 1614,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1610,
                      "end": 1614
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1586,
                "end": 1599,
                "expression": {
                  "type": "Identifier",
                  "start": 1586,
                  "end": 1599,
                  "decorators": [],
                  "name": "SpecificGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1560,
              "end": 1577,
              "decorators": [],
              "name": "MoreSpecificGuard",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1621,
            "end": 1648,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1625,
                "end": 1647,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1625,
                  "end": 1647,
                  "decorators": [],
                  "name": "general",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1632,
                    "end": 1647,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1634,
                      "end": 1647,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1634,
                        "end": 1647,
                        "decorators": [],
                        "name": "SpecificGuard",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 1650,
            "end": 1698,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1678,
              "end": 1698,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1682,
                  "end": 1695,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1682,
                    "end": 1694,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1682,
                      "end": 1692,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1682,
                        "end": 1689,
                        "decorators": [],
                        "name": "general",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1690,
                        "end": 1692,
                        "decorators": [],
                        "name": "do",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 1654,
              "end": 1676,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1654,
                "end": 1661,
                "decorators": [],
                "name": "general",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1662,
                "end": 1676,
                "decorators": [],
                "name": "isMoreSpecific",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 96,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
