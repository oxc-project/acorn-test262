__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4614,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 2644,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "WinJS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 2644,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 84,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 49,
                "name": "ValueCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 50,
                "end": 84,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 60,
                    "end": 78,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 71,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 66,
                          "end": 71,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 68,
                            "end": 71
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 74,
                        "end": 77
                      }
                    }
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
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 156,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 97,
              "end": 156,
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 120,
                "name": "EventCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 121,
                "end": 156,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 131,
                    "end": 150,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 132,
                        "end": 142,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 137,
                          "end": 142,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 139,
                            "end": 142
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 145,
                        "end": 149
                      }
                    }
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
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 227,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 169,
              "end": 227,
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 192,
                "name": "ErrorCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 193,
                "end": 227,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 203,
                    "end": 221,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 214,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 209,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 211,
                            "end": 214
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 217,
                        "end": 220
                      }
                    }
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
            "type": "ExportNamedDeclaration",
            "start": 233,
            "end": 304,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 240,
              "end": 304,
              "id": {
                "type": "Identifier",
                "start": 250,
                "end": 266,
                "name": "ProgressCallback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 267,
                "end": 304,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 277,
                    "end": 298,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 278,
                        "end": 291,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 286,
                          "end": 291,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 288,
                            "end": 291
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 294,
                        "end": 297
                      }
                    }
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
            "type": "ExportNamedDeclaration",
            "start": 310,
            "end": 1130,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 317,
              "end": 1130,
              "id": {
                "type": "Identifier",
                "start": 331,
                "end": 338,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 339,
                "end": 1130,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 349,
                    "end": 468,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 360,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 360,
                      "end": 468,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 361,
                          "end": 450,
                          "name": "init",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 365,
                            "end": 450,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 367,
                              "end": 450,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 368,
                                  "end": 391,
                                  "name": "complete",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 376,
                                    "end": 391,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 378,
                                      "end": 391,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 378,
                                        "end": 391,
                                        "name": "ValueCallback",
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
                                {
                                  "type": "Identifier",
                                  "start": 393,
                                  "end": 413,
                                  "name": "error",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 398,
                                    "end": 413,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 400,
                                      "end": 413,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 400,
                                        "end": 413,
                                        "name": "ErrorCallback",
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
                                {
                                  "type": "Identifier",
                                  "start": 415,
                                  "end": 441,
                                  "name": "progress",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 423,
                                    "end": 441,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 425,
                                      "end": 441,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 425,
                                        "end": 441,
                                        "name": "ProgressCallback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 443,
                                "end": 450,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 446,
                                  "end": 450
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 452,
                          "end": 466,
                          "name": "oncancel",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 461,
                            "end": 466,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 463,
                              "end": 466
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
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
                    "start": 478,
                    "end": 509,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 487,
                      "name": "as",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 487,
                      "end": 509,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 488,
                          "end": 498,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 493,
                            "end": 498,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 495,
                              "end": 498
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 499,
                        "end": 508,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 501,
                          "end": 508,
                          "typeName": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 508,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 518,
                    "end": 579,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 529,
                      "name": "join",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 529,
                      "end": 579,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 530,
                          "end": 568,
                          "name": "promises",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 538,
                            "end": 568,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 540,
                              "end": 568,
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "start": 542,
                                  "end": 566,
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "start": 543,
                                      "end": 555,
                                      "name": "name",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 547,
                                        "end": 555,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 549,
                                          "end": 555
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 556,
                                    "end": 565,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 558,
                                      "end": 565,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 558,
                                        "end": 565,
                                        "name": "Promise",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null
                                }
                              ]
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 569,
                        "end": 578,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 571,
                          "end": 578,
                          "typeName": {
                            "type": "Identifier",
                            "start": 571,
                            "end": 578,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 588,
                    "end": 630,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 599,
                      "name": "join",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 599,
                      "end": 630,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 600,
                          "end": 619,
                          "name": "promises",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 608,
                            "end": 619,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 610,
                              "end": 619,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 610,
                                "end": 617,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 610,
                                  "end": 617,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 620,
                        "end": 629,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 622,
                          "end": 629,
                          "typeName": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 629,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 639,
                    "end": 680,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 649,
                      "name": "any",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 649,
                      "end": 680,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 650,
                          "end": 669,
                          "name": "promises",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 658,
                            "end": 669,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 660,
                              "end": 669,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 660,
                                "end": 667,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 660,
                                  "end": 667,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 670,
                        "end": 679,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 672,
                          "end": 679,
                          "typeName": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 679,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 689,
                    "end": 728,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 703,
                      "name": "timeout",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 703,
                      "end": 728,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 704,
                          "end": 717,
                          "name": "delay",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 709,
                            "end": 717,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 711,
                              "end": 717
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 718,
                        "end": 727,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 720,
                          "end": 727,
                          "typeName": {
                            "type": "Identifier",
                            "start": 720,
                            "end": 727,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 737,
                    "end": 775,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 744,
                      "end": 753,
                      "name": "wrapError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 753,
                      "end": 775,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 754,
                          "end": 764,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 759,
                            "end": 764,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 761,
                              "end": 764
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 765,
                        "end": 774,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 767,
                          "end": 774,
                          "typeName": {
                            "type": "Identifier",
                            "start": 767,
                            "end": 774,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 784,
                    "end": 815,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 791,
                      "end": 793,
                      "name": "is",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 793,
                      "end": 815,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 794,
                          "end": 804,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 799,
                            "end": 804,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 801,
                              "end": 804
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 805,
                        "end": 814,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 807,
                          "end": 814
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
                    "start": 824,
                    "end": 881,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 831,
                      "end": 847,
                      "name": "addEventListener",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 847,
                      "end": 881,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 848,
                          "end": 860,
                          "name": "type",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 852,
                            "end": 860,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 854,
                              "end": 860
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 862,
                          "end": 879,
                          "name": "fn",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 864,
                            "end": 879,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 866,
                              "end": 879,
                              "typeName": {
                                "type": "Identifier",
                                "start": 866,
                                "end": 879,
                                "name": "EventCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
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
                    "start": 891,
                    "end": 989,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 898,
                      "end": 902,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 902,
                      "end": 989,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 903,
                          "end": 926,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 911,
                            "end": 926,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 913,
                              "end": 926,
                              "typeName": {
                                "type": "Identifier",
                                "start": 913,
                                "end": 926,
                                "name": "ValueCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 928,
                          "end": 949,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 934,
                            "end": 949,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 936,
                              "end": 949,
                              "typeName": {
                                "type": "Identifier",
                                "start": 936,
                                "end": 949,
                                "name": "ErrorCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 951,
                          "end": 978,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 960,
                            "end": 978,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 962,
                              "end": 978,
                              "typeName": {
                                "type": "Identifier",
                                "start": 962,
                                "end": 978,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 979,
                        "end": 988,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 981,
                          "end": 988,
                          "typeName": {
                            "type": "Identifier",
                            "start": 981,
                            "end": 988,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 998,
                    "end": 1093,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1005,
                      "end": 1009,
                      "name": "done",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1009,
                      "end": 1093,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1010,
                          "end": 1033,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1018,
                            "end": 1033,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1020,
                              "end": 1033,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1020,
                                "end": 1033,
                                "name": "ValueCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1035,
                          "end": 1056,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1041,
                            "end": 1056,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1043,
                              "end": 1056,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1043,
                                "end": 1056,
                                "name": "ErrorCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1058,
                          "end": 1085,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1067,
                            "end": 1085,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1069,
                              "end": 1085,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1069,
                                "end": 1085,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1086,
                        "end": 1092,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1088,
                          "end": 1092
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1102,
                    "end": 1124,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1115,
                      "name": "cancel",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1115,
                      "end": 1124,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1117,
                        "end": 1123,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1119,
                          "end": 1123
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": true,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1136,
            "end": 2376,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1143,
              "end": 2376,
              "id": {
                "type": "Identifier",
                "start": 1157,
                "end": 1165,
                "name": "TPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1169,
                "end": 2376,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1180,
                    "end": 1309,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1180,
                      "end": 1191,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1191,
                      "end": 1309,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1192,
                          "end": 1291,
                          "name": "init",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1196,
                            "end": 1291,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1198,
                              "end": 1291,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1199,
                                  "end": 1227,
                                  "name": "complete",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1207,
                                    "end": 1227,
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "start": 1209,
                                      "end": 1227,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 1210,
                                          "end": 1218,
                                          "name": "value",
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1215,
                                            "end": 1218,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 1217,
                                              "end": 1218,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 1217,
                                                "end": 1218,
                                                "name": "V",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "start": 1220,
                                        "end": 1227,
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 1223,
                                          "end": 1227
                                        }
                                      }
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1229,
                                  "end": 1254,
                                  "name": "error",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1234,
                                    "end": 1254,
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "start": 1236,
                                      "end": 1254,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 1237,
                                          "end": 1245,
                                          "name": "err",
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 1240,
                                            "end": 1245,
                                            "typeAnnotation": {
                                              "type": "TSAnyKeyword",
                                              "start": 1242,
                                              "end": 1245
                                            }
                                          },
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "start": 1247,
                                        "end": 1254,
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 1250,
                                          "end": 1254
                                        }
                                      }
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1256,
                                  "end": 1282,
                                  "name": "progress",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1264,
                                    "end": 1282,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1266,
                                      "end": 1282,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1266,
                                        "end": 1282,
                                        "name": "ProgressCallback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1284,
                                "end": 1291,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1287,
                                  "end": 1291
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1293,
                          "end": 1307,
                          "name": "oncancel",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1302,
                            "end": 1307,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1304,
                              "end": 1307
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
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
                    "start": 1319,
                    "end": 1448,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1326,
                      "end": 1330,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1330,
                      "end": 1448,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1334,
                          "end": 1369,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1342,
                            "end": 1369,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1344,
                              "end": 1369,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1345,
                                  "end": 1353,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1350,
                                    "end": 1353,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1352,
                                      "end": 1353,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1352,
                                        "end": 1353,
                                        "name": "V",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1355,
                                "end": 1369,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1358,
                                  "end": 1369,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1358,
                                    "end": 1366,
                                    "name": "TPromise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1366,
                                    "end": 1369,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1367,
                                        "end": 1368,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1367,
                                          "end": 1368,
                                          "name": "U",
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
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1371,
                          "end": 1404,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1377,
                            "end": 1404,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1379,
                              "end": 1404,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1380,
                                  "end": 1388,
                                  "name": "err",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1383,
                                    "end": 1388,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1385,
                                      "end": 1388
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1390,
                                "end": 1404,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1393,
                                  "end": 1404,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1393,
                                    "end": 1401,
                                    "name": "TPromise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1401,
                                    "end": 1404,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1402,
                                        "end": 1403,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1402,
                                          "end": 1403,
                                          "name": "U",
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
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1406,
                          "end": 1433,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1415,
                            "end": 1433,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1417,
                              "end": 1433,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1417,
                                "end": 1433,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1330,
                        "end": 1333,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1331,
                            "end": 1332,
                            "name": {
                              "type": "Identifier",
                              "start": 1331,
                              "end": 1332,
                              "name": "U",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1434,
                        "end": 1447,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1436,
                          "end": 1447,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1436,
                            "end": 1444,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1444,
                            "end": 1447,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1445,
                                "end": 1446,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1445,
                                  "end": 1446,
                                  "name": "U",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1457,
                    "end": 1576,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1468,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1468,
                      "end": 1576,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1472,
                          "end": 1507,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1480,
                            "end": 1507,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1482,
                              "end": 1507,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1483,
                                  "end": 1491,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1488,
                                    "end": 1491,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1490,
                                      "end": 1491,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1490,
                                        "end": 1491,
                                        "name": "V",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1493,
                                "end": 1507,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1496,
                                  "end": 1507,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1496,
                                    "end": 1504,
                                    "name": "TPromise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1504,
                                    "end": 1507,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1505,
                                        "end": 1506,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1505,
                                          "end": 1506,
                                          "name": "U",
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
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1509,
                          "end": 1532,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1515,
                            "end": 1532,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1517,
                              "end": 1532,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1518,
                                  "end": 1526,
                                  "name": "err",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1521,
                                    "end": 1526,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1523,
                                      "end": 1526
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1528,
                                "end": 1532,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1531,
                                  "end": 1532,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1531,
                                    "end": 1532,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1534,
                          "end": 1561,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1543,
                            "end": 1561,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1545,
                              "end": 1561,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1545,
                                "end": 1561,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1468,
                        "end": 1471,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1469,
                            "end": 1470,
                            "name": {
                              "type": "Identifier",
                              "start": 1469,
                              "end": 1470,
                              "name": "U",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1562,
                        "end": 1575,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1564,
                          "end": 1575,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1564,
                            "end": 1572,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1572,
                            "end": 1575,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1573,
                                "end": 1574,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1573,
                                  "end": 1574,
                                  "name": "U",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1585,
                    "end": 1704,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1592,
                      "end": 1596,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1596,
                      "end": 1704,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1600,
                          "end": 1625,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1608,
                            "end": 1625,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1610,
                              "end": 1625,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1611,
                                  "end": 1619,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1616,
                                    "end": 1619,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1618,
                                      "end": 1619,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1618,
                                        "end": 1619,
                                        "name": "V",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1621,
                                "end": 1625,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1624,
                                  "end": 1625,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1624,
                                    "end": 1625,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1660,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1633,
                            "end": 1660,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1635,
                              "end": 1660,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1636,
                                  "end": 1644,
                                  "name": "err",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1639,
                                    "end": 1644,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1641,
                                      "end": 1644
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1646,
                                "end": 1660,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1649,
                                  "end": 1660,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1649,
                                    "end": 1657,
                                    "name": "TPromise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1657,
                                    "end": 1660,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1658,
                                        "end": 1659,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1658,
                                          "end": 1659,
                                          "name": "U",
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
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1662,
                          "end": 1689,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1671,
                            "end": 1689,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1673,
                              "end": 1689,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1673,
                                "end": 1689,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1596,
                        "end": 1599,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1597,
                            "end": 1598,
                            "name": {
                              "type": "Identifier",
                              "start": 1597,
                              "end": 1598,
                              "name": "U",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1690,
                        "end": 1703,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1692,
                          "end": 1703,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1692,
                            "end": 1700,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1700,
                            "end": 1703,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1701,
                                "end": 1702,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1701,
                                  "end": 1702,
                                  "name": "U",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1713,
                    "end": 1822,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1720,
                      "end": 1724,
                      "name": "then",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1724,
                      "end": 1822,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1728,
                          "end": 1753,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1736,
                            "end": 1753,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1738,
                              "end": 1753,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1739,
                                  "end": 1747,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1744,
                                    "end": 1747,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1746,
                                      "end": 1747,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1746,
                                        "end": 1747,
                                        "name": "V",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1749,
                                "end": 1753,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1752,
                                  "end": 1753,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1752,
                                    "end": 1753,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1755,
                          "end": 1778,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1761,
                            "end": 1778,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1763,
                              "end": 1778,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1764,
                                  "end": 1772,
                                  "name": "err",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1767,
                                    "end": 1772,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1769,
                                      "end": 1772
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1774,
                                "end": 1778,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1777,
                                  "end": 1778,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1777,
                                    "end": 1778,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1780,
                          "end": 1807,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1789,
                            "end": 1807,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1791,
                              "end": 1807,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1791,
                                "end": 1807,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1724,
                        "end": 1727,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1725,
                            "end": 1726,
                            "name": {
                              "type": "Identifier",
                              "start": 1725,
                              "end": 1726,
                              "name": "U",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1808,
                        "end": 1821,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1810,
                          "end": 1821,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1810,
                            "end": 1818,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1818,
                            "end": 1821,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1819,
                                "end": 1820,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1819,
                                  "end": 1820,
                                  "name": "U",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1832,
                    "end": 1936,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1843,
                      "name": "done",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1843,
                      "end": 1936,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1844,
                          "end": 1872,
                          "name": "success",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1852,
                            "end": 1872,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1854,
                              "end": 1872,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1855,
                                  "end": 1863,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1860,
                                    "end": 1863,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1862,
                                      "end": 1863,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1862,
                                        "end": 1863,
                                        "name": "V",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1865,
                                "end": 1872,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1868,
                                  "end": 1872
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1874,
                          "end": 1899,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1880,
                            "end": 1899,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 1882,
                              "end": 1899,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1883,
                                  "end": 1891,
                                  "name": "err",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1886,
                                    "end": 1891,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1888,
                                      "end": 1891
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1893,
                                "end": 1899,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1896,
                                  "end": 1899
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": true
                        },
                        {
                          "type": "Identifier",
                          "start": 1901,
                          "end": 1928,
                          "name": "progress",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1910,
                            "end": 1928,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1912,
                              "end": 1928,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1912,
                                "end": 1928,
                                "name": "ProgressCallback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1929,
                        "end": 1935,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1931,
                          "end": 1935
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1945,
                    "end": 1967,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1952,
                      "end": 1958,
                      "name": "cancel",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1958,
                      "end": 1967,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1960,
                        "end": 1966,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1962,
                          "end": 1966
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1977,
                    "end": 2044,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1991,
                      "end": 1993,
                      "name": "as",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 1993,
                      "end": 2044,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2005,
                          "end": 2021,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2010,
                            "end": 2021,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2012,
                              "end": 2021,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2012,
                                "end": 2021,
                                "name": "ValueType",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1993,
                        "end": 2004,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1994,
                            "end": 2003,
                            "name": {
                              "type": "Identifier",
                              "start": 1994,
                              "end": 2003,
                              "name": "ValueType",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2022,
                        "end": 2043,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2024,
                          "end": 2043,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2024,
                            "end": 2032,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2032,
                            "end": 2043,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2033,
                                "end": 2042,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2033,
                                  "end": 2042,
                                  "name": "ValueType",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2053,
                    "end": 2106,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2067,
                      "end": 2074,
                      "name": "timeout",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 2074,
                      "end": 2106,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2075,
                          "end": 2088,
                          "name": "delay",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2080,
                            "end": 2088,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2082,
                              "end": 2088
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2089,
                        "end": 2105,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2091,
                          "end": 2105,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2091,
                            "end": 2099,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2099,
                            "end": 2105,
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 2100,
                                "end": 2104
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2115,
                    "end": 2201,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2129,
                      "end": 2133,
                      "name": "join",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 2133,
                      "end": 2201,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2145,
                          "end": 2176,
                          "name": "promises",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2153,
                            "end": 2176,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 2155,
                              "end": 2176,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2155,
                                "end": 2174,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2155,
                                  "end": 2163,
                                  "name": "TPromise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2163,
                                  "end": 2174,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2164,
                                      "end": 2173,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2164,
                                        "end": 2173,
                                        "name": "ValueType",
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
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2133,
                        "end": 2144,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2134,
                            "end": 2143,
                            "name": {
                              "type": "Identifier",
                              "start": 2134,
                              "end": 2143,
                              "name": "ValueType",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2177,
                        "end": 2200,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2179,
                          "end": 2200,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2179,
                            "end": 2187,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2187,
                            "end": 2200,
                            "params": [
                              {
                                "type": "TSArrayType",
                                "start": 2188,
                                "end": 2199,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 2188,
                                  "end": 2197,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2188,
                                    "end": 2197,
                                    "name": "ValueType",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2210,
                    "end": 2293,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2224,
                      "end": 2227,
                      "name": "any",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 2227,
                      "end": 2293,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2239,
                          "end": 2270,
                          "name": "promises",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2247,
                            "end": 2270,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 2249,
                              "end": 2270,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 2249,
                                "end": 2268,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2249,
                                  "end": 2257,
                                  "name": "TPromise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2257,
                                  "end": 2268,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2258,
                                      "end": 2267,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2258,
                                        "end": 2267,
                                        "name": "ValueType",
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
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2227,
                        "end": 2238,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2228,
                            "end": 2237,
                            "name": {
                              "type": "Identifier",
                              "start": 2228,
                              "end": 2237,
                              "name": "ValueType",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2271,
                        "end": 2292,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2273,
                          "end": 2292,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2273,
                            "end": 2281,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2281,
                            "end": 2292,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2282,
                                "end": 2291,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2282,
                                  "end": 2291,
                                  "name": "ValueType",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2302,
                    "end": 2370,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2316,
                      "end": 2325,
                      "name": "wrapError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 2325,
                      "end": 2370,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2337,
                          "end": 2347,
                          "name": "error",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2342,
                            "end": 2347,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2344,
                              "end": 2347
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 2325,
                        "end": 2336,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 2326,
                            "end": 2335,
                            "name": {
                              "type": "Identifier",
                              "start": 2326,
                              "end": 2335,
                              "name": "ValueType",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2348,
                        "end": 2369,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2350,
                          "end": 2369,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2350,
                            "end": 2358,
                            "name": "TPromise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2358,
                            "end": 2369,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2359,
                                "end": 2368,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2359,
                                  "end": 2368,
                                  "name": "ValueType",
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1165,
                "end": 1168,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1166,
                    "end": 1167,
                    "name": {
                      "type": "Identifier",
                      "start": 1166,
                      "end": 1167,
                      "name": "V",
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
              "implements": [],
              "abstract": false,
              "declare": true,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2382,
            "end": 2642,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 2389,
              "end": 2642,
              "id": {
                "type": "Identifier",
                "start": 2399,
                "end": 2410,
                "name": "IXHROptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 2411,
                "end": 2642,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2421,
                    "end": 2435,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2421,
                      "end": 2425,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2426,
                      "end": 2434,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2428,
                        "end": 2434
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2444,
                    "end": 2457,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2444,
                      "end": 2447,
                      "name": "url",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2448,
                      "end": 2456,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2450,
                        "end": 2456
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2466,
                    "end": 2480,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2466,
                      "end": 2470,
                      "name": "user",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2471,
                      "end": 2479,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2473,
                        "end": 2479
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2489,
                    "end": 2507,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2489,
                      "end": 2497,
                      "name": "password",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2498,
                      "end": 2506,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2500,
                        "end": 2506
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2516,
                    "end": 2538,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2516,
                      "end": 2528,
                      "name": "responseType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2529,
                      "end": 2537,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2531,
                        "end": 2537
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2547,
                    "end": 2561,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2547,
                      "end": 2554,
                      "name": "headers",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2555,
                      "end": 2560,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2557,
                        "end": 2560
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2570,
                    "end": 2616,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2570,
                      "end": 2594,
                      "name": "customRequestInitializer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2595,
                      "end": 2615,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2597,
                        "end": 2615,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2598,
                            "end": 2606,
                            "name": "req",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2601,
                              "end": 2606,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 2603,
                                "end": 2606
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2608,
                          "end": 2615,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 2611,
                            "end": 2615
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2625,
                    "end": 2636,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2625,
                      "end": 2629,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2630,
                      "end": 2635,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2632,
                        "end": 2635
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2646,
      "end": 3392,
      "id": {
        "type": "Identifier",
        "start": 2653,
        "end": 2661,
        "name": "Services",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2662,
        "end": 3392,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2668,
            "end": 3390,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 2675,
              "end": 3390,
              "id": {
                "type": "Identifier",
                "start": 2685,
                "end": 2700,
                "name": "IRequestService",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 2701,
                "end": 3390,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3022,
                    "end": 3076,
                    "key": {
                      "type": "Identifier",
                      "start": 3022,
                      "end": 3035,
                      "name": "getRequestUrl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3036,
                        "end": 3051,
                        "name": "service",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3043,
                          "end": 3051,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3045,
                            "end": 3051
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3053,
                        "end": 3066,
                        "name": "path",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3058,
                          "end": 3066,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3060,
                            "end": 3066
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3067,
                      "end": 3075,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3069,
                        "end": 3075
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3085,
                    "end": 3159,
                    "key": {
                      "type": "Identifier",
                      "start": 3085,
                      "end": 3098,
                      "name": "getRequestUrl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3099,
                        "end": 3114,
                        "name": "service",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3106,
                          "end": 3114,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3108,
                            "end": 3114
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3116,
                        "end": 3129,
                        "name": "path",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3121,
                          "end": 3129,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3123,
                            "end": 3129
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "Identifier",
                        "start": 3131,
                        "end": 3149,
                        "name": "absolute",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3140,
                          "end": 3149,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 3142,
                            "end": 3149
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3150,
                      "end": 3158,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3152,
                        "end": 3158
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3329,
                    "end": 3384,
                    "key": {
                      "type": "Identifier",
                      "start": 3329,
                      "end": 3340,
                      "name": "makeRequest",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3341,
                        "end": 3367,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3348,
                          "end": 3367,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3350,
                            "end": 3367,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3350,
                              "end": 3367,
                              "left": {
                                "type": "Identifier",
                                "start": 3350,
                                "end": 3355,
                                "name": "WinJS",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3356,
                                "end": 3367,
                                "name": "IXHROptions",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3368,
                      "end": 3383,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3370,
                        "end": 3383,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3370,
                          "end": 3383,
                          "left": {
                            "type": "Identifier",
                            "start": 3370,
                            "end": 3375,
                            "name": "WinJS",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3376,
                            "end": 3383,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3394,
      "end": 3529,
      "id": {
        "type": "Identifier",
        "start": 3401,
        "end": 3407,
        "name": "Errors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3408,
        "end": 3529,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3414,
            "end": 3527,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3421,
              "end": 3527,
              "id": {
                "type": "Identifier",
                "start": 3427,
                "end": 3442,
                "name": "ConnectionError",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 3463,
                "end": 3527,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 3473,
                    "end": 3521,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3473,
                      "end": 3484,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3484,
                      "end": 3521,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3485,
                          "end": 3508,
                          "name": "request",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3492,
                            "end": 3508,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3494,
                              "end": 3508,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3494,
                                "end": 3508,
                                "name": "XMLHttpRequest",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 3510,
                        "end": 3521,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3531,
      "end": 3636,
      "id": {
        "type": "Identifier",
        "start": 3538,
        "end": 3543,
        "name": "Files",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3544,
        "end": 3636,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3550,
            "end": 3634,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 3557,
              "end": 3634,
              "id": {
                "type": "Identifier",
                "start": 3567,
                "end": 3580,
                "name": "IUploadResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3581,
                "end": 3634,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3591,
                    "end": 3604,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3591,
                      "end": 3595,
                      "name": "stat",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3595,
                      "end": 3603,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3597,
                        "end": 3603
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3613,
                    "end": 3628,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3613,
                      "end": 3618,
                      "name": "isNew",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3618,
                      "end": 3627,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3620,
                        "end": 3627
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3638,
      "end": 3737,
      "id": {
        "type": "Identifier",
        "start": 3648,
        "end": 3662,
        "name": "XMLHttpRequest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3663,
        "end": 3737,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3669,
            "end": 3684,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3669,
              "end": 3675,
              "name": "status",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3675,
              "end": 3683,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3677,
                "end": 3683
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3689,
            "end": 3710,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3689,
              "end": 3701,
              "name": "responseText",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3701,
              "end": 3709,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3703,
                "end": 3709
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3715,
            "end": 3734,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3715,
              "end": 3725,
              "name": "statusText",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3725,
              "end": 3733,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3727,
                "end": 3733
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
      "type": "ClassDeclaration",
      "start": 3739,
      "end": 4614,
      "id": {
        "type": "Identifier",
        "start": 3745,
        "end": 3756,
        "name": "FileService",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3757,
        "end": 4614,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3763,
            "end": 3812,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3771,
              "end": 3785,
              "name": "requestService",
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
              "start": 3785,
              "end": 3811,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3787,
                "end": 3811,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 3787,
                  "end": 3811,
                  "left": {
                    "type": "Identifier",
                    "start": 3787,
                    "end": 3795,
                    "name": "Services",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3796,
                    "end": 3811,
                    "name": "IRequestService",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3817,
            "end": 4612,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3824,
              "end": 3834,
              "name": "uploadData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3834,
              "end": 4612,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3874,
                "end": 4612,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3884,
                    "end": 3898,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3888,
                        "end": 3897,
                        "id": {
                          "type": "Identifier",
                          "start": 3888,
                          "end": 3892,
                          "name": "path",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 3895,
                          "end": 3897,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3907,
                    "end": 4606,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3914,
                      "end": 4605,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3914,
                        "end": 4109,
                        "object": {
                          "type": "CallExpression",
                          "start": 3914,
                          "end": 4104,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3914,
                            "end": 3945,
                            "object": {
                              "type": "MemberExpression",
                              "start": 3914,
                              "end": 3933,
                              "object": {
                                "type": "ThisExpression",
                                "start": 3914,
                                "end": 3918
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3919,
                                "end": 3933,
                                "name": "requestService",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 3934,
                              "end": 3945,
                              "name": "makeRequest",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 3946,
                              "end": 4103,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 3960,
                                  "end": 4012,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 3960,
                                    "end": 3963,
                                    "name": "url",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "CallExpression",
                                    "start": 3965,
                                    "end": 4012,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3965,
                                      "end": 3998,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 3965,
                                        "end": 3984,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 3965,
                                          "end": 3969
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3970,
                                          "end": 3984,
                                          "name": "requestService",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3985,
                                        "end": 3998,
                                        "name": "getRequestUrl",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 3999,
                                        "end": 4005,
                                        "value": "root",
                                        "raw": "'root'"
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 4007,
                                        "end": 4011,
                                        "name": "path",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 4026,
                                  "end": 4038,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 4026,
                                    "end": 4030,
                                    "name": "type",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 4032,
                                    "end": 4038,
                                    "value": "POST",
                                    "raw": "'POST'"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 4052,
                                  "end": 4063,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 4052,
                                    "end": 4059,
                                    "name": "headers",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 4061,
                                    "end": 4063,
                                    "properties": []
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 4077,
                                  "end": 4093,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 4077,
                                    "end": 4081,
                                    "name": "data",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 4083,
                                    "end": 4093,
                                    "value": "someData",
                                    "raw": "\"someData\""
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4105,
                          "end": 4109,
                          "name": "then",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 4110,
                          "end": 4481,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 4111,
                              "end": 4135,
                              "name": "response",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4119,
                                "end": 4135,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4121,
                                  "end": 4135,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4121,
                                    "end": 4135,
                                    "name": "XMLHttpRequest",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 4140,
                            "end": 4481,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 4158,
                                "end": 4395,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 4162,
                                    "end": 4394,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 4162,
                                      "end": 4183,
                                      "name": "result",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 4168,
                                        "end": 4183,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 4170,
                                          "end": 4183,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4170,
                                            "end": 4183,
                                            "name": "IUploadResult",
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
                                      "type": "ObjectExpression",
                                      "start": 4186,
                                      "end": 4394,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 4232,
                                          "end": 4280,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 4232,
                                            "end": 4236,
                                            "name": "stat",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "start": 4238,
                                            "end": 4280,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 4238,
                                              "end": 4253,
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 4238,
                                                "end": 4242
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 4243,
                                                "end": 4253,
                                                "name": "jsonToStat",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 4254,
                                                "end": 4265,
                                                "name": "newFilePath",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 4267,
                                                "end": 4279,
                                                "value": "someString",
                                                "raw": "\"someString\""
                                              }
                                            ],
                                            "optional": false,
                                            "typeArguments": null
                                          },
                                          "kind": "init",
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 4346,
                                          "end": 4376,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 4346,
                                            "end": 4351,
                                            "name": "isNew",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "BinaryExpression",
                                            "start": 4353,
                                            "end": 4376,
                                            "left": {
                                              "type": "MemberExpression",
                                              "start": 4353,
                                              "end": 4368,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 4353,
                                                "end": 4361,
                                                "name": "response",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 4362,
                                                "end": 4368,
                                                "name": "status",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "computed": false,
                                              "optional": false
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "start": 4373,
                                              "end": 4376,
                                              "value": 201,
                                              "raw": "201"
                                            }
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 4413,
                                "end": 4467,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 4420,
                                  "end": 4466,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 4420,
                                    "end": 4437,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 4420,
                                      "end": 4434,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 4420,
                                        "end": 4425,
                                        "name": "WinJS",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 4426,
                                        "end": 4434,
                                        "name": "TPromise",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4435,
                                      "end": 4437,
                                      "name": "as",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 4459,
                                      "end": 4465,
                                      "name": "result",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 4437,
                                    "end": 4458,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 4438,
                                        "end": 4457,
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "start": 4438,
                                          "end": 4457,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 4438,
                                            "end": 4443,
                                            "name": "Files",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 4444,
                                            "end": 4457,
                                            "name": "IUploadResult",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 4483,
                          "end": 4604,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 4484,
                              "end": 4503,
                              "name": "xhr",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 4487,
                                "end": 4503,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4489,
                                  "end": 4503,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4489,
                                    "end": 4503,
                                    "name": "XMLHttpRequest",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 4508,
                            "end": 4604,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4526,
                                "end": 4590,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 4533,
                                  "end": 4589,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 4533,
                                    "end": 4556,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 4533,
                                      "end": 4546,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 4533,
                                        "end": 4538,
                                        "name": "WinJS",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 4539,
                                        "end": 4546,
                                        "name": "Promise",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4547,
                                      "end": 4556,
                                      "name": "wrapError",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "NewExpression",
                                      "start": 4557,
                                      "end": 4588,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 4561,
                                        "end": 4583,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 4561,
                                          "end": 4567,
                                          "name": "Errors",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 4568,
                                          "end": 4583,
                                          "name": "ConnectionError",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4584,
                                          "end": 4587,
                                          "name": "xhr",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "typeArguments": null
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3836,
                "end": 3873,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3838,
                  "end": 3873,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 3838,
                    "end": 3852,
                    "left": {
                      "type": "Identifier",
                      "start": 3838,
                      "end": 3843,
                      "name": "WinJS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3844,
                      "end": 3852,
                      "name": "TPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3852,
                    "end": 3873,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3853,
                        "end": 3872,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3853,
                          "end": 3872,
                          "left": {
                            "type": "Identifier",
                            "start": 3853,
                            "end": 3858,
                            "name": "Files",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3859,
                            "end": 3872,
                            "name": "IUploadResult",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
