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
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 847,
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
                      "optional": false
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 165,
                              "decorators": [],
                              "name": "FileSystemObject",
                              "optional": false
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
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 179,
                      "decorators": [],
                      "name": "isFile",
                      "optional": false
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
                                "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 191,
                                "end": 195,
                                "decorators": [],
                                "name": "File",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 236,
                    "end": 270,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 246,
                      "decorators": [],
                      "name": "isFile",
                      "optional": false
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
                          "optional": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 273,
                    "end": 352,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 288,
                      "decorators": [],
                      "name": "isDirectory",
                      "optional": false
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
                                "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 300,
                                "end": 309,
                                "decorators": [],
                                "name": "Directory",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 355,
                    "end": 395,
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
                      "optional": false
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 377,
                                  "end": 386,
                                  "decorators": [],
                                  "name": "Networked",
                                  "optional": false
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
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 409,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
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
                      ]
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
                "optional": false
              },
              "implements": [],
              "superClass": null
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
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 497,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
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
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 538,
                                "end": 543
                              },
                              "optional": false
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
                      ]
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
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 465,
                "end": 481,
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false
              }
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
                      "optional": false
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 619,
                            "end": 635,
                            "decorators": [],
                            "name": "FileSystemObject",
                            "optional": false
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
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 588,
                "end": 604,
                "decorators": [],
                "name": "FileSystemObject",
                "optional": false
              }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 678,
                      "decorators": [],
                      "name": "host",
                      "optional": false
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
                "optional": false
              }
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 703,
                        "end": 719,
                        "decorators": [],
                        "name": "FileSystemObject",
                        "optional": false
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
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 759,
                  "decorators": [],
                  "name": "file",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 771,
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 774,
                "end": 785,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 778,
                  "decorators": [],
                  "name": "file",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 785,
                  "decorators": [],
                  "name": "isFile",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 792,
                  "decorators": [],
                  "name": "file",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 798,
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 801,
                "end": 817,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 801,
                  "end": 805,
                  "decorators": [],
                  "name": "file",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 817,
                  "decorators": [],
                  "name": "isNetworked",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 820,
                  "end": 824,
                  "decorators": [],
                  "name": "file",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 831,
                  "decorators": [],
                  "name": "isFile",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 834,
                "end": 844,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 838,
                  "decorators": [],
                  "name": "file",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 844,
                  "decorators": [],
                  "name": "isFSO",
                  "optional": false
                }
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
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
