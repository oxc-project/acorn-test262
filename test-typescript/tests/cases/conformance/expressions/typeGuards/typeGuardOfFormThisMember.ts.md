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
        "end": 1700,
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
            "end": 780,
            "expression": {
              "type": "AssignmentExpression",
              "start": 755,
              "end": 779,
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
                "type": "Literal",
                "start": 774,
                "end": 779,
                "value": false,
                "raw": "false"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 782,
            "end": 807,
            "expression": {
              "type": "AssignmentExpression",
              "start": 782,
              "end": 806,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 782,
                "end": 792,
                "object": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 786,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 792,
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
                "start": 795,
                "end": 806,
                "object": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 799,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 806,
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
            "start": 809,
            "end": 828,
            "expression": {
              "type": "AssignmentExpression",
              "start": 809,
              "end": 827,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 809,
                "end": 820,
                "object": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 813,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 820,
                  "name": "isFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 823,
                "end": 827,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 838,
                  "end": 849,
                  "object": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 842,
                    "name": "file",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 849,
                    "name": "isFile",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 852,
            "end": 1046,
            "test": {
              "type": "MemberExpression",
              "start": 856,
              "end": 867,
              "object": {
                "type": "Identifier",
                "start": 856,
                "end": 860,
                "name": "file",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
                "name": "isFile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 873,
                    "end": 885,
                    "object": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 877,
                      "name": "file",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 878,
                      "end": 885,
                      "name": "content",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 889,
                  "end": 947,
                  "test": {
                    "type": "MemberExpression",
                    "start": 893,
                    "end": 909,
                    "object": {
                      "type": "Identifier",
                      "start": 893,
                      "end": 897,
                      "name": "file",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 898,
                      "end": 909,
                      "name": "isNetworked",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 911,
                    "end": 947,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 916,
                        "end": 926,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 916,
                          "end": 925,
                          "object": {
                            "type": "Identifier",
                            "start": 916,
                            "end": 920,
                            "name": "file",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 921,
                            "end": 925,
                            "name": "host",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 930,
                        "end": 943,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 930,
                          "end": 942,
                          "object": {
                            "type": "Identifier",
                            "start": 930,
                            "end": 934,
                            "name": "file",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 942,
                            "name": "content",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 957,
              "end": 1046,
              "test": {
                "type": "MemberExpression",
                "start": 961,
                "end": 977,
                "object": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 965,
                  "name": "file",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 966,
                  "end": 977,
                  "name": "isDirectory",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "expression": {
                      "type": "MemberExpression",
                      "start": 983,
                      "end": 996,
                      "object": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 987,
                        "name": "file",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 988,
                        "end": 996,
                        "name": "children",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 1007,
                "end": 1046,
                "test": {
                  "type": "MemberExpression",
                  "start": 1011,
                  "end": 1027,
                  "object": {
                    "type": "Identifier",
                    "start": 1011,
                    "end": 1015,
                    "name": "file",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1027,
                    "name": "isNetworked",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 1029,
                  "end": 1046,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1033,
                      "end": 1043,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 1033,
                        "end": 1042,
                        "object": {
                          "type": "Identifier",
                          "start": 1033,
                          "end": 1037,
                          "name": "file",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1038,
                          "end": 1042,
                          "name": "host",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "alternate": null
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1050,
            "end": 1124,
            "id": {
              "type": "Identifier",
              "start": 1060,
              "end": 1076,
              "name": "GenericLeadGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1088,
                "end": 1103,
                "expression": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1100,
                  "name": "GenericGuard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1102,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1076,
              "end": 1079,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1077,
                  "end": 1078,
                  "name": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1078,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 1104,
              "end": 1124,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1108,
                  "end": 1121,
                  "key": {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1112,
                    "name": "lead",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1128,
            "end": 1208,
            "id": {
              "type": "Identifier",
              "start": 1138,
              "end": 1158,
              "name": "GenericFollowerGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1170,
                "end": 1185,
                "expression": {
                  "type": "Identifier",
                  "start": 1170,
                  "end": 1182,
                  "name": "GenericGuard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 1183,
                        "end": 1184,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1158,
              "end": 1161,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1159,
                  "end": 1160,
                  "name": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1160,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 1186,
              "end": 1208,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1190,
                  "end": 1205,
                  "key": {
                    "type": "Identifier",
                    "start": 1190,
                    "end": 1196,
                    "name": "follow",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1212,
            "end": 1345,
            "id": {
              "type": "Identifier",
              "start": 1222,
              "end": 1234,
              "name": "GenericGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1234,
              "end": 1237,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1235,
                  "end": 1236,
                  "name": {
                    "type": "Identifier",
                    "start": 1235,
                    "end": 1236,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 1238,
              "end": 1345,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1242,
                  "end": 1252,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1242,
                    "end": 1248,
                    "name": "target",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1248,
                    "end": 1251,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1250,
                      "end": 1251,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1250,
                        "end": 1251,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1255,
                  "end": 1295,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1255,
                    "end": 1263,
                    "name": "isLeader",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1263,
                    "end": 1294,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 1265,
                      "end": 1294,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1265,
                        "end": 1269
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1274,
                        "end": 1293,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1274,
                          "end": 1293,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1274,
                            "end": 1290,
                            "name": "GenericLeadGuard",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1290,
                            "end": 1293,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1291,
                                "end": 1292,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1291,
                                  "end": 1292,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1298,
                  "end": 1342,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1298,
                    "end": 1308,
                    "name": "isFollower",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1308,
                    "end": 1341,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 1310,
                      "end": 1341,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1310,
                        "end": 1314
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1318,
                        "end": 1341,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1318,
                          "end": 1341,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1338,
                            "name": "GenericFollowerGuard",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1338,
                            "end": 1341,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1339,
                                "end": 1340,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1339,
                                  "end": 1340,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1377,
                  "name": "guard",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1357,
                    "end": 1377,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1359,
                      "end": 1377,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1359,
                        "end": 1371,
                        "name": "GenericGuard",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1371,
                        "end": 1377,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1372,
                            "end": 1376,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1372,
                              "end": 1376,
                              "name": "File",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1380,
            "end": 1471,
            "test": {
              "type": "MemberExpression",
              "start": 1384,
              "end": 1398,
              "object": {
                "type": "Identifier",
                "start": 1384,
                "end": 1389,
                "name": "guard",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1390,
                "end": 1398,
                "name": "isLeader",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 1404,
                    "end": 1416,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1404,
                      "end": 1414,
                      "object": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1409,
                        "name": "guard",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1414,
                        "name": "lead",
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
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1427,
              "end": 1471,
              "test": {
                "type": "MemberExpression",
                "start": 1431,
                "end": 1447,
                "object": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1436,
                  "name": "guard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1447,
                  "name": "isFollower",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1449,
                "end": 1471,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1453,
                    "end": 1468,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1453,
                      "end": 1467,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1453,
                        "end": 1465,
                        "object": {
                          "type": "Identifier",
                          "start": 1453,
                          "end": 1458,
                          "name": "guard",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1459,
                          "end": 1465,
                          "name": "follow",
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
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1474,
            "end": 1547,
            "id": {
              "type": "Identifier",
              "start": 1484,
              "end": 1497,
              "name": "SpecificGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1498,
              "end": 1547,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1502,
                  "end": 1544,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1502,
                    "end": 1516,
                    "name": "isMoreSpecific",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1516,
                    "end": 1543,
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "start": 1518,
                      "end": 1543,
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 1518,
                        "end": 1522
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1526,
                        "end": 1543,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1526,
                          "end": 1543,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1526,
                            "end": 1543,
                            "name": "MoreSpecificGuard",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1550,
            "end": 1618,
            "id": {
              "type": "Identifier",
              "start": 1560,
              "end": 1577,
              "name": "MoreSpecificGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1586,
                "end": 1599,
                "expression": {
                  "type": "Identifier",
                  "start": 1586,
                  "end": 1599,
                  "name": "SpecificGuard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1600,
              "end": 1618,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1604,
                  "end": 1615,
                  "key": {
                    "type": "Identifier",
                    "start": 1604,
                    "end": 1606,
                    "name": "do",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1625,
                  "end": 1647,
                  "name": "general",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1632,
                    "end": 1647,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1634,
                      "end": 1647,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1634,
                        "end": 1647,
                        "name": "SpecificGuard",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1650,
            "end": 1698,
            "test": {
              "type": "MemberExpression",
              "start": 1654,
              "end": 1676,
              "object": {
                "type": "Identifier",
                "start": 1654,
                "end": 1661,
                "name": "general",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1662,
                "end": 1676,
                "name": "isMoreSpecific",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1678,
              "end": 1698,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1682,
                  "end": 1695,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1682,
                    "end": 1694,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1682,
                      "end": 1692,
                      "object": {
                        "type": "Identifier",
                        "start": 1682,
                        "end": 1689,
                        "name": "general",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1690,
                        "end": 1692,
                        "name": "do",
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
                  "directive": null
                }
              ]
            },
            "alternate": null
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
