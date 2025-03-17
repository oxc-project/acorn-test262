__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1576,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 130,
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 130,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 57,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 36,
              "end": 57,
              "body": {
                "type": "TSInterfaceBody",
                "start": 54,
                "end": 57,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 53,
                "decorators": [],
                "name": "Request",
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
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 91,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 69,
              "end": 91,
              "body": {
                "type": "TSInterfaceBody",
                "start": 88,
                "end": 91,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 79,
                "end": 87,
                "decorators": [],
                "name": "Response",
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
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 128,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 103,
              "end": 128,
              "body": {
                "type": "TSInterfaceBody",
                "start": 125,
                "end": 128,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 124,
                "decorators": [],
                "name": "Application",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "Express",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 132,
      "end": 1575,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 157,
        "end": 1575,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 163,
            "end": 187,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 186,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 177,
                  "end": 186,
                  "left": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 186,
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 192,
            "end": 1556,
            "body": {
              "type": "TSModuleBlock",
              "start": 204,
              "end": 1556,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 214,
                  "end": 297,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 231,
                    "end": 297,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 245,
                        "end": 287,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 248,
                          "decorators": [],
                          "name": "all",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 249,
                            "end": 277,
                            "argument": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 259,
                              "decorators": [],
                              "name": "handler",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 259,
                              "end": 277,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 261,
                                "end": 277,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 261,
                                  "end": 275,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 261,
                                    "end": 275,
                                    "decorators": [],
                                    "name": "RequestHandler",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 278,
                          "end": 286,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 280,
                            "end": 286,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 280,
                              "end": 286,
                              "decorators": [],
                              "name": "IRoute",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 230,
                    "decorators": [],
                    "name": "IRoute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 307,
                  "end": 415,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 335,
                    "end": 415,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 349,
                        "end": 405,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 350,
                            "end": 369,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 354,
                              "end": 369,
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "start": 356,
                                "end": 369,
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 356,
                                    "end": 362
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 363,
                                    "end": 369,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 363,
                                      "end": 369,
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 371,
                            "end": 400,
                            "argument": {
                              "type": "Identifier",
                              "start": 374,
                              "end": 382,
                              "decorators": [],
                              "name": "handlers",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 382,
                              "end": 400,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 384,
                                "end": 400,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 384,
                                  "end": 398,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 384,
                                    "end": 398,
                                    "decorators": [],
                                    "name": "RequestHandler",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 401,
                          "end": 404,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 403,
                            "end": 404,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 331,
                    "decorators": [],
                    "name": "IRouterMatcher",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 331,
                    "end": 334,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 332,
                        "end": 333,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 333,
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
                  "start": 425,
                  "end": 521,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 469,
                    "end": 521,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 483,
                        "end": 511,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 488,
                          "decorators": [],
                          "name": "route",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 489,
                            "end": 501,
                            "decorators": [],
                            "name": "path",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 493,
                              "end": 501,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 495,
                                "end": 501
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 502,
                          "end": 510,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 504,
                            "end": 510,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 504,
                              "end": 510,
                              "decorators": [],
                              "name": "IRoute",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                      "start": 454,
                      "end": 468,
                      "expression": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 468,
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 442,
                    "decorators": [],
                    "name": "IRouter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 442,
                    "end": 445,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 443,
                        "end": 444,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 444,
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
                  "type": "ExportNamedDeclaration",
                  "start": 531,
                  "end": 577,
                  "attributes": [],
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 538,
                    "end": 577,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 553,
                      "decorators": [],
                      "name": "Router",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 554,
                        "end": 567,
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 562,
                          "end": 567,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 564,
                            "end": 567
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 568,
                      "end": 576,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 570,
                        "end": 576,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 570,
                          "end": 576,
                          "decorators": [],
                          "name": "Router",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 587,
                  "end": 637,
                  "attributes": [],
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 594,
                    "end": 637,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 635,
                      "end": 637,
                      "body": []
                    },
                    "declare": false,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "start": 619,
                        "end": 634,
                        "expression": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 626,
                          "decorators": [],
                          "name": "IRouter",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 626,
                          "end": 634,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 627,
                              "end": 633,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 627,
                                "end": 633,
                                "decorators": [],
                                "name": "Router",
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
                      "start": 604,
                      "end": 610,
                      "decorators": [],
                      "name": "Router",
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
                  "type": "TSInterfaceDeclaration",
                  "start": 647,
                  "end": 688,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 665,
                    "end": 688,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 667,
                        "end": 686,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 668,
                            "end": 678,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 671,
                              "end": 678,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 673,
                                "end": 678,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 673,
                                  "end": 678,
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 679,
                          "end": 685,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 681,
                            "end": 685
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 664,
                    "decorators": [],
                    "name": "Errback",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 698,
                  "end": 792,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 740,
                    "end": 792,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 755,
                        "end": 782,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 755,
                          "end": 758,
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 760,
                            "end": 772,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 764,
                              "end": 772,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 766,
                                "end": 772
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 773,
                          "end": 781,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 775,
                            "end": 781
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
                      "start": 724,
                      "end": 739,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 724,
                        "end": 739,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 731,
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 732,
                          "end": 739,
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 715,
                    "decorators": [],
                    "name": "Request",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 802,
                  "end": 886,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 846,
                    "end": 886,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 860,
                        "end": 876,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 867,
                          "decorators": [],
                          "name": "charset",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 867,
                          "end": 875,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 869,
                            "end": 875
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 829,
                      "end": 845,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 829,
                        "end": 845,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 829,
                          "end": 836,
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 837,
                          "end": 845,
                          "decorators": [],
                          "name": "Response",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 820,
                    "decorators": [],
                    "name": "Response",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 896,
                  "end": 1011,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 926,
                    "end": 1011,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 940,
                        "end": 1001,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 941,
                            "end": 949,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 944,
                              "end": 949,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 946,
                                "end": 949
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 951,
                            "end": 963,
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 954,
                              "end": 963,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 956,
                                "end": 963,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 956,
                                  "end": 963,
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 965,
                            "end": 978,
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 968,
                              "end": 978,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 970,
                                "end": 978,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 970,
                                  "end": 978,
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 980,
                            "end": 994,
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 984,
                              "end": 994,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 986,
                                "end": 994,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 986,
                                  "end": 994,
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 995,
                          "end": 1000,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 997,
                            "end": 1000
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 925,
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1021,
                  "end": 1121,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1046,
                    "end": 1121,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1060,
                        "end": 1111,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1061,
                            "end": 1073,
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1064,
                              "end": 1073,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1066,
                                "end": 1073,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1066,
                                  "end": 1073,
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1088,
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1078,
                              "end": 1088,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1080,
                                "end": 1088,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1080,
                                  "end": 1088,
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1090,
                            "end": 1104,
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1094,
                              "end": 1104,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1096,
                                "end": 1104,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1096,
                                  "end": 1104,
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1105,
                          "end": 1110,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1107,
                            "end": 1110
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 1031,
                    "end": 1045,
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1131,
                  "end": 1174,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1172,
                    "end": 1174,
                    "body": []
                  },
                  "declare": false,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1157,
                      "end": 1171,
                      "expression": {
                        "type": "Identifier",
                        "start": 1157,
                        "end": 1171,
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1148,
                    "decorators": [],
                    "name": "Handler",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1184,
                  "end": 1301,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1214,
                    "end": 1301,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1228,
                        "end": 1291,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1229,
                            "end": 1241,
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1232,
                              "end": 1241,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1234,
                                "end": 1241,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1234,
                                  "end": 1241,
                                  "decorators": [],
                                  "name": "Request",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1243,
                            "end": 1256,
                            "decorators": [],
                            "name": "res",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1246,
                              "end": 1256,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1248,
                                "end": 1256,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1248,
                                  "end": 1256,
                                  "decorators": [],
                                  "name": "Response",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1258,
                            "end": 1272,
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1262,
                              "end": 1272,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1264,
                                "end": 1272,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1264,
                                  "end": 1272,
                                  "decorators": [],
                                  "name": "Function",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1274,
                            "end": 1284,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1279,
                              "end": 1284,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1281,
                                "end": 1284
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1285,
                          "end": 1290,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1287,
                            "end": 1290
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 1194,
                    "end": 1213,
                    "decorators": [],
                    "name": "RequestParamHandler",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1311,
                  "end": 1419,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1383,
                    "end": 1419,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1397,
                        "end": 1409,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1397,
                          "end": 1403,
                          "decorators": [],
                          "name": "routes",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1403,
                          "end": 1408,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1405,
                            "end": 1408
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1341,
                      "end": 1361,
                      "expression": {
                        "type": "Identifier",
                        "start": 1341,
                        "end": 1348,
                        "decorators": [],
                        "name": "IRouter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1348,
                        "end": 1361,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1349,
                            "end": 1360,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1349,
                              "end": 1360,
                              "decorators": [],
                              "name": "Application",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1363,
                      "end": 1382,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 1363,
                        "end": 1382,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1363,
                          "end": 1370,
                          "decorators": [],
                          "name": "Express",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1371,
                          "end": 1382,
                          "decorators": [],
                          "name": "Application",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1321,
                    "end": 1332,
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1429,
                  "end": 1524,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1467,
                    "end": 1524,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 1481,
                        "end": 1514,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1498,
                          "decorators": [],
                          "name": "createApplication",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1500,
                          "end": 1513,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1502,
                            "end": 1513,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1502,
                              "end": 1513,
                              "decorators": [],
                              "name": "Application",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                      "start": 1455,
                      "end": 1466,
                      "expression": {
                        "type": "Identifier",
                        "start": 1455,
                        "end": 1466,
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "id": {
                    "type": "Identifier",
                    "start": 1439,
                    "end": 1446,
                    "decorators": [],
                    "name": "Express",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1534,
                  "end": 1550,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1538,
                      "end": 1549,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1538,
                        "end": 1549,
                        "decorators": [],
                        "name": "static",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1544,
                          "end": 1549,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1546,
                            "end": 1549
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "TSExportAssignment",
            "start": 1562,
            "end": 1573,
            "expression": {
              "type": "Identifier",
              "start": 1571,
              "end": 1572,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 147,
        "end": 156,
        "raw": "\"express\"",
        "value": "express"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 146,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 37,
      "end": 66,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 65,
        "raw": "\"express\"",
        "value": "express"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 44,
          "end": 50,
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 145,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 145,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 98,
            "end": 143,
            "body": {
              "type": "TSInterfaceBody",
              "start": 116,
              "end": 143,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 126,
                  "end": 137,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 128,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 115,
              "decorators": [],
              "name": "Request",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 91,
        "raw": "\"express\"",
        "value": "express"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "raw": "\"express\"",
        "value": "express"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "Request",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "Request",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 59,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 58,
        "raw": "\"./augmentation\"",
        "value": "./augmentation"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 74,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 74,
                  "decorators": [],
                  "name": "Request",
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
      "type": "VariableDeclaration",
      "start": 76,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 86,
            "end": 90,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 88,
              "end": 90,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
