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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "name": "Express",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 130,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 57,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 36,
              "end": 57,
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 53,
                "name": "Request",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 54,
                "end": 57,
                "body": []
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
            "start": 62,
            "end": 91,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 69,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 79,
                "end": 87,
                "name": "Response",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 88,
                "end": 91,
                "body": []
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
            "start": 96,
            "end": 128,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 103,
              "end": 128,
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 124,
                "name": "Application",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 125,
                "end": 128,
                "body": []
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
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 132,
      "end": 1575,
      "id": {
        "type": "Literal",
        "start": 147,
        "end": 156,
        "value": "express",
        "raw": "\"express\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 157,
        "end": 1575,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 163,
            "end": 187,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 186,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 177,
                  "end": 186,
                  "left": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 186,
                    "name": "Express",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 192,
            "end": 1556,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 204,
              "end": 1556,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 214,
                  "end": 297,
                  "id": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 230,
                    "name": "IRoute",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 231,
                    "end": 297,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 245,
                        "end": 287,
                        "key": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 248,
                          "name": "all",
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
                            "type": "RestElement",
                            "start": 249,
                            "end": 277,
                            "argument": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 259,
                              "name": "handler",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 261,
                                    "end": 275,
                                    "name": "RequestHandler",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 278,
                          "end": 286,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 280,
                            "end": 286,
                            "typeName": {
                              "type": "Identifier",
                              "start": 280,
                              "end": 286,
                              "name": "IRoute",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 307,
                  "end": 415,
                  "id": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 331,
                    "name": "IRouterMatcher",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 331,
                    "end": 334,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 332,
                        "end": 333,
                        "name": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 333,
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
                    "start": 335,
                    "end": 415,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 349,
                        "end": 405,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 350,
                            "end": 369,
                            "name": "name",
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
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 363,
                                      "end": 369,
                                      "name": "RegExp",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "RestElement",
                            "start": 371,
                            "end": 400,
                            "argument": {
                              "type": "Identifier",
                              "start": 374,
                              "end": 382,
                              "name": "handlers",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 384,
                                    "end": 398,
                                    "name": "RequestHandler",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 425,
                  "end": 521,
                  "id": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 442,
                    "name": "IRouter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 454,
                      "end": 468,
                      "expression": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 468,
                        "name": "RequestHandler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 442,
                    "end": 445,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 443,
                        "end": 444,
                        "name": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 444,
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
                    "start": 469,
                    "end": 521,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 483,
                        "end": 511,
                        "key": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 488,
                          "name": "route",
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
                            "start": 489,
                            "end": 501,
                            "name": "path",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 493,
                              "end": 501,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 495,
                                "end": 501
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 502,
                          "end": 510,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 504,
                            "end": 510,
                            "typeName": {
                              "type": "Identifier",
                              "start": 504,
                              "end": 510,
                              "name": "IRoute",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                {
                  "type": "ExportNamedDeclaration",
                  "start": 531,
                  "end": 577,
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 538,
                    "end": 577,
                    "id": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 553,
                      "name": "Router",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 554,
                        "end": 567,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 562,
                          "end": 567,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 564,
                            "end": 567
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
                      "start": 568,
                      "end": 576,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 570,
                        "end": 576,
                        "typeName": {
                          "type": "Identifier",
                          "start": 570,
                          "end": 576,
                          "name": "Router",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 587,
                  "end": 637,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 594,
                    "end": 637,
                    "id": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 610,
                      "name": "Router",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "start": 619,
                        "end": 634,
                        "expression": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 626,
                          "name": "IRouter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 627,
                                "end": 633,
                                "name": "Router",
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
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 635,
                      "end": 637,
                      "body": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 647,
                  "end": 688,
                  "id": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 664,
                    "name": "Errback",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 665,
                    "end": 688,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 667,
                        "end": 686,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 668,
                            "end": 678,
                            "name": "err",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 671,
                              "end": 678,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 673,
                                "end": 678,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 673,
                                  "end": 678,
                                  "name": "Error",
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
                          "start": 679,
                          "end": 685,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 681,
                            "end": 685
                          }
                        }
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 698,
                  "end": 792,
                  "id": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 715,
                    "name": "Request",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 724,
                      "end": 739,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 724,
                        "end": 739,
                        "object": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 731,
                          "name": "Express",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 732,
                          "end": 739,
                          "name": "Request",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 740,
                    "end": 792,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 755,
                        "end": 782,
                        "key": {
                          "type": "Identifier",
                          "start": 755,
                          "end": 758,
                          "name": "get",
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
                            "start": 760,
                            "end": 772,
                            "name": "name",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 764,
                              "end": 772,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 766,
                                "end": 772
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                  "start": 802,
                  "end": 886,
                  "id": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 820,
                    "name": "Response",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 829,
                      "end": 845,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 829,
                        "end": 845,
                        "object": {
                          "type": "Identifier",
                          "start": 829,
                          "end": 836,
                          "name": "Express",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 837,
                          "end": 845,
                          "name": "Response",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 846,
                    "end": 886,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 860,
                        "end": 876,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 867,
                          "name": "charset",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 867,
                          "end": 875,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 869,
                            "end": 875
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
                  "start": 896,
                  "end": 1011,
                  "id": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 925,
                    "name": "ErrorRequestHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 926,
                    "end": 1011,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 940,
                        "end": 1001,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 941,
                            "end": 949,
                            "name": "err",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 944,
                              "end": 949,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 946,
                                "end": 949
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 951,
                            "end": 963,
                            "name": "req",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 954,
                              "end": 963,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 956,
                                "end": 963,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 956,
                                  "end": 963,
                                  "name": "Request",
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
                            "start": 965,
                            "end": 978,
                            "name": "res",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 968,
                              "end": 978,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 970,
                                "end": 978,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 970,
                                  "end": 978,
                                  "name": "Response",
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
                            "start": 980,
                            "end": 994,
                            "name": "next",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 984,
                              "end": 994,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 986,
                                "end": 994,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 986,
                                  "end": 994,
                                  "name": "Function",
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
                          "start": 995,
                          "end": 1000,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 997,
                            "end": 1000
                          }
                        }
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1021,
                  "end": 1121,
                  "id": {
                    "type": "Identifier",
                    "start": 1031,
                    "end": 1045,
                    "name": "RequestHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1046,
                    "end": 1121,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1060,
                        "end": 1111,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1061,
                            "end": 1073,
                            "name": "req",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1064,
                              "end": 1073,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1066,
                                "end": 1073,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1066,
                                  "end": 1073,
                                  "name": "Request",
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
                            "start": 1075,
                            "end": 1088,
                            "name": "res",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1078,
                              "end": 1088,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1080,
                                "end": 1088,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1080,
                                  "end": 1088,
                                  "name": "Response",
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
                            "start": 1090,
                            "end": 1104,
                            "name": "next",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1094,
                              "end": 1104,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1096,
                                "end": 1104,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1096,
                                  "end": 1104,
                                  "name": "Function",
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
                          "start": 1105,
                          "end": 1110,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1107,
                            "end": 1110
                          }
                        }
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1131,
                  "end": 1174,
                  "id": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1148,
                    "name": "Handler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1157,
                      "end": 1171,
                      "expression": {
                        "type": "Identifier",
                        "start": 1157,
                        "end": 1171,
                        "name": "RequestHandler",
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
                    "start": 1172,
                    "end": 1174,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1184,
                  "end": 1301,
                  "id": {
                    "type": "Identifier",
                    "start": 1194,
                    "end": 1213,
                    "name": "RequestParamHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1214,
                    "end": 1301,
                    "body": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1228,
                        "end": 1291,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1229,
                            "end": 1241,
                            "name": "req",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1232,
                              "end": 1241,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1234,
                                "end": 1241,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1234,
                                  "end": 1241,
                                  "name": "Request",
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
                            "start": 1243,
                            "end": 1256,
                            "name": "res",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1246,
                              "end": 1256,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1248,
                                "end": 1256,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1248,
                                  "end": 1256,
                                  "name": "Response",
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
                            "start": 1258,
                            "end": 1272,
                            "name": "next",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1262,
                              "end": 1272,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1264,
                                "end": 1272,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1264,
                                  "end": 1272,
                                  "name": "Function",
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
                            "start": 1274,
                            "end": 1284,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1279,
                              "end": 1284,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1281,
                                "end": 1284
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                        }
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1311,
                  "end": 1419,
                  "id": {
                    "type": "Identifier",
                    "start": 1321,
                    "end": 1332,
                    "name": "Application",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1341,
                      "end": 1361,
                      "expression": {
                        "type": "Identifier",
                        "start": 1341,
                        "end": 1348,
                        "name": "IRouter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 1349,
                              "end": 1360,
                              "name": "Application",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                        "object": {
                          "type": "Identifier",
                          "start": 1363,
                          "end": 1370,
                          "name": "Express",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1371,
                          "end": 1382,
                          "name": "Application",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1383,
                    "end": 1419,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1397,
                        "end": 1409,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1397,
                          "end": 1403,
                          "name": "routes",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1403,
                          "end": 1408,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1405,
                            "end": 1408
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
                  "start": 1429,
                  "end": 1524,
                  "id": {
                    "type": "Identifier",
                    "start": 1439,
                    "end": 1446,
                    "name": "Express",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1455,
                      "end": 1466,
                      "expression": {
                        "type": "Identifier",
                        "start": 1455,
                        "end": 1466,
                        "name": "Application",
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
                    "start": 1467,
                    "end": 1524,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 1481,
                        "end": 1514,
                        "key": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1498,
                          "name": "createApplication",
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
                          "start": 1500,
                          "end": 1513,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1502,
                            "end": 1513,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1502,
                              "end": 1513,
                              "name": "Application",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                {
                  "type": "VariableDeclaration",
                  "start": 1534,
                  "end": 1550,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1538,
                      "end": 1549,
                      "id": {
                        "type": "Identifier",
                        "start": 1538,
                        "end": 1549,
                        "name": "static",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1544,
                          "end": 1549,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1546,
                            "end": 1549
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "TSExportAssignment",
            "start": 1562,
            "end": 1573,
            "expression": {
              "type": "Identifier",
              "start": 1571,
              "end": 1572,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 44,
          "end": 50,
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 65,
        "value": "express",
        "raw": "\"express\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 145,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 91,
        "value": "express",
        "raw": "\"express\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 145,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 98,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 115,
              "name": "Request",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 116,
              "end": 143,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 126,
                  "end": 137,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 128,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "Request",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "Request",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "value": "express",
        "raw": "\"express\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 59,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 58,
        "value": "./augmentation",
        "raw": "\"./augmentation\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 74,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 74,
                  "name": "Request",
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
      "type": "VariableDeclaration",
      "start": 76,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 86,
            "end": 90,
            "object": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 88,
              "end": 90,
              "name": "id",
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
